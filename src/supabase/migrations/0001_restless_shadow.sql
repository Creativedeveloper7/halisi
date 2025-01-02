/*
  # Seller Management Schema

  1. New Tables
    - `sellers`
      - Core seller information and verification status
    - `seller_documents`
      - Identity verification documents
    - `seller_businesses`
      - Business details and registration info
    
  2. Security
    - Enable RLS on all tables
    - Add policies for seller access
    
  3. Enums
    - `business_type`
    - `seller_status`
    - `verification_status`
*/

-- Create enums
CREATE TYPE business_type AS ENUM (
  'african_clothing',
  'art_and_craft',
  'african_foods',
  'services'
);

CREATE TYPE seller_status AS ENUM (
  'pending',
  'active',
  'suspended',
  'inactive'
);

CREATE TYPE verification_status AS ENUM (
  'pending',
  'verified',
  'rejected'
);

-- Create sellers table
CREATE TABLE IF NOT EXISTS sellers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  full_name text NOT NULL,
  email text NOT NULL,
  mobile_number text NOT NULL,
  status seller_status DEFAULT 'pending',
  verification_status verification_status DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

-- Create seller_businesses table
CREATE TABLE IF NOT EXISTS seller_businesses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  seller_id uuid REFERENCES sellers(id) NOT NULL,
  business_name text NOT NULL,
  business_type business_type NOT NULL,
  business_address text NOT NULL,
  registration_number text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(seller_id)
);

-- Create seller_documents table
CREATE TABLE IF NOT EXISTS seller_documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  seller_id uuid REFERENCES sellers(id) NOT NULL,
  document_type text NOT NULL,
  document_number text NOT NULL,
  document_url text NOT NULL,
  verification_status verification_status DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE sellers ENABLE ROW LEVEL SECURITY;
ALTER TABLE seller_businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE seller_documents ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own seller profile"
  ON sellers FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their seller profile"
  ON sellers FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own seller profile"
  ON sellers FOR UPDATE
  USING (auth.uid() = user_id);

-- Business policies
CREATE POLICY "Sellers can view their own business"
  ON seller_businesses FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM sellers
    WHERE sellers.id = seller_businesses.seller_id
    AND sellers.user_id = auth.uid()
  ));

CREATE POLICY "Sellers can create their business"
  ON seller_businesses FOR INSERT
  WITH CHECK (EXISTS (
    SELECT 1 FROM sellers
    WHERE sellers.id = seller_businesses.seller_id
    AND sellers.user_id = auth.uid()
  ));

CREATE POLICY "Sellers can update their own business"
  ON seller_businesses FOR UPDATE
  USING (EXISTS (
    SELECT 1 FROM sellers
    WHERE sellers.id = seller_businesses.seller_id
    AND sellers.user_id = auth.uid()
  ));

-- Document policies
CREATE POLICY "Sellers can view their own documents"
  ON seller_documents FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM sellers
    WHERE sellers.id = seller_documents.seller_id
    AND sellers.user_id = auth.uid()
  ));

CREATE POLICY "Sellers can upload their documents"
  ON seller_documents FOR INSERT
  WITH CHECK (EXISTS (
    SELECT 1 FROM sellers
    WHERE sellers.id = seller_documents.seller_id
    AND sellers.user_id = auth.uid()
  ));

-- Create indexes
CREATE INDEX idx_sellers_user_id ON sellers(user_id);
CREATE INDEX idx_seller_businesses_seller_id ON seller_businesses(seller_id);
CREATE INDEX idx_seller_documents_seller_id ON seller_documents(seller_id);
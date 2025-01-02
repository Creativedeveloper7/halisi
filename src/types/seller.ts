export type BusinessType = 'african_clothing' | 'art_and_craft' | 'african_foods' | 'services';
export type SellerStatus = 'pending' | 'active' | 'suspended' | 'inactive';
export type VerificationStatus = 'pending' | 'verified' | 'rejected';

export interface Seller {
  id: string;
  userId: string;
  fullName: string;
  email: string;
  mobileNumber: string;
  status: SellerStatus;
  verificationStatus: VerificationStatus;
  createdAt: string;
  updatedAt: string;
}

export interface SellerBusiness {
  id: string;
  sellerId: string;
  businessName: string;
  businessType: BusinessType;
  businessAddress: string;
  registrationNumber?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SellerDocument {
  id: string;
  sellerId: string;
  documentType: string;
  documentNumber: string;
  documentUrl: string;
  verificationStatus: VerificationStatus;
  createdAt: string;
  updatedAt: string;
}

export interface SellerOnboardingData {
  personal: {
    fullName: string;
    email: string;
    mobileNumber: string;
  };
  business: {
    businessName: string;
    businessType: BusinessType;
    businessAddress: string;
    registrationNumber?: string;
  };
  identity: {
    nationalIdNumber: string;
    nationalIdImage: File | null;
  };
}
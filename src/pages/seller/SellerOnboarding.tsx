import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FormInput } from '../../components/seller/forms/FormInput';
import { FormSelect } from '../../components/seller/forms/FormSelect';
import { FormFileInput } from '../../components/seller/forms/FormFileInput';
import { Button } from '../../components/common/Button';
import { useAuth } from '../../context/AuthContext';
import { supabase } from '../../lib/supabase';
import { toast } from 'react-hot-toast';

const businessTypes = [
  { value: 'african_clothing', label: 'African Clothing' },
  { value: 'art_and_craft', label: 'Art and Craft' },
  { value: 'african_foods', label: 'African Foods' },
  { value: 'services', label: 'Services' }
];

const sellerSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  mobileNumber: z.string().regex(/^\+?[1-9]\d{9,14}$/, 'Invalid mobile number'),
  businessName: z.string().min(2, 'Business name must be at least 2 characters'),
  businessType: z.enum(['african_clothing', 'art_and_craft', 'african_foods', 'services']),
  businessAddress: z.string().min(5, 'Please enter a valid address'),
  nationalIdNumber: z.string().min(5, 'Please enter a valid ID number')
});

type SellerFormData = z.infer<typeof sellerSchema>;

export function SellerOnboarding() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [idImage, setIdImage] = useState<File | null>(null);
  const [idPreview, setIdPreview] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SellerFormData>({
    resolver: zodResolver(sellerSchema)
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIdImage(file);
      setIdPreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (data: SellerFormData) => {
    if (!user || !idImage) return;
    setLoading(true);

    try {
      // Upload ID document
      const { data: fileData, error: uploadError } = await supabase.storage
        .from('seller-documents')
        .upload(`${user.id}/${idImage.name}`, idImage);

      if (uploadError) throw uploadError;

      // Create seller profile
      const { error: sellerError } = await supabase
        .from('sellers')
        .insert({
          user_id: user.id,
          full_name: data.fullName,
          email: data.email,
          mobile_number: data.mobileNumber,
          business_name: data.businessName,
          business_type: data.businessType,
          business_address: data.businessAddress,
          national_id_number: data.nationalIdNumber,
          national_id_url: fileData.path
        });

      if (sellerError) throw sellerError;

      toast.success('Application submitted successfully!');
      navigate('/seller/dashboard');
    } catch (error) {
      console.error('Error submitting seller application:', error);
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold mb-6"
        >
          Become a Seller
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow p-6"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormInput
              label="Full Name"
              error={errors.fullName?.message}
              {...register('fullName')}
            />
            
            <FormInput
              label="Email Address"
              type="email"
              error={errors.email?.message}
              {...register('email')}
            />
            
            <FormInput
              label="Mobile Number"
              error={errors.mobileNumber?.message}
              {...register('mobileNumber')}
            />

            <FormInput
              label="Business Name"
              error={errors.businessName?.message}
              {...register('businessName')}
            />

            <FormSelect
              label="Business Type"
              options={businessTypes}
              error={errors.businessType?.message}
              {...register('businessType')}
            />

            <FormInput
              label="Business Address"
              error={errors.businessAddress?.message}
              {...register('businessAddress')}
            />

            <FormInput
              label="National ID Number"
              error={errors.nationalIdNumber?.message}
              {...register('nationalIdNumber')}
            />

            <FormFileInput
              label="National ID Image"
              accept="image/*"
              onChange={handleFileChange}
              preview={idPreview}
              error={!idImage ? 'Please upload your ID image' : undefined}
            />

            <Button type="submit" loading={loading}>
              Submit Application
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
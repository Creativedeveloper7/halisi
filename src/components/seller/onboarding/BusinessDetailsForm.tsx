import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AuthInput } from '../../auth/AuthInput';
import { Button } from '../../common/Button';
import { BusinessType } from '../../../types/seller';

const businessSchema = z.object({
  businessName: z.string().min(2, 'Business name must be at least 2 characters'),
  businessType: z.enum(['african_clothing', 'art_and_craft', 'african_foods', 'services']),
  businessAddress: z.string().min(5, 'Please enter a valid address'),
  registrationNumber: z.string().optional(),
});

type BusinessInputs = z.infer<typeof businessSchema>;

interface BusinessDetailsFormProps {
  onSubmit: (data: BusinessInputs) => void;
  defaultValues?: Partial<BusinessInputs>;
}

const businessTypes: { value: BusinessType; label: string }[] = [
  { value: 'african_clothing', label: 'African Clothing' },
  { value: 'art_and_craft', label: 'Art and Craft' },
  { value: 'african_foods', label: 'African Foods' },
  { value: 'services', label: 'Services' },
];

export function BusinessDetailsForm({ onSubmit, defaultValues }: BusinessDetailsFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BusinessInputs>({
    resolver: zodResolver(businessSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <AuthInput
        label="Business Name"
        error={errors.businessName?.message}
        {...register('businessName')}
      />
      
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Business Type
        </label>
        <select
          {...register('businessType')}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Select a business type</option>
          {businessTypes.map(type => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        {errors.businessType && (
          <p className="text-sm text-red-500">{errors.businessType.message}</p>
        )}
      </div>
      
      <AuthInput
        label="Business Address"
        error={errors.businessAddress?.message}
        {...register('businessAddress')}
      />
      
      <AuthInput
        label="Business Registration Number (Optional)"
        error={errors.registrationNumber?.message}
        {...register('registrationNumber')}
      />

      <Button type="submit" loading={isSubmitting}>
        Continue
      </Button>
    </form>
  );
}
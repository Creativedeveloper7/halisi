import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AuthInput } from '../../auth/AuthInput';
import { Button } from '../../common/Button';

const personalInfoSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  mobileNumber: z.string().regex(/^\+?[1-9]\d{9,14}$/, 'Invalid mobile number'),
});

type PersonalInfoInputs = z.infer<typeof personalInfoSchema>;

interface PersonalInfoFormProps {
  onSubmit: (data: PersonalInfoInputs) => void;
  defaultValues?: Partial<PersonalInfoInputs>;
}

export function PersonalInfoForm({ onSubmit, defaultValues }: PersonalInfoFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PersonalInfoInputs>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <AuthInput
        label="Full Name"
        error={errors.fullName?.message}
        {...register('fullName')}
      />
      
      <AuthInput
        label="Email Address"
        type="email"
        error={errors.email?.message}
        {...register('email')}
      />
      
      <AuthInput
        label="Mobile Number"
        type="tel"
        error={errors.mobileNumber?.message}
        {...register('mobileNumber')}
      />

      <Button type="submit" loading={isSubmitting}>
        Continue
      </Button>
    </form>
  );
}
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AuthInput } from '../../auth/AuthInput';
import { Button } from '../../common/Button';
import { useState } from 'react';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];

const identitySchema = z.object({
  nationalIdNumber: z.string().min(5, 'Please enter a valid ID number'),
  nationalIdImage: z
    .custom<FileList>()
    .refine((files) => files?.length === 1, 'National ID image is required')
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      'Max file size is 5MB'
    )
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
      'Only .jpg, .png, and .pdf files are accepted'
    ),
});

type IdentityInputs = z.infer<typeof identitySchema>;

interface IdentityVerificationFormProps {
  onSubmit: (data: { nationalIdNumber: string; nationalIdImage: File }) => void;
}

export function IdentityVerificationForm({ onSubmit }: IdentityVerificationFormProps) {
  const [previewUrl, setPreviewUrl] = useState<string>();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<IdentityInputs>({
    resolver: zodResolver(identitySchema),
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const onSubmitForm = (data: IdentityInputs) => {
    const file = data.nationalIdImage[0];
    onSubmit({
      nationalIdNumber: data.nationalIdNumber,
      nationalIdImage: file,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
      <AuthInput
        label="National ID Number"
        error={errors.nationalIdNumber?.message}
        {...register('nationalIdNumber')}
      />
      
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          National ID Image
        </label>
        <input
          type="file"
          accept={ACCEPTED_FILE_TYPES.join(',')}
          {...register('nationalIdImage')}
          onChange={handleFileChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900"
        />
        {errors.nationalIdImage && (
          <p className="text-sm text-red-500">{errors.nationalIdImage.message}</p>
        )}
        {previewUrl && (
          <img
            src={previewUrl}
            alt="ID Preview"
            className="mt-2 max-w-xs rounded-lg"
          />
        )}
      </div>

      <Button type="submit" loading={isSubmitting}>
        Continue
      </Button>
    </form>
  );
}
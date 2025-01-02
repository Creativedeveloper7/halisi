import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../common/Button';
import { FormInput } from '../seller/forms/FormInput';
import { Product } from '../../types/product';
import { toast } from 'react-hot-toast';

const bookingSchema = z.object({
  quantity: z.number().min(1, 'Quantity must be at least 1'),
  notes: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  product: Product;
  onSubmit: (data: BookingFormData) => Promise<void>;
  onCancel: () => void;
}

export function BookingForm({ product, onSubmit, onCancel }: BookingFormProps) {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      quantity: 1,
    },
  });

  const handleFormSubmit = async (data: BookingFormData) => {
    setLoading(true);
    try {
      await onSubmit(data);
      toast.success('Booking submitted successfully!');
    } catch (error) {
      toast.error('Failed to submit booking');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <FormInput
        label="Quantity"
        type="number"
        min={1}
        error={errors.quantity?.message}
        {...register('quantity', { valueAsNumber: true })}
      />

      <FormInput
        label="Additional Notes (Optional)"
        as="textarea"
        error={errors.notes?.message}
        {...register('notes')}
      />

      <div className="flex gap-4">
        <Button type="submit" loading={loading}>
          Confirm Booking
        </Button>
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
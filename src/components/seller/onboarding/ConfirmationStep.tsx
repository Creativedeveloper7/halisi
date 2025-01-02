import { motion } from 'framer-motion';
import { Button } from '../../common/Button';
import { SellerOnboardingData } from '../../../types/seller';

interface ConfirmationStepProps {
  data: SellerOnboardingData;
  onEdit: (step: number) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export function ConfirmationStep({
  data,
  onEdit,
  onSubmit,
  isSubmitting,
}: ConfirmationStepProps) {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg p-6 space-y-6"
      >
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <button
              onClick={() => onEdit(0)}
              className="text-orange-500 hover:text-orange-600"
            >
              Edit
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-medium">{data.personal.fullName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{data.personal.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Mobile Number</p>
              <p className="font-medium">{data.personal.mobileNumber}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Business Details</h3>
            <button
              onClick={() => onEdit(1)}
              className="text-orange-500 hover:text-orange-600"
            >
              Edit
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Business Name</p>
              <p className="font-medium">{data.business.businessName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Business Type</p>
              <p className="font-medium">{data.business.businessType}</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-gray-500">Business Address</p>
              <p className="font-medium">{data.business.businessAddress}</p>
            </div>
            {data.business.registrationNumber && (
              <div>
                <p className="text-sm text-gray-500">Registration Number</p>
                <p className="font-medium">{data.business.registrationNumber}</p>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Identity Verification</h3>
            <button
              onClick={() => onEdit(2)}
              className="text-orange-500 hover:text-orange-600"
            >
              Edit
            </button>
          </div>
          <div>
            <p className="text-sm text-gray-500">National ID Number</p>
            <p className="font-medium">{data.identity.nationalIdNumber}</p>
          </div>
          {data.identity.nationalIdImage && (
            <div>
              <p className="text-sm text-gray-500">ID Document</p>
              <img
                src={URL.createObjectURL(data.identity.nationalIdImage)}
                alt="National ID"
                className="mt-2 max-w-xs rounded-lg"
              />
            </div>
          )}
        </div>

        <Button
          onClick={onSubmit}
          loading={isSubmitting}
          className="w-full mt-6"
        >
          Submit for Verification
        </Button>
      </motion.div>
    </div>
  );
}
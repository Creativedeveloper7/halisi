import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { Button } from '../components/common/Button';

export function SuccessRegistration() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black-50 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-orange p-8 rounded-lg shadow-lg max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto" />
        </motion.div>

        <h1 className="text-2xl font-bold mt-6 mb-2">Successfully Registered!</h1>
        <p className="text-gray-600 mb-8">
          Your account has been created successfully. You can now sign in to access your account.
        </p>

        <Button
          onClick={() => navigate('/signin')}
          className="w-full"
        >
          Continue to Sign In
        </Button>
      </motion.div>
    </div>
  );
}
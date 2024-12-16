import { motion } from 'framer-motion';
import { Button } from '../common/Button';

interface SplashActionsProps {
  onSignIn: () => void;
  onSignUp: () => void;
}

export function SplashActions({ onSignIn, onSignUp }: SplashActionsProps) {
  return (
    <motion.div
      className="w-full max-w-xs space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <Button
        onClick={onSignIn}
        className="bg-orange-500 hover:bg-orange-600 text-white"
      >
        Sign in
      </Button>
      
      <div className="text-center">
        <span className="text-white">Don't have an account yet? </span>
        <button
          onClick={onSignUp}
          className="text-orange-500 hover:text-orange-400 font-medium"
        >
          Sign up
        </button>
      </div>
    </motion.div>
  );
}
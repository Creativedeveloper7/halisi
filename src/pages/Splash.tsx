import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SplashLayout } from '../components/splash/SplashLayout';
import { SplashActions } from '../components/splash/SplashActions';
import { pageTransition } from '../styles/transitions';

export function Splash() {
  const navigate = useNavigate();

  return (
    <motion.div
      {...pageTransition}
      className="min-h-screen bg-black"
    >
      <SplashLayout>
        {/* Logo in the center */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center space-y-8 flex-grow" // Takes up the available space and centers content
        >
          <img
            src="/images/halisi.png" // Path to your logo
            alt="Halisi Logo"
            className="w-34 h-34 object-contain border-0 border-none" // Added border for debugging
          />

          {/* Motion div for text (optional if needed) */}
          <motion.div
            className="text-orange-500 font-bold text-4xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {/* You can add any text here if required */}
          </motion.div>

          {/* Actions below the logo */}
          <div className="mt-auto"> {/* Pushes buttons to the bottom of the screen */}
            <SplashActions
              onSignIn={() => navigate('/signin')}
              onSignUp={() => navigate('/signup')}
            />
          </div>
        </motion.div>
      </SplashLayout>
    </motion.div>
  );
}

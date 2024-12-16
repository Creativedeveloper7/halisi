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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center space-y-8"
        >
          <motion.div
            className="text-orange-500 font-bold text-4xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            halisi
          </motion.div>

          <SplashActions 
            onSignIn={() => navigate('/signin')}
            onSignUp={() => navigate('/signup')}
          />
        </motion.div>
      </SplashLayout>
    </motion.div>
  );
}
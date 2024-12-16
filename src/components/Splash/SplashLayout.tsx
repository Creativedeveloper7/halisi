import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SplashLayoutProps {
  children: ReactNode;
}

export function SplashLayout({ children }: SplashLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/images/splash screen.jpg"
          alt="Background"
          className="w-full h-full object-cover brightness-50"
        />
      </motion.div>
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {children}
      </div>
    </div>
  );
}
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideProps {
  children: ReactNode;
  className?: string;
  background?: string;
}

export function Slide({ children, className = '', background }: SlideProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen p-8 ${className}`}
      style={background ? { 
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      {children}
    </motion.div>
  );
}
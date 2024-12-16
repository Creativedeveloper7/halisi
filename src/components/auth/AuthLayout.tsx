import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';

interface AuthLayoutProps {
  children: ReactNode;
  image: string;
  title: string;
  subtitle: string;
}

export function AuthLayout({ children, image, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden md:block"
      >
        <img
          src={image}
          alt="Authentication"
          className="w-full h-full object-absolute"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col justify-center px-8 py-12 md:px-12"
      >
        <Logo />
        <div className="mb-8">
          <h1 className="text-3xl font-Medium mb-2">{title}</h1>
          <p className="text-white-600">{subtitle}</p>
        </div>
        {children}
      </motion.div>
    </div>
  );
}
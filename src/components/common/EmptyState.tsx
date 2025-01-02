import { motion } from 'framer-motion';
import { 
  HeartIcon,
  ShoppingBagIcon,
  BellIcon
} from '@heroicons/react/24/outline';

interface EmptyStateProps {
  icon: 'heart' | 'shopping' | 'notification';
  title: string;
  description: string;
}

export function EmptyState({ icon, title, description }: EmptyStateProps) {
  const Icon = {
    heart: HeartIcon,
    shopping: ShoppingBagIcon,
    notification: BellIcon
  }[icon];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center h-[60vh] text-center px-4"
    >
      <Icon className="w-16 h-16 text-gray-400 mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 max-w-sm">{description}</p>
    </motion.div>
  );
}
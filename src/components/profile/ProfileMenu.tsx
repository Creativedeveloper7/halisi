import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  UserIcon, 
  BellIcon, 
  ShieldCheckIcon,
  CreditCardIcon,
  QuestionMarkCircleIcon,
  ArrowRightOnRectangleIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';

interface ProfileMenuItem {
  icon: any;
  label: string;
  onClick: () => void;
}

interface ProfileMenuProps {
  onSignOut: () => void;
}

export function ProfileMenu({ onSignOut }: ProfileMenuProps) {
  const navigate = useNavigate();

  const menuItems: ProfileMenuItem[] = [
    {
      icon: UserIcon,
      label: 'Edit Profile',
      onClick: () => console.log('Edit Profile')
    },
    {
      icon: ShoppingBagIcon,
      label: 'Become a Seller',
      onClick: () => navigate('/seller/onboarding')
    },
    {
      icon: BellIcon,
      label: 'Notifications',
      onClick: () => navigate('/notifications')
    },
    {
      icon: ShieldCheckIcon,
      label: 'Privacy & Security',
      onClick: () => console.log('Privacy')
    },
    {
      icon: CreditCardIcon,
      label: 'Payment Methods',
      onClick: () => console.log('Payment')
    },
    {
      icon: QuestionMarkCircleIcon,
      label: 'Help & Support',
      onClick: () => console.log('Help')
    },
    {
      icon: ArrowRightOnRectangleIcon,
      label: 'Sign Out',
      onClick: onSignOut
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-lg shadow-sm mt-4"
    >
      {menuItems.map((item, index) => (
        <motion.button
          key={item.label}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={item.onClick}
          className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors"
        >
          <item.icon className="w-6 h-6 text-gray-500" />
          <span className="text-gray-700">{item.label}</span>
        </motion.button>
      ))}
    </motion.div>
  );
}
import { motion } from 'framer-motion';
import { User } from '../../types/auth';

interface ProfileHeaderProps {
  user: User;
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-sm text-center"
    >
      <div className="w-24 h-24 mx-auto mb-4 relative">
        <img
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.fullName)}&background=F26522&color=fff`}
          alt={user.fullName}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <h2 className="text-xl font-semibold text-gray-900">{user.fullName}</h2>
      <p className="text-gray-500">{user.email}</p>
      <p className="text-sm text-gray-400 mt-1">Member since {new Date(user.createdAt).toLocaleDateString()}</p>
    </motion.div>
  );
}
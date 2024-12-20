import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { ProfileMenu } from '../components/profile/ProfileMenu';
import { BottomNavigation } from '../components/layout/BottomNavigation';
import { useAuth } from '../context/AuthContext';

export function ProfilePage() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-black-50 pb-20">
      <div className="container mx-auto px-4 py-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold mb-6"
        >
          Profile
        </motion.h1>

        <ProfileHeader user={user} />
        <ProfileMenu onSignOut={handleSignOut} />
      </div>
      
      <BottomNavigation />
    </div>
  );
}
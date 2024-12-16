import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/common/Button';

export function Welcome() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-screen">
        <img
          src="/images/welcome-bg.jpg"
          alt="Welcome"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white max-w-2xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Welcome, <span className="text-orange-500">{user?.fullName}</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Your African Best Experience Begins Here!
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={() => navigate('/dashboard')}
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  Start Exploring
                </Button>
                <Button
                  variant="secondary"
                  onClick={handleSignOut}
                  className="bg-white text-gray-900 hover:bg-gray-100"
                >
                  Sign Out
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
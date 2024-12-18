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
    <div className="min-h-screen">
      {/* Full-screen background image */}
      <div className="relative h-screen">
        <img
          src="/images/welcome.jpg" // Path to your background image
          alt="Welcome"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white max-w-2xl"
            >
              {/* Welcome Message */}
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Welcome, <span className="text-orange-500">{user?.fullName}</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Your African Best Experience Begins Here!
              </p>

              {/* Buttons */}
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

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

export function SellerDashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const menuItems = [
    {
      title: 'Products',
      description: 'Manage your product listings',
      path: '/seller/products'
    },
    {
      title: 'Orders',
      description: 'View and manage customer orders',
      path: '/seller/orders'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold mb-6"
        >
          Seller Dashboard
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-4">
          {menuItems.map((item) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-lg shadow-sm cursor-pointer"
              onClick={() => navigate(item.path)}
            >
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
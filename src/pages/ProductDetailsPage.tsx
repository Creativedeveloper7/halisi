import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { useProducts } from '../hooks/useProducts';
import { useFavorites } from '../hooks/useFavorites';
import { useOrders } from '../hooks/useOrders';
import { BookingForm } from '../components/shop/BookingForm';
import { formatCurrency } from '../utils/format';
import { toast } from 'react-hot-toast';

export function ProductDetailsPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { products } = useProducts();
  const { favorites, toggleFavorite } = useFavorites();
  const { createOrder } = useOrders();
  const [showBookingForm, setShowBookingForm] = useState(false);
  
  const product = products.find(p => p.id === productId);
  const isFavorite = favorites.includes(productId || '');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Product not found</p>
      </div>
    );
  }

  const handleBookingSubmit = async (data: any) => {
    try {
      const result = await createOrder(product.id, data.quantity, data.notes);
      if (result) {
        setShowBookingForm(false);
        navigate('/bookings');
      }
    } catch (error) {
      toast.error('Failed to place booking');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white"
    >
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full aspect-square object-cover"
        />
        <button
          onClick={() => toggleFavorite(product.id)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-sm"
        >
          {isFavorite ? (
            <HeartSolidIcon className="w-6 h-6 text-red-500" />
          ) : (
            <HeartIcon className="w-6 h-6 text-gray-500" />
          )}
        </button>
      </div>

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-2xl font-bold text-orange-500 mb-6">
          {formatCurrency(product.price)}
        </p>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <p className="text-gray-600">{product.description}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Availability</h2>
          <p className={product.available ? 'text-green-500' : 'text-red-500'}>
            {product.available ? 'In Stock' : 'Out of Stock'}
          </p>
        </div>

        <AnimatePresence>
          {showBookingForm ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <BookingForm
                product={product}
                onSubmit={handleBookingSubmit}
                onCancel={() => setShowBookingForm(false)}
              />
            </motion.div>
          ) : (
            <button
              onClick={() => setShowBookingForm(true)}
              disabled={!product.available}
              className="w-full py-3 bg-orange-500 text-white rounded-lg font-medium
                       disabled:opacity-50 disabled:cursor-not-allowed
                       hover:bg-orange-600 transition-colors"
            >
              Book Now
            </button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
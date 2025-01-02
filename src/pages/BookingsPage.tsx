import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookingCard } from '../components/bookings/BookingCard';
import { EmptyState } from '../components/common/EmptyState';
import { useOrders } from '../hooks/useOrders';

export function BookingsPage() {
  const { orders, cancelOrder } = useOrders();
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  const handleCancel = async (orderId: string) => {
    await cancelOrder(orderId);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold"
          >
            My Bookings
          </motion.h1>
          <button
            onClick={handleRefresh}
            className="text-orange-500 hover:text-orange-600"
          >
            Refresh
          </button>
        </div>

        <AnimatePresence mode="wait" key={refreshKey}>
          {orders.length === 0 ? (
            <EmptyState
              icon="shopping"
              title="No bookings yet"
              description="Your bookings will appear here"
            />
          ) : (
            <motion.div 
              layout
              className="space-y-4"
            >
              {orders.map((order) => (
                <BookingCard
                  key={order.id}
                  order={order}
                  onCancel={() => handleCancel(order.id)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
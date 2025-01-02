import { motion } from 'framer-motion';
import { useOrders } from '../../hooks/useOrders';
import { BookingCard } from '../../components/bookings/BookingCard';

export function SellerOrders() {
  const { orders, cancelOrder } = useOrders();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold mb-6"
        >
          Orders
        </motion.h1>

        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {orders.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No orders yet</p>
            </div>
          ) : (
            orders.map(order => (
              <BookingCard
                key={order.id}
                order={order}
                onCancel={() => cancelOrder(order.id)}
              />
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
}
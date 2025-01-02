import { motion } from 'framer-motion';
import { NotificationItem } from '../components/notifications/NotificationItem';
import { EmptyState } from '../components/common/EmptyState';
import { useOrders } from '../hooks/useOrders';

export function NotificationsPage() {
  const { orders, loading } = useOrders();

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="container mx-auto px-4 py-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold mb-6"
        >
          Notifications
        </motion.h1>

        {orders.length === 0 ? (
          <EmptyState
            icon="notification"
            title="No notifications"
            description="Your order updates will appear here"
          />
        ) : (
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {orders.map(order => (
              <NotificationItem key={order.id} order={order} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
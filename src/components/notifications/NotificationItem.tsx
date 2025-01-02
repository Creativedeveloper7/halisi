import { motion } from 'framer-motion';
import { formatDate } from '../../utils/format';
import { ProductOrder } from '../../types/product';

interface NotificationItemProps {
  order: ProductOrder;
}

export function NotificationItem({ order }: NotificationItemProps) {
  const getStatusColor = (status: ProductOrder['status']) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'shipping': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getStatusMessage = (status: ProductOrder['status']) => {
    switch (status) {
      case 'confirmed': return 'Order confirmed';
      case 'shipping': return 'Order is being shipped';
      case 'cancelled': return 'Order cancelled';
      default: return 'Order is being reviewed';
    }
  };

  return (
    <motion.div 
      layout
      className="bg-white p-4 rounded-lg shadow-sm"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{order.product.name}</h3>
          <p className="text-sm text-gray-500">{formatDate(order.createdAt)}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
          {getStatusMessage(order.status)}
        </span>
      </div>
    </motion.div>
  );
}
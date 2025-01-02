import { motion } from 'framer-motion';
import { formatDate, formatCurrency } from '../../utils/format';
import { ProductOrder } from '../../types/product';

interface BookingCardProps {
  order: ProductOrder;
  onCancel: () => void;
}

export function BookingCard({ order, onCancel }: BookingCardProps) {
  const canCancel = order.status === 'pending';

  return (
    <motion.div 
      layout
      className="bg-white rounded-lg shadow-sm p-4"
    >
      <div className="flex gap-4">
        <img 
          src={order.product.imageUrl} 
          alt={order.product.name} 
          className="w-20 h-20 rounded-lg object-cover"
        />
        <div className="flex-1">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold">{order.product.name}</h3>
              <p className="text-orange-500 font-bold">
                {formatCurrency(order.product.price)}
              </p>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs ${
              order.status === 'confirmed' ? 'bg-green-100 text-green-800' :
              order.status === 'cancelled' ? 'bg-red-100 text-red-800' :
              order.status === 'shipping' ? 'bg-blue-100 text-blue-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </span>
          </div>
          
          <div className="mt-2 flex justify-between items-center">
            <p className="text-sm text-gray-500">
              Ordered on {formatDate(order.createdAt)}
            </p>
            {canCancel && (
              <button
                onClick={onCancel}
                className="text-sm text-red-500 hover:text-red-600"
              >
                Cancel Order
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
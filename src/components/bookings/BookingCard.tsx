import { motion } from 'framer-motion';
import { BookingStatus } from '../../types/booking';

interface BookingCardProps {
  shopName: string;
  date: string;
  status: BookingStatus;
  image: string;
}

export function BookingCard({ shopName, date, status, image }: BookingCardProps) {
  const getStatusColor = (status: BookingStatus) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div 
      layout
      className="bg-white rounded-lg shadow-sm p-4 flex gap-4"
    >
      <img 
        src={image} 
        alt={shopName} 
        className="w-20 h-20 rounded-lg object-cover"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{shopName}</h3>
        <p className="text-sm text-gray-500">{date}</p>
        <span className={`inline-block px-2 py-1 rounded-full text-xs mt-2 ${getStatusColor(status)}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
    </motion.div>
  );
}
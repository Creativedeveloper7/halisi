import { BookmarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export function EmptyBookings() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center h-[60vh] text-center px-4"
    >
      <BookmarkIcon className="w-16 h-16 text-gray-400 mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">No Bookings Yet</h3>
      <p className="text-gray-500 max-w-sm">
        Your booking history will appear here once you make your first booking
      </p>
    </motion.div>
  );
}
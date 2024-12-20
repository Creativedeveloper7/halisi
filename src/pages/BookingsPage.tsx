import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EmptyBookings } from '../components/bookings/EmptyBookings';
import { BookingCard } from '../components/bookings/BookingCard';
import { BottomNavigation } from '../components/layout/BottomNavigation';
import { Booking } from '../types/booking';

export function BookingsPage() {
  const [bookings] = useState<Booking[]>([]);

  return (
    <div className="min-h-screen bg-transparent-50 pb-20">
      <div className="container mx-auto px-4 py-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold mb-6"
        >
          My Bookings
        </motion.h1>

        <AnimatePresence>
          {bookings.length === 0 ? (
            <EmptyBookings />
          ) : (
            <motion.div 
              layout
              className="space-y-4"
            >
              {bookings.map((booking) => (
                <BookingCard
                  key={booking.id}
                  shopName={booking.shopName}
                  date={booking.date}
                  status={booking.status}
                  image={booking.image}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <BottomNavigation />
    </div>
  );
}
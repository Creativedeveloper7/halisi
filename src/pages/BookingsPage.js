import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EmptyBookings } from '../components/bookings/EmptyBookings';
import { BookingCard } from '../components/bookings/BookingCard';
import { BottomNavigation } from '../components/layout/BottomNavigation';
export function BookingsPage() {
    const [bookings] = useState([]);
    return (_jsxs("div", { className: "min-h-screen bg-transparent-50 pb-20", children: [_jsxs("div", { className: "container mx-auto px-4 py-6", children: [_jsx(motion.h1, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, className: "text-2xl font-bold mb-6", children: "My Bookings" }), _jsx(AnimatePresence, { children: bookings.length === 0 ? (_jsx(EmptyBookings, {})) : (_jsx(motion.div, { layout: true, className: "space-y-4", children: bookings.map((booking) => (_jsx(BookingCard, { shopName: booking.shopName, date: booking.date, status: booking.status, image: booking.image }, booking.id))) })) })] }), _jsx(BottomNavigation, {})] }));
}

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export function BookingCard({ shopName, date, status, image }) {
    const getStatusColor = (status) => {
        switch (status) {
            case 'confirmed': return 'bg-green-100 text-green-800';
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'cancelled': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };
    return (_jsxs(motion.div, { layout: true, className: "bg-white rounded-lg shadow-sm p-4 flex gap-4", children: [_jsx("img", { src: image, alt: shopName, className: "w-20 h-20 rounded-lg object-cover" }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "font-semibold text-gray-900", children: shopName }), _jsx("p", { className: "text-sm text-gray-500", children: date }), _jsx("span", { className: `inline-block px-2 py-1 rounded-full text-xs mt-2 ${getStatusColor(status)}`, children: status.charAt(0).toUpperCase() + status.slice(1) })] })] }));
}

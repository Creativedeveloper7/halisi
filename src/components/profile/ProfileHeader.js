import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export function ProfileHeader({ user }) {
    return (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "bg-transparent p-6 rounded-lg shadow-sm text-center", children: [_jsx("div", { className: "w-24 h-24 mx-auto mb-4 relative", children: _jsx("img", { src: `https://ui-avatars.com/api/?name=${encodeURIComponent(user.fullName)}&background=F26522&color=fff`, alt: user.fullName, className: "w-full h-full rounded-full object-cover" }) }), _jsx("h2", { className: "text-xl font-semibold text-gray-200", children: user.fullName }), _jsx("p", { className: "text-gray-500", children: user.email }), _jsxs("p", { className: "text-sm text-gray-400 mt-1", children: ["Member since ", new Date(user.createdAt).toLocaleDateString()] })] }));
}

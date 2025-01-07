import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { UserIcon, BellIcon, ShieldCheckIcon, CreditCardIcon, QuestionMarkCircleIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
export function ProfileMenu({ onSignOut }) {
    const menuItems = [
        {
            icon: UserIcon,
            label: 'Edit Profile',
            onClick: () => console.log('Edit Profile')
        },
        {
            icon: BellIcon,
            label: 'Notifications',
            onClick: () => console.log('Notifications')
        },
        {
            icon: ShieldCheckIcon,
            label: 'Privacy & Security',
            onClick: () => console.log('Privacy')
        },
        {
            icon: CreditCardIcon,
            label: 'Payment Methods',
            onClick: () => console.log('Payment')
        },
        {
            icon: QuestionMarkCircleIcon,
            label: 'Help & Support',
            onClick: () => console.log('Help')
        },
        {
            icon: ArrowRightOnRectangleIcon,
            label: 'Sign Out',
            onClick: onSignOut
        }
    ];
    return (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "bg-transparent rounded-lg shadow-sm mt-4", children: menuItems.map((item, index) => (_jsxs(motion.button, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 0.1 }, onClick: item.onClick, className: "w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors", children: [_jsx(item.icon, { className: "w-6 h-6 text-gray-100" }), _jsx("span", { className: "text-gray-200", children: item.label })] }, item.label))) }));
}

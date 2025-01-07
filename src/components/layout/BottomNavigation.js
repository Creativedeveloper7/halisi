import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, HeartIcon, BookmarkIcon, UserIcon, BellIcon } from '@heroicons/react/24/outline';
import { cn } from '../../utils/cn';
const navItems = [
    { path: '/home', label: 'Home', icon: HomeIcon },
    { path: '/bookings', label: 'My Bookings', icon: BookmarkIcon },
    { path: '/favorites', label: 'Favorites', icon: HeartIcon },
    { path: '/notifications', label: 'Notifications', icon: BellIcon },
    { path: '/profile', label: 'Profile', icon: UserIcon },
];
export function BottomNavigation() {
    const location = useLocation();
    return (_jsx("nav", { className: "fixed bottom-0 left-0 right-0 bg-transparent border-t border-gray-900", children: _jsx("div", { className: "flex justify-around items-center h-16 max-w-lg mx-auto", children: navItems.map(({ path, label, icon: Icon }) => (_jsxs(Link, { to: path, className: cn('flex flex-col items-center px-3 py-2', 'transition-colors duration-200', location.pathname === path
                    ? 'text-orange-500'
                    : 'text-white-500 hover:text-orange-500'), children: [_jsx(Icon, { className: "w-6 h-6" }), _jsx("span", { className: "text-xs mt-1", children: label })] }, path))) }) }));
}
export default BottomNavigation;

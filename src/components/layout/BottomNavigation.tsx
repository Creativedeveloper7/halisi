import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  HeartIcon, 
  BookmarkIcon, 
  UserIcon, 
  BellIcon 
} from '@heroicons/react/24/outline';
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

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        {navItems.map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className={cn(
              'flex flex-col items-center px-3 py-2',
              'transition-colors duration-200',
              location.pathname === path 
                ? 'text-orange-500' 
                : 'text-gray-500 hover:text-orange-500'
            )}
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs mt-1">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
export default BottomNavigation;
 // Make sure this is a default export
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { ProfileMenu } from '../components/profile/ProfileMenu';
import { BottomNavigation } from '../components/layout/BottomNavigation';
import { useAuth } from '../context/AuthContext';
export function ProfilePage() {
    const navigate = useNavigate();
    const { user, signOut } = useAuth();
    const handleSignOut = async () => {
        await signOut();
        navigate('/');
    };
    if (!user)
        return null;
    return (_jsxs("div", { className: "min-h-screen bg-black-50 pb-20", children: [_jsxs("div", { className: "container mx-auto px-4 py-6", children: [_jsx(motion.h1, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, className: "text-2xl font-bold mb-6", children: "Profile" }), _jsx(ProfileHeader, { user: user }), _jsx(ProfileMenu, { onSignOut: handleSignOut })] }), _jsx(BottomNavigation, {})] }));
}

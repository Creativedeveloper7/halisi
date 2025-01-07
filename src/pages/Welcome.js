import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/common/Button';
export function Welcome() {
    const navigate = useNavigate();
    const { user, signOut } = useAuth();
    const handleSignOut = async () => {
        await signOut();
        navigate('/');
    };
    return (_jsx("div", { className: "min-h-screen", children: _jsxs("div", { className: "relative h-screen", children: [_jsx("img", { src: "/images/welcome.png" // Path to your background image
                    , alt: "Welcome", className: "w-full h-full object-cover" }), _jsx("div", { className: "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "text-white max-w-2xl", children: [_jsxs("h1", { className: "text-4xl md:text-6xl font-bold mb-4", children: ["Welcome, ", _jsx("span", { className: "text-orange-500", children: user?.fullName })] }), _jsx("p", { className: "text-xl md:text-2xl mb-8", children: "Your African Best Experience Begins Here!" }), _jsxs("div", { className: "flex gap-4", children: [_jsx(Button, { onClick: () => navigate('/homepage'), className: "bg-orange-500 hover:bg-orange-600", children: "Start Exploring" }), _jsx(Button, { variant: "secondary", onClick: handleSignOut, className: "bg-white text-gray-900 hover:bg-gray-100", children: "Sign Out" })] })] }) }) })] }) }));
}

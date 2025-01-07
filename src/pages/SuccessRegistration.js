import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { Button } from '../components/common/Button';
export function SuccessRegistration() {
    const navigate = useNavigate();
    return (_jsx("div", { className: "min-h-screen bg-black-50 flex flex-col items-center justify-center p-4", children: _jsxs(motion.div, { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, className: "bg-orange p-8 rounded-lg shadow-lg max-w-md w-full text-center", children: [_jsx(motion.div, { initial: { scale: 0 }, animate: { scale: 1 }, transition: { delay: 0.2 }, children: _jsx(CheckCircleIcon, { className: "w-20 h-20 text-green-500 mx-auto" }) }), _jsx("h1", { className: "text-2xl font-bold mt-6 mb-2", children: "Successfully Registered!" }), _jsx("p", { className: "text-gray-600 mb-8", children: "Your account has been created successfully. You can now sign in to access your account." }), _jsx(Button, { onClick: () => navigate('/signin'), className: "w-full", children: "Continue to Sign In" })] }) }));
}

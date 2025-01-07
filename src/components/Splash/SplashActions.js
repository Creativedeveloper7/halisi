import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Button } from '../common/Button';
export function SplashActions({ onSignIn, onSignUp }) {
    return (_jsxs(motion.div, { className: "w-full max-w-xs space-y-4", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 1 }, children: [_jsx(Button, { onClick: onSignIn, className: "bg-orange-500 hover:bg-orange-600 text-white", children: "Sign in" }), _jsxs("div", { className: "text-center", children: [_jsx("span", { className: "text-white", children: "Don't have an account yet? " }), _jsx("button", { onClick: onSignUp, className: "text-orange-500 hover:text-orange-400 font-medium", children: "Sign up" })] })] }));
}

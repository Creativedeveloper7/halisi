import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Logo } from './Logo';
export function AuthLayout({ children, image, title, subtitle }) {
    return (_jsxs("div", { className: "min-h-screen grid md:grid-cols-2", children: [_jsx(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, className: "hidden md:block", children: _jsx("img", { src: image, alt: "Authentication", className: "w-full h-full object-absolute" }) }), _jsxs(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, className: "flex flex-col justify-center px-8 py-12 md:px-12", children: [_jsx(Logo, {}), _jsxs("div", { className: "mb-8", children: [_jsx("h1", { className: "text-3xl font-Medium mb-2", children: title }), _jsx("p", { className: "text-white-600", children: subtitle })] }), children] })] }));
}

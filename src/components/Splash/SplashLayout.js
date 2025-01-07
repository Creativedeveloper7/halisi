import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export function SplashLayout({ children }) {
    return (_jsxs("div", { className: "relative min-h-screen overflow-hidden", children: [_jsx(motion.div, { className: "absolute inset-0 z-0", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1 }, children: _jsx("img", { src: "/images/splash screen.png", alt: "Background", className: "w-full h-full object-cover brightness-50" }) }), _jsx("div", { className: "relative z-10 min-h-screen flex flex-col items-center justify-center px-4", children: children })] }));
}

import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export function Slide({ children, className = '', background }) {
    return (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: `min-h-screen p-8 ${className}`, style: background ? {
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        } : {}, children: children }));
}

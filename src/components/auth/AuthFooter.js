import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
export function AuthFooter({ text, linkText, linkTo }) {
    return (_jsxs("p", { className: "mt-8 text-center text-sm text-gray-600", children: [text, ' ', _jsx(Link, { to: linkTo, className: "text-orange-500 hover:text-orange-600 font-medium", children: linkText })] }));
}

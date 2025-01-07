import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
export function SocialAuth({ onGoogleClick, onFacebookClick }) {
    return (_jsxs("div", { className: "flex gap-4 justify-center", children: [_jsx("button", { onClick: onGoogleClick, className: "p-2 rounded-none border-none-300 hover:bg-gray-50", children: _jsx(FcGoogle, { className: "w-6 h-6" }) }), _jsx("button", { onClick: onFacebookClick, className: "p-2 rounded-none border-none-300 hover:bg-gray-50", children: _jsx(FaFacebook, { className: "w-6 h-6 text-blue-600" }) })] }));
}

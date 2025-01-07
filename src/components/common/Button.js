import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export function Button({ children, variant = 'primary', loading, className, disabled, ...props }) {
    return (_jsx("button", { className: cn("w-full px-4 py-3 rounded-lg font-medium transition-colors", "focus:outline-none focus:ring-4 focus:ring-offset-6", variant === 'primary' && "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500", variant === 'secondary' && "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500", (disabled || loading) && "opacity-50 cursor-not-allowed", className), disabled: disabled || loading, ...props, children: loading ? 'Loading...' : children }));
}

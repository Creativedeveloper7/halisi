import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
export function SearchBar() {
    return (_jsxs("div", { className: "relative", children: [_jsx("input", { type: "text", placeholder: "Search Store", className: "w-full px-12 py-3 bg-gray-100 rounded-lg text-gray-900 focus:outline-none" }), _jsx(MagnifyingGlassIcon, { className: "absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" })] }));
}

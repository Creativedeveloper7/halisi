import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
export function CategoryCard({ title, image, path }) {
    return (_jsx(Link, { to: path, className: "block", children: _jsxs("div", { className: "bg-transparent rounded-lg overflow-hidden shadow-sm transition-all border-2 border-gray-900 hover:border-orange hover:shadow-sm hover:shadow-white", children: [_jsx("div", { className: "flex justify-center items-center", children: _jsx("img", { src: image, alt: title, className: "object-cover border-1 border-orange-300 rounded-full", style: { width: '80px', height: '80px' } }) }), _jsx("div", { className: "p-4", children: _jsx("h3", { className: "text-normal font-normal text-center", children: title }) })] }) }));
}
export default CategoryCard;

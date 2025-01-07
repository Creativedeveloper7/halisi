import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function ShopCard({ name, image, rating, category }) {
    return (_jsxs("div", { className: "bg-gray rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow", children: [_jsx("div", { className: "aspect-square", children: _jsx("img", { src: image, alt: name, className: "w-full h-full object-cover" }) }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "font-semibold", children: name }), _jsx("p", { className: "text-sm text-gray-500", children: category }), rating && (_jsxs("div", { className: "flex items-center mt-1", children: [_jsx("span", { className: "text-yellow-400", children: "\u2605" }), _jsx("span", { className: "text-sm ml-1", children: rating })] }))] })] }));
}

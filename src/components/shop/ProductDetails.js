import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { formatCurrency } from '../../utils/format';
import { Button } from '../common/Button';
export function ProductDetails({ product, isFavorite, onFavoriteClick, onOrder, }) {
    const [loading, setLoading] = useState(false);
    const handleOrder = async () => {
        setLoading(true);
        await onOrder();
        setLoading(false);
    };
    return (_jsxs("div", { className: "min-h-screen bg-white", children: [_jsxs("div", { className: "relative aspect-square", children: [_jsx("img", { src: product.imageUrl, alt: product.name, className: "w-full h-full object-cover" }), _jsx("button", { onClick: onFavoriteClick, className: "absolute top-4 right-4 p-2 rounded-full bg-white shadow-sm", children: isFavorite ? (_jsx(HeartSolidIcon, { className: "w-6 h-6 text-red-500" })) : (_jsx(HeartIcon, { className: "w-6 h-6 text-gray-500" })) })] }), _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex justify-between items-start", children: [_jsx("h1", { className: "text-2xl font-bold", children: product.name }), _jsx("p", { className: "text-2xl font-bold text-orange-500", children: formatCurrency(product.price) })] }), _jsxs("div", { className: "mt-6", children: [_jsx("h2", { className: "text-lg font-semibold mb-2", children: "Description" }), _jsx("p", { className: "text-gray-600", children: product.description })] }), _jsxs("div", { className: "mt-6", children: [_jsx("h2", { className: "text-lg font-semibold mb-2", children: "Availability" }), _jsx("p", { className: `text-${product.available ? 'green' : 'red'}-500`, children: product.available ? 'In Stock' : 'Out of Stock' })] }), _jsx("div", { className: "mt-8", children: _jsx(Button, { onClick: handleOrder, loading: loading, disabled: !product.available, className: "w-full", children: "Place Order" }) })] })] }));
}

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from 'react-router-dom';
import { SearchBar } from '../components/home/SearchBar';
import { ShopCard } from '../components/shop/ShopCard';
import { BottomNavigation } from '../components/layout/BottomNavigation';
import { mockShops } from '../data/MockData';
import { motion } from 'framer-motion';
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};
const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};
export function CategoryPage() {
    const { category } = useParams();
    const filteredShops = mockShops.filter(shop => shop.category.toLowerCase().includes(category?.toLowerCase() || ''));
    return (_jsxs("div", { className: "min-h-screen bg-transparent-50 pb-20", children: [_jsxs("div", { className: "container mx-auto px-4 py-6", children: [_jsx(motion.h1, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, className: "text-2xl font-bold mb-6", children: "Trending Shops" }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, children: _jsx(SearchBar, {}) }), _jsx(motion.section, { className: "mt-8", variants: container, initial: "hidden", animate: "show", children: _jsx("div", { className: "grid grid-cols-2 gap-4", children: filteredShops.map((shop) => (_jsx(motion.div, { variants: item, children: _jsx(ShopCard, { name: shop.name, image: shop.image, category: shop.category, rating: shop.rating }) }, shop.id))) }) })] }), _jsx(BottomNavigation, {})] }));
}

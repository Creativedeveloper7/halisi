import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SearchBar } from '../components/home/SearchBar';
import CategoryCard from '../components/home/CategoryCard';
import BottomNavigation from '../components/layout/BottomNavigation';
import { categories } from '../data/MockData';
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
export function HomePage() {
    return (_jsxs("div", { className: "min-h-screen pb-20 bg-cover bg-center", style: { backgroundImage: 'url(/image/sign%20up.png)' }, children: [_jsxs("div", { className: "container mx-auto px-4 py-6", children: [_jsx(motion.h1, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, className: "text-2xl font-bold mb-6 text-black-200", children: "Find Products" }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, children: _jsx(SearchBar, {}) }), _jsxs(motion.section, { className: "mt-8", variants: container, initial: "hidden", animate: "show", children: [_jsx("h2", { className: "text-xl font-semibold mb-4 text-white-700", children: "Featured Categories" }), _jsx("div", { className: "grid grid-cols-2 gap-4 bg-transparent", children: categories.map((category) => (_jsx(motion.div, { variants: item, className: "bg-transparent", children: _jsx(CategoryCard, { title: category.title, image: category.image, path: category.path }) }, category.id))) })] })] }), _jsx(BottomNavigation, {})] }));
}

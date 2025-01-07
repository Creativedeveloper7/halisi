import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { ProductCard } from '../components/shop/ProductCard';
import { EmptyState } from '../components/common/EmptyState';
import { useProducts } from '../hooks/useProducts';
import { useFavorites } from '../hooks/useFavorites';
export function FavoritesPage() {
    const { products } = useProducts();
    const { favorites, toggleFavorite } = useFavorites();
    const favoriteProducts = products.filter(product => favorites.includes(product.id));
    return (_jsx("div", { className: "min-h-screen bg-gray-50 pb-20", children: _jsxs("div", { className: "container mx-auto px-4 py-6", children: [_jsx(motion.h1, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, className: "text-2xl font-bold mb-6", children: "My Favorites" }), favoriteProducts.length === 0 ? (_jsx(EmptyState, { icon: "heart", title: "No favorites yet", description: "Products you favorite will appear here" })) : (_jsx(motion.div, { className: "grid grid-cols-2 gap-4", initial: { opacity: 0 }, animate: { opacity: 1 }, children: favoriteProducts.map(product => (_jsx(ProductCard, { product: product, isFavorite: true, onFavoriteClick: () => toggleFavorite(product.id), onViewDetails: () => navigate(`/product/${product.id}`) }, product.id))) }))] }) }));
}

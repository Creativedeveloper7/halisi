import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProductCard } from '../components/shop/ProductCard';
import { SearchBar } from '../components/home/SearchBar';
import { useProducts } from '../hooks/useProducts';
import { useFavorites } from '../hooks/useFavorites';
export function StorePage() {
    const { storeId } = useParams();
    const { products, loading } = useProducts(storeId);
    const { favorites, toggleFavorite } = useFavorites();
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);
    const handleSearch = (query) => {
        const filtered = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
        setFilteredProducts(filtered);
    };
    return (_jsx("div", { className: "min-h-screen bg-gray-50 pb-20", children: _jsxs("div", { className: "container mx-auto px-4 py-6", children: [_jsx(motion.div, { className: "mb-6", children: _jsx(SearchBar, { onSearch: handleSearch }) }), _jsx(motion.div, { className: "grid grid-cols-2 gap-4", initial: { opacity: 0 }, animate: { opacity: 1 }, children: filteredProducts.map(product => (_jsx(ProductCard, { product: product, isFavorite: favorites.includes(product.id), onFavoriteClick: () => toggleFavorite(product.id), onViewDetails: () => navigate(`/product/${product.id}`) }, product.id))) })] }) }));
}

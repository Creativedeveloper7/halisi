import { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProductCard } from '../components/shop/ProductCard';
import { SearchBar } from '../components/home/SearchBar';
import { useProducts } from '../hooks/useProducts';
import { useFavorites } from '../hooks/useFavorites';
import { Product } from '../types/product';

export function StorePage() {
  const { storeId } = useParams();
  const { products, loading } = useProducts(storeId);
  const { favorites, toggleFavorite } = useFavorites();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleSearch = (query: string) => {
    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="container mx-auto px-4 py-6">
        <motion.div className="mb-6">
          <SearchBar onSearch={handleSearch} />
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={favorites.includes(product.id)}
              onFavoriteClick={() => toggleFavorite(product.id)}
              onViewDetails={() => Navigate(`/product/${product.id}`)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
import { motion } from 'framer-motion';
import { ProductCard } from '../components/shop/ProductCard';
import { EmptyState } from '../components/common/EmptyState';
import { useProducts } from '../hooks/useProducts';
import { useFavorites } from '../hooks/useFavorites';
import { useNavigate } from 'react-router-dom';

export function FavoritesPage() {
  const navigate = useNavigate();
  const { products } = useProducts();
  const { favorites, toggleFavorite } = useFavorites();
  
  const favoriteProducts = products.filter(product => 
    favorites.includes(product.id)
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="container mx-auto px-4 py-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold mb-6"
        >
          My Favorites
        </motion.h1>

        {favoriteProducts.length === 0 ? (
          <EmptyState
            icon="heart"
            title="No favorites yet"
            description="Products you like will appear here"
          />
        ) : (
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {favoriteProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                isFavorite={true}
                onFavoriteClick={() => toggleFavorite(product.id)}
                onViewDetails={() => navigate(`/product/${product.id}`)}
              />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
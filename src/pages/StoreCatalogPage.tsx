import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SearchBar } from '../components/home/SearchBar';
import { ProductList } from '../components/shop/ProductList';
import { EmptyState } from '../components/common/EmptyState';
import { useProducts } from '../hooks/useProducts';
import { mockShops } from '../data/MockData';

export function StoreCatalogPage() {
  const { storeId } = useParams();
  const navigate = useNavigate();
  const { products, loading } = useProducts(storeId);
  const store = mockShops.find(shop => shop.id === storeId);

  if (!store) {
    return (
      <EmptyState
        icon="shopping"
        title="Store Not Found"
        description="The store you're looking for doesn't exist"
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <img 
            src={store.image} 
            alt={store.name} 
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold">{store.name}</h1>
            <p className="text-gray-500">{store.category}</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <SearchBar />
        </motion.div>

        <h2 className="text-xl font-semibold mb-4">Catalogue</h2>
        
        {loading ? (
          <div>Loading...</div>
        ) : products.length === 0 ? (
          <EmptyState
            icon="shopping"
            title="No Products Available"
            description="This store has no products listed yet"
          />
        ) : (
          <ProductList 
            products={products}
            onProductClick={(productId) => navigate(`/product/${productId}`)}
          />
        )}
      </div>
    </div>
  );
}
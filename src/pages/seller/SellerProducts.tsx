import { useState } from 'react';
import { motion } from 'framer-motion';
import { useProducts } from '../../hooks/useProducts';
import { CatalogueItem } from '../../components/shop/CatalogueItem';
import { Button } from '../../components/common/Button';

export function SellerProducts() {
  const { products } = useProducts();
  const [showAddProduct, setShowAddProduct] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold"
          >
            My Products
          </motion.h1>
          <Button onClick={() => setShowAddProduct(true)}>
            Add Product
          </Button>
        </div>

        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {products.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No products listed yet</p>
            </div>
          ) : (
            products.map(product => (
              <CatalogueItem key={product.id} product={product} />
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
}
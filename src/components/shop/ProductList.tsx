import { motion } from 'framer-motion';
import { Product } from '../../types/product';
import { formatCurrency } from '../../utils/format';

interface ProductListProps {
  products: Product[];
  onProductClick: (productId: string) => void;
}

export function ProductList({ products, onProductClick }: ProductListProps) {
  return (
    <motion.div 
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {products.map(product => (
        <motion.div
          key={product.id}
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
          whileHover={{ scale: 1.01 }}
          onClick={() => onProductClick(product.id)}
        >
          <div className="flex items-center gap-4">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-orange-500 font-bold">
                {formatCurrency(product.price)}
              </p>
            </div>
          </div>
          
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            View Details
          </button>
        </motion.div>
      ))}
    </motion.div>
  );
}
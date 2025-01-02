import { motion } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { Product } from '../../types/product';
import { formatCurrency } from '../../utils/format';

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onFavoriteClick: () => void;
  onViewDetails: () => void;
}

export function ProductCard({ 
  product, 
  isFavorite, 
  onFavoriteClick, 
  onViewDetails 
}: ProductCardProps) {
  return (
    <motion.div 
      layout
      className="bg-white rounded-lg overflow-hidden shadow-sm"
    >
      <div className="relative aspect-square">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
        <button
          onClick={onFavoriteClick}
          className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-sm"
        >
          {isFavorite ? (
            <HeartSolidIcon className="w-6 h-6 text-red-500" />
          ) : (
            <HeartIcon className="w-6 h-6 text-gray-500" />
          )}
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-orange-500 font-bold mt-1">
          {formatCurrency(product.price)}
        </p>
        <button
          onClick={onViewDetails}
          className="w-full mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}
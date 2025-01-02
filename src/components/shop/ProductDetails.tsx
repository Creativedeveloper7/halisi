import { useState } from 'react';
import { motion } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { Product } from '../../types/product';
import { formatCurrency } from '../../utils/format';
import { Button } from '../common/Button';

interface ProductDetailsProps {
  product: Product;
  isFavorite: boolean;
  onFavoriteClick: () => void;
  onOrder: () => void;
}

export function ProductDetails({
  product,
  isFavorite,
  onFavoriteClick,
  onOrder,
}: ProductDetailsProps) {
  const [loading, setLoading] = useState(false);

  const handleOrder = async () => {
    setLoading(true);
    await onOrder();
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative aspect-square">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={onFavoriteClick}
          className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-sm"
        >
          {isFavorite ? (
            <HeartSolidIcon className="w-6 h-6 text-red-500" />
          ) : (
            <HeartIcon className="w-6 h-6 text-gray-500" />
          )}
        </button>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-2xl font-bold text-orange-500">
            {formatCurrency(product.price)}
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <p className="text-gray-600">{product.description}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Availability</h2>
          <p className={`text-${product.available ? 'green' : 'red'}-500`}>
            {product.available ? 'In Stock' : 'Out of Stock'}
          </p>
        </div>

        <div className="mt-8">
          <Button
            onClick={handleOrder}
            loading={loading}
            disabled={!product.available}
            className="w-full"
          >
            Place Order
          </Button>
        </div>
      </div>
    </div>
  );
}
import { useNavigate } from 'react-router-dom';
import { Product } from '../../types/product';
import { formatCurrency } from '../../utils/format';

interface CatalogueItemProps {
  product: Product;
}

export function CatalogueItem({ product }: CatalogueItemProps) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
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
        onClick={() => navigate(`/product/${product.id}`)}
        className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
      >
        View Product
      </button>
    </div>
  );
}
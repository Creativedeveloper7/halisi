interface ShopCardProps {
    name: string;
    image: string;
    rating?: number;
    category: string;
  }
  
  export function ShopCard({ name, image, rating, category }: ShopCardProps) {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="aspect-square">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{category}</p>
          {rating && (
            <div className="flex items-center mt-1">
              <span className="text-yellow-400">★</span>
              <span className="text-sm ml-1">{rating}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  image: string;
  path: string;
}

export function CategoryCard({ title, image, path }: CategoryCardProps) {
  return (
    <Link to={path} className="block">
      <div className="bg-transparent rounded-lg overflow-hidden shadow-sm transition-all border-2 border-gray-900 hover:border-orange hover:shadow-lg hover:shadow-white">
        {/* Added a fixed size for the icons and border around the image */}
        <div className="flex justify-center items-center">
          <img
            src={image}
            alt={title}
            className="object-cover border-2 border-orange-300 rounded-full"
            style={{ width: '150px', height: '150px' }} // Adjusted size
          />
        </div>
        <div className="p-4">
          <h3 className="text-normal font-semibold text-center">{title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  id: string;
  title: string;
  image: string;
}

export function CategoryCard({ id, title, image }: CategoryCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate(`/store/${id}`)}
      className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer"
    >
      <div className="aspect-square">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-center">{title}</h3>
      </div>
    </motion.div>
  );
}
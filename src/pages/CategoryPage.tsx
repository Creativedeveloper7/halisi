import { useParams } from 'react-router-dom';
import { SearchBar } from '../components/home/SearchBar';
import { ShopCard } from '../components/shop/ShopCard';
import { BottomNavigation } from '../components/layout/BottomNavigation';
import { mockShops } from '../data/MockData';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function CategoryPage() {
  const { category } = useParams();
  const filteredShops = mockShops.filter(
    shop => shop.category.toLowerCase().includes(category?.toLowerCase() || '')
  );

  return (
    <div className="min-h-screen bg-transparent-50 pb-20">
      <div className="container mx-auto px-4 py-6">
        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold mb-6"
        >
          Trending Shops
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <SearchBar />
        </motion.div>

        <motion.section 
          className="mt-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="grid grid-cols-2 gap-4">
            {filteredShops.map((shop) => (
              <motion.div key={shop.id} variants={item}>
                <ShopCard
                  name={shop.name}
                  image={shop.image}
                  category={shop.category}
                  rating={shop.rating}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
      
      <BottomNavigation />
    </div>
  );
}
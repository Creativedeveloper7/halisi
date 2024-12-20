import { SearchBar } from '../components/home/SearchBar';
import CategoryCard from '../components/home/CategoryCard';
import BottomNavigation from '../components/layout/BottomNavigation';
import { categories } from '../data/MockData';
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

export function HomePage() {
  return (
    <div
      className="min-h-screen pb-20 bg-cover bg-center"
      style={{ backgroundImage: 'url(/image/sign%20up.png)' }}
    >
      <div className="container mx-auto px-4 py-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold mb-6 text-black-200"
        >
          Find Products
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
          <h2 className="text-xl font-semibold mb-4 text-white-700">Featured Categories</h2>
          <div className="grid grid-cols-2 gap-4 bg-transparent">
            {categories.map((category) => (
              <motion.div key={category.id} variants={item} className="bg-transparent">
                <CategoryCard
                  title={category.title}
                  image={category.image}
                  path={category.path}
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

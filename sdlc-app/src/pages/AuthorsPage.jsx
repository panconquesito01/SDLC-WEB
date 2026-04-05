import { motion } from 'framer-motion';
import { AuthorsSection } from '../components/sections/AuthorsSection';

export function AuthorsPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="pt-24 min-h-screen"
    >
      <AuthorsSection />
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { DefinitionSection } from '../components/sections/DefinitionSection';
import { ImportanceSection } from '../components/sections/ImportanceSection';

export function ConceptPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="pt-24"
    >
      <DefinitionSection />
      {/* Visual separator */}
      <div className="h-px w-3/4 mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
      <ImportanceSection />
    </motion.div>
  );
}

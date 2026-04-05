import { motion } from 'framer-motion';
import { SectionContainer, SectionHeader } from '../layout/SectionContainer';
import { sdlcContent } from '../../data/sdlcContent';
import { CheckCircle2 } from 'lucide-react';

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function ImportanceSection() {
  const { title, items } = sdlcContent.importance;

  return (
    <SectionContainer id="importance" className="bg-surface/30">
      <SectionHeader title={title} subtitle="El Valor del Proceso" />

      <motion.div 
        variants={containerVariant} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {items.map((item, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariant}
            className="glass-effect p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-colors group"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}

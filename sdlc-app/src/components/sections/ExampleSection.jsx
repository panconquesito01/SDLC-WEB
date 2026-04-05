import { motion } from 'framer-motion';
import { SectionContainer, SectionHeader } from '../layout/SectionContainer';
import { sdlcContent } from '../../data/sdlcContent';
import { Smartphone } from 'lucide-react';

export function ExampleSection() {
  const { title, description, steps } = sdlcContent.example;

  return (
    <SectionContainer id="example" className="bg-background relative">
      <SectionHeader title={title} subtitle="Caso de Uso" />
      <p className="text-center text-slate-300 text-lg max-w-2xl mx-auto mb-16">{description}</p>
      
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 hidden md:block" />
        
        <div className="grid md:grid-cols-7 gap-4 relative z-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-surface border border-white/20 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all shadow-lg z-10 mb-6">
                <span className="font-bold">{idx + 1}</span>
              </div>
              
              <div className="glass-effect p-4 rounded-xl border border-white/5 w-full flex-1 group-hover:-translate-y-2 transition-transform">
                <h4 className="text-white font-bold text-sm mb-2">{step.phase}</h4>
                <p className="text-slate-400 text-xs">{step.task}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

import { motion } from 'framer-motion';
import { SectionContainer, SectionHeader } from '../components/layout/SectionContainer';
import { sdlcContent } from '../data/sdlcContent';
import { InfinityIcon, ShieldCheck } from 'lucide-react';

export function DevOpsPage() {
  const { title, desc, principles } = sdlcContent.devops;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="pt-24 min-h-screen">
      <SectionContainer id="devops-deep" className="bg-surface/30">
        <SectionHeader title={title} subtitle="Modernización" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center mt-12">
          <div className="order-2 lg:order-1 relative h-full min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 via-primary/5 to-transparent rounded-[3rem] blur-xl" />
            <div className="relative h-full glass-effect p-12 rounded-[3rem] border border-white/5 flex flex-col items-center justify-center text-center overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                className="relative w-64 h-64 mb-12 flex items-center justify-center"
              >
                <div className="absolute inset-0 rounded-full border-[6px] border-dashed border-primary/20" />
                <div className="absolute inset-4 rounded-full border-[2px] border-secondary/30" />
                <InfinityIcon className="w-32 h-32 text-secondary drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" strokeWidth={1.5} />
              </motion.div>
              
              <h3 className="text-3xl font-bold text-white mb-4">Pipeline CI/CD</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['Plan', 'Code', 'Build', 'Test', 'Release', 'Deploy', 'Operate', 'Monitor'].map((step, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-slate-300">
                    {step}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-slate-300 text-xl leading-relaxed mb-12 font-light">
              {desc}
            </p>
            
            <div className="space-y-6">
              {principles.map((point, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx} 
                  className="bg-surface/80 border border-white/5 p-8 rounded-3xl group hover:border-primary/30 transition-colors"
                >
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors mt-1">
                      <ShieldCheck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3">{point.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </motion.div>
  );
}

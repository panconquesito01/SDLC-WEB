import { motion } from 'framer-motion';
import { SectionContainer, SectionHeader } from '../components/layout/SectionContainer';
import { sdlcContent } from '../data/sdlcContent';
import { Check, X, ShieldAlert } from 'lucide-react';

export function ModelsPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="pt-24 min-h-screen pb-24">
      <SectionContainer id="models-deep" className="bg-background">
        <SectionHeader title="Modelos de Desarrollo" subtitle="Comparativa Arquitectónica" />
        
        <div className="max-w-6xl mx-auto space-y-16">
          {sdlcContent.models.map((model, idx) => (
            <motion.div 
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-effect rounded-[3rem] p-8 md:p-12 border border-white/5 relative overflow-hidden"
            >
              {/* Abstract decorative background */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-primary font-bold text-xl mb-6">
                    M{idx + 1}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">{model.name}</h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    {model.description}
                  </p>
                  
                  <div className="bg-surface/80 rounded-2xl p-6 border border-white/5 flex gap-4 items-start">
                    <ShieldAlert className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold mb-1">Caso de Uso Óptimo</h4>
                      <p className="text-slate-400">{model.bestFor}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Pros */}
                  <div className="bg-gradient-to-r from-emerald-500/10 to-transparent p-6 rounded-3xl border border-emerald-500/20">
                    <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
                      <Check className="w-5 h-5" /> Ventajas Técnicas
                    </h4>
                    <ul className="space-y-3">
                      {model.pros.map((pro, i) => (
                        <li key={i} className="text-slate-300 text-sm flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div className="bg-gradient-to-r from-red-500/10 to-transparent p-6 rounded-3xl border border-red-500/20">
                    <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2">
                      <X className="w-5 h-5" /> Desventajas / Riesgos
                    </h4>
                    <ul className="space-y-3">
                      {model.cons.map((con, i) => (
                        <li key={i} className="text-slate-300 text-sm flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </motion.div>
  );
}

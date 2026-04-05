import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionContainer, SectionHeader } from '../layout/SectionContainer';
import { sdlcContent } from '../../data/sdlcContent';
import { cn } from '../../lib/utils';
import { Network } from 'lucide-react';

export function ModelsSection() {
  const [activeTab, setActiveTab] = useState(sdlcContent.models[0].id);

  return (
    <SectionContainer id="models" className="bg-background">
      <SectionHeader title="Modelos de SDLC" subtitle="Metodologías Comunes" />

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-surface/50 p-2 rounded-3xl border border-white/5">
          {sdlcContent.models.map((model) => (
            <button
              key={model.id}
              onClick={() => setActiveTab(model.id)}
              className={cn(
                "relative px-6 py-2.5 rounded-full text-sm font-semibold transition-colors",
                activeTab === model.id ? "text-white" : "text-slate-400 hover:text-slate-200"
              )}
            >
              {activeTab === model.id && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-primary/20 border border-primary/50 text-white rounded-full mix-blend-screen"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{model.name}</span>
            </button>
          ))}
        </div>

        <div className="relative min-h-[250px] mt-12 w-full">
          <AnimatePresence mode="wait">
            {sdlcContent.models.map((model) => {
              if (model.id !== activeTab) return null;
              
              return (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-x-0 glass-effect p-8 md:p-12 rounded-3xl border border-white/10"
                >
                  <div className="flex items-start gap-6">
                    <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mt-1 items-center justify-center shrink-0">
                      <Network className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">{model.name}</h3>
                      <p className="text-slate-300 text-lg leading-relaxed mb-6">
                        {model.description}
                      </p>
                      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                        <span className="text-primary font-bold text-sm uppercase tracking-wide block mb-1">Mejor para:</span>
                        <span className="text-slate-300">{model.bestFor}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </SectionContainer>
  );
}

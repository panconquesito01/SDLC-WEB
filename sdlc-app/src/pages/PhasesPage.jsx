import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionContainer, SectionHeader } from '../components/layout/SectionContainer';
import { sdlcContent } from '../data/sdlcContent';
import * as Icons from 'lucide-react';
import { cn } from '../lib/utils';

export function PhasesPage() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-24 min-h-screen">
      <SectionContainer id="phases-deep" className="bg-background relative">
        <SectionHeader title="Fases del Ciclo de Vida" subtitle="Análisis Técnico Profundo" />
        
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 mt-16 max-w-7xl mx-auto">
          {/* Navigation / Timeline left side */}
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-white/10 hidden lg:block" />
            
            <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide py-2">
              {sdlcContent.phases.map((phase, idx) => {
                const isActive = activePhase === idx;
                
                return (
                  <button
                    key={phase.id}
                    onClick={() => setActivePhase(idx)}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-3xl transition-all text-left group relative flex-shrink-0 lg:flex-shrink",
                      isActive ? "bg-white/5 border border-white/10" : "hover:bg-white/5 border border-transparent"
                    )}
                  >
                    <div className={cn(
                      "relative z-10 flex w-10 h-10 md:w-12 md:h-12 rounded-full items-center justify-center border-2 transition-colors shrink-0",
                      isActive ? "bg-primary border-primary text-white shadow-[0_0_15px_rgba(14,165,233,0.5)]" : "bg-surface border-white/20 text-slate-400 group-hover:border-primary/50 group-hover:text-primary"
                    )}>
                      <span className="font-bold">{idx + 1}</span>
                    </div>
                    <div className="hidden lg:block">
                      <h3 className={cn(
                        "font-bold transition-colors",
                        isActive ? "text-white text-lg" : "text-slate-400"
                      )}>
                        {phase.name.split(' ')[1]}
                      </h3>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Content right side */}
          <div className="relative h-full min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-effect rounded-[3rem] p-8 md:p-12 border border-white/10 h-full flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    {sdlcContent.phases[activePhase].name}
                  </h3>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-12">
                    {sdlcContent.phases[activePhase].description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Roles */}
                    <div className="bg-surface/50 rounded-3xl p-6 border border-white/5">
                      <div className="flex items-center gap-3 mb-4">
                        <Icons.Users className="w-5 h-5 text-secondary" />
                        <h4 className="text-lg text-white font-semibold">Roles Involucrados</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {sdlcContent.phases[activePhase].roles.map((role, i) => (
                          <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300">{role}</span>
                        ))}
                      </div>
                    </div>

                    {/* Tools */}
                    <div className="bg-surface/50 rounded-3xl p-6 border border-white/5">
                      <div className="flex items-center gap-3 mb-4">
                        <Icons.TerminalSquare className="w-5 h-5 text-primary" />
                        <h4 className="text-lg text-white font-semibold">Stack / Herramientas</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {sdlcContent.phases[activePhase].tools.map((tool, i) => (
                          <span key={i} className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-medium">{tool}</span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="bg-surface/50 rounded-3xl p-6 border border-white/5">
                      <div className="flex items-center gap-3 mb-4">
                        <Icons.BarChart3 className="w-5 h-5 text-emerald-400" />
                        <h4 className="text-lg text-white font-semibold">Métricas de Éxito</h4>
                      </div>
                      <ul className="space-y-2">
                        {sdlcContent.phases[activePhase].metrics.map((metric, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/50" />
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverable */}
                    <div className="bg-gradient-to-br from-primary/20 to-secondary/10 rounded-3xl p-6 border border-primary/20 relative overflow-hidden">
                      <Icons.FileCheck2 className="absolute -right-4 -bottom-4 w-24 h-24 text-primary/10" />
                      <h4 className="text-sm text-primary uppercase tracking-wider font-bold mb-2 relative z-10">
                        Entregable Principal
                      </h4>
                      <p className="text-white font-bold text-lg relative z-10">
                        {sdlcContent.phases[activePhase].deliverable}
                      </p>
                    </div>

                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </SectionContainer>
    </motion.div>
  );
}

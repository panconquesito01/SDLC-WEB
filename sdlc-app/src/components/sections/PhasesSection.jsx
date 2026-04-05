import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionContainer, SectionHeader } from '../layout/SectionContainer';
import { sdlcContent } from '../../data/sdlcContent';
import * as Icons from 'lucide-react';
import { cn } from '../../lib/utils';

export function PhasesSection() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <SectionContainer id="phases" className="bg-background relative">
      <SectionHeader title="Fases del Ciclo de Vida" subtitle="El Flujo de Trabajo" />
      
      <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mt-16">
        {/* Navigation / Timeline left side */}
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-white/10" />
          
          <div className="flex flex-col gap-2">
            {sdlcContent.phases.map((phase, idx) => {
              const isActive = activePhase === idx;
              const Icon = Icons[phase.icon] || Icons.Circle;
              
              return (
                <button
                  key={phase.id}
                  onClick={() => setActivePhase(idx)}
                  className={cn(
                    "flex items-center gap-6 p-4 rounded-2xl transition-all text-left group relative",
                    isActive ? "bg-white/5" : "hover:bg-white/5"
                  )}
                >
                  <div className={cn(
                    "relative z-10 flex w-12 h-12 rounded-full items-center justify-center border-2 transition-colors",
                    isActive ? "bg-primary border-primary text-white" : "bg-surface border-white/20 text-slate-400 group-hover:border-primary/50 group-hover:text-primary"
                  )}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={cn(
                      "font-bold transition-colors",
                      isActive ? "text-white text-lg" : "text-slate-400"
                    )}>
                      {phase.name}
                    </h3>
                    <p className="text-sm text-slate-500 hidden sm:block">
                      {phase.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Content right side */}
        <div className="relative h-full min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="glass-effect rounded-3xl p-8 md:p-12 border border-white/10 h-full flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
              
              <div className="relative z-10">
                <span className="text-primary font-bold tracking-wider mb-2 block">
                  {sdlcContent.phases[activePhase].name}
                </span>
                <h3 className="text-3xl font-bold text-white mb-6">
                  {sdlcContent.phases[activePhase].shortDesc}
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  {sdlcContent.phases[activePhase].description}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-4">
                      Actividades Clave
                    </h4>
                    <ul className="space-y-3">
                      {sdlcContent.phases[activePhase].activities.map((act, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-200">
                          <Icons.CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-surface/50 rounded-2xl p-6 border border-white/5">
                    <h4 className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-2">
                      Entregable Principal
                    </h4>
                    <p className="text-white font-medium">
                      {sdlcContent.phases[activePhase].deliverable}
                    </p>
                    <div className="mt-4 flex opacity-20">
                      <Icons.FileText className="w-12 h-12" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionContainer>
  );
}

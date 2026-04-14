import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionContainer, SectionHeader } from '../components/layout/SectionContainer';
import { sdlcContent } from '../data/sdlcContent';
import * as Icons from 'lucide-react';
import { cn } from '../lib/utils';

const fallbackPhaseImage = 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80';

export function PhasesPage() {
  const [activePhase, setActivePhase] = useState(0);
  const activePhaseContent = sdlcContent.phases[activePhase];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-24 min-h-screen">
      <SectionContainer id="phases-deep" className="bg-background relative">
        <SectionHeader title="Fases del ciclo de vida" subtitle="Paso a paso" />

        <div className="grid xl:grid-cols-[0.95fr_1.05fr] gap-8 mb-16">
          <div className="glass-effect p-8 md:p-10 rounded-[2.5rem] border border-white/10">
            <span className="text-primary font-semibold tracking-[0.2em] uppercase text-xs block mb-4">
              Antes de empezar
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
              {sdlcContent.phasesOverview.title}
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
              {sdlcContent.phasesOverview.description}
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {['Idea', 'Objetivos', 'Diseno', 'Codigo', 'Pruebas', 'Mejoras'].map((item) => (
                <span key={item} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-effect rounded-[2.5rem] border border-white/10 overflow-hidden">
            <div className="aspect-video">
              <iframe
                title={sdlcContent.phasesOverview.videoTitle}
                src={sdlcContent.phasesOverview.videoUrl}
                className="w-full h-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="p-5 md:p-6 border-t border-white/10">
              <h4 className="text-white font-bold text-lg mb-2">Video recomendado</h4>
              <p className="text-slate-400">
                Miralo primero y luego recorre cada fase con ejemplos sencillos y una imagen relacionada.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 mt-16 max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-white/10 hidden lg:block" />
            
            <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide py-2">
              {sdlcContent.phases.map((phase, idx) => {
                const isActive = activePhase === idx;
                const Icon = Icons[phase.icon] || Icons.Circle;
                
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
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="hidden lg:block min-w-0">
                      <h3 className={cn(
                        "font-bold transition-colors",
                        isActive ? "text-white text-lg" : "text-slate-400"
                      )}>
                        {phase.name.replace(/^\d+\.\s*/, '')}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1 max-w-xs">
                        {phase.shortDesc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative h-full min-h-[760px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhaseContent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-effect rounded-[3rem] border border-white/10 h-full flex flex-col relative overflow-hidden"
              >
                <div className="relative aspect-[16/9] md:aspect-[16/7] overflow-hidden">
                  <img
                    src={activePhaseContent.image}
                    alt={activePhaseContent.imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = fallbackPhaseImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
                  <div className="absolute left-0 right-0 bottom-0 p-6 md:p-8">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/60 border border-white/10 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">
                      {activePhaseContent.question}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                      {activePhaseContent.name}
                    </h3>
                    <p className="text-slate-200 text-base md:text-lg max-w-3xl">
                      {activePhaseContent.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 p-8 md:p-10">
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
                    {activePhaseContent.description}
                  </p>

                  <div className="bg-primary/10 border border-primary/20 rounded-3xl p-6 mb-8">
                    <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] block mb-3">
                      Ejemplo cercano
                    </span>
                    <p className="text-slate-100 text-lg leading-relaxed">
                      {activePhaseContent.funExample}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-surface/50 rounded-3xl p-6 border border-white/5">
                      <div className="flex items-center gap-3 mb-4">
                        <Icons.ListChecks className="w-5 h-5 text-primary" />
                        <h4 className="text-lg text-white font-semibold">Que pasa en esta fase</h4>
                      </div>
                      <ul className="space-y-3">
                        {activePhaseContent.activities.map((activity, index) => (
                          <li key={index} className="text-slate-300 text-sm flex items-start gap-3">
                            <Icons.CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-surface/50 rounded-3xl p-6 border border-white/5">
                      <div className="flex items-center gap-3 mb-4">
                        <Icons.Users className="w-5 h-5 text-secondary" />
                        <h4 className="text-lg text-white font-semibold">Quienes participan</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {activePhaseContent.roles.map((role, i) => (
                          <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300">{role}</span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-surface/50 rounded-3xl p-6 border border-white/5">
                      <div className="flex items-center gap-3 mb-4">
                        <Icons.TerminalSquare className="w-5 h-5 text-primary" />
                        <h4 className="text-lg text-white font-semibold">Herramientas o apoyos</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {activePhaseContent.tools.map((tool, i) => (
                          <span key={i} className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-medium">{tool}</span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-surface/50 rounded-3xl p-6 border border-white/5">
                      <div className="flex items-center gap-3 mb-4">
                        <Icons.BarChart3 className="w-5 h-5 text-emerald-400" />
                        <h4 className="text-lg text-white font-semibold">Como sabemos que va bien</h4>
                      </div>
                      <ul className="space-y-2">
                        {activePhaseContent.metrics.map((metric, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/50" />
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="md:col-span-2 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-3xl p-6 border border-primary/20 relative overflow-hidden">
                      <Icons.FileCheck2 className="absolute -right-4 -bottom-4 w-24 h-24 text-primary/10" />
                      <h4 className="text-sm text-primary uppercase tracking-wider font-bold mb-2 relative z-10">
                        Lo que sale de esta fase
                      </h4>
                      <p className="text-white font-bold text-lg relative z-10">
                        {activePhaseContent.deliverable}
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

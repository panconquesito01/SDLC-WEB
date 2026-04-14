import { motion } from 'framer-motion';
import { SectionContainer, SectionHeader } from '../components/layout/SectionContainer';
import { sdlcContent } from '../data/sdlcContent';
import * as Icons from 'lucide-react';

const fallbackDevOpsImage = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80';

export function DevOpsPage() {
  const { title, desc, analogy, principles, cycle, videoUrl, videoTitle, image, imageAlt, benefits } = sdlcContent.devops;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="pt-24 min-h-screen">
      <SectionContainer id="devops-deep" className="bg-surface/30">
        <SectionHeader title={title} subtitle="Trabajo continuo" />

        <div className="max-w-7xl mx-auto grid xl:grid-cols-[0.95fr_1.05fr] gap-8 items-stretch mt-12 mb-16">
          <div className="space-y-6">
            <div className="glass-effect p-8 md:p-10 rounded-[2.5rem] border border-white/10">
              <span className="text-primary font-semibold tracking-[0.2em] uppercase text-xs block mb-4">
                En pocas palabras
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                Construir, probar y mejorar sin esperar al final
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                {desc}
              </p>
              <div className="mt-6 bg-primary/10 border border-primary/20 rounded-3xl p-5">
                <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] block mb-3">
                  Piensalo con un ejemplo
                </span>
                <p className="text-slate-100 text-lg leading-relaxed">{analogy}</p>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-[2.5rem] border border-white/10">
              <h4 className="text-white text-xl font-bold mb-4">El ciclo continuo de DevOps</h4>
              <div className="flex flex-wrap gap-2">
                {cycle.map((step) => (
                  <span key={step} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-200">
                    {step}
                  </span>
                ))}
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                {benefits.map((benefit) => (
                  <div key={benefit} className="rounded-2xl bg-surface/60 border border-white/5 px-4 py-5 text-center text-slate-200 text-sm font-medium">
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-[2.5rem] border border-white/10 overflow-hidden">
            <div className="aspect-video">
              <iframe
                title={videoTitle}
                src={videoUrl}
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
                Este video sirve para ver como DevOps une programacion, pruebas, publicacion y seguimiento en un mismo flujo.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <div className="glass-effect rounded-[2.5rem] border border-white/10 overflow-hidden">
            <div className="aspect-[4/5] sm:aspect-[16/10] overflow-hidden">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = fallbackDevOpsImage;
                }}
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">DevOps se entiende mejor asi</h3>
              <p className="text-slate-300 text-lg leading-relaxed">{analogy}</p>
            </div>
          </div>

          <div className="space-y-5">
            {principles.map((point, idx) => {
              const Icon = Icons[point.icon] || Icons.ShieldCheck;

              return (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  key={point.title}
                  className="bg-surface/80 border border-white/5 p-8 rounded-3xl group hover:border-primary/30 transition-colors"
                >
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors mt-1">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3">{point.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{point.desc}</p>
                      <div className="mt-4 rounded-2xl bg-primary/10 border border-primary/15 p-4">
                        <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] block mb-2">
                          Ejemplo
                        </span>
                        <p className="text-slate-200 text-sm leading-relaxed">{point.example}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </motion.div>
  );
}

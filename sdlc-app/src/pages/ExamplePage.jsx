import { motion } from 'framer-motion';
import { SectionContainer, SectionHeader } from '../components/layout/SectionContainer';
import { sdlcContent } from '../data/sdlcContent';
import { ChevronRight } from 'lucide-react';

const fallbackExampleImage = 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80';

export function ExamplePage() {
  const { title, description, steps, summary, gallery } = sdlcContent.example;

  return (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="pt-24 min-h-screen pb-24">
      <SectionContainer id="example-deep" className="bg-background">
        <SectionHeader title={title} subtitle="Ejemplo cercano" />
        <p className="text-center text-slate-300 text-xl font-light max-w-3xl mx-auto mb-14">{description}</p>

        <div className="grid xl:grid-cols-[1.05fr_0.95fr] gap-8 max-w-6xl mx-auto mb-20">
          <div className="grid sm:grid-cols-2 gap-6">
            {gallery.map((item) => (
              <div key={item.title} className="glass-effect rounded-[2.5rem] border border-white/10 overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = fallbackExampleImage;
                    }}
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-effect p-8 md:p-10 rounded-[2.5rem] border border-white/10">
            <span className="text-primary font-semibold tracking-[0.2em] uppercase text-xs block mb-4">
              Caso sencillo
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
              Una app util para un lugar que todos conocen
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              {description}
            </p>

            <div className="space-y-4 mt-8">
              {summary.map((item) => (
                <div key={item.title} className="rounded-3xl bg-surface/70 border border-white/5 p-5">
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 bottom-0 left-[2.2rem] w-px bg-gradient-to-b from-primary/50 via-secondary/20 to-transparent hidden md:block" />
          
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex flex-col md:flex-row gap-8 items-start group"
              >
                {/* Timeline node */}
                <div className="hidden md:flex w-[4.5rem] h-[4.5rem] shrink-0 bg-surface border border-white/10 rounded-2xl items-center justify-center shadow-xl group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all relative z-10">
                  <span className="font-bold text-xl text-primary">{idx + 1}</span>
                </div>
                
                {/* Content Card */}
                <div className="glass-effect p-8 rounded-3xl border border-white/5 flex-1 group-hover:border-primary/30 transition-all w-full">
                  <div className="flex items-center gap-3 mb-4">
                    <h4 className="text-primary font-bold text-sm tracking-wider uppercase">{step.phase}</h4>
                    <ChevronRight className="w-4 h-4 text-slate-600" />
                    <h3 className="text-white font-bold text-xl">{step.title}</h3>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed bg-surface/50 p-6 rounded-2xl border border-white/5">
                    {step.detail}
                  </p>
                  <div className="mt-4 rounded-2xl bg-primary/10 border border-primary/15 p-4">
                    <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] block mb-2">Resultado</span>
                    <p className="text-slate-200 text-sm leading-relaxed">{step.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </motion.div>
  );
}

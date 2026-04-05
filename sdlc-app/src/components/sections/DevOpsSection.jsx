import { motion } from 'framer-motion';
import { SectionContainer, SectionHeader } from '../layout/SectionContainer';
import { sdlcContent } from '../../data/sdlcContent';
import { ArrowRight, InfinityIcon } from 'lucide-react';

export function DevOpsSection() {
  const { title, desc, points } = sdlcContent.devops;

  return (
    <SectionContainer id="devops" className="bg-surface/30">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute inset-0 bg-secondary/10 rounded-[3rem] blur-3xl transform -rotate-6" />
          <div className="relative glass-effect p-12 rounded-[3rem] border border-white/5 flex flex-col items-center justify-center text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="relative w-48 h-48 mb-6 flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-primary/30" />
              <InfinityIcon className="w-24 h-24 text-secondary" strokeWidth={1.5} />
            </motion.div>
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
              Integración Continua
            </h3>
            <p className="text-slate-400 font-medium">Plan &gt; Code &gt; Build &gt; Test &gt; Release &gt; Deploy &gt; Operate &gt; Monitor</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeader title={title} subtitle="El Futuro del SDLC" align="left" />
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            {desc}
          </p>
          <div className="space-y-6">
            {points.map((point, idx) => (
              <div key={idx} className="bg-surface/50 border border-white/5 p-6 rounded-2xl flex gap-4">
                <div className="mt-1">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{point.title}</h4>
                  <p className="text-slate-400">{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

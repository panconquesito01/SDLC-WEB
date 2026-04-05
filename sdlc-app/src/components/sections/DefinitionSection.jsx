import { SectionContainer, SectionHeader } from '../layout/SectionContainer';
import { sdlcContent } from '../../data/sdlcContent';
import { ShieldCheck, Target, RefreshCw } from 'lucide-react';

const iconsMap = {
  "Calidad": ShieldCheck,
  "Control": Target,
  "Claridad": RefreshCw
};

export function DefinitionSection() {
  const { title, paragraphs, highlights } = sdlcContent.definition;

  return (
    <SectionContainer id="definition" className="bg-surface/30">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader title={title} subtitle="Concepto Fundamental" align="left" />
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl transform rotate-3" />
          <div className="relative glass-effect p-8 rounded-3xl border border-white/5 space-y-8">
            {highlights.map((item, idx) => {
              const Icon = iconsMap[item.title] || ShieldCheck;
              return (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="p-3 rounded-xl bg-surface border border-white/5 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

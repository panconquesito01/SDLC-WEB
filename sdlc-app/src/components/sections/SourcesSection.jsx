import { SectionContainer, SectionHeader } from '../layout/SectionContainer';
import { sdlcContent } from '../../data/sdlcContent';
import { ExternalLink, BookOpen } from 'lucide-react';

export function SourcesSection() {
  const { title, items } = sdlcContent.sources;

  return (
    <SectionContainer id="sources" className="bg-background">
      <SectionHeader title={title} subtitle="Bibliografía" />
      
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect p-8 rounded-3xl border border-white/5 hover:border-primary/50 group transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center border border-white/10 group-hover:bg-primary/20 transition-colors">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-primary transition-colors" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">{item.name}</h4>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            <div className="mt-4 text-xs font-mono text-slate-500 truncate w-full group-hover:text-primary/70 transition-colors">
              {item.url}
            </div>
          </a>
        ))}
      </div>
    </SectionContainer>
  );
}

export function Footer() {
  return (
    <footer className="bg-surface/50 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-2 group">
            <span className="font-bold text-2xl tracking-tight text-white group-hover:text-primary transition-colors">
              SDLC<span className="text-primary">.edu</span>
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Inicio</a>
            <a href="#definition" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Qué es</a>
            <a href="#phases" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Fases</a>
            <a href="#models" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Modelos</a>
            <a href="#authors" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Autores</a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Proyecto Educativo SDLC. Material sin fines de lucro.</p>
          <p>Desarrollado con React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

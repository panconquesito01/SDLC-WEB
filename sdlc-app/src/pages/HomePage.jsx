import { motion } from 'framer-motion';
import { Hero } from '../components/sections/Hero';
import { AuthorsSection } from '../components/sections/AuthorsSection';
import { Link } from 'react-router-dom';
import { BookOpen, RefreshCw, Network, Rocket, Building, Users, Gamepad2 } from 'lucide-react';
import { SectionContainer, SectionHeader } from '../components/layout/SectionContainer';

const portalLinks = [
  { path: "/concepto", name: "Fundamentos", icon: BookOpen, desc: "Aprende que es el SDLC y por que ayuda a organizar proyectos." },
  { path: "/fases", name: "Fases", icon: RefreshCw, desc: "Descubre que pasa desde la idea inicial hasta las mejoras finales." },
  { path: "/modelos", name: "Modelos", icon: Network, desc: "Compara distintas formas de organizar el desarrollo del software." },
  { path: "/devops", name: "DevOps", icon: Rocket, desc: "Entiende como se prueba, publica y mejora software de forma continua." },
  { path: "/ejemplo", name: "Caso Practico", icon: Building, desc: "Mira un ejemplo cercano basado en una app para la biblioteca escolar." },
  { path: "/juegos", name: "Zona Interactiva", icon: Gamepad2, desc: "Repasa conceptos con actividades pensadas para aprender jugando." },
  { path: "/autores", name: "Autores", icon: Users, desc: "Conoce al equipo estudiantil que construyo esta experiencia." }
];

export function HomePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Update Hero CTA inside Hero component implicitly by passing props if needed, but since Hero is imported we will let Hero be, we just need to update Hero's links */}
      <Hero />
      
      <SectionContainer id="portal" className="bg-surface/30">
        <SectionHeader title="Explora y aprende" subtitle="Recorrido guiado" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portalLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <Link key={idx} to={link.path} className="glass-effect p-8 rounded-3xl border border-white/5 hover:border-primary/50 group transition-all hover:-translate-y-2">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{link.name}</h3>
                <p className="text-slate-400 text-sm">{link.desc}</p>
                <div className="mt-6 flex items-center text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Entrar a esta parte &rarr;
                </div>
              </Link>
            )
          })}
        </div>
      </SectionContainer>

      <AuthorsSection />
    </motion.div>
  );
}

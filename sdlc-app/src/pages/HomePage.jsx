import { motion } from 'framer-motion';
import { Hero } from '../components/sections/Hero';
import { AuthorsSection } from '../components/sections/AuthorsSection';
import { Link } from 'react-router-dom';
import { BookOpen, RefreshCw, Network, Rocket, Building, Users, Gamepad2 } from 'lucide-react';
import { SectionContainer, SectionHeader } from '../components/layout/SectionContainer';

const portalLinks = [
  { path: "/concepto", name: "Fundamentos", icon: BookOpen, desc: "Bases teóricas y justificación económica del ciclo." },
  { path: "/fases", name: "Fases Técnicas", icon: RefreshCw, desc: "Desglose profundo de QA, Codificación, Arquitectura." },
  { path: "/modelos", name: "Modelos Formales", icon: Network, desc: "Waterfall, Agile, V-Model y metodologías evolutivas." },
  { path: "/devops", name: "DevSecOps", icon: Rocket, desc: "El cambio de paradigma continuo y seguridad Shift-Left." },
  { path: "/ejemplo", name: "Caso Práctico", icon: Building, desc: "Construcción de un Sistema Bancario Enterprise." },
  { path: "/juegos", name: "Zona Interactiva", icon: Gamepad2, desc: "Pon a prueba tus conocimientos con mini-juegos." },
  { path: "/autores", name: "Comité Creador", icon: Users, desc: "Ingenieros y Arquitectos detrás del diseño." }
];

export function HomePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Update Hero CTA inside Hero component implicitly by passing props if needed, but since Hero is imported we will let Hero be, we just need to update Hero's links */}
      <Hero />
      
      <SectionContainer id="portal" className="bg-surface/30">
        <SectionHeader title="El Hub del Conocimiento" subtitle="Explora la Plataforma" />
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
                  Acceder al Módulo &rarr;
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

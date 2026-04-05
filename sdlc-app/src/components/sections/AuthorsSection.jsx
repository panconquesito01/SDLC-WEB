import { motion } from 'framer-motion';
import { SectionContainer, SectionHeader } from '../layout/SectionContainer';
import { sdlcContent } from '../../data/sdlcContent';
import { Mail, Globe, LinkIcon } from 'lucide-react';

export function AuthorsSection() {
  const { title, desc, team } = sdlcContent.authors;

  return (
    <SectionContainer id="authors" className="bg-surface/30">
      <SectionHeader title={title} subtitle="Créditos" />
      <p className="text-center text-slate-400 max-w-2xl mx-auto mb-16">{desc}</p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {team.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="glass-effect rounded-3xl p-6 border border-white/5 text-center group hover:border-primary/30 transition-all hover:-translate-y-2"
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-surface group-hover:border-primary transition-colors relative">
              <div className="absolute inset-0 bg-primary/20 animate-pulse group-hover:opacity-0 transition-opacity" />
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-full h-full object-cover relative z-10"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&h=300&q=80"; // Fallback premium avatar
                }}
              />
            </div>
            
            <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
            <span className="text-primary text-sm font-semibold tracking-wide uppercase block mb-4">
              {member.role}
            </span>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              {member.desc}
            </p>
            
            <div className="flex items-center justify-center gap-4 text-slate-500">
              <a href="#" className="hover:text-white transition-colors"><LinkIcon className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}

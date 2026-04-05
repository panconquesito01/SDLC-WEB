import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sdlcContent } from '../../data/sdlcContent';

export function Hero() {
  const { title, subtitle, description, cta1, cta2 } = sdlcContent.hero;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[10%] left-[30%] w-[600px] h-[600px] bg-secondary/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-slate-300">Educativo Premium</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="text-white block">{title}</span>
            <span className="text-gradient block mt-2 text-4xl md:text-5xl">{subtitle}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Link to="/fases" className="group flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]">
              {cta1}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/modelos" className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 transition-all">
              {cta2}
            </Link>
          </div>
        </motion.div>

        {/* Visual Composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-[600px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-indigo-500/20 rounded-3xl transform rotate-3 flex items-center justify-center border border-white/10 glass-effect p-8 shadow-2xl">
              <div className="w-full h-full border border-white/5 rounded-2xl bg-surface/80 flex flex-col overflow-hidden relative shadow-inner">
                {/* Mockup Topbar */}
                <div className="h-10 bg-slate-800/50 border-b border-white/5 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                {/* Mockup Body */}
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <div className="h-8 w-1/3 bg-white/5 rounded-md" />
                  <div className="h-4 w-full bg-white/5 rounded-md" />
                  <div className="h-4 w-5/6 bg-white/5 rounded-md" />
                  <div className="mt-auto flex justify-between gap-4">
                    <div className="h-24 w-full bg-primary/10 rounded-xl border border-primary/20" />
                    <div className="h-24 w-full bg-secondary/10 rounded-xl border border-secondary/20" />
                  </div>
                </div>
                
                {/* Floating Elements overlay */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -right-8 top-20 glass-effect p-4 rounded-xl shadow-xl flex items-center gap-3 border-l-4 border-l-primary"
                >
                  <div className="p-2 bg-primary/20 rounded-lg"><Terminal className="w-5 h-5 text-primary" /></div>
                  <div>
                    <div className="text-sm font-bold">Despliegue Exitoso</div>
                    <div className="text-xs text-slate-400">FASE: Implementación</div>
                  </div>
                </motion.div>
                
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { cn } from '../../lib/utils';

const links = [
  { name: 'Inicio', href: '/' },
  { name: 'Concepto', href: '/concepto' },
  { name: 'Fases', href: '/fases' },
  { name: 'Modelos', href: '/modelos' },
  { name: 'DevOps', href: '/devops' },
  { name: 'Caso', href: '/ejemplo' },
  { name: 'Juegos', href: '/juegos' },
  { name: 'Autores', href: '/autores' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300 pointer-events-auto',
        isScrolled ? 'py-4 glass-effect shadow-lg shadow-black/20' : 'py-6 bg-surface/80 backdrop-blur-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Code2 className="w-6 h-6 text-primary" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors">
            SDLC<span className="text-secondary">.Pro</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-sm font-medium transition-all hover:text-white pb-1 relative',
                location.pathname === link.href ? 'text-white' : 'text-slate-400'
              )}
            >
              {link.name}
              {location.pathname === link.href && (
                <motion.div layoutId="nav-underline" className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary" />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect border-t border-white/5 mt-4"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'text-base font-medium transition-colors',
                    location.pathname === link.href ? 'text-primary' : 'text-slate-300'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

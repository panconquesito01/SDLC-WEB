import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function SectionContainer({ id, className, children, innerClassName }) {
  return (
    <section id={id} className={cn("relative py-24 md:py-32", className)}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={cn("max-w-7xl mx-auto px-6 relative z-10", innerClassName)}
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionHeader({ title, subtitle, align = 'center' }) {
  return (
    <div className={cn("mb-16", align === 'center' ? 'text-center' : 'text-left')}>
      {subtitle && (
        <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
        {title}
      </h2>
      <div className={cn(
        "h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full",
        align === 'center' ? 'mx-auto' : ''
      )} />
    </div>
  );
}

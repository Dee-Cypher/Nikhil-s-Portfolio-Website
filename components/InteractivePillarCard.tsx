import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
  idealFor: string;
  accentColor: string;
  index: number;
}

export const InteractivePillarCard: React.FC<PillarCardProps> = ({
  icon, title, subtitle, description, bulletPoints, idealFor, accentColor, index
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Map accentColor to exact tailwind color for borders/text
  const getColor = (color: string) => {
    switch (color) {
      case 'brand-teal': return 'text-brand-green border-brand-green';
      case 'brand-amber': return 'text-brand-orange border-brand-orange';
      case 'brand-blue': return 'text-brand-blue border-brand-blue';
      case 'brand-orange': return 'text-brand-orange border-brand-orange';
      default: return 'text-brand-text border-brand-text';
    }
  }

  const bgGradient = accentColor === 'brand-orange'
    ? 'from-brand-orange/20 to-brand-surface'
    : 'from-brand-blue/20 to-brand-surface';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="h-[500px] perspective-1000"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full transition-transform duration-700 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* FRONT FACE */}
        <div
          className="absolute inset-0 bg-brand-surface border border-brand-text/10 rounded-3xl p-10 flex flex-col backface-hidden shadow-glass"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className={`w-16 h-16 rounded-2xl bg-brand-text/5 flex items-center justify-center mb-8 ${getColor(accentColor).split(' ')[0]}`}>
            {icon}
          </div>

          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-muted/70">{subtitle}</div>
          <h3 className="text-3xl font-bold uppercase leading-none mb-6 text-brand-text">
            {title}
          </h3>

          <p className="text-brand-muted leading-relaxed text-lg">
            {description}
          </p>

          <div className="mt-auto flex items-center gap-2 text-xs font-mono text-brand-muted/50">
            <div className="w-2 h-2 rounded-full bg-brand-text/20 animate-pulse" />
            Hover to inspect structure
          </div>
        </div>

        {/* BACK FACE */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${bgGradient} border border-brand-text/10 rounded-3xl p-10 backface-hidden shadow-glow`}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <h4 className="font-bold uppercase text-sm mb-6 text-brand-text flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-text" /> What You'll Learn:
          </h4>

          <ul className="space-y-4 mb-8">
            {bulletPoints.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isFlipped ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="flex items-start text-sm text-brand-text/90 leading-relaxed"
              >
                <span className="mr-3 opacity-50">›</span>
                {point}
              </motion.li>
            ))}
          </ul>

          <div className="pt-6 border-t border-brand-text/10 mt-auto">
            <div className="text-[10px] font-bold uppercase text-brand-text/50 mb-1">Ideal For</div>
            <div className="text-sm text-brand-text font-medium">{idealFor}</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
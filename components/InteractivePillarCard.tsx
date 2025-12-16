import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const getAccentClass = (color: string) => {
    switch(color) {
      case 'brand-teal': return 'bg-brand-teal';
      case 'brand-amber': return 'bg-brand-amber';
      default: return 'bg-black';
    }
  }

  const bgClass = getAccentClass(accentColor);

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
          className="absolute inset-0 bg-brand-gray dark:bg-zinc-900 border-2 border-black dark:border-white p-8 shadow-brutal backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <motion.div 
            className={`w-16 h-16 ${bgClass} border-2 border-black dark:border-white flex items-center justify-center mb-6 text-white shadow-brutal-sm`}
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            {icon}
          </motion.div>
          
          <h3 className="text-3xl font-black uppercase leading-none mb-4 text-black dark:text-white">
            {title}
          </h3>
          
          <div className={`inline-block bg-white dark:bg-black border border-black dark:border-white p-2 mb-6 font-mono text-xs font-bold uppercase text-black dark:text-white`}>
            {subtitle}
          </div>

          <p className="font-mono text-sm text-gray-600 dark:text-gray-300 mb-6">
            {description}
          </p>

          {/* Hover hint */}
          <motion.div 
            className="absolute bottom-8 left-8 right-8 text-center font-mono text-xs text-brand-teal"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            → Hover to see details
          </motion.div>
        </div>

        {/* BACK FACE */}
        <div 
          className={`absolute inset-0 ${bgClass} border-2 border-black dark:border-white p-8 shadow-brutal backface-hidden`}
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <h4 className="font-bold uppercase text-sm mb-4 text-white border-b-2 border-white pb-2">
            What You'll Learn:
          </h4>
          
          <ul className="space-y-3 mb-6">
            {bulletPoints.map((point, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isFlipped ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="flex items-start font-mono text-sm text-white"
              >
                <span className="mr-3 font-bold">&gt;&gt;</span>
                {point}
              </motion.li>
            ))}
          </ul>

          <div className="pt-4 border-t-2 border-white">
            <div className="font-mono text-xs font-bold uppercase text-white/80">Ideal For</div>
            <div className="font-mono text-sm mt-2 text-white">{idealFor}</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
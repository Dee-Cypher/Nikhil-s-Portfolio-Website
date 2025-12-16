import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FileCheck, FileSignature, Wrench } from 'lucide-react';

interface StatProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  delay?: number;
}

export const AnimatedStat: React.FC<StatProps> = ({ 
  end, suffix = '', prefix = '', label, sublabel, icon, delay = 0 
}) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-white dark:bg-zinc-900 border-2 border-black dark:border-white p-6 shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all group"
    >
      {/* Icon with pulse animation */}
      <motion.div 
        className="w-12 h-12 bg-brand-teal text-white border-2 border-black dark:border-white flex items-center justify-center mb-4 shadow-brutal-sm"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {icon}
      </motion.div>

      {/* Animated number */}
      <div className="text-4xl md:text-5xl font-black text-black dark:text-white mb-2">
        {inView ? (
          <>
            {prefix}
            <CountUp end={end} duration={2.5} separator="," />
            {suffix}
          </>
        ) : (
          `${prefix}0${suffix}`
        )}
      </div>

      {/* Label */}
      <div className="font-mono text-sm font-bold uppercase text-black dark:text-white mb-1">
        {label}
      </div>
      <div className="font-mono text-xs text-gray-500 dark:text-gray-400">
        {sublabel}
      </div>

      {/* Hover indicator */}
      <motion.div 
        className="mt-4 h-1 bg-brand-teal opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export const StatsGrid: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      <AnimatedStat
        end={200}
        suffix="+"
        label="Trademark Applications"
        sublabel="Filed & prosecuted"
        icon={<FileCheck size={24} />}
        delay={0}
      />
      <AnimatedStat
        end={500}
        suffix="+"
        label="Licensing Agreements"
        sublabel="Drafted & negotiated"
        icon={<FileSignature size={24} />}
        delay={0.1}
      />
      <AnimatedStat
        end={10}
        suffix="+"
        label="Automation Tools"
        sublabel="Built & documented"
        icon={<Wrench size={24} />}
        delay={0.2}
      />
    </div>
  );
};
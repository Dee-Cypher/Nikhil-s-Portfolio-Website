import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FileCheck, Terminal, Zap } from 'lucide-react';

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
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay, ease: "backOut" }}
      className="glass-card bg-brand-surface border border-brand-text/5 rounded-2xl p-6 hover:bg-brand-text/5 hover:border-brand-orange/30 transition-all group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-orange/10 transition-colors" />

      {/* Icon with pulse animation */}
      <motion.div
        className="w-12 h-12 bg-brand-text/5 text-brand-orange rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm relative z-10"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        {icon}
      </motion.div>

      {/* Animated number */}
      <div className="text-4xl md:text-5xl font-bold text-brand-text mb-2 tracking-tight relative z-10">
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
      <div className="font-bold uppercase text-brand-muted text-sm mb-1 relative z-10">
        {label}
      </div>
      <div className="text-xs text-brand-muted/60 relative z-10">
        {sublabel}
      </div>
    </motion.div>
  );
};

export const StatsGrid: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      <AnimatedStat
        end={5}
        suffix="+"
        label="Scalable Team Tools"
        sublabel="Built & deployed daily"
        icon={<Terminal size={24} />}
        delay={0}
      />
      <AnimatedStat
        end={1000}
        suffix="+"
        label="AI Outputs QA'd"
        sublabel="Prompt engineering & evaluation"
        icon={<FileCheck size={24} />}
        delay={0.1}
      />
      <AnimatedStat
        end={10}
        suffix="x"
        label="Efficiency Gains"
        sublabel="Via automated workflows"
        icon={<Zap size={24} />}
        delay={0.2}
      />
    </div>
  );
};
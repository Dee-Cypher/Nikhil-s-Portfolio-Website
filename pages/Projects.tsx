import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Legal Tech', 'Workflow', 'AI', 'Ventures'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="border-b-4 border-black pb-8 mb-16">
        <h1 className="text-6xl md:text-8xl font-black text-black uppercase tracking-tighter mb-4">
          Archive
        </h1>
        <p className="font-mono text-xl max-w-2xl">
          Directory of deployed automation tools and predictive systems.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 border-2 border-black font-bold uppercase text-sm shadow-brutal hover:translate-y-[2px] hover:shadow-brutal-hover transition-all ${
              filter === cat
                ? 'bg-black text-white'
                : 'bg-white text-black hover:bg-brand-teal hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
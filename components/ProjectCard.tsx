import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { Project } from '../types';
import { motion } from 'framer-motion';

export const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-full"
    >
      <div className="h-full flex flex-col glass-card bg-brand-surface border border-brand-text/5 rounded-2xl shadow-glass overflow-hidden group hover:border-brand-orange/30 transition-all duration-300">

        {/* Image Content */}
        <div className="aspect-video w-full overflow-hidden relative">
          <div className="absolute inset-0 bg-brand-bg/50 group-hover:bg-transparent transition-colors z-10" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700"
          />
        </div>

        {/* Text Content */}
        <div className="p-8 flex flex-col flex-grow relative">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold uppercase tracking-widest bg-brand-text/5 text-brand-orange rounded-full">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold uppercase leading-none mb-3 text-brand-text">
              {project.title}
            </h3>
          </div>

          <p className="text-sm text-brand-muted mb-8 flex-grow leading-relaxed">
            {project.description}
          </p>

          <div className="space-y-6 mt-auto">
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="px-2 py-1 text-[10px] uppercase font-bold text-gray-500 border border-brand-text/5 rounded bg-brand-bg">
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.link || '#'}
                className="flex-1 py-3 flex items-center justify-center gap-2 bg-brand-text text-brand-surface font-bold uppercase rounded-lg hover:bg-brand-orange hover:text-white transition-colors text-sm"
              >
                View Case Study <ArrowUpRight size={16} />
              </a>
              {/* Optional Github Link if exists, purely visual placeholder for now */}
              {/* <button className="p-3 bg-brand-text/5 text-brand-text rounded-lg hover:bg-brand-text/10"><Github size={20}/></button> */}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
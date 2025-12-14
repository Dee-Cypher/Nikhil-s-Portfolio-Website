import React from 'react';
import { ArrowUpRight, Minus, Square, X } from 'lucide-react';
import { Project } from '../types';
import { motion } from 'framer-motion';

export const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-full"
    >
      <div className="h-full flex flex-col bg-white text-black border-2 border-black shadow-brutal hover:shadow-brutal-lg transition-all duration-300 group">
        {/* Window Header */}
        <div className="h-10 bg-black border-b-2 border-black flex items-center justify-between px-3">
          <span className="font-mono text-white text-xs uppercase tracking-wider truncate mr-4">
            {project.title}.exe
          </span>
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-white border border-black flex items-center justify-center hover:bg-brand-teal cursor-pointer">
              <Minus size={10} className="text-black" />
            </div>
            <div className="w-4 h-4 bg-white border border-black flex items-center justify-center hover:bg-brand-amber cursor-pointer">
              <Square size={8} className="text-black" />
            </div>
            <div className="w-4 h-4 bg-white border border-black flex items-center justify-center hover:bg-red-500 cursor-pointer">
              <X size={10} className="text-black" />
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="aspect-video w-full overflow-hidden border-b-2 border-black relative">
          <div className="absolute inset-0 bg-brand-teal/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-multiply pointer-events-none" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Text Content */}
        <div className="p-6 flex flex-col flex-grow bg-white">
          <div className="mb-4">
             <span className="inline-block px-2 py-1 mb-3 text-xs font-bold uppercase tracking-wide bg-brand-teal text-white border-2 border-black shadow-brutal-sm">
              {project.category}
            </span>
            <h3 className="text-2xl font-black uppercase leading-none mb-2 text-black group-hover:text-brand-teal transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="font-mono text-sm text-gray-600 mb-6 flex-grow leading-relaxed border-l-2 border-gray-200 pl-3">
            {project.description}
          </p>

          <div className="space-y-4">
             <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="px-2 py-1 text-[10px] uppercase font-bold border border-black text-black bg-brand-gray">
                  {tool}
                </span>
              ))}
            </div>

            <a 
              href={project.link || '#'} 
              className="w-full py-3 flex items-center justify-center gap-2 bg-black text-white font-bold uppercase border-2 border-black hover:bg-white hover:text-black transition-colors"
            >
              View Case Study <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
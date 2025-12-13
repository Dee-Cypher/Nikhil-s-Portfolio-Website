import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Bot, Cpu, Zap, Star, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { SkillsMarquee } from '../components/SkillsMarquee';

export const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Legal Tech');
  const categories = ['Legal Tech', 'Workflow', 'AI', 'Ventures'];
  
  const activeProject = PROJECTS.find(p => p.category === activeTab) || PROJECTS[0];

  return (
    <div className="flex flex-col overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-20 border-b-2 border-black bg-white">
        
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ y: [0, -20, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-[10%] opacity-20"
          >
            <Cpu size={120} strokeWidth={1} />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 30, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-40 left-[5%] opacity-20 text-brand-teal"
          >
            <Bot size={140} strokeWidth={1} />
          </motion.div>
          
          {/* Pixel Art Trees Representation using Lucide for now */}
          <div className="absolute bottom-0 right-20 flex space-x-8 opacity-40">
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}><Zap size={40} /></motion.div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}><Star size={30} /></motion.div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black bg-brand-amber shadow-brutal mb-8 transform -rotate-2">
              <MousePointer2 size={16} />
              <span className="font-mono font-bold uppercase text-xs">Based in India • Shipping Globally</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-black leading-[0.8] mb-8 uppercase">
              I Design<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-600 outline-text">Systems</span><br/>
              Not Just<br/>
              Tasks.
            </h1>
            
            <p className="text-xl md:text-2xl font-mono text-black max-w-2xl mb-12 border-l-8 border-black pl-6 py-2 bg-brand-gray/50">
              I break away from manual chaos, reintroducing efficiency and genuine automation into everyday legal workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/projects"
                className="px-8 py-5 bg-black text-white font-bold uppercase text-lg border-2 border-black shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
              >
                Start A Project <ArrowRight size={24} />
              </Link>
              <Link 
                to="/about"
                className="px-8 py-5 bg-white text-black font-bold uppercase text-lg border-2 border-black shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all text-center"
              >
                Who is Nikhil?
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="border-b-2 border-black bg-brand-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 md:mb-0">Featured<br/>Work</h2>
            
            {/* Retro Tabs */}
            <div className="flex flex-wrap justify-end gap-0 border-2 border-black bg-white shadow-brutal">
              {categories.map((cat, idx) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-3 font-bold uppercase text-sm md:text-base border-r-2 border-black last:border-r-0 transition-all hover:bg-brand-teal hover:text-white ${
                    activeTab === cat ? 'bg-black text-white' : 'bg-white text-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Content Window */}
          <div className="relative min-h-[500px]">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeTab}
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.95 }}
                 transition={{ duration: 0.3 }}
                 className="grid md:grid-cols-2 gap-8 items-center"
               >
                 {/* Left: Window Image */}
                 <div className="border-2 border-black bg-white shadow-brutal-lg p-2">
                   <div className="h-8 bg-brand-teal border-b-2 border-black flex items-center justify-between px-2 mb-2">
                      <span className="font-mono text-xs font-bold text-white uppercase">{activeProject.title}.preview</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-white border border-black"></div>
                        <div className="w-3 h-3 bg-white border border-black"></div>
                      </div>
                   </div>
                   <div className="aspect-[4/3] overflow-hidden border-2 border-black bg-gray-100">
                     <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover" />
                   </div>
                 </div>

                 {/* Right: Description */}
                 <div className="md:pl-10">
                   <div className="inline-block bg-brand-amber border-2 border-black px-3 py-1 font-mono text-xs font-bold uppercase mb-4 shadow-brutal-sm">
                     {activeProject.category} Case Study
                   </div>
                   <h3 className="text-4xl md:text-5xl font-black uppercase leading-none mb-6">
                     {activeProject.title}
                   </h3>
                   <p className="font-mono text-lg mb-8 leading-relaxed">
                     {activeProject.description}
                   </p>
                   
                   <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="border-2 border-black p-4 bg-white">
                        <div className="text-xs font-bold uppercase text-gray-500 mb-1">Impact</div>
                        <div className="font-bold text-lg leading-tight">{activeProject.impact}</div>
                      </div>
                      <div className="border-2 border-black p-4 bg-white">
                        <div className="text-xs font-bold uppercase text-gray-500 mb-1">Timeline</div>
                        <div className="font-bold text-lg leading-tight">{activeProject.timeline}</div>
                      </div>
                   </div>

                   <Link 
                     to="/projects"
                     className="inline-flex items-center gap-3 font-bold text-xl hover:text-brand-teal uppercase decoration-4 underline underline-offset-4"
                   >
                     View All Projects <ArrowRight size={24} />
                   </Link>
                 </div>
               </motion.div>
             </AnimatePresence>

             {/* Background Decoration */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-grid-pattern opacity-20 -z-10" />
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section>
        <SkillsMarquee />
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-4xl mx-auto text-center border-2 border-black p-8 md:p-16 shadow-brutal-lg bg-brand-gray relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-teal via-brand-amber to-red-500 border-b-2 border-black" />
          
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-6">Have a workflow<br/>nightmare?</h2>
          <p className="font-mono text-lg mb-10 max-w-lg mx-auto">
            I specialize in untangling complex processes and turning them into one-click solutions.
          </p>
          <Link 
            to="/contact"
            className="inline-block px-10 py-4 bg-brand-teal text-white font-bold uppercase text-xl border-2 border-black shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all"
          >
            Fix My Workflow
          </Link>
        </div>
      </section>
    </div>
  );
};
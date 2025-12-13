import React from 'react';
import { motion } from 'framer-motion';
import { Download, Code, Award, Coffee, Terminal } from 'lucide-react';
import { SKILLS } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Image Card */}
        <div className="md:col-span-5 lg:col-span-4 sticky top-28">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="border-2 border-black bg-white p-3 shadow-brutal-lg"
          >
            <div className="aspect-[3/4] overflow-hidden border-2 border-black mb-4 bg-gray-200">
              <img 
                src="https://picsum.photos/id/454/600/800" 
                alt="Nikhil Professional Headshot" 
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="space-y-4">
              <div className="border-2 border-black p-4 bg-brand-gray">
                <h3 className="font-bold text-black uppercase mb-3 flex items-center border-b-2 border-black pb-2">
                  <Terminal className="mr-2" size={18} />
                  User_Stats
                </h3>
                <ul className="space-y-2 font-mono text-xs text-black leading-tight">
                  <li className="flex justify-between">
                    <span>Location:</span> <span className="font-bold">Noida, IN</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Focus:</span> <span className="font-bold">Automation</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Vibe:</span> <span className="font-bold">Early Bird</span>
                  </li>
                </ul>
              </div>
              
              <button className="w-full py-3 bg-brand-teal text-white font-bold uppercase border-2 border-black shadow-brutal hover:shadow-brutal-hover hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex justify-center items-center gap-2">
                <Download size={18} /> Download CV
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Content */}
        <div className="md:col-span-7 lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-block px-3 py-1 bg-black text-white font-mono font-bold uppercase mb-4">
              Profile.md
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase text-black mb-8 leading-[0.9]">
              Legal Tech<br/>
              <span className="text-brand-teal">Architect</span>
            </h1>
            
            <div className="font-mono text-lg space-y-6 mb-12 border-l-4 border-black pl-6">
              <p>
                I don't just write code; I design systems that eliminate redundancy. My fascination with "how things work" led me from general tech to the niche world of Legal Automation.
              </p>
              <p>
                At <span className="bg-brand-amber px-1 border border-black font-bold">EvenUp</span>, I'm currently drafting AI-powered demand letters. But my real impact is the internal tools I build — verdict extractors, assignment predictors — that save my team hundreds of hours.
              </p>
            </div>

            {/* Skills Grids */}
            <div className="grid sm:grid-cols-2 gap-6 mb-16">
              <div className="border-2 border-black p-6 bg-white shadow-brutal">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-brand-teal border-2 border-black text-white mr-4">
                    <Code size={24} />
                  </div>
                  <h3 className="font-black text-xl uppercase">Tech Stack</h3>
                </div>
                <ul className="space-y-2 font-mono text-sm">
                  {SKILLS.slice(0, 6).map(skill => (
                    <li key={skill} className="flex items-center">
                      <span className="w-2 h-2 bg-black mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-2 border-black p-6 bg-white shadow-brutal">
                 <div className="flex items-center mb-6">
                  <div className="p-2 bg-brand-amber border-2 border-black text-black mr-4">
                    <Award size={24} />
                  </div>
                  <h3 className="font-black text-xl uppercase">Domain</h3>
                </div>
                <ul className="space-y-2 font-mono text-sm">
                   <li><span className="font-bold">&gt;&gt;</span> PI Law Docs</li>
                   <li><span className="font-bold">&gt;&gt;</span> Prompt Eng.</li>
                   <li><span className="font-bold">&gt;&gt;</span> Med Records</li>
                   <li><span className="font-bold">&gt;&gt;</span> Workflow Ops</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black uppercase mb-6 border-b-2 border-black pb-2">Toolbelt</h2>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 border-2 border-black font-bold uppercase text-xs hover:bg-black hover:text-white cursor-crosshair transition-colors bg-white"
                >
                  {skill}
                </span>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};
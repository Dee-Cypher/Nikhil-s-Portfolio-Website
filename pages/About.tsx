import React from 'react';
import { motion } from 'framer-motion';
import { Download, Code, Award, Terminal } from 'lucide-react';
import { SKILLS } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-black dark:text-white">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Image Card */}
        <div className="md:col-span-5 lg:col-span-4 sticky top-28">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="border-2 border-black dark:border-white bg-white dark:bg-zinc-900 p-3 shadow-brutal-lg dark:shadow-[8px_8px_0px_0px_#ffffff]"
          >
            <div className="aspect-[3/4] overflow-hidden border-2 border-black dark:border-white mb-4 bg-gray-200 dark:bg-gray-800">
              <img 
                src="https://picsum.photos/id/454/600/800" 
                alt="Nikhil Professional Headshot" 
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="space-y-4">
              <div className="border-2 border-black dark:border-white p-4 bg-brand-gray dark:bg-black">
                <h3 className="font-bold text-black dark:text-white uppercase mb-3 flex items-center border-b-2 border-black dark:border-white pb-2">
                  <Terminal className="mr-2" size={18} />
                  User_Stats
                </h3>
                <ul className="space-y-2 font-mono text-xs text-black dark:text-white leading-tight">
                  <li className="flex justify-between">
                    <span>Location:</span> <span className="font-bold">Delhi NCR, India</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Role:</span> <span className="font-bold">Building @ EvenUp</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Mission:</span> <span className="font-bold">Ship Fast, Document Everything</span>
                  </li>
                </ul>
              </div>
              
              <button className="w-full py-3 bg-brand-teal text-white font-bold uppercase border-2 border-black dark:border-white shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex justify-center items-center gap-2">
                <Download size={18} /> Download Full Profile (PDF)
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
            <div className="inline-block px-3 py-1 bg-black text-white dark:bg-white dark:text-black font-mono font-bold uppercase mb-4">
              Profile.md
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase text-black dark:text-white mb-8 leading-[0.9]">
              Legal Tech<br/>
              <span className="text-brand-teal">Architect</span>
            </h1>
            
            <div className="font-mono text-lg space-y-8 mb-12 border-l-4 border-black dark:border-white pl-6 text-gray-800 dark:text-gray-300">
              <p>
                <strong>"I've saved legal teams over 1,000 hours with systems that cost $0 to run."</strong>
              </p>
              <p>
                By day, I draft AI-powered demand letters at EvenUp—one of legal tech's fastest-growing companies. But my real obsession? Building the tools that make legal work feel like magic. From verdict extraction engines to case assignment predictors, I automate the tedious so teams can focus on winning.
              </p>
              <p>
                My rule is simple: If I have to do it twice, I write a script. If I have to explain it twice, I document it. Everything I learn gets published in The Codex—free for you to steal, adapt, or hire me to customize.
              </p>
            </div>

            {/* Skills Grids */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <div className="border-2 border-black dark:border-white p-6 bg-white dark:bg-zinc-900 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-brand-teal border-2 border-black dark:border-white text-white mr-4">
                    <Code size={24} />
                  </div>
                  <h3 className="font-black text-xl uppercase">What I Build With</h3>
                </div>
                <ul className="space-y-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                  <li>Google Apps Script</li>
                  <li>n8n Workflow Automation</li>
                  <li>AI Prompt Engineering</li>
                  <li>Notion Database Design</li>
                  <li>Google Sheets (Advanced)</li>
                  <li>No-Code Tool Integration</li>
                </ul>
              </div>

              <div className="border-2 border-black dark:border-white p-6 bg-white dark:bg-zinc-900 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]">
                 <div className="flex items-center mb-6">
                  <div className="p-2 bg-brand-amber border-2 border-black dark:border-white text-black mr-4">
                    <Award size={24} />
                  </div>
                  <h3 className="font-black text-xl uppercase">Where I Play</h3>
                </div>
                <ul className="space-y-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                   <li>Personal Injury Law Docs</li>
                   <li>Demand Letter Writing</li>
                   <li>Medical Records Analysis</li>
                   <li>Settlement Calculations</li>
                   <li>Legal Research Systems</li>
                   <li>Quality Assurance</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black uppercase mb-6 border-b-2 border-black dark:border-white pb-2">Toolbelt</h2>
            <div className="flex flex-wrap gap-3 mb-16">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 border-2 border-black dark:border-white font-bold uppercase text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-crosshair transition-colors bg-white dark:bg-black"
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
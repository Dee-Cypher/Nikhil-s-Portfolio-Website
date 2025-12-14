import React from 'react';
import { motion } from 'framer-motion';
import { Scale, GitPullRequest, LayoutTemplate } from 'lucide-react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const iconMap = {
  legal: Scale,
  workflow: GitPullRequest,
  nocode: LayoutTemplate
};

export const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center mb-20 relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-black -z-10"></div>
        <h1 className="inline-block text-5xl md:text-7xl font-black bg-white px-8 border-2 border-black uppercase shadow-brutal text-black">
          What I Build For You
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {SERVICES.map((service, index) => {
          const Icon = iconMap[service.icon];
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white text-black border-2 border-black p-8 shadow-brutal hover:shadow-brutal-lg hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="w-16 h-16 bg-brand-teal border-2 border-black flex items-center justify-center mb-6 text-white shadow-brutal-sm">
                <Icon size={32} />
              </div>
              <h3 className="text-3xl font-black uppercase mb-4 leading-none text-black">
                {service.title}
              </h3>
              <div className="font-mono text-xs font-bold uppercase bg-brand-gray border border-black p-2 mb-6 self-start text-black">
                Target: {service.target}
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {service.offerings.map((offer, i) => (
                  <li key={i} className="flex items-start font-mono text-sm text-black">
                    <span className="mr-3 text-brand-teal font-bold">&gt;&gt;</span>
                    {offer}
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact"
                className="w-full py-3 border-2 border-black font-bold uppercase text-center hover:bg-black hover:text-white transition-colors text-black"
              >
                Get Started
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Process Section */}
      <section className="bg-brand-gray border-y-2 border-black p-8 md:p-20 relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-0 right-0 p-4 opacity-5 font-black text-9xl leading-none pointer-events-none text-black">HOW</div>

        <div className="max-w-4xl mx-auto text-black">
          <h2 className="text-4xl font-black uppercase mb-12 text-center">How I Work</h2>
          <div className="space-y-12">
            {[
              { step: '01', title: 'Discovery', desc: 'I map your current chaos. Every click, every workaround.' },
              { step: '02', title: 'Blueprint', desc: 'You get a visual system architecture before I write a line of code.' },
              { step: '03', title: 'Execution', desc: 'Weekly demos. No surprises. You see progress as it happens.' },
              { step: '04', title: 'Handoff', desc: 'Full docs, video walkthroughs, and 30 days of support.' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start group">
                <div className="mr-8 pt-1">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-bold text-xl border-2 border-black shadow-brutal-sm group-hover:bg-brand-teal transition-colors">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 border-b-2 border-black pb-8 group-last:border-0 group-last:pb-0">
                  <h4 className="text-3xl font-black uppercase mb-2">{item.title}</h4>
                  <p className="font-mono text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 border-2 border-black bg-brand-amber p-8 shadow-brutal text-center text-black">
             <h3 className="text-3xl font-black uppercase mb-2">Let's Find Your Hidden 10 Hours</h3>
             <Link to="/contact" className="inline-block mt-4 text-xl font-bold underline decoration-4 underline-offset-4 hover:text-white">
                Book a Free Workflow Audit
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
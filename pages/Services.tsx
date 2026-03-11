import React from 'react';
import { motion } from 'framer-motion';
import { Scale, GitPullRequest, LayoutTemplate, ArrowRight, CheckCircle2, Zap, Clock, Shield, Search } from 'lucide-react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const iconMap = {
  legal: Scale,
  workflow: GitPullRequest,
  nocode: LayoutTemplate
};

export const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans">

      {/* HERO SECTION */}
      <section className="relative py-20 md:py-32 overflow-hidden border-b border-brand-text/5">
        <div className="absolute inset-0 bg-brand-blue/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-brand-surface border border-brand-text/10 rounded-full font-bold uppercase text-xs mb-6 text-brand-orange tracking-wider shadow-glass">
              Services & Consulting
            </div>
            <h1 className="text-5xl md:text-7xl font-bold uppercase leading-[0.9] mb-8 tracking-tight">
              I Build Systems<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-green">That Save Lawyers Time</span>
            </h1>
            <p className="text-lg text-brand-muted max-w-3xl mx-auto font-light leading-relaxed mb-12">
              Stop drowning in admin work. I design and build the custom automation infrastructure that lets you focus on high-value legal strategy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-brand-surface/30 border-b border-brand-text/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-brand-surface border border-brand-text/5 p-8 rounded-2xl shadow-glass hover:bg-brand-text/[0.02] hover:border-brand-text/10 transition-all duration-300 flex flex-col group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 blur-[50px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                  <div className="w-16 h-16 bg-brand-text/5 rounded-2xl flex items-center justify-center mb-6 text-brand-blue group-hover:scale-110 transition-transform shadow-glow">
                    <Icon size={32} />
                  </div>

                  <h3 className="text-2xl font-bold uppercase mb-4 text-brand-text">
                    {service.title}
                  </h3>

                  <div className="inline-block self-start px-3 py-1 bg-brand-text/5 border border-brand-text/10 rounded-lg text-[10px] font-bold uppercase text-brand-muted mb-6 tracking-wide">
                    Target: {service.target}
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {service.offerings.map((offer, i) => (
                      <li key={i} className="flex items-start text-sm text-brand-muted group-hover:text-brand-text transition-colors">
                        <CheckCircle2 size={16} className="mr-3 text-brand-green mt-0.5 shrink-0" />
                        {offer}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="w-full py-3 bg-brand-text/5 border border-brand-text/10 rounded-xl font-bold uppercase text-center text-sm hover:bg-brand-blue hover:text-brand-surface hover:border-brand-blue transition-all flex items-center justify-center gap-2 group-hover:shadow-glow"
                  >
                    Start This Project <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 border-b border-brand-text/5 relative bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold uppercase text-brand-text mb-4">How I Work</h2>
            <p className="text-brand-muted">Transparent. Efficient. No hourly billing surprises.</p>
          </div>

          <div className="relative">
            {/* Connector Line */}
            <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-brand-text/10 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-12">
              {[
                { step: '01', title: 'Discovery & Audit', desc: 'We map your current chaos. Every click, every file, every workaround. I identify exactly where you\'re leaking time.', icon: Search },
                { step: '02', title: 'System Blueprint', desc: 'You get a visual architecture of the solution before I write a single line of code. You know exactly what you\'re buying.', icon: LayoutTemplate },
                { step: '03', title: 'Agile Build', desc: 'Weekly demos. You see progress as it happens. We test and iterate in real-time.', icon: Zap },
                { step: '04', title: 'Handoff & Training', desc: 'Full documentation, video walkthroughs, and 30 days of support to ensure your team actually uses it.', icon: Shield },
              ].map((item, idx) => (
                <div key={idx} className={`relative flex items-center md:justify-between ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                  {/* Icon Node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 bg-brand-bg border border-brand-text/20 p-2 rounded-full z-10 shadow-glow">
                    <div className="w-10 h-10 bg-brand-surface rounded-full flex items-center justify-center text-brand-blue font-bold text-sm">
                      {item.step}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-[45%] p-8 bg-brand-surface border border-brand-text/5 rounded-2xl shadow-glass hover:bg-brand-text/[0.02] transition-colors group ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`flex items-center gap-4 mb-4 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <item.icon className="text-brand-orange" size={24} />
                      <h4 className="text-2xl font-bold uppercase text-brand-text">{item.title}</h4>
                    </div>
                    <p className="text-sm text-brand-muted leading-relaxed">{item.desc}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center">
            <div className="inline-block p-8 bg-brand-blue/10 border border-brand-blue/20 rounded-2xl backdrop-blur-sm shadow-glow max-w-2xl">
              <h3 className="text-2xl font-bold uppercase mb-4 text-brand-text">Let's Find Your Hidden 10 Hours</h3>
              <p className="text-brand-muted mb-8 text-sm">Most firms are sitting on 10+ hours/week of automatable tasks they don't even realize.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-brand-surface font-bold uppercase rounded-xl hover:bg-brand-text transition-colors shadow-glow">
                Book a Free Workflow Audit <Clock size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
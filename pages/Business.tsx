import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, TrendingUp } from 'lucide-react';

export const Business: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-brand-text min-h-screen">
            {/* HERO */}
            <section className="mb-20 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-brand-orange/5 blur-[100px] pointer-events-none" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                >
                    <div className="inline-block px-3 py-1 bg-brand-surface border border-brand-text/10 rounded-full font-bold uppercase text-xs mb-6 text-brand-orange tracking-wider shadow-glass flex items-center gap-2 w-max">
                        <Briefcase size={14} /> Domain 03
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] mb-8 tracking-tight">
                        Scaling Operations.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-green">Real Business.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-brand-muted max-w-3xl font-light leading-relaxed">
                        Before law and automation, I learned how businesses run from the ground up. 
                        Returning to my hometown during the COVID-19 pandemic, I spent two years scaling our family enterprise.
                    </p>
                </motion.div>
            </section>

            {/* CONTENT */}
            <section className="mb-24 relative z-10">
                <div className="grid md:grid-cols-2 gap-12">
                   <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-brand-surface p-8 max-md:px-6 rounded-2xl border border-brand-text/10 shadow-glass hover:border-brand-orange/30 transition-colors group"
                   >
                        <h2 className="text-2xl font-bold uppercase mb-6 flex items-center gap-3 text-brand-text group-hover:text-brand-orange transition-colors">
                            <TrendingUp className="text-brand-orange" /> Growth & Strategy
                        </h2>
                        <ul className="space-y-6 text-brand-muted">
                            <li className="flex gap-4 items-start">
                                <span className="text-brand-orange font-bold mt-1">▹</span> 
                                <div>
                                    <strong className="text-brand-text block mb-1">Market Navigation</strong>
                                    Adapted business positioning to survive and scale through unprecedented pandemic challenges.
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="text-brand-orange font-bold mt-1">▹</span> 
                                <div>
                                    <strong className="text-brand-text block mb-1">Supply Chain Optimization</strong>
                                    Restructured logistics and supplier relations to guarantee consistent delivery despite lockdowns.
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="text-brand-orange font-bold mt-1">▹</span> 
                                <div>
                                    <strong className="text-brand-text block mb-1">Digital Transformation</strong>
                                    Moved legacy record-keeping into digital frameworks for better inventory and sales tracking.
                                </div>
                            </li>
                        </ul>
                   </motion.div>

                   <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-brand-surface p-8 max-md:px-6 rounded-2xl border border-brand-text/10 shadow-glass hover:border-brand-blue/30 transition-colors group"
                   >
                        <h2 className="text-2xl font-bold uppercase mb-6 flex items-center gap-3 text-brand-text group-hover:text-brand-blue transition-colors">
                            <Building2 className="text-brand-blue" /> Operations & Leadership
                        </h2>
                        <ul className="space-y-6 text-brand-muted">
                            <li className="flex gap-4 items-start">
                                <span className="text-brand-blue font-bold mt-1">▹</span> 
                                <div>
                                    <strong className="text-brand-text block mb-1">Cross-Functional Coordination</strong>
                                    Managed daily operations, aligning sales, distribution, and finance departments.
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="text-brand-blue font-bold mt-1">▹</span> 
                                <div>
                                    <strong className="text-brand-text block mb-1">Process Engineering</strong>
                                    Developed Standard Operating Procedures (SOPs) that formed the foundation of my systems thinking.
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="text-brand-blue font-bold mt-1">▹</span> 
                                <div>
                                    <strong className="text-brand-text block mb-1">Financial Oversight</strong>
                                    Handled vendor negotiations, cash flow planning, and high-stakes relationship management.
                                </div>
                            </li>
                        </ul>
                   </motion.div>
                </div>
            </section>
        </div>
    );
};

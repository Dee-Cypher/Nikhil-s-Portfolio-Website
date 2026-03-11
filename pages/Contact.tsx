import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Calendar, Send, ArrowRight, Clock, MapPin, Check, Terminal, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Workflow Automation',
    problem: '',
    urgency: 'Soon (2-4 Weeks)'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-brand-bg text-brand-text font-sans min-h-screen">

      {/* HERO SECTION */}
      <section className="pt-20 pb-16 border-b border-brand-text/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-brand-blue/5 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-brand-surface border border-brand-text/10 rounded-full font-bold uppercase text-xs mb-6 text-brand-blue tracking-wider shadow-glass">
              Let's Build Together
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] mb-8 tracking-tight">
              Got A Problem<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">Worth Solving?</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-muted max-w-3xl mx-auto font-light leading-relaxed">
              Whether it's a 2-hour manual process driving you insane, or a half-formed idea for a tool that doesn't exist yet—let's talk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OPTIONS SECTION */}
      <section className="py-20 border-b border-brand-text/5 bg-brand-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Option 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-surface border border-brand-text/5 p-8 rounded-2xl shadow-glass hover:bg-brand-text/[0.02] transition-colors group"
            >
              <div className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue font-bold uppercase text-xs rounded mb-4 border border-brand-blue/20">Option 1: You Know What You Need</div>
              <h2 className="text-3xl font-bold uppercase mb-4 text-brand-text">Book A Free Workflow Audit</h2>
              <p className="text-sm text-brand-muted mb-8 leading-relaxed">
                We'll hop on Zoom, map your process, and I'll tell you exactly what's worth automating (and what isn't).
              </p>
              <button className="w-full py-4 bg-brand-blue text-brand-surface font-bold uppercase rounded-xl hover:bg-brand-text transition-colors flex items-center justify-center gap-2 shadow-glow">
                <Calendar size={18} /> Pick A Time That Works
              </button>
              <div className="mt-4 text-center text-xs text-brand-muted/70 flex items-center justify-center gap-2">
                <Clock size={12} /> Average response: Proposal in 2 business days.
              </div>
            </motion.div>

            {/* Option 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-surface border border-brand-text/5 p-8 rounded-2xl shadow-glass hover:bg-brand-text/[0.02] transition-colors group"
            >
              <div className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange font-bold uppercase text-xs rounded mb-4 border border-brand-orange/20">Option 2: You Have Questions</div>
              <h2 className="text-3xl font-bold uppercase mb-4 text-brand-text">Send A Message</h2>
              <p className="text-sm text-brand-muted mb-8 leading-relaxed">
                Not sure if automation is the answer? Describe the pain point. I'll help you figure it out.
              </p>
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-4 bg-transparent border border-brand-text/20 text-brand-text font-bold uppercase rounded-xl hover:bg-brand-text/10 transition-colors flex items-center justify-center gap-2"
              >
                <Mail size={18} /> Use The Form Below
              </button>
              <div className="mt-4 text-center text-xs text-brand-muted/70 flex items-center justify-center gap-2">
                <Clock size={12} /> Response time: 24-48 hours.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAIN FORM SECTION */}
      <section id="contact-form" className="py-20 border-b border-brand-text/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-brand-green/5 blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="bg-black/40 border border-brand-text/10 rounded-2xl shadow-2xl backdrop-blur-md overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-brand-text/5 px-4 py-3 border-b border-brand-text/5 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-brand-muted" />
                <span className="font-mono text-xs font-bold uppercase text-brand-muted tracking-wide">msg_terminal.exe</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-text/10"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-brand-text/10"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-brand-green shadow-glow"></div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-brand-green/20 text-brand-green border border-brand-green/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <Check size={40} />
                  </div>
                  <h3 className="text-3xl font-bold uppercase mb-4 text-brand-text tracking-tight">Transmission Sent</h3>
                  <p className="text-brand-muted mb-8 max-w-md mx-auto text-sm leading-relaxed">
                    Message logged successfully. I'll review your transmission and report back within 24-48 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-brand-text font-bold uppercase text-sm border-b border-brand-text/30 pb-1 hover:text-brand-green hover:border-brand-green transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase mb-2 text-brand-muted">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-brand-text/5 border border-brand-text/10 rounded-lg focus:border-brand-blue/50 focus:bg-brand-text/10 focus:outline-none transition-all text-sm text-brand-text placeholder-brand-muted/30"
                        placeholder="NAME"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase mb-2 text-brand-muted">Your Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-brand-text/5 border border-brand-text/10 rounded-lg focus:border-brand-blue/50 focus:bg-brand-text/10 focus:outline-none transition-all text-sm text-brand-text placeholder-brand-muted/30"
                        placeholder="EMAIL"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase mb-2 text-brand-muted">What Kind of Project? *</label>
                    <div className="relative">
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-brand-text/5 border border-brand-text/10 rounded-lg focus:border-brand-blue/50 focus:bg-brand-text/10 focus:outline-none transition-all text-sm uppercase text-brand-text appearance-none cursor-pointer"
                      >
                        <option className="bg-black text-brand-text">Workflow Automation</option>
                        <option className="bg-black text-brand-text">Legal Tech Tool Development</option>
                        <option className="bg-black text-brand-text">Google Apps Script / n8n</option>
                        <option className="bg-black text-brand-text">Internal Tool for Law Firm</option>
                        <option className="bg-black text-brand-text">Just Exploring / Not Sure</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-muted">
                        <ArrowRight size={14} className="rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase mb-2 text-brand-muted">What's The Problem? *</label>
                    <textarea
                      name="problem"
                      required
                      rows={5}
                      value={formData.problem}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-brand-text/5 border border-brand-text/10 rounded-lg focus:border-brand-blue/50 focus:bg-brand-text/10 focus:outline-none transition-all text-sm text-brand-text placeholder-brand-muted/30 resize-none"
                      placeholder="Describe the manual process or workflow issue..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase mb-2 text-brand-muted">Estimated Urgency</label>
                    <div className="relative">
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-brand-text/5 border border-brand-text/10 rounded-lg focus:border-brand-blue/50 focus:bg-brand-text/10 focus:outline-none transition-all text-sm uppercase text-brand-text appearance-none cursor-pointer"
                      >
                        <option className="bg-black text-brand-text">Immediate (This Week)</option>
                        <option className="bg-black text-brand-text">Soon (2-4 Weeks)</option>
                        <option className="bg-black text-brand-text">Future (1-3 Months)</option>
                        <option className="bg-black text-brand-text">Just Exploring</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-muted">
                        <ArrowRight size={14} className="rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="text-xs text-brand-muted mb-4 flex items-center gap-2">
                      <CheckCircle2 size={12} className="text-brand-green" /> Your info is private. No spam. Direct to my inbox.
                    </p>
                    <button
                      type="submit"
                      className="w-full py-4 bg-brand-text text-brand-surface font-bold uppercase rounded-xl hover:bg-brand-blue hover:text-brand-text transition-colors flex items-center justify-center gap-2 shadow-glow"
                    >
                      Send Transmission <Send size={18} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* DIRECT METHODS */}
      <section className="py-20 border-b border-brand-text/5 bg-brand-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold uppercase mb-12 text-center text-brand-text">Prefer Direct Contact?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-brand-surface p-8 border border-brand-text/5 rounded-2xl text-center shadow-glass hover:bg-brand-text/[0.02] transition-colors group">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Mail size={32} className="text-brand-blue" />
              </div>
              <h3 className="font-bold uppercase mb-2 text-brand-text">Email</h3>
              <a href="mailto:nikhilgoyal.advo@gmail.com" className="text-sm text-brand-muted hover:text-brand-text transition-colors break-all">nikhilgoyal.advo@gmail.com</a>
              <p className="text-xs text-brand-muted/50 mt-2 uppercase tracking-wide">Best for detailed briefs</p>
            </div>
            <div className="bg-brand-surface p-8 border border-brand-text/5 rounded-2xl text-center shadow-glass hover:bg-brand-text/[0.02] transition-colors group">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Linkedin size={32} className="text-brand-blue" />
              </div>
              <h3 className="font-bold uppercase mb-2 text-brand-text">LinkedIn</h3>
              <a href="#" className="text-sm text-brand-muted hover:text-brand-text transition-colors">/in/nikhilgoyal</a>
              <p className="text-xs text-brand-muted/50 mt-2 uppercase tracking-wide">Best for networking</p>
            </div>
            <div className="bg-brand-surface p-8 border border-brand-text/5 rounded-2xl text-center shadow-glass hover:bg-brand-text/[0.02] transition-colors group">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Clock size={32} className="text-brand-blue" />
              </div>
              <h3 className="font-bold uppercase mb-2 text-brand-text">Availability</h3>
              <p className="text-sm text-brand-muted">Mon-Fri, 8am-12pm EST</p>
              <p className="text-xs text-brand-muted/50 mt-2 uppercase tracking-wide">US Business Hours Overlap</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-b border-brand-text/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold uppercase mb-12 text-center text-brand-text">Before You Hit Send</h2>
          <div className="space-y-4">
            {[
              { q: "What should I include in my message?", a: "The more detail, the better. Describe the manual process slowing you down, the tools you use, and how much time it costs you." },
              { q: "Do you charge for the initial consultation?", a: "Nope. The first 30-minute workflow audit is free. No strings attached." },
              { q: "Can I hire you for a one-time project?", a: "Absolutely. Most of my work is project-based. You're not committed to a long-term contract." },
              { q: "Do you work internationally?", a: "Yes! I work with clients globally. As long as we can communicate via Zoom/Email, location doesn't matter." }
            ].map((faq, i) => (
              <div key={i} className="border border-brand-text/5 p-6 rounded-xl bg-brand-surface hover:bg-brand-text/[0.02] transition-colors">
                <h3 className="font-bold uppercase text-brand-green mb-2 text-sm tracking-wide">Q: {faq.q}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST FOOTER */}
      <section className="py-12 bg-black text-brand-text text-center border-t border-brand-text/5">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-bold uppercase text-sm mb-6 text-brand-muted tracking-widest">Why People Trust Me</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm">
            <span className="flex items-center gap-2 text-brand-muted"><CheckCircle2 className="text-brand-blue" size={16} /> Enrolled Advocate (D/2371/2023)</span>
            <span className="flex items-center gap-2 text-brand-muted"><CheckCircle2 className="text-brand-blue" size={16} /> Legal Operations Analyst @ EvenUp</span>
            <span className="flex items-center gap-2 text-brand-muted"><CheckCircle2 className="text-brand-blue" size={16} /> No Vendor Lock-In</span>
          </div>
        </div>
      </section>

    </div>
  );
};
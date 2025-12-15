import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Calendar, Send, ArrowRight, Clock, MapPin, Check, Terminal, CheckCircle2 } from 'lucide-react';
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
    <div className="bg-white dark:bg-black text-black dark:text-white">
      
      {/* HERO SECTION */}
      <section className="pt-20 pb-16 border-b-2 border-black dark:border-white bg-grid dark:bg-grid-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] mb-8">
            Got A Problem<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-amber">Worth Solving?</span>
          </h1>
          <p className="font-mono text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Whether it's a 2-hour manual process driving you insane, or a half-formed idea for a tool that doesn't exist yet—let's talk.
          </p>
        </div>
      </section>

      {/* OPTIONS SECTION */}
      <section className="py-20 border-b-2 border-black dark:border-white bg-brand-gray dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Option 1 */}
            <div className="bg-white dark:bg-black border-2 border-black dark:border-white p-8 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]">
              <div className="inline-block px-3 py-1 bg-brand-teal text-white font-mono text-xs font-bold uppercase mb-4">Option 1: You Know What You Need</div>
              <h2 className="text-3xl font-black uppercase mb-4">Book A Free Workflow Audit</h2>
              <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-6">
                We'll hop on Zoom, map your process, and I'll tell you exactly what's worth automating (and what isn't).
              </p>
              <button className="w-full py-4 bg-black text-white dark:bg-white dark:text-black font-bold uppercase border-2 border-transparent hover:bg-brand-teal hover:text-white transition-colors flex items-center justify-center gap-2">
                <Calendar size={18} /> Pick A Time That Works
              </button>
              <div className="mt-4 text-center font-mono text-xs text-gray-500">Average response: Proposal in 2 business days.</div>
            </div>

            {/* Option 2 */}
            <div className="bg-white dark:bg-black border-2 border-black dark:border-white p-8 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]">
              <div className="inline-block px-3 py-1 bg-brand-amber text-black font-mono text-xs font-bold uppercase mb-4">Option 2: You Have Questions</div>
              <h2 className="text-3xl font-black uppercase mb-4">Send A Message</h2>
              <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-6">
                Not sure if automation is the answer? Describe the pain point. I'll help you figure it out.
              </p>
              <button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-4 bg-white text-black dark:bg-black dark:text-white font-bold uppercase border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex items-center justify-center gap-2"
              >
                <Mail size={18} /> Use The Form Below
              </button>
              <div className="mt-4 text-center font-mono text-xs text-gray-500">Response time: 24-48 hours.</div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN FORM SECTION */}
      <section id="contact-form" className="py-20 border-b-2 border-black dark:border-white bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-brand-gray dark:bg-zinc-900 border-2 border-black dark:border-white shadow-brutal-lg dark:shadow-[8px_8px_0px_0px_#ffffff] overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-black text-white px-4 py-2 border-b-2 border-black dark:border-white flex justify-between items-center">
               <span className="font-mono text-xs font-bold uppercase">msg_terminal.exe</span>
               <div className="flex gap-2">
                  <div className="w-3 h-3 bg-white border border-black"></div>
                  <div className="w-3 h-3 bg-brand-teal border border-black"></div>
               </div>
            </div>

            <div className="p-8 md:p-12">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-brand-teal text-white border-2 border-black dark:border-white flex items-center justify-center mx-auto mb-6 shadow-brutal">
                    <Check size={40} />
                  </div>
                  <h3 className="text-3xl font-black uppercase mb-4 text-black dark:text-white">Transmission Sent</h3>
                  <p className="font-mono text-sm mb-8 text-black dark:text-white max-w-md mx-auto">
                    Message logged successfully. I'll review your transmission and report back within 24-48 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-black dark:text-white font-bold uppercase underline decoration-2 underline-offset-4 hover:text-brand-teal"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase mb-2 text-black dark:text-white">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border-2 border-black focus:shadow-brutal focus:outline-none transition-all font-mono text-sm text-black"
                        placeholder="NAME"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase mb-2 text-black dark:text-white">Your Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border-2 border-black focus:shadow-brutal focus:outline-none transition-all font-mono text-sm text-black"
                        placeholder="EMAIL"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase mb-2 text-black dark:text-white">What Kind of Project? *</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-black focus:shadow-brutal focus:outline-none transition-all font-mono text-sm uppercase text-black"
                    >
                      <option>Workflow Automation</option>
                      <option>Legal Tech Tool Development</option>
                      <option>Google Apps Script / n8n</option>
                      <option>Internal Tool for Law Firm</option>
                      <option>Just Exploring / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase mb-2 text-black dark:text-white">What's The Problem? *</label>
                    <textarea
                      name="problem"
                      required
                      rows={5}
                      value={formData.problem}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-black focus:shadow-brutal focus:outline-none transition-all font-mono text-sm text-black"
                      placeholder="Describe the manual process or workflow issue..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase mb-2 text-black dark:text-white">Estimated Urgency</label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-black focus:shadow-brutal focus:outline-none transition-all font-mono text-sm uppercase text-black"
                    >
                      <option>Immediate (This Week)</option>
                      <option>Soon (2-4 Weeks)</option>
                      <option>Future (1-3 Months)</option>
                      <option>Just Exploring</option>
                    </select>
                  </div>

                  <div className="pt-4">
                     <p className="font-mono text-xs text-gray-500 mb-4">
                        * Your info is private. No spam. Direct to my inbox.
                     </p>
                     <button
                        type="submit"
                        className="w-full py-4 bg-brand-teal text-white font-bold uppercase border-2 border-black dark:border-white shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-center gap-2"
                     >
                        Send Transmission <Terminal size={18} />
                     </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* DIRECT METHODS */}
      <section className="py-20 border-b-2 border-black dark:border-white bg-brand-gray dark:bg-zinc-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black uppercase mb-12 text-center">Prefer Direct Contact?</h2>
            <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-white dark:bg-black p-6 border-2 border-black dark:border-white text-center shadow-brutal">
                  <Mail size={32} className="mx-auto mb-4 text-brand-teal" />
                  <h3 className="font-black uppercase mb-2">Email</h3>
                  <a href="mailto:nikhilgoyal.advo@gmail.com" className="font-mono text-sm hover:text-brand-teal hover:underline break-all">nikhilgoyal.advo@gmail.com</a>
                  <p className="font-mono text-xs text-gray-500 mt-2">Best for detailed briefs</p>
               </div>
               <div className="bg-white dark:bg-black p-6 border-2 border-black dark:border-white text-center shadow-brutal">
                  <Linkedin size={32} className="mx-auto mb-4 text-brand-teal" />
                  <h3 className="font-black uppercase mb-2">LinkedIn</h3>
                  <a href="#" className="font-mono text-sm hover:text-brand-teal hover:underline">/in/nikhilgoyal</a>
                  <p className="font-mono text-xs text-gray-500 mt-2">Best for networking</p>
               </div>
               <div className="bg-white dark:bg-black p-6 border-2 border-black dark:border-white text-center shadow-brutal">
                  <Clock size={32} className="mx-auto mb-4 text-brand-teal" />
                  <h3 className="font-black uppercase mb-2">Availability</h3>
                  <p className="font-mono text-sm">Mon-Fri, 8am-12pm EST</p>
                  <p className="font-mono text-xs text-gray-500 mt-2">US Business Hours Overlap</p>
               </div>
            </div>
         </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-b-2 border-black dark:border-white bg-white dark:bg-black">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black uppercase mb-12 text-center">Before You Hit Send</h2>
            <div className="space-y-6">
               {[
                  { q: "What should I include in my message?", a: "The more detail, the better. Describe the manual process slowing you down, the tools you use, and how much time it costs you." },
                  { q: "Do you charge for the initial consultation?", a: "Nope. The first 30-minute workflow audit is free. No strings attached." },
                  { q: "Can I hire you for a one-time project?", a: "Absolutely. Most of my work is project-based. You're not committed to a long-term contract." },
                  { q: "Do you work internationally?", a: "Yes! I work with clients globally. As long as we can communicate via Zoom/Email, location doesn't matter." }
               ].map((faq, i) => (
                  <div key={i} className="border-2 border-black dark:border-white p-6 bg-brand-gray dark:bg-zinc-900 shadow-brutal-sm">
                     <h3 className="font-bold uppercase text-brand-teal mb-2">Q: {faq.q}</h3>
                     <p className="font-mono text-sm text-gray-700 dark:text-gray-300">A: {faq.a}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* TRUST FOOTER */}
      <section className="py-12 bg-black text-white text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-black uppercase text-xl mb-6">Why People Trust Me</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-mono text-xs md:text-sm">
               <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-teal" size={16}/> Enrolled Advocate (D/2371/2023)</span>
               <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-teal" size={16}/> Legal Operations Analyst @ EvenUp</span>
               <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-teal" size={16}/> No Vendor Lock-In</span>
            </div>
         </div>
      </section>

    </div>
  );
};
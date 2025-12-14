import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Calendar, Send, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Project Discussion',
    budget: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="border-l-8 border-black dark:border-white pl-6 mb-12">
            <h1 className="text-6xl font-black text-black dark:text-white uppercase leading-none mb-6">
              Let's Build<br/>Something
            </h1>
            <p className="font-mono text-lg text-black dark:text-gray-300">
              Got a workflow problem? A tool idea? Or just want to talk legal tech? I respond within 24 hours.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {[
              { icon: Mail, label: 'Email', value: 'nikhil@example.com', href: 'mailto:nikhil@example.com' },
              { icon: Linkedin, label: 'LinkedIn', value: 'See My Full Story', href: '#' },
              { icon: Calendar, label: 'Schedule', value: 'Book 15-Min Chat', href: '#' }
            ].map((item, i) => (
              <a 
                key={i} 
                href={item.href}
                className="flex items-center p-4 border-2 border-black dark:border-white bg-white dark:bg-black shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-brutal-lg hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
              >
                <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center border-2 border-black dark:border-white mr-4 group-hover:bg-brand-teal group-hover:border-black transition-colors">
                  <item.icon size={24} />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase font-bold text-gray-500 dark:text-gray-400">{item.label}</div>
                  <div className="text-xl font-bold uppercase text-black dark:text-white">{item.value}</div>
                </div>
                <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-black dark:text-white" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="bg-brand-gray dark:bg-zinc-900 p-8 border-2 border-black dark:border-white shadow-brutal-lg dark:shadow-[8px_8px_0px_0px_#ffffff]"
        >
          <div className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 font-mono font-bold uppercase text-sm mb-6 inline-block transform -rotate-2">
            msg_terminal.exe
          </div>

          {submitted ? (
            <div className="text-center py-20 bg-white border-2 border-black">
              <div className="w-20 h-20 bg-brand-teal text-white border-2 border-black flex items-center justify-center mx-auto mb-6 shadow-brutal">
                <Send size={40} />
              </div>
              <h3 className="text-3xl font-black uppercase mb-2 text-black">Message Logged</h3>
              <p className="font-mono text-sm mb-6 text-black">Check your inbox within 24 hours. If it's urgent, DM me on LinkedIn.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-black font-bold uppercase underline decoration-2 underline-offset-4 hover:text-brand-teal"
              >
                Reset Form
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase mb-2 text-black dark:text-white">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-black focus:shadow-brutal focus:outline-none transition-all font-mono text-sm text-black"
                    placeholder="NAME"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase mb-2 text-black dark:text-white">Email</label>
                  <input
                    type="email"
                    id="email"
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
                <label htmlFor="type" className="block text-xs font-bold uppercase mb-2 text-black dark:text-white">Inquiry Type</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-black focus:shadow-brutal focus:outline-none transition-all font-mono text-sm uppercase text-black"
                >
                  <option>Project Discussion</option>
                  <option>Collaboration</option>
                  <option>General Question</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-xs font-bold uppercase mb-2 text-black dark:text-white">Budget (Optional)</label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-black focus:shadow-brutal focus:outline-none transition-all font-mono text-sm text-black"
                  placeholder="ESTIMATED BUDGET"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase mb-2 text-black dark:text-white">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-black focus:shadow-brutal focus:outline-none transition-all font-mono text-sm text-black"
                  placeholder="DETAILS..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-black text-white dark:bg-white dark:text-black font-bold uppercase border-2 border-transparent hover:bg-brand-teal hover:text-white hover:border-black hover:shadow-brutal transition-all flex items-center justify-center gap-2"
              >
                Send Transmission <Send size={18} />
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* FAQ Section */}
      <section className="border-t-2 border-black dark:border-white pt-16">
        <h2 className="text-4xl font-black uppercase mb-12 text-black dark:text-white">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-white dark:bg-zinc-900 border-2 border-black dark:border-white p-6 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]">
             <h3 className="font-bold text-lg uppercase mb-2 text-brand-teal">Q: What's your typical response time?</h3>
             <p className="font-mono text-sm text-gray-700 dark:text-gray-300">A: I respond to all inquiries within 24-48 hours.</p>
           </div>
           <div className="bg-white dark:bg-zinc-900 border-2 border-black dark:border-white p-6 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]">
             <h3 className="font-bold text-lg uppercase mb-2 text-brand-teal">Q: Do you work with clients outside India?</h3>
             <p className="font-mono text-sm text-gray-700 dark:text-gray-300">A: Absolutely! I work with clients globally, particularly in the US legal tech space.</p>
           </div>
           <div className="bg-white dark:bg-zinc-900 border-2 border-black dark:border-white p-6 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]">
             <h3 className="font-bold text-lg uppercase mb-2 text-brand-teal">Q: What's your minimum project size?</h3>
             <p className="font-mono text-sm text-gray-700 dark:text-gray-300">A: I'm happy to discuss projects of all sizes. Let's chat about your specific needs.</p>
           </div>
        </div>
      </section>
    </div>
  );
};
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
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="border-l-8 border-black pl-6 mb-12">
            <h1 className="text-6xl font-black text-black uppercase leading-none mb-6">
              Get In<br/>Touch
            </h1>
            <p className="font-mono text-lg text-black">
              Available for freelance automation projects and consulting.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {[
              { icon: Mail, label: 'Email', value: 'nikhil@example.com', href: 'mailto:nikhil@example.com' },
              { icon: Linkedin, label: 'LinkedIn', value: 'Connect Profile', href: '#' },
              { icon: Calendar, label: 'Schedule', value: 'Book Call', href: '#' }
            ].map((item, i) => (
              <a 
                key={i} 
                href={item.href}
                className="flex items-center p-4 border-2 border-black bg-white shadow-brutal hover:shadow-brutal-lg hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
              >
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center border-2 border-black mr-4 group-hover:bg-brand-teal group-hover:border-black transition-colors">
                  <item.icon size={24} />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase font-bold text-gray-500">{item.label}</div>
                  <div className="text-xl font-bold uppercase">{item.value}</div>
                </div>
                <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="bg-brand-gray p-8 border-2 border-black shadow-brutal-lg"
        >
          <div className="bg-black text-white px-4 py-2 font-mono font-bold uppercase text-sm mb-6 inline-block transform -rotate-2">
            msg_terminal.exe
          </div>

          {submitted ? (
            <div className="text-center py-20 bg-white border-2 border-black">
              <div className="w-20 h-20 bg-brand-teal text-white border-2 border-black flex items-center justify-center mx-auto mb-6 shadow-brutal">
                <Send size={40} />
              </div>
              <h3 className="text-3xl font-black uppercase mb-2">Received</h3>
              <p className="font-mono text-sm mb-6">I'll get back to you within 24 hours.</p>
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
                  <label htmlFor="name" className="block text-xs font-bold uppercase mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-black focus:shadow-brutal focus:outline-none transition-all font-mono text-sm"
                    placeholder="NAME"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-black focus:shadow-brutal focus:outline-none transition-all font-mono text-sm"
                    placeholder="EMAIL"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="type" className="block text-xs font-bold uppercase mb-2">Inquiry Type</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-black focus:shadow-brutal focus:outline-none transition-all font-mono text-sm uppercase"
                >
                  <option>Project Discussion</option>
                  <option>Collaboration</option>
                  <option>General Question</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-black focus:shadow-brutal focus:outline-none transition-all font-mono text-sm"
                  placeholder="DETAILS..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-black text-white font-bold uppercase border-2 border-transparent hover:bg-brand-teal hover:text-white hover:border-black hover:shadow-brutal transition-all flex items-center justify-center gap-2"
              >
                Send Transmission <Send size={18} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};
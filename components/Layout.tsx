import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { AnimatePresence, motion } from 'framer-motion';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black selection:bg-brand-teal selection:text-white">
      {/* Top Ticker */}
      <div className="bg-black text-white py-2 overflow-hidden border-b-2 border-black">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(10).fill("OPEN TO WORK • AVAILABLE FOR AUTOMATION PROJECTS • ").map((text, i) => (
            <span key={i} className="mx-4 font-mono text-sm font-bold tracking-widest uppercase">
              {text}
            </span>
          ))}
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" className="font-black text-3xl tracking-tighter uppercase hover:text-brand-teal transition-colors border-2 border-transparent hover:border-black hover:bg-brand-gray p-1">
                NIKHIL<span className="text-brand-teal">_</span>
              </NavLink>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-bold uppercase tracking-wider border-2 border-transparent hover:border-black hover:shadow-brutal transition-all ${
                      isActive ? 'bg-black text-white' : 'text-black hover:bg-brand-teal hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 border-2 border-black shadow-brutal active:shadow-brutal-hover active:translate-x-[2px] active:translate-y-[2px] transition-all bg-brand-teal text-white"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t-2 border-black bg-white"
            >
              <div className="flex flex-col p-4 space-y-2 bg-brand-gray">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-4 py-3 text-lg font-bold uppercase border-2 border-black shadow-brutal-sm ${
                        isActive 
                        ? 'bg-black text-white' 
                        : 'bg-white text-black hover:bg-brand-teal hover:text-white'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow bg-grid">
        {children}
      </main>

      <footer className="border-t-2 border-black bg-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-5xl font-black uppercase mb-4 tracking-tighter">Let's Build<br/>Together</h3>
              <p className="font-mono text-sm max-w-md border-l-4 border-brand-teal pl-4">
                Automating the boring stuff so you can focus on the big stuff.
              </p>
            </div>
            
            <div className="flex flex-col md:items-end space-y-4">
              <a href="mailto:hello@example.com" className="group flex items-center gap-2 text-xl font-bold hover:bg-brand-amber hover:px-2 transition-all cursor-pointer">
                hello@nikhil.dev <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Mail, href: "mailto:hello@example.com" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href}
                    className="p-3 border-2 border-black shadow-brutal hover:shadow-brutal-hover hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-brand-teal hover:text-white transition-all bg-white"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t-2 border-black flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs uppercase tracking-widest">
            <div>© {new Date().getFullYear()} Nikhil Portfolio.exe</div>
            <div>New York, US • {new Date().toLocaleTimeString()}</div>
          </div>
        </div>
      </footer>
    </div>
  );
};
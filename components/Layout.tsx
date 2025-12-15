import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, ArrowUpRight, Sun, Moon, BookOpen, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { AnimatePresence, motion } from 'framer-motion';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-black dark:bg-black dark:text-white transition-colors duration-300 selection:bg-brand-teal selection:text-white">
      
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b-2 border-black dark:border-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between relative">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-4 z-10">
              <NavLink to="/" className="font-black text-3xl tracking-tighter uppercase hover:text-brand-teal transition-colors border-2 border-transparent hover:border-black dark:hover:border-white p-1">
                NIKHIL GOYAL<span className="text-brand-teal">_</span>
              </NavLink>
            </div>
            
            {/* Desktop Nav - Centered */}
            <div className="hidden md:flex items-center space-x-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              {NAV_ITEMS.map((item) => (
                item.children ? (
                  <div key={item.label} className="relative group">
                    <button className="px-4 py-2 text-sm font-bold uppercase tracking-wider border-2 border-transparent hover:border-black dark:hover:border-white text-black dark:text-white hover:bg-brand-teal hover:text-white flex items-center gap-1 transition-all">
                      {item.label} <ChevronDown size={14} />
                    </button>
                    <div className="absolute top-full left-0 w-48 pt-2 hidden group-hover:block">
                      <div className="bg-white dark:bg-black border-2 border-black dark:border-white shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] flex flex-col">
                        {item.children.map(child => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            className="px-4 py-3 text-sm font-bold uppercase text-black dark:text-white hover:bg-brand-teal hover:text-white transition-colors border-b-2 border-transparent hover:border-transparent last:border-b-0"
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `px-4 py-2 text-sm font-bold uppercase tracking-wider border-2 border-transparent hover:border-black dark:hover:border-white hover:shadow-brutal dark:hover:shadow-[4px_4px_0px_0px_#ffffff] transition-all ${
                        isActive 
                        ? 'bg-black text-white dark:bg-white dark:text-black' 
                        : 'text-black dark:text-white hover:bg-brand-teal hover:text-white'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              ))}
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center gap-4 z-10">
              {/* Desktop Theme Toggle */}
              <button 
                onClick={() => setIsDark(!isDark)}
                className="hidden md:block p-2 border-2 border-black dark:border-white rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile Menu Button & Theme Toggle */}
              <div className="flex md:hidden items-center gap-4">
                <button 
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 border-2 border-black dark:border-white dark:text-white"
                >
                   {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 border-2 border-black dark:border-white shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] active:translate-x-[2px] active:translate-y-[2px] transition-all bg-brand-teal text-white"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
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
              className="md:hidden overflow-hidden border-t-2 border-black dark:border-white bg-white dark:bg-black"
            >
              <div className="flex flex-col p-4 space-y-4 bg-brand-gray dark:bg-zinc-900">
                {NAV_ITEMS.map((item) => (
                  item.children ? (
                    <div key={item.label} className="space-y-2">
                      <div className="block px-4 py-2 text-lg font-bold uppercase border-2 border-black dark:border-white shadow-brutal-sm dark:shadow-[2px_2px_0px_0px_#ffffff] bg-black text-white dark:bg-white dark:text-black">
                        {item.label}
                      </div>
                      <div className="pl-4 space-y-2 border-l-2 border-black dark:border-white ml-2">
                        {item.children.map(child => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                              `block px-4 py-2 text-base font-bold uppercase border-2 border-black dark:border-white ${
                                isActive 
                                ? 'bg-brand-teal text-white' 
                                : 'bg-white text-black dark:bg-black dark:text-white hover:bg-brand-teal hover:text-white'
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-3 text-lg font-bold uppercase border-2 border-black dark:border-white shadow-brutal-sm dark:shadow-[2px_2px_0px_0px_#ffffff] ${
                          isActive 
                          ? 'bg-black text-white dark:bg-white dark:text-black' 
                          : 'bg-white text-black dark:bg-black dark:text-white hover:bg-brand-teal hover:text-white'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow bg-grid dark:bg-grid-dark relative">
        {/* Dark mode overlay for grid adjustment if needed */}
        {children}
      </main>

      <footer className="border-t-2 border-black dark:border-white bg-white dark:bg-black pt-16 pb-8 text-black dark:text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-5xl font-black uppercase mb-4 tracking-tighter">Knowledge<br/>Is Power</h3>
              <p className="font-mono text-sm max-w-md border-l-4 border-brand-teal pl-4 dark:text-gray-300">
                I document everything. From legal hacks to automation scripts. 
                Steal my workflows, or hire me to build them.
              </p>
              <div className="mt-8">
                <NavLink to="/knowledge" className="inline-flex items-center gap-2 font-bold underline decoration-brand-teal underline-offset-4 hover:text-brand-teal">
                  <BookOpen size={18} /> Access The Knowledge Repository
                </NavLink>
              </div>
            </div>
            
            <div className="flex flex-col md:items-end space-y-4">
              <a href="mailto:hello@example.com" className="group flex items-center gap-2 text-xl font-bold hover:bg-brand-amber hover:text-black hover:px-2 transition-all cursor-pointer">
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
                    className="p-3 border-2 border-black dark:border-white shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-brand-teal hover:text-white transition-all bg-white dark:bg-black text-black dark:text-white"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t-2 border-black dark:border-white flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
            <div>© {new Date().getFullYear()} Nikhil.System_v2.0</div>
            <div>STATUS: ONLINE • READY FOR QUERY</div>
          </div>
        </div>
      </footer>
    </div>
  );
};
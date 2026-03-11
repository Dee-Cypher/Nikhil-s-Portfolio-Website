import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, ArrowUpRight, BookOpen, ChevronDown, Sun, Moon } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { AnimatePresence, motion } from 'framer-motion';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') || localStorage.getItem('theme') === 'dark';
    }
    return true;
  });

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text font-sans selection:bg-brand-orange selection:text-brand-text overflow-x-hidden">

      {/* GLOW EFFECTS BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-orange/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-blue/10 rounded-full blur-[120px]" />
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-text/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between relative">

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-4 z-10">
              <NavLink to="/" className="font-bold text-2xl tracking-tight flex items-center group">
                {"Nikhil Goyal".split('').map((char, index) => (
                  <span 
                    key={index}
                    className={`transition-all duration-300 inline-block hover:scale-110 hover:text-brand-orange ${char === ' ' ? 'w-1.5' : ''}`}
                  >
                    {char}
                  </span>
                ))}
              </NavLink>
            </div>

            {/* Desktop Nav - Centered */}
            <div className="hidden md:flex items-center space-x-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              {NAV_ITEMS.map((item) => (
                item.children ? (
                  <div key={item.label} className="relative group">
                    <button className="px-4 py-2 text-sm font-medium text-brand-muted hover:text-brand-text flex items-center gap-1 transition-all">
                      {item.label} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    {/* Dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block w-48">
                      <div className="bg-brand-surface/90 backdrop-blur-xl border border-brand-text/10 rounded-xl overflow-hidden shadow-glass flex flex-col p-1">
                        {item.children.map(child => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            className="px-4 py-2 text-sm font-medium text-brand-muted hover:text-brand-text hover:bg-brand-text/5 rounded-lg transition-colors text-center"
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
                      `px-4 py-2 text-sm font-medium transition-all rounded-full ${isActive
                        ? 'text-brand-text bg-brand-text/10 shadow-glass'
                        : 'text-brand-muted hover:text-brand-text hover:bg-brand-text/5'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              ))}
            </div>

            {/* Right Side Control - Mobile Menu */}
            <div className="flex items-center gap-2 z-10 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 text-brand-muted hover:text-brand-orange transition-colors rounded-full"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-brand-text hover:text-brand-orange transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Socials (Hidden on mobile) */}
            <div className="hidden md:flex items-center gap-3 z-10">
              <button
                onClick={toggleTheme}
                className="p-2 text-brand-muted hover:text-brand-orange transition-colors mr-2 rounded-full hover:bg-brand-text/5"
                title="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-brand-muted hover:text-brand-text transition-colors"><Linkedin size={20} /></a>
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
              className="md:hidden overflow-hidden bg-brand-surface border-b border-brand-text/10"
            >
              <div className="flex flex-col p-4 space-y-2">
                {NAV_ITEMS.map((item) => (
                  item.children ? (
                    <div key={item.label} className="space-y-1">
                      <div className="px-4 py-2 text-sm font-bold text-brand-muted uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="pl-4 space-y-1 border-l border-brand-text/10 ml-4">
                        {item.children.map(child => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                              `block px-4 py-2 text-sm font-medium rounded-lg ${isActive
                                ? 'bg-brand-orange/10 text-brand-orange'
                                : 'text-brand-muted hover:text-brand-text'
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
                        `block px-4 py-3 text-lg font-medium rounded-lg ${isActive
                          ? 'bg-brand-orange/10 text-brand-orange'
                          : 'text-brand-text hover:bg-brand-text/5'
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

      {/* MAIN CONTENT */}
      <main className="flex-grow relative z-10">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-brand-text/10 bg-brand-bg pt-16 pb-8 relative overflow-hidden">
        {/* Footer Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[300px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-4 tracking-tight text-brand-text">
                Knowledge <span className="text-brand-orange">Is Power.</span>
              </h3>
              <p className="text-brand-muted max-w-md text-sm leading-relaxed">
                Documenting the intersection of Law and Engineering.
                Building open-source tools for the next generation of legal professionals.
              </p>
              <div className="mt-8">
                <NavLink to="/knowledge" className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange hover:text-brand-text transition-colors">
                  <BookOpen size={16} /> Access Knowledge Base
                </NavLink>
              </div>
            </div>

            <div className="flex flex-col md:items-end space-y-6">
              <a href="mailto:hello@example.com" className="group flex items-center gap-2 text-2xl font-bold text-brand-text hover:text-brand-orange transition-colors">
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
                    className="p-3 rounded-full bg-brand-text/5 border border-brand-text/10 hover:bg-brand-orange hover:border-brand-orange hover:text-brand-text transition-all text-brand-muted"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-brand-text/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-brand-muted">
            <div>© {new Date().getFullYear()} Nikhil.System_v2.0</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
              SYSTEM ONLINE
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
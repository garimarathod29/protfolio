import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

const Navbar = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home', ...navLinks.map((link) => link.href.substring(1))];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3'
          : 'bg-white/85 backdrop-blur-sm py-4'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout: 12-col grid for mathematical symmetry (Left: Col 3, Center: Col 6, Right: Col 3) */}
        <div className="hidden md:grid grid-cols-12 items-center w-full">
          
          {/* 1. LEFT CORNER: Garima Rathod Brand / Logo */}
          <div className="col-span-3 flex items-center justify-start">
            <a href="#home" className="flex items-center gap-3 group text-left">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-base shadow-xs group-hover:bg-indigo-700 transition-colors flex-shrink-0">
                GR
              </div>
              <div className="flex flex-col items-start">
                <span className="font-extrabold text-sm text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">
                  Garima Rathod
                </span>
                <span className="text-[11px] text-indigo-600 font-semibold leading-tight">
                  Full Stack Developer
                </span>
              </div>
            </a>
          </div>

          {/* 2. CENTER: All Navigation Links (Equidistant from both left and right sides) */}
          <div className="col-span-6 flex items-center justify-center">
            <nav className="inline-flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-xl border border-slate-200/90 shadow-2xs">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
                      isActive
                        ? 'text-indigo-700 bg-white shadow-xs'
                        : 'text-slate-600 hover:text-indigo-600 hover:bg-white/60'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* 3. RIGHT CORNER: Resume Button */}
          <div className="col-span-3 flex items-center justify-end">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs hover:shadow transition-all duration-150"
            >
              <FileText size={14} />
              <span>Resume</span>
            </button>
          </div>

        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden items-center justify-between w-full">
          {/* Left: Brand */}
          <a href="#home" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
              GR
            </div>
            <span className="font-bold text-sm text-slate-900">Garima Rathod</span>
          </a>

          {/* Right: Resume Button & Menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg shadow-xs"
            >
              <FileText size={13} />
              <span>Resume</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-slate-700 hover:text-indigo-600 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 p-3 bg-white border border-slate-200 rounded-2xl shadow-xl space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-indigo-600'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

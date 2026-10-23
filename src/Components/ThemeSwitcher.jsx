import React, { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';

const themes = [
  { id: 'indigo', name: 'Indigo Accent', color: '#4f46e5' },
  { id: 'blue', name: 'Blue Accent', color: '#2563eb' },
  { id: 'emerald', name: 'Emerald Accent', color: '#059669' },
  { id: 'purple', name: 'Purple Accent', color: '#7c3aed' },
  { id: 'rose', name: 'Rose Accent', color: '#e11d48' },
];

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState('indigo');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'indigo';
    setCurrentTheme(savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  const changeTheme = (themeId) => {
    setCurrentTheme(themeId);
    document.body.setAttribute('data-theme', themeId);
    localStorage.setItem('portfolio-theme', themeId);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group shadow-xs"
        title="Change Accent Color"
      >
        <Palette size={18} className="text-indigo-600 group-hover:rotate-45 transition-transform" />
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-3 p-3 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 flex items-center gap-2 animate-fade-in"
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="text-[11px] font-semibold text-slate-500 mr-1 uppercase tracking-wider">Themes:</div>
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => changeTheme(theme.id)}
              className={`w-6 h-6 rounded-full transition-transform duration-200 flex items-center justify-center ${
                currentTheme === theme.id ? 'scale-125 ring-2 ring-indigo-600 ring-offset-2 ring-offset-white' : 'hover:scale-110 opacity-70 hover:opacity-100'
              }`}
              style={{ backgroundColor: theme.color }}
              title={theme.name}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;

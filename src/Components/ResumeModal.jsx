import React from 'react';
import { X, Printer, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-3xl bg-white text-slate-800 border border-slate-200 rounded-2xl shadow-xl overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-slate-50 border-b border-slate-200 text-slate-800">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-normal text-slate-900">Garima Rathod — Resume</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-normal shadow-xs transition-colors"
            >
              <Printer size={13} />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-200 transition-colors ml-1"
            >
              <X size={17} />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-6 sm:p-8 max-h-[82vh] overflow-y-auto space-y-6 text-slate-700 text-xs sm:text-sm font-light" id="printable-resume">
          {/* Header */}
          <div className="border-b border-slate-200 pb-4">
            <h1 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight">
              {portfolioData.personal.name}
            </h1>
            <p className="text-indigo-600 font-normal text-sm mt-0.5">
              Full Stack Developer (MERN Stack) • Indore / Ujjain, India
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-slate-600">
              <span>+91 {portfolioData.personal.phoneRaw}</span>
              <span>•</span>
              <a href={`mailto:${portfolioData.personal.email}`} className="text-indigo-600 hover:underline">
                {portfolioData.personal.email}
              </a>
              <span>•</span>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
                LinkedIn
              </a>
              <span>•</span>
              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
                GitHub
              </a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs uppercase tracking-wider text-slate-900 font-medium mb-1 border-b border-slate-100 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
              {portfolioData.personal.summary}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs uppercase tracking-wider text-slate-900 font-medium mb-2 border-b border-slate-100 pb-1">
              Work Experience
            </h2>
            <div className="space-y-4 pt-1">
              {portfolioData.experience.map((exp, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <span className="font-normal text-slate-900">{exp.role}</span> — <span className="font-normal text-indigo-600">{exp.company}</span>
                    </div>
                    <span className="text-xs text-slate-500 font-mono">
                      {exp.period} • {exp.location}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {exp.summary}
                  </p>

                  <div className="space-y-1 pl-3 text-xs text-slate-600 font-light">
                    {exp.projectsDelivered.map((item, i) => (
                      <div key={i}>
                        <span className="font-normal text-slate-800">• {item.name}: </span>
                        <span>{item.desc}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-[11px] text-slate-500 pt-1">
                    <span className="font-normal text-slate-700">Technologies: </span>
                    {exp.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs uppercase tracking-wider text-slate-900 font-medium mb-1 border-b border-slate-100 pb-1">
              Technical Skills
            </h2>
            <div className="space-y-1 text-xs text-slate-600 pt-1 font-light">
              <p><span className="font-normal text-slate-800">Frontend:</span> React.js, Tailwind CSS, Redux Toolkit, JavaScript (ES6+), TypeScript, HTML5, CSS3</p>
              <p><span className="font-normal text-slate-800">Backend & APIs:</span> Node.js, Express.js, Socket.io, RESTful APIs, JWT Auth</p>
              <p><span className="font-normal text-slate-800">Databases:</span> MongoDB, SQL, Firebase</p>
              <p><span className="font-normal text-slate-800">Developer Tools:</span> Git, GitHub, Postman, Razorpay Payment Gateway</p>
              <p><span className="font-normal text-slate-800">Core Languages:</span> C++, Java, JavaScript, TypeScript</p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs uppercase tracking-wider text-slate-900 font-medium mb-1 border-b border-slate-100 pb-1">
              Education
            </h2>
            <div className="space-y-2 pt-1 font-light">
              {portfolioData.education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <div>
                    <span className="font-normal text-slate-900">{edu.degree}</span> — {edu.institution}
                  </div>
                  <div className="text-slate-500 font-mono">
                    {edu.period} • <span className="font-normal text-slate-800">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;

import React from 'react';
import { Building2, Briefcase, GraduationCap, Code2, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = ({ onOpenResume }) => {
  const highlights = [
    {
      icon: Building2,
      label: 'Current Company',
      title: 'ACORE IT HUB',
      desc: 'Full Stack Developer building Atiko, Global Axis, and Jhatpat platforms.',
      accent: 'border-l-2 border-indigo-400 bg-indigo-50/40',
      iconColor: 'text-indigo-600',
      tagColor: 'text-indigo-600'
    },
    {
      icon: Briefcase,
      label: 'Previous Experience',
      title: 'INDUS AI SOLUTION',
      desc: '1-Year MERN Stack Intern developing smart inventory and LMS modules.',
      accent: 'border-l-2 border-sky-400 bg-sky-50/40',
      iconColor: 'text-sky-600',
      tagColor: 'text-sky-600'
    },
    {
      icon: GraduationCap,
      label: 'Academics',
      title: 'B.Tech in CSE (7.56 CGPA)',
      desc: 'Mahakal Institute of Technology & Management, Ujjain (Jan 2025).',
      accent: 'border-l-2 border-amber-400 bg-amber-50/40',
      iconColor: 'text-amber-600',
      tagColor: 'text-amber-700'
    },
    {
      icon: Code2,
      label: 'Core Focus',
      title: 'MERN & Real-time Systems',
      desc: 'React.js, Node.js, Express, MongoDB, Socket.io, and Redux Toolkit.',
      accent: 'border-l-2 border-emerald-400 bg-emerald-50/40',
      iconColor: 'text-emerald-600',
      tagColor: 'text-emerald-700'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-slate-50/60 border-b border-slate-200">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 bg-indigo-50 border border-indigo-200 rounded-full text-xs font-normal text-indigo-700 uppercase tracking-wider mb-2">
            Overview
          </div>
          <h2 className="text-2xl sm:text-3xl font-normal text-slate-800 tracking-normal">
            About Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Narrative Content - Thin & Natural Text */}
          <div className="lg:col-span-7 space-y-4 text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            <p>
              I am a Full Stack Developer with hands-on experience delivering commercial web applications and robust RESTful backends. I graduated with a <span className="text-slate-800 font-medium">B-Tech in Computer Science and Engineering (7.56 CGPA)</span> from Mahakal Institute of Technology & Management, Ujjain.
            </p>
            <p>
              At <span className="text-indigo-600 font-medium">ACORE IT HUB</span>, I actively engineer production platforms including <span className="text-slate-800 font-medium">Atiko</span> (an AI healthcare portal supporting 8 distinct user personas), <span className="text-slate-800 font-medium">Global Axis Internationals</span> (a recruitment platform with ATS features), and <span className="text-slate-800 font-medium">Jhatpat</span> (a quick-commerce delivery application with Razorpay integration and real-time state management).
            </p>
            <p>
              Prior to my current role, I completed a comprehensive 1-year internship as a <span className="text-sky-700 font-medium">MERN Intern at INDUS AI SOLUTION</span>, building inventory tracking tools and learning management systems.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-normal rounded-lg shadow-xs transition-colors"
              >
                <span>Read Full Resume</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Quick Highlight Cards with Thin Typography */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-3">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-xl border border-slate-200/80 shadow-xs space-y-1 ${item.accent}`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-normal uppercase tracking-wider ${item.tagColor}`}>
                    {item.label}
                  </span>
                  <item.icon size={15} className={item.iconColor} />
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-800">
                  {item.title}
                </div>
                <p className="text-[11px] text-slate-500 font-normal leading-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

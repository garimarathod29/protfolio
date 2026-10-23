import React from 'react';
import { 
  SiReact, SiMongodb, SiTailwindcss, SiJavascript, SiExpress, SiNodedotjs, 
  SiRedux, SiHtml5, SiPostman, SiGit, SiGithub, SiFirebase, SiTypescript
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { Code2, Database, Terminal, Shield, Sparkles, Globe, Cpu } from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    {
      title: 'Frontend Development',
      topBorder: 'border-t-4 border-indigo-600',
      badgeBg: 'bg-indigo-50 text-indigo-700',
      skills: [
        { name: 'React.js', icon: SiReact, color: '#0284c7' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#0ea5e9' },
        { name: 'Redux Toolkit', icon: SiRedux, color: '#7c3aed' },
        { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#d97706' },
        { name: 'TypeScript', icon: SiTypescript, color: '#2563eb' },
        { name: 'HTML5 & CSS3', icon: SiHtml5, color: '#ea580c' },
      ]
    },
    {
      title: 'Backend & Real-Time',
      topBorder: 'border-t-4 border-emerald-600',
      badgeBg: 'bg-emerald-50 text-emerald-700',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#16a34a' },
        { name: 'Express.js', icon: SiExpress, color: '#1e293b' },
        { name: 'Socket.io', icon: Terminal, color: '#7c3aed' },
        { name: 'RESTful APIs', icon: Globe, color: '#4f46e5' },
        { name: 'JWT Authentication', icon: Shield, color: '#059669' },
      ]
    },
    {
      title: 'Databases & Cloud',
      topBorder: 'border-t-4 border-amber-500',
      badgeBg: 'bg-amber-50 text-amber-800',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: '#15803d' },
        { name: 'SQL', icon: Database, color: '#0284c7' },
        { name: 'Firebase BaaS', icon: SiFirebase, color: '#f59e0b' },
        { name: 'Data Modeling', icon: Cpu, color: '#6366f1' },
      ]
    },
    {
      title: 'Tools & DevOps',
      topBorder: 'border-t-4 border-purple-600',
      badgeBg: 'bg-purple-50 text-purple-700',
      skills: [
        { name: 'Git', icon: SiGit, color: '#ea580c' },
        { name: 'GitHub', icon: SiGithub, color: '#1e293b' },
        { name: 'Postman', icon: SiPostman, color: '#f97316' },
        { name: 'Razorpay Gateway', icon: Shield, color: '#2563eb' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50/60 border-b border-slate-200">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 border border-purple-200 rounded-full text-xs font-medium text-purple-700 uppercase tracking-wider mb-2">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-slate-500 mt-2 text-sm sm:text-base font-light">
            Core technologies and developer tools leveraged across full-stack applications.
          </p>
        </div>

        {/* 4 Clean Categories Grid with Top Border Color Accents */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className={`bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4 hover:shadow-md transition-shadow ${group.topBorder}`}
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                <h3 className="text-xs font-medium text-slate-800 uppercase tracking-wider">
                  {group.title}
                </h3>
                <span className={`text-[10px] font-normal px-2 py-0.5 rounded-full ${group.badgeBg}`}>
                  {group.skills.length} Skills
                </span>
              </div>

              <div className="space-y-2">
                {group.skills.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50/80 border border-slate-100 text-xs font-normal text-slate-700 hover:bg-white hover:border-slate-300 transition-colors"
                    >
                      <Icon size={16} style={{ color: skill.color }} className="flex-shrink-0" />
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

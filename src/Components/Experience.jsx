import React from 'react';
import { Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50/60 border-b border-slate-200">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-medium text-indigo-600 uppercase tracking-wider mb-1.5">
            Career
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-500 mt-2 text-sm sm:text-base font-light">
            Hands-on software development across commercial client deliverables and full-stack software internships.
          </p>
        </div>

        {/* Timeline / Experience Cards */}
        <div className="space-y-8">
          {portfolioData.experience.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 shadow-xs space-y-5"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-lg font-medium text-slate-900">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-normal bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-normal text-indigo-600 mt-0.5 flex items-center gap-1.5">
                    <Building2 size={14} />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-mono">
                  <span className="flex items-center gap-1 bg-slate-50 border border-slate-200 px-2 py-1 rounded">
                    <Calendar size={12} className="text-slate-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 bg-slate-50 border border-slate-200 px-2 py-1 rounded">
                    <MapPin size={12} className="text-slate-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                {exp.summary}
              </p>

              {/* Delivered Products */}
              <div className="space-y-3">
                <div className="text-xs font-medium text-slate-600 uppercase tracking-wider">
                  Key Projects & Modules Delivered:
                </div>
                <div className="grid gap-2.5">
                  {exp.projectsDelivered.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 bg-slate-50 rounded-lg border border-slate-200/80 text-xs text-slate-600 font-light"
                    >
                      <span className="font-normal text-slate-900">{item.name}: </span>
                      <span>{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="pt-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-normal text-slate-500 mr-1">Technologies:</span>
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-slate-100 rounded text-[11px] font-normal text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

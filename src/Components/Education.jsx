import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-50/60 border-b border-slate-200">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="text-xs font-medium text-indigo-600 uppercase tracking-wider mb-1.5">
            Academics
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight">
            Education
          </h2>
          <p className="text-slate-500 mt-2 text-sm sm:text-base font-light">
            Academic qualifications and computer science engineering coursework.
          </p>
        </div>

        <div className="space-y-4">
          {portfolioData.education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
                    <GraduationCap size={18} />
                  </span>
                  <h3 className="text-base font-normal text-slate-900">
                    {edu.degree}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 pl-8 font-light">
                  {edu.institution}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono pl-8 pt-1">
                  <span className="flex items-center gap-1 font-light">
                    <Calendar size={12} />
                    {edu.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-light">
                    <MapPin size={12} />
                    {edu.location}
                  </span>
                </div>
              </div>

              <div className="sm:text-right pl-8 sm:pl-0">
                <div className="text-xs text-slate-500 uppercase tracking-wider font-light">
                  Grade / Score
                </div>
                <div className="text-sm font-normal text-slate-900 font-mono mt-0.5">
                  {edu.grade}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

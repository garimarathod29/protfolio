import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const projectColors = {
  atiko: {
    border: 'hover:border-indigo-400',
    badge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    topBar: 'bg-indigo-600',
    btn: 'text-indigo-600 hover:text-indigo-700'
  },
  'global-axis': {
    border: 'hover:border-sky-400',
    badge: 'bg-sky-50 text-sky-700 border-sky-200',
    topBar: 'bg-sky-600',
    btn: 'text-sky-600 hover:text-sky-700'
  },
  jhatpat: {
    border: 'hover:border-amber-400',
    badge: 'bg-amber-50 text-amber-800 border-amber-200',
    topBar: 'bg-amber-500',
    btn: 'text-amber-600 hover:text-amber-700'
  },
  prescripto: {
    border: 'hover:border-emerald-400',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    topBar: 'bg-emerald-600',
    btn: 'text-emerald-600 hover:text-emerald-700'
  },
  imagify: {
    border: 'hover:border-purple-400',
    badge: 'bg-purple-50 text-purple-700 border-purple-200',
    topBar: 'bg-purple-600',
    btn: 'text-purple-600 hover:text-purple-700'
  },
  ecommerce: {
    border: 'hover:border-rose-400',
    badge: 'bg-rose-50 text-rose-700 border-rose-200',
    topBar: 'bg-rose-600',
    btn: 'text-rose-600 hover:text-rose-700'
  }
};

const Projects = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Commercial MERN', 'Personal Project'];

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (activeTab === 'All') return true;
    return project.category === activeTab;
  });

  return (
    <section id="projects" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header - Thin Styling */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-0.5 bg-amber-50 border border-amber-200 rounded-full text-xs font-normal text-amber-800 uppercase tracking-wider mb-2">
              Shipped Platforms
            </div>
            <h2 className="text-2xl sm:text-3xl font-normal text-slate-800 tracking-normal">
              Featured Projects
            </h2>
            <p className="text-slate-500 mt-1.5 text-xs sm:text-sm font-normal max-w-xl">
              Commercial client systems built at Acore IT Hub alongside full-stack personal engineering applications.
            </p>
          </div>

          {/* Filter Tabs - Thin Font */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start sm:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-normal transition-all ${
                  activeTab === cat
                    ? 'bg-indigo-600 text-white font-medium shadow-xs'
                    : 'text-slate-600 hover:text-indigo-600'
                }`}
              >
                {cat === 'All' ? 'All (6)' : cat === 'Commercial MERN' ? 'Commercial' : 'Personal'}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const colors = projectColors[project.id] || projectColors.atiko;
            return (
              <div
                key={project.id}
                className={`bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col group ${colors.border}`}
              >
                {/* Top Accent Color Line */}
                <div className={`h-1 w-full ${colors.topBar}`} />

                {/* Project Hero Screenshot Frame */}
                <div 
                  className="relative aspect-16/10 w-full overflow-hidden bg-slate-100 border-b border-slate-200 cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.heroImage}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 right-2.5">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-normal border shadow-xs ${colors.badge}`}>
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Project Details - Thin Typography */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1 font-mono text-indigo-600 font-medium">
                        <Building2 size={12} />
                        {project.company}
                      </span>
                    </div>

                    <h3 
                      onClick={() => onSelectProject(project)}
                      className="text-base font-medium text-slate-800 group-hover:text-indigo-600 cursor-pointer transition-colors"
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-500 font-normal line-clamp-1">
                      {project.subtitle}
                    </p>

                    <p className="text-xs text-slate-600 font-normal line-clamp-3 leading-relaxed pt-1">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    {/* Tech Stack Chips - Thin font */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-slate-100 rounded text-[10px] font-normal text-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-1.5 py-0.5 bg-slate-100 rounded text-[10px] text-slate-400 font-normal">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Actions - Thin & Refined */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => onSelectProject(project)}
                        className={`text-xs font-medium flex items-center gap-1 transition-colors ${colors.btn}`}
                      >
                        <span>View Details</span>
                        <ArrowUpRight size={13} />
                      </button>

                      <div className="flex items-center gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
                          title="GitHub Repository"
                        >
                          <Github size={15} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

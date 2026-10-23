import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden my-6 max-h-[92vh] flex flex-col text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-white flex-shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-normal text-slate-900">{project.title}</h2>
              <span className="px-2 py-0.5 rounded text-[11px] font-normal bg-slate-100 text-slate-700 border border-slate-200">
                {project.badge}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5 font-light">{project.subtitle} • {project.company}</p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700 font-light">
          {/* Screenshot Showcase */}
          {project.heroImage && (
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs bg-slate-50">
              <img
                src={project.heroImage}
                alt={`${project.title} screenshot`}
                className="w-full h-auto object-cover max-h-[360px]"
              />
            </div>
          )}

          {/* Overview */}
          <div className="space-y-2">
            <h3 className="text-xs font-medium text-slate-800 uppercase tracking-wider">
              Project Overview
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-light">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-xs font-medium text-slate-800 uppercase tracking-wider">
              Key Features & Implementation
            </h3>
            <div className="grid gap-2">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 bg-slate-50 rounded-lg border border-slate-200/80 text-xs text-slate-700 leading-relaxed font-light">
                  <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h3 className="text-xs font-medium text-slate-800 uppercase tracking-wider">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-md text-xs font-normal text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between flex-shrink-0">
          <div className="text-xs text-slate-500 font-mono">
            {project.category}
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 rounded-lg text-xs font-medium border border-slate-300 shadow-xs transition-colors"
            >
              <Github size={14} />
              <span>Source Code</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

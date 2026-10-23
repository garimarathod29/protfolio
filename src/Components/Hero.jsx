import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, FileText, MapPin, Briefcase, CheckCircle2 } from 'lucide-react';
import profilePhoto from '../assets/photo.png';
import { portfolioData } from '../data/portfolioData';

const Hero = ({ onOpenResume }) => {
  const staticPrefix = 'Full Stack Developer building ';
  const phrases = [
    'scalable web applications.',
    'real-time MERN systems.',
    'high-performance web apps.',
    'production-ready platforms.'
  ];

  const [typedPrefix, setTypedPrefix] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [typedPhrase, setTypedPhrase] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect triggered immediately on website open
  useEffect(() => {
    // Phase 1: Type out the prefix on initial load
    if (typedPrefix.length < staticPrefix.length) {
      const timer = setTimeout(() => {
        setTypedPrefix(staticPrefix.slice(0, typedPrefix.length + 1));
      }, 35);
      return () => clearTimeout(timer);
    }

    // Phase 2: Type and cycle through the phrases
    const currentPhrase = phrases[currentPhraseIndex];

    if (!isDeleting) {
      if (typedPhrase.length < currentPhrase.length) {
        const timer = setTimeout(() => {
          setTypedPhrase(currentPhrase.slice(0, typedPhrase.length + 1));
        }, 45);
        return () => clearTimeout(timer);
      } else {
        // Pause when full phrase is typed
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
        return () => clearTimeout(timer);
      }
    } else {
      if (typedPhrase.length > 0) {
        const timer = setTimeout(() => {
          setTypedPhrase(currentPhrase.slice(0, typedPhrase.length - 1));
        }, 25);
        return () => clearTimeout(timer);
      } else {
        // Move to the next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }
  }, [typedPrefix, typedPhrase, isDeleting, currentPhraseIndex]);

  const techPills = [
    { name: 'React.js', bg: 'bg-sky-50 text-sky-700 border-sky-200' },
    { name: 'Node.js & Express', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { name: 'MongoDB', bg: 'bg-green-50 text-green-700 border-green-200' },
    { name: 'Socket.io', bg: 'bg-purple-50 text-purple-700 border-purple-200' },
    { name: 'Razorpay Gateway', bg: 'bg-amber-50 text-amber-800 border-amber-200' },
  ];

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white border-b border-slate-200">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Personal Intro */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            {/* Status Beacon - Emerald Accent */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs text-emerald-800 font-normal">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Available for Full-time Roles</span>
            </div>

            {/* Main Headline - Typewriter Effect with Thin Typography */}
            <div className="space-y-2.5">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-800 tracking-normal leading-snug min-h-[3.5rem] sm:min-h-[4.25rem]">
                <span>{typedPrefix}</span>
                <span className="text-indigo-600 font-medium">{typedPhrase}</span>
                <span className="inline-block w-0.5 h-6 sm:h-7 bg-indigo-600 ml-1 animate-pulse align-middle"></span>
              </h1>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                Hi, I'm <span className="text-slate-800 font-medium">Garima Rathod</span>. I design and build production-grade web systems using React, Node.js, Express, and MongoDB. Currently delivering commercial platforms at{' '}
                <span className="text-indigo-600 font-medium">ACORE IT HUB</span>.
              </p>
            </div>

            {/* Key Skill Tags - Thin/Normal font */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 pt-0.5">
              {techPills.map((pill, idx) => (
                <span
                  key={idx}
                  className={`px-2.5 py-0.5 rounded-md text-xs font-normal border ${pill.bg}`}
                >
                  {pill.name}
                </span>
              ))}
            </div>

            {/* Quick Meta Info - Thin/Normal font */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-500 font-normal pt-0.5">
              <span className="flex items-center gap-1.5 text-slate-600">
                <MapPin size={13} className="text-amber-600" />
                Indore / Ujjain, M.P.
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5 text-slate-600">
                <Briefcase size={13} className="text-indigo-600" />
                1.5+ Yrs Experience
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5 text-slate-600">
                <CheckCircle2 size={13} className="text-emerald-600" />
                B.Tech CSE (7.56 CGPA)
              </span>
            </div>

            {/* Action Buttons - Refined Medium weights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-lg shadow-xs transition-colors"
              >
                <span>View Projects</span>
                <ArrowRight size={14} />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs font-medium rounded-lg shadow-xs transition-colors"
              >
                <FileText size={14} className="text-emerald-600" />
                <span>Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-1 px-3.5 py-2 text-slate-600 hover:text-slate-900 text-xs font-normal transition-colors"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-0.5 flex items-center justify-center lg:justify-start gap-2.5 text-slate-500">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                title="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 transition-colors"
                title="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Circular Photo Frame with Concentric Decorative Rings */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center pt-4 lg:pt-0">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 flex items-center justify-center">
              
              {/* Outer Subtle Circle Ring 1 */}
              <div className="absolute -inset-4 sm:-inset-5 rounded-full border border-slate-200/80 pointer-events-none"></div>

              {/* Dashed Accent Circle Ring 2 */}
              <div className="absolute -inset-2 sm:-inset-2.5 rounded-full border border-dashed border-indigo-300 pointer-events-none"></div>

              {/* Solid Accent Ring 3 */}
              <div className="absolute inset-0 rounded-full border-2 border-indigo-500/25 pointer-events-none"></div>

              {/* Circular Photo Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-50">
                <img
                  src={profilePhoto}
                  alt={portfolioData.personal.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Status Pill Attached to Circle Bottom */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white border border-slate-200 rounded-full shadow-xs flex items-center gap-1.5 text-[11px] text-slate-700 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-medium text-slate-800">ACORE IT HUB</span>
                <span className="text-slate-400">•</span>
                <span className="text-indigo-600 font-medium">Full Stack</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

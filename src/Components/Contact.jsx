import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    if (onShowToast) {
      onShowToast('Email copied to clipboard');
    }
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      if (onShowToast) {
        onShowToast('Message sent! I will reply shortly.');
      }
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="text-xs font-medium text-indigo-600 uppercase tracking-wider mb-1.5">
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight">
            Let's Talk
          </h2>
          <p className="text-slate-500 mt-2 text-sm sm:text-base font-light">
            I'm currently interested in full-time Software Developer roles and project collaborations. Feel free to reach out directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Direct Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {/* Email */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Email
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-[11px] font-normal text-slate-600 hover:text-indigo-600 transition-colors"
                    title="Copy email"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="text-emerald-600" />
                        <span className="text-emerald-600 font-normal">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="text-sm font-normal text-slate-800 hover:text-indigo-600 block transition-colors"
                >
                  {portfolioData.personal.email}
                </a>
              </div>

              {/* Phone */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Phone
                </div>
                <a
                  href={`tel:${portfolioData.personal.phoneRaw}`}
                  className="text-sm font-normal text-slate-800 hover:text-indigo-600 block transition-colors"
                >
                  +91 {portfolioData.personal.phoneRaw}
                </a>
              </div>

              {/* Location */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Location
                </div>
                <p className="text-sm font-normal text-slate-800">
                  {portfolioData.personal.location}
                </p>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-normal border border-slate-200 transition-colors"
              >
                <Github size={15} />
                <span>GitHub</span>
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-normal border border-slate-200 transition-colors"
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Form (7 cols) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-normal text-slate-600">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Verma"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm font-light text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-normal text-slate-600">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. rahul@company.com"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm font-light text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-normal text-slate-600">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Full Stack Developer Opening / Project Inquiry"
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm font-light text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-normal text-slate-600">Message *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm font-light text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-normal rounded-lg text-sm transition-colors shadow-xs flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <span>Sending...</span>
                ) : status === 'success' ? (
                  <span className="flex items-center gap-2 text-white">
                    <Check size={16} /> Message Sent
                  </span>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

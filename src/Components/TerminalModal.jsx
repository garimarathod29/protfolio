import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, Minimize2, CornerDownLeft, Sparkles, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const TerminalModal = ({ isOpen, onClose, onOpenResume }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: '⚡ Garima Rathod Interactive Developer Console v2.5' },
    { type: 'system', text: 'Type "help" to see available commands or click the shortcut tags below.' }
  ]);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const quickCommands = ['help', 'summary', 'skills', 'projects', 'experience', 'education', 'contact', 'resume', 'clear'];

  const executeCommand = (cmdText) => {
    const raw = cmdText.trim().toLowerCase();
    if (!raw) return;

    const newHistory = [...history, { type: 'user', text: `$ ${cmdText}` }];

    if (raw === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (raw === 'resume') {
      newHistory.push({
        type: 'output',
        text: 'Opening executive resume preview modal...'
      });
      setHistory(newHistory);
      setInput('');
      if (onOpenResume) onOpenResume();
      return;
    }

    const output = portfolioData.terminalCommands[raw];
    if (output) {
      newHistory.push({ type: 'output', text: output });
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not found: "${cmdText}". Type "help" for a list of available commands.`
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    executeCommand(input);
  };

  const copyTranscript = () => {
    const text = history.map((item) => item.text).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[520px] font-mono text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-100 border-b border-slate-200 select-none text-slate-700">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-400 cursor-pointer" onClick={onClose}></span>
            <span className="w-3 h-3 rounded-full bg-amber-400"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
            <span className="ml-3 text-xs text-slate-600 flex items-center gap-1.5 font-medium">
              <Terminal size={14} className="text-indigo-600" />
              garima@portfolio-terminal: ~
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyTranscript}
              title="Copy session"
              className="p-1.5 text-slate-500 hover:text-slate-800 rounded hover:bg-slate-200 transition-colors"
            >
              {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-800 rounded hover:bg-slate-200 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Output Console */}
        <div 
          className="flex-1 p-4 overflow-y-auto space-y-2 text-sm bg-slate-50 text-slate-800 select-text"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((line, idx) => (
            <div key={idx} className="leading-relaxed">
              {line.type === 'user' && (
                <span className="text-indigo-600 font-bold">{line.text}</span>
              )}
              {line.type === 'system' && (
                <span className="text-slate-500 italic">{line.text}</span>
              )}
              {line.type === 'output' && (
                <span className="text-slate-700 font-medium whitespace-pre-line">{line.text}</span>
              )}
              {line.type === 'error' && (
                <span className="text-rose-600 font-semibold">{line.text}</span>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Quick Command Suggestions */}
        <div className="px-4 py-2 bg-slate-100 border-t border-slate-200 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-slate-500 flex items-center gap-1 flex-shrink-0">
            <Sparkles size={12} className="text-indigo-600" /> Quick:
          </span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2.5 py-1 bg-white hover:bg-indigo-50 hover:text-indigo-600 border border-slate-200 rounded text-slate-700 transition-colors flex-shrink-0 shadow-xs"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Input Prompt */}
        <form onSubmit={handleFormSubmit} className="flex items-center gap-2 px-4 py-3 bg-white border-t border-slate-200">
          <span className="text-indigo-600 font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command (e.g. skills, projects, resume)..."
            className="flex-1 bg-transparent text-slate-900 focus:outline-none placeholder-slate-400 text-sm font-mono"
            autoFocus
          />
          <button 
            type="submit" 
            className="text-slate-400 hover:text-indigo-600 transition-colors"
            title="Press Enter"
          >
            <CornerDownLeft size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default TerminalModal;

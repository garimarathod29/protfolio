import React, { useEffect } from 'react';
import { CheckCircle2, Info } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 2800);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-xl text-slate-800 text-sm font-medium animate-fade-in">
      {type === 'success' ? (
        <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
      ) : (
        <Info size={18} className="text-indigo-600 flex-shrink-0" />
      )}
      <span>{message}</span>
    </div>
  );
};

export default Toast;

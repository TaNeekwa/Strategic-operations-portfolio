
import React from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-background-dark/95 backdrop-blur-xl" onClick={onClose}></div>

      <div className="relative w-full max-w-[1000px] h-[90vh] flex flex-col bg-surface-dark rounded-lg shadow-2xl overflow-hidden animate-in slide-in-from-bottom-8 duration-500">
        {/* Toolbar */}
        <div className="bg-[#2c2c2c] text-white px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-white/70">description</span>
            <span className="text-xs font-bold uppercase tracking-widest text-white/90">Naomi_Donley_Resume.pdf</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/resume.pdf"
              download="Naomi_Donley_Resume.pdf"
              className="flex items-center gap-2 bg-primary text-background-dark px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              Download
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/20 transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              Open in New Tab
            </a>
            <button onClick={onClose} className="hover:text-primary transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 bg-gray-800">
          <iframe
            src="/resume.pdf"
            className="w-full h-full"
            title="Resume"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;


import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center space-x-5 mb-8 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <div className="w-8 h-8">
                <svg viewBox="0 0 100 100" className="w-full h-full text-blue-600 fill-none stroke-current stroke-[6]">
                   <path d="M50 5 L95 50 L50 95 L5 50 Z" strokeLinejoin="miter" />
                   <rect x="46" y="46" width="8" height="8" className="fill-blue-400 rotate-45 stroke-none" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="text-xl font-black tracking-tight text-white">IA</span>
                  <span className="text-xl font-light tracking-[0.1em] text-slate-400 ml-1">4ALL</span>
                </div>
              </div>
            </div>
            <p className="text-slate-500 max-w-sm mb-10 font-medium leading-relaxed text-sm">
              Applied AI Engineering for the European Enterprise. Architecting resilient, sovereign, and high-performance intelligence systems.
            </p>
            <div className="text-slate-800 text-[9px] font-black uppercase tracking-[0.4em]">
              LISBON • MADRID • REMOTE
            </div>
          </div>
          <div>
            <h4 className="text-white font-black mb-10 uppercase tracking-[0.3em] text-[9px]">Expertise</h4>
            <ul className="space-y-4 text-slate-500 text-[11px] font-bold uppercase tracking-widest">
              <li><a href="#services" className="hover:text-blue-500 transition-all">Workflow Design</a></li>
              <li><a href="#industries" className="hover:text-blue-500 transition-all">Governance</a></li>
              <li><a href="#methodology" className="hover:text-blue-500 transition-all">Architectural Audit</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black mb-10 uppercase tracking-[0.3em] text-[9px]">Contact</h4>
            <ul className="space-y-4 text-slate-500 text-[11px] font-bold uppercase tracking-widest">
              <li><a href="mailto:hello@ia4all.eu" className="text-slate-300 hover:text-blue-500 transition-colors">hello@ia4all.eu</a></li>
              <li className="pt-2 text-slate-800">Operational Engineering Desk</li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-800 text-[9px] space-y-4 md:space-y-0 uppercase tracking-[0.4em] font-black">
          <p>© 2024 IA4ALL.EU • APPLIED AI ENGINEERING • SOVEREIGN INFRASTRUCTURE</p>
          <div className="flex space-x-8">
            <span className="cursor-default hover:text-slate-600 transition-colors">Privacy Policy</span>
            <span className="cursor-default hover:text-slate-600 transition-colors">GDPR Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

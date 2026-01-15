
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-8 lg:pt-48 lg:pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          <div className="inline-flex items-center space-x-3 px-3 py-1 rounded-sm border border-blue-500/30 bg-blue-500/5 text-blue-400 text-[9px] font-black mb-10 tracking-[0.3em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,1)]"></span>
            <span>Applied AI Engineering Lab</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-[7rem] font-black tracking-tighter text-white mb-8 leading-[0.9] md:leading-[0.85]">
            Engineering <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600 drop-shadow-sm">Operational ROI.</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl font-medium">
            We move beyond experiments. We deploy resilient, enterprise-grade AI systems that eliminate manual bottlenecks and scale intelligence for the European market.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-20">
            <a href="#cta" className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center shadow-2xl shadow-blue-600/30 group">
              Start Engineering <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" size={14} />
            </a>
            <a href="#services" className="w-full sm:w-auto px-10 py-5 bg-transparent hover:bg-slate-900 text-slate-300 border border-slate-800 text-[11px] font-black uppercase tracking-[0.2em] transition-all text-center">
              Enterprise Roadmap
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-slate-900">
            {[
              { label: 'Latency', val: '<200ms' },
              { label: 'Uptime', val: '99.9%' },
              { label: 'Compliance', val: 'EU AI ACT' },
              { label: 'Security', val: 'TLS 1.3' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-white font-bold tracking-tight">{stat.val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

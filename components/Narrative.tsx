
import React from 'react';

const Narrative: React.FC = () => {
  return (
    <section className="py-12 lg:py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl lg:text-3xl font-black text-white mb-8 border-l-2 border-blue-500 pl-8 leading-tight uppercase tracking-tight">
              Operational Realism <br/>Over Hype.
            </h2>
            <div className="space-y-6 text-base lg:text-lg text-slate-400 leading-relaxed font-medium">
              <p>
                IA4ALL was founded to bridge the gap between AI experimentation and production-ready reality. 
              </p>
              <p>
                While others focus on wrappers, we focus on the <span className="text-white">plumbing</span>—the integration, governance, and data architectures required to make AI work at scale.
              </p>
              <p className="text-blue-500 font-bold uppercase tracking-wide text-sm">
                If it isn't measurable, it isn't engineered.
              </p>
            </div>
          </div>
          <div className="bg-slate-900/50 border border-slate-800/50 p-12 rounded-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl rounded-full"></div>
             <h3 className="text-[10px] font-black text-blue-500 mb-8 uppercase tracking-[0.4em]">The Mandate</h3>
             <ul className="space-y-6">
               <li className="group">
                 <p className="text-slate-300 text-sm leading-relaxed group-hover:text-white transition-colors font-medium">
                   <span className="text-white font-black uppercase tracking-tighter mr-2">01/</span>
                   Architectural integrity is our primary deliverable.
                 </p>
               </li>
               <li className="group">
                 <p className="text-slate-300 text-sm leading-relaxed group-hover:text-white transition-colors font-medium">
                   <span className="text-white font-black uppercase tracking-tighter mr-2">02/</span>
                   Privacy and sovereignty are non-negotiable foundations.
                 </p>
               </li>
               <li className="group">
                 <p className="text-slate-300 text-sm leading-relaxed group-hover:text-white transition-colors font-medium">
                   <span className="text-white font-black uppercase tracking-tighter mr-2">03/</span>
                   Custom logic over generic prompts for deep business value.
                 </p>
               </li>
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Narrative;

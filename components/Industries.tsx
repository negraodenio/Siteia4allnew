
import React from 'react';
import { Landmark, HeartPulse, Network, Building2 } from 'lucide-react';

const industries = [
  {
    title: "Finance & Insurance",
    icon: <Landmark className="text-blue-500" />,
    valueProp: "Highly auditable AI workflows for risk, compliance, and document intelligence.",
    useCases: ["Intelligent document processing", "Risk automation", "Operational reporting"]
  },
  {
    title: "Healthcare",
    icon: <HeartPulse className="text-blue-500" />,
    valueProp: "Regulation-aligned systems built for data security and clinical accuracy.",
    useCases: ["Clinical workflow automation", "Decision support", "Data-secure systems"]
  },
  {
    title: "Telecom & Utilities",
    icon: <Network className="text-blue-500" />,
    valueProp: "Scalable intelligence for massive infrastructure and high-volume operations.",
    useCases: ["Network operations intelligence", "Support automation", "Predictive maintenance"]
  },
  {
    title: "Public Sector",
    icon: <Building2 className="text-blue-500" />,
    valueProp: "Accountable, traceable AI platforms designed for public-sector constraints.",
    useCases: ["Governance-by-design", "Secure applied platforms", "Auditable systems"]
  }
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight">Vertical Excellence</h2>
          <p className="text-slate-400 text-lg max-w-2xl font-medium">
            Custom engineered solutions for industries where governance and precision are non-negotiable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="flex flex-col h-full p-8 bg-slate-900/30 border border-slate-800 rounded-sm hover:border-blue-500/50 transition-all group">
              <div className="w-12 h-12 rounded-sm bg-slate-900 border border-slate-800 flex items-center justify-center mb-8 group-hover:bg-blue-500/10 transition-colors">
                {industry.icon}
              </div>
              <h3 className="text-lg font-black text-white mb-4 uppercase tracking-tight">{industry.title}</h3>
              <p className="text-slate-500 text-xs mb-8 leading-relaxed font-medium flex-grow">{industry.valueProp}</p>
              <div className="pt-6 border-t border-slate-800">
                <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest mb-4">Core Use Cases</p>
                <ul className="space-y-3">
                  {industry.useCases.map((useCase, ui) => (
                    <li key={ui} className="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-tight">/ {useCase}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;

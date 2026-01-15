
import React from 'react';

const steps = [
  {
    id: "01",
    title: "Diagnose",
    text: "We start by understanding your processes, constraints, risks and ROI drivers. No AI for the sake of AI."
  },
  {
    id: "02",
    title: "Architect",
    text: "We design AI systems aligned with your data sovereignty, existing infrastructure, and compliance requirements."
  },
  {
    id: "03",
    title: "Build",
    text: "We implement production-grade workflows using applied generative AI, RAG architectures, and agentic systems."
  },
  {
    id: "04",
    title: "Deploy & Operate",
    text: "We deploy, monitor, and continuously optimize. AI only creates value when it is in operation."
  }
];

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">Engineering Approach</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            A lifecycle-driven methodology focused on operational sustainability, not isolated prototypes.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative p-8 bg-slate-900 border border-slate-800 rounded-sm group hover:bg-slate-800/50 transition-all">
              <span className="text-4xl font-black text-slate-800 group-hover:text-blue-900/40 transition-colors absolute top-4 right-6 leading-none select-none">
                {step.id}
              </span>
              <h3 className="text-xl font-black text-white mb-4 pt-4 uppercase tracking-tight">{step.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">{step.text}</p>
              <div className="mt-8 h-[1px] w-12 bg-blue-500 rounded-full group-hover:w-full transition-all duration-700 opacity-50"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;

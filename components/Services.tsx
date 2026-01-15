
import React from 'react';
import { Cpu, Settings, ShieldCheck, BarChart3 } from 'lucide-react';

const services = [
  {
    title: "Applied Generative AI",
    icon: <Cpu className="text-blue-500" size={28} />,
    description: "We design domain-specific generative AI systems tailored to your business logic—not generic LLM wrappers.",
    benefits: [
      "Custom RAG architectures",
      "Secure enterprise orchestration",
      "Latency and cost optimization"
    ],
    featured: false
  },
  {
    title: "Workflow Automation",
    icon: <Settings className="text-blue-500" size={28} />,
    description: "We eliminate manual friction by embedding AI directly into critical business workflows.",
    benefits: [
      "End-to-end process automation",
      "Deep API & Database integration",
      "Measurable cost reduction"
    ],
    featured: false
  },
  {
    title: "Governance & Compliance",
    icon: <ShieldCheck className="text-blue-500" size={28} />,
    description: "Architecting AI systems aligned with EU AI Act and GDPR as a foundational engineering layer.",
    benefits: [
      "EU AI Act-ready architectures",
      "Model risk management",
      "Full auditability by design"
    ],
    featured: false
  },
  {
    title: "Production Engineering",
    icon: <BarChart3 className="text-blue-500" size={28} />,
    description: "Engineering AI systems that survive real traffic, real users, and real business constraints.",
    benefits: [
      "Hybrid & On-prem deployment",
      "Lifecycle reliability monitoring",
      "No fragile prototypes"
    ],
    featured: true
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight">Enterprise Solutions</h2>
          <p className="text-slate-400 text-lg max-w-2xl font-medium">
            Reliable, production-ready AI services engineered for complex European regulatory environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`p-10 rounded-sm border transition-all duration-300 ${service.featured ? 'bg-blue-500/5 border-blue-500/40 shadow-2xl shadow-blue-500/5' : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'}`}
            >
              <div className="mb-8">{service.icon}</div>
              <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed font-medium text-sm">{service.description}</p>
              <div className="space-y-4">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2">Technical Delivery</p>
                {service.benefits.map((benefit, bIndex) => (
                  <div key={bIndex} className="flex items-center text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <div className="w-1 h-1 rounded-full bg-blue-500 mr-3 shrink-0"></div>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

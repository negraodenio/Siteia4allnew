
import React from 'react';
import { Shield, Zap, CheckCircle, Settings, ShieldCheck, BarChart3 } from 'lucide-react';

const Differentiators: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Engineering Mindset", desc: "We don't just prompt; we architect systems for scale and durability.", icon: <Settings className="text-blue-500" /> },
                  { title: "No Vendor Lock-in", desc: "Our solutions are portable, cloud-agnostic, and owned by you.", icon: <Shield className="text-blue-500" /> },
                  { title: "EU AI Act Ready", desc: "Built with the strictest global regulations as the baseline.", icon: <ShieldCheck className="text-blue-500" /> },
                  { title: "Measured ROI", desc: "Every project starts and ends with a business performance metric.", icon: <BarChart3 className="text-blue-500" /> }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500/30 transition-colors group">
                    <div className="mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h4 className="text-white font-bold mb-2 uppercase tracking-tight text-sm">{item.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6 uppercase tracking-tight">Why Enterprises <br/><span className="text-blue-500">Trust IA4ALL</span></h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed font-medium">
              We differentiate ourselves from generic AI agencies by focusing on the "plumbing"—the critical integration and governance that makes AI work at scale.
            </p>
            <ul className="space-y-4">
              {[
                "Engineering-first mindset, not agency-first.",
                "Sovereign data architectures for sensitive industries.",
                "Comprehensive lifecycle management from day zero.",
                "European regulatory alignment by design."
              ].map((text, i) => (
                <li key={i} className="flex items-center text-slate-300 font-medium text-sm">
                  <CheckCircle className="text-blue-500 mr-3 shrink-0" size={18} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;

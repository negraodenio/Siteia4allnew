
import React, { useState } from 'react';
import { Send, CheckCircle2, ChevronRight } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulação de envio. 
    // Para produção: integrar com Formspree ou uma API Route da Vercel para disparar o SMTP.
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <section id="cta" className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/10 rounded-full mb-8">
            <CheckCircle2 className="text-blue-500" size={40} />
          </div>
          <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">Transmission Received</h2>
          <p className="text-slate-400 mb-8 text-lg font-medium">
            Your inquiry has been routed to <span className="text-blue-400">help@ia4all.eu</span>. 
            A carbon copy was dispatched to the operations lead.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-blue-500 font-black uppercase tracking-widest text-xs hover:text-blue-400 transition-all"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="cta" className="py-24 bg-slate-950 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-black text-white mb-6 leading-tight uppercase tracking-tight">
              Engineer Your <br/><span className="text-blue-400">AI Future.</span>
            </h2>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed font-medium">
              Ready to move beyond PoCs? Our team is available for architectural consultations and strategic workflow deployments across the EU.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mr-4 border border-slate-800 text-blue-500 group-hover:border-blue-500/50 transition-colors">
                  <Send size={20} />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-widest text-xs mb-1">Direct Inquiries</h4>
                  <a href="mailto:help@ia4all.eu" className="text-slate-400 hover:text-white transition-colors font-medium">help@ia4all.eu</a>
                </div>
              </div>
              <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-sm mt-12">
                <p className="text-sm text-slate-300 leading-relaxed italic font-medium">
                  "All submissions are dual-routed to our primary operations desk at help@ia4all.eu and CC'd to technical leadership for redundancy."
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 p-8 rounded-sm border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Full Name</label>
                  <input 
                    id="name"
                    required
                    type="text" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-700 font-medium"
                    placeholder="E.g. Alexander Vance"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Company Email</label>
                  <input 
                    id="email"
                    required
                    type="email" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-700 font-medium"
                    placeholder="name@company.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="scope" className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Project Scope</label>
                <div className="relative">
                  <select 
                    id="scope"
                    className="w-full bg-slate-950 border border-slate-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer font-medium"
                  >
                    <option>Workflow Automation</option>
                    <option>RAG & Knowledge Systems</option>
                    <option>AI Governance Audit</option>
                    <option>Custom Enterprise Agent</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <ChevronRight size={16} className="rotate-90" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-slate-950 border border-slate-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-700 font-medium"
                  placeholder="Describe your current operational bottleneck..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-black uppercase tracking-[0.2em] py-5 rounded-sm transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center space-x-2 disabled:opacity-50 group text-[11px]"
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Establishing Connection...
                  </span>
                ) : (
                  <>
                    <span>Submit Strategic Request</span>
                    <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
              
              <div className="flex items-center justify-center space-x-4 text-[9px] text-slate-600 uppercase tracking-[0.3em] font-black">
                <span>GDPR Compliant</span>
                <span className="w-1 h-1 rounded-full bg-slate-800"></span>
                <span>TLS 1.3</span>
                <span className="w-1 h-1 rounded-full bg-slate-800"></span>
                <span>EU Sovereignty</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

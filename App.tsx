
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Components
import Hero from './components/Hero';
import Narrative from './components/Narrative';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Industries from './components/Industries';
import Differentiators from './components/Differentiators';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Approach', href: '#methodology' },
    { name: 'Industries', href: '#industries' },
    { name: 'Why Us', href: '#why-us' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 overflow-x-hidden text-slate-100 selection:bg-blue-600 selection:text-white font-['Inter']">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/95 border-b border-slate-900/50 backdrop-blur-xl py-2' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            <div className="flex items-center space-x-5 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              {/* Diamond Rhombus Logo */}
              <div className="relative w-9 h-9 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-blue-600 fill-none transition-transform duration-500 group-hover:rotate-90" style={{ filter: 'drop-shadow(0 0 10px rgba(37, 99, 235, 0.5))' }}>
                  {/* Outer Rhombus */}
                  <path d="M50 5 L95 50 L50 95 L5 50 Z" className="stroke-current stroke-[6]" strokeLinejoin="miter" />
                  {/* Inner Rhombus Decoration */}
                  <path d="M50 25 L75 50 L50 75 L25 50 Z" className="fill-blue-600/20 stroke-blue-500 stroke-[2]" />
                  {/* Central Core Point */}
                  <rect x="46" y="46" width="8" height="8" className="fill-blue-400 rotate-45" />
                </svg>
              </div>

              {/* Wordmark */}
              <div className="flex items-center">
                <div className="relative flex flex-col pt-0.5">
                   <div className="flex items-baseline">
                      <span className="text-2xl font-black tracking-tighter text-white">IA</span>
                      <span className="text-2xl font-light tracking-[0.15em] text-slate-300 ml-1">4ALL</span>
                      <span className="ml-2 text-[10px] font-black text-blue-600 tracking-[0.2em] border-l border-slate-800 pl-2">EU</span>
                   </div>
                </div>
              </div>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 hover:text-blue-500 transition-all">
                  {link.name}
                </a>
              ))}
              <a href="#cta" className="bg-blue-600 hover:bg-blue-500 text-white px-7 py-2.5 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-blue-600/20">
                Contact Lead
              </a>
            </div>

            {/* Mobile Nav Trigger */}
            <button className="md:hidden text-slate-300 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-slate-900 p-8 space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="block text-sm font-black uppercase tracking-widest text-slate-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#cta" onClick={() => setMobileMenuOpen(false)} className="block bg-blue-600 text-white py-4 rounded-sm text-center text-xs font-black uppercase tracking-widest">
              Contact Lead
            </a>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        <Hero />
        <Narrative />
        <Services />
        <Methodology />
        <Industries />
        <Differentiators />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Palette, FlaskConical, Rocket, Shield, Crown, PawPrint, Utensils, Zap, Users, Clock, ChevronRight, Star, X, Check } from 'lucide-react';
import logo from './logo.png';

const App = () => {
  const [activeTheme, setActiveTheme] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for header effects
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const data = {
    packages: [
      { id: 1, name: "The Essential", price: 275, time: "60m", kids: 8, activities: 3, accent: "#b2d3c2", popular: false },
      { id: 2, name: "The Signature", price: 375, time: "90m", kids: 12, activities: 4, accent: "#e599a7", popular: true },
      { id: 3, name: "The Grand", price: 475, time: "120m", kids: 15, activities: 5, accent: "#fbbf24", popular: false }
    ],
    themes: [
      { id: 'art', title: "Artist Studio", icon: <Palette />, slogan: "Canvas & Color", desc: "A mess-free professional art studio brought to your living room. Every child leaves with a canvas masterpiece.", tags: ["Canvas", "Textured Paint"] },
      { id: 'science', title: "Science Lab", icon: <FlaskConical />, slogan: "Bubbles & Slime", desc: "Interactive experiments that wow. We handle the goggles, the lab coats, and the heavy cleanup.", tags: ["Volcanoes", "Custom Slime"] },
      { id: 'magic', title: "Unicorn World", icon: <Sparkles />, slogan: "Dust & Dreams", desc: "A journey through storytelling and wand-making. Pure magic for the believers.", tags: ["Wand Craft", "Fairy Dust"] },
      { id: 'royal', title: "Royal Ball", icon: <Crown />, slogan: "Grace & Crowns", desc: "A high-end princess experience focusing on etiquetten games, dance, and custom crown design.", tags: ["Etiquette", "Royal Dance"] }
    ]
  };

  return (
    <div className="min-h-screen bg-[#fcfaf2] text-slate-900 font-sans antialiased">
      
      {/* MOBILE FLOATING CONTACT BUTTON */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a href="mailto:hello@lenaslittleexperiences.com" className="bg-slate-900 text-white p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce">
          <Zap size={24} fill="currentColor" />
        </a>
      </div>

      {/* DYNAMIC NAVIGATION */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 px-6 py-4 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className={`transition-all duration-300 ${scrolled ? 'w-10 h-10' : 'w-12 h-12'} rounded-full border border-slate-200`} />
            <span className="font-black tracking-tighter text-xl uppercase italic">Lena's</span>
          </div>
          <button className="text-xs font-black uppercase tracking-widest bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-[#e599a7] transition-colors">
            Book Now
          </button>
        </div>
      </nav>

      {/* HERO SECTION - Optimized for Mobile Viewport */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block py-1 px-4 rounded-full bg-[#b2d3c2]/20 text-[#4a7c64] text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            Luxury Mobile Children's Events
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9] mb-6">
            Everything <br/> 
            <span className="text-[#e599a7] italic font-serif leading-none">Delivered.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-xl mx-auto mb-10">
            We bring the studio, the lab, or the kingdom to you. You provide the space; we provide the magic.
          </p>
        </div>
        {/* Background Decorative Element */}
        <div className="absolute top-20 right-[-10%] w-64 h-64 bg-[#e599a7]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-[-10%] w-64 h-64 bg-[#b2d3c2]/10 rounded-full blur-3xl" />
      </section>

      {/* PACKAGES - Horizontal Scroll on Mobile */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-8 snap-x no-scrollbar">
            {data.packages.map((pkg) => (
              <div key={pkg.id} className="min-w-[85vw] md:min-w-0 snap-center bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col relative overflow-hidden">
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-[#e599a7] text-white px-6 py-2 rounded-bl-3xl text-[10px] font-black uppercase tracking-widest">
                    Popular
                  </div>
                )}
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-6xl font-black tracking-tighter">${pkg.price}</span>
                </div>
                <div className="space-y-4 mb-10 flex-grow">
                  {[
                    { icon: <Clock size={16}/>, text: pkg.time },
                    { icon: <Users size={16}/>, text: `Up to ${pkg.kids} Guests` },
                    { icon: <Zap size={16}/>, text: `${pkg.activities} Activities` },
                    { icon: <Check size={16}/>, text: "Full Cleanup Included" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-600 font-semibold text-sm">
                      <div className="text-[#b2d3c2]">{item.icon}</div>
                      {item.text}
                    </div>
                  ))}
                </div>
                <button style={{ backgroundColor: pkg.accent }} className="w-full py-4 rounded-2xl text-white font-black uppercase tracking-widest shadow-lg active:scale-95 transition-transform">
                  Reserve This
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THEMES - Interactive Modal Experience */}
      <section className="py-20 px-6 bg-slate-900 rounded-t-[3rem] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Choose a Theme</h2>
            <p className="text-slate-400 font-medium">Click to explore the experience details.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.themes.map((theme) => (
              <button 
                key={theme.id}
                onClick={() => setActiveTheme(theme)}
                className="group relative aspect-square bg-slate-800 rounded-[2rem] p-6 flex flex-col items-center justify-center text-center transition-all hover:bg-[#e599a7]"
              >
                <div className="mb-4 transition-transform group-hover:scale-110 group-hover:rotate-6">
                  {React.cloneElement(theme.icon, { size: 32 })}
                </div>
                <span className="font-bold text-sm md:text-base leading-tight">{theme.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* THEME OVERLAY MODAL */}
      {activeTheme && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/90 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-lg rounded-[3rem] p-8 md:p-12 relative text-slate-900 overflow-hidden">
            <button onClick={() => setActiveTheme(null)} className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full text-slate-400 hover:text-slate-900">
              <X size={24} />
            </button>
            <div className="text-[#e599a7] mb-6">{React.cloneElement(activeTheme.icon, { size: 48 })}</div>
            <h3 className="text-3xl font-black mb-2">{activeTheme.title}</h3>
            <p className="text-[#b2d3c2] font-black uppercase tracking-widest text-xs mb-6">{activeTheme.slogan}</p>
            <p className="text-slate-500 leading-relaxed mb-8 font-medium">{activeTheme.desc}</p>
            <div className="flex flex-wrap gap-2">
              {activeTheme.tags.map(tag => (
                <span key={tag} className="px-4 py-2 bg-slate-50 rounded-full text-[10px] font-black uppercase tracking-tighter text-slate-400 border border-slate-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-slate-900 px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto border-t border-slate-800 pt-10">
          <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">Ready for the best day ever?</p>
          <a href="mailto:hello@lenaslittleexperiences.com" className="text-3xl md:text-5xl font-black text-white hover:text-[#e599a7] transition-colors break-all">
            hello@lenaslittleexperiences.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
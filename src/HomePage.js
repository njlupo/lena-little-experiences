import React, { useState, useEffect } from 'react';
import { Calendar, ChevronRight, Clock, Users, Sparkles, Check, X, Instagram, Send, Mail, Phone, Menu } from 'lucide-react';
import { packages, themes, customTheme, contactInfo } from './data';
import logo from './logo.png';

const HomePage = ({ setView, setBooking, booking, setBookingStep }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTheme, setActiveTheme] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeBooking = (theme) => {
    setBooking({
      ...booking, 
      theme,
      package: null // Reset package when selecting theme
    });
    setBookingStep(2);
    setActiveTheme(null);
    setView('booking');
  };

  const handlePackageBooking = (pkg) => {
    setBooking({
      ...booking, 
      package: {...pkg, originalPrice: pkg.price}, 
      guests: pkg.kids,
      theme: null // Reset theme when selecting package
    });
    setBookingStep(1);
    setView('booking');
  };

  const handleStartBooking = () => {
    setBooking({
      theme: null,
      package: null,
      date: '',
      time: '',
      childName: '',
      childAge: '',
      parentName: '',
      email: '',
      phone: '',
      address: '',
      guests: 8,
      specialRequests: ''
    });
    setBookingStep(1);
    setView('booking');
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fcfaf2] text-slate-900 font-sans antialiased">
      
      {/* Fixed Booking Button */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <button 
          onClick={handleStartBooking}
          className="bg-[#e599a7] text-white px-5 py-3 md:px-8 md:py-4 rounded-full shadow-[0_20px_50px_rgba(229,153,167,0.3)] flex items-center gap-2 font-black uppercase tracking-wider hover:bg-[#d88996] transition-all hover:scale-105 active:scale-95 text-sm md:text-base"
        >
          <Calendar size={18} className="md:w-5 md:h-5" />
          <span>Book Now</span>
        </button>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 px-4 md:px-6 py-3 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className={`transition-all duration-500 ease-in-out ${scrolled ? 'w-10 h-10' : 'w-14 h-14 md:w-16 md:h-16'}`}>
              <img src={logo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-black tracking-tighter text-lg md:text-2xl uppercase italic leading-none">
              Lena's Little Experiences
            </span>
          </div>

          {/* Desktop Links & Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Desktop Only Links */}
            <div className="hidden md:flex items-center gap-8 mr-4">
              <button 
                onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-sm font-black uppercase tracking-widest text-slate-900 hover:text-[#e599a7] transition-all"
              >
                Home
              </button>
              <button
  onClick={() => setView('about')}
  className="px-5 py-2 rounded-full bg-white border-2 border-[#e599a7] text-[#e599a7] text-sm font-black uppercase tracking-widest
             hover:bg-[#e599a7] hover:text-white
             transition-all duration-300 shadow-sm hover:shadow-md"
>
  About me
</button>




            </div>

            {/* Book Now (Hidden on very small screens, shown on MD+) */}
            <button 
              onClick={handleStartBooking}
              className="hidden sm:block text-xs md:text-sm font-black uppercase tracking-widest bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-[#e599a7] transition-all"
            >
              Book Now
            </button>

            {/* Hamburger Button (Mobile Only) */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-900"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl transition-all duration-300 overflow-hidden md:hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col p-6 gap-6">
            <button 
              onClick={() => { setView('home'); setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-left text-sm font-black uppercase tracking-widest text-slate-900"
            >
              Home
            </button>
            <button 
              onClick={() => { setView('about'); setIsMenuOpen(false); }}
              className="text-left text-sm font-black uppercase tracking-widest text-slate-900"
            >
              About
            </button>
            <button 
              onClick={() => { handleStartBooking(); setIsMenuOpen(false); }}
              className="text-left text-sm font-black uppercase tracking-widest text-[#e599a7]"
            >
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-48 pb-16 md:pb-24 px-4 md:px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#b2d3c2]/20 text-[#4a7c64] text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-6">
            Luxury Mobile Children's Events
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tight leading-[0.9] mb-6">
            Everything <br/> 
            <span className="text-[#e599a7] italic font-serif leading-none">Delivered.</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-500 font-medium max-w-2xl mx-auto mb-10">
            We bring the studio, the lab, or the kingdom to you. <br className="hidden md:block" /> 
            You provide the space; we provide the magic.
          </p>
        </div>
        <div className="absolute top-20 right-[-10%] w-64 h-64 md:w-96 md:h-96 bg-[#e599a7]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-[-10%] w-64 h-64 md:w-96 md:h-96 bg-[#b2d3c2]/10 rounded-full blur-[100px]" />
      </section>

      {/* Packages Section */}
      <section className="py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-3">Our Packages</h2>
          <p className="text-slate-500 text-lg mb-10">Choose the perfect fit for your celebration</p>
          <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-8 pb-10 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {packages.map((pkg) => (
              <div key={pkg.id} className="min-w-[85vw] md:min-w-0 snap-center bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col relative overflow-hidden transition-all hover:translate-y-[-8px]">
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-[#e599a7] text-white px-6 py-2 rounded-bl-[2rem] text-[10px] font-black uppercase tracking-widest">
                    Popular
                  </div>
                )}
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-6xl font-black tracking-tighter">${pkg.price}</span>
                </div>
                <div className="space-y-4 mb-10 flex-grow">
                  {[
                    { icon: <Clock size={18} />, text: pkg.time },
                    { icon: <Users size={18} />, text: `Up to ${pkg.kids} Children` },
                    { icon: <Sparkles size={18} />, text: `${pkg.activities} Activities` }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-slate-600 font-bold text-sm md:text-base">
                      <div className="text-[#b2d3c2]">{item.icon}</div>
                      {item.text}
                    </div>
                  ))}
                </div>
                <div className="mb-8 pt-6 border-t border-slate-50">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-4">Includes:</p>
                  {pkg.includes.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-600 mb-2">
                      <Check size={14} className="text-[#b2d3c2] mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => handlePackageBooking(pkg)}
                  style={{ backgroundColor: pkg.accent }} 
                  className="w-full py-5 rounded-2xl text-white font-black uppercase tracking-widest shadow-lg active:scale-95 transition-all hover:brightness-110"
                >
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-slate-900 rounded-t-[3rem] md:rounded-t-[5rem] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">Magical Themes</h2>
            <p className="text-slate-400 font-medium text-lg">Click to explore each experience</p>
          </div>

          {/* Featured Custom Theme Card */}
          <div className="mb-8 md:mb-12">
            <button 
              onClick={() => setActiveTheme(customTheme)}
              className="w-full group relative bg-gradient-to-br from-[#e599a7] to-[#fbbf24] rounded-[3rem] p-8 md:p-12 transition-all hover:scale-[1.02] border-4 border-white/20 hover:border-white/40"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
                <div className="text-white transition-transform group-hover:scale-110 group-hover:rotate-12">
                  {React.createElement(customTheme.icon, { size: 64, className: "w-12 h-12 md:w-16 md:h-16" })}
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl md:text-4xl font-black text-white">{customTheme.title}</h3>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-white font-black text-sm uppercase tracking-wider">+${customTheme.additionalCost}</span>
                    </div>
                  </div>
                  <p className="text-white/90 text-base md:text-lg mb-4">
                    {customTheme.homepageDescription}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {customTheme.tags.map((tag) => (
                      <span key={tag} className="text-xs font-bold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-white/80 group-hover:translate-x-2 transition-transform">
                  <ChevronRight size={32} />
                </div>
              </div>
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {themes.map((theme) => {
              const IconComponent = theme.icon;
              return (
                <button 
                  key={theme.id}
                  onClick={() => setActiveTheme(theme)}
                  className="group relative aspect-square bg-slate-800/50 rounded-[2rem] md:rounded-[3rem] p-6 flex flex-col items-center justify-center text-center transition-all hover:bg-[#e599a7] hover:scale-105 border border-slate-800 hover:border-[#e599a7]"
                >
                  <div className="mb-4 transition-transform group-hover:scale-110 group-hover:rotate-6">
                    <IconComponent size={32} className="md:w-10 md:h-10" />
                  </div>
                  <span className="font-bold text-xs md:text-base lg:text-lg leading-tight uppercase tracking-wider">{theme.title}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-16 md:mt-24 text-center">
            <button 
              onClick={handleStartBooking}
              className="bg-[#e599a7] text-white px-10 md:px-14 py-5 md:py-6 rounded-full font-black uppercase tracking-widest text-sm md:text-lg hover:bg-[#d88996] transition-all inline-flex items-center gap-3 shadow-2xl"
            >
              Start Booking
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Theme Details Modal */}
      {activeTheme && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-900/90 backdrop-blur-xl">
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-12 relative text-slate-900 overflow-hidden max-h-[90vh] overflow-y-auto shadow-2xl">
            <button onClick={() => setActiveTheme(null)} className="absolute top-6 right-6 p-3 bg-slate-100 rounded-full text-slate-400 hover:text-slate-900 transition-colors">
              <X size={24} />
            </button>
            <div className="text-[#e599a7] mb-6">
              {React.createElement(activeTheme.icon, { size: 48 })}
            </div>
            <h3 className="text-3xl md:text-5xl font-black mb-2">{activeTheme.title}</h3>
            <p className="text-[#b2d3c2] font-black uppercase tracking-widest text-xs md:text-sm mb-6">{activeTheme.slogan}</p>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">{activeTheme.desc}</p>
            
            <div className="mb-10">
              <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-6">Activities Include:</h4>
              <div className="grid grid-cols-1 gap-3">
                {activeTheme.activities.map((activity, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-50 rounded-2xl p-4">
                    <div className="w-10 h-10 bg-[#e599a7] rounded-full flex items-center justify-center text-white font-black shrink-0">
                      {i + 1}
                    </div>
                    <span className="font-bold text-slate-700 text-sm md:text-base">{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleThemeBooking(activeTheme)}
              className="w-full bg-[#e599a7] text-white py-5 rounded-[2rem] font-black uppercase tracking-widest text-lg hover:bg-[#d88996] transition-all shadow-xl"
            >
              Book This Theme
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 px-4 md:px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto border-t border-slate-800 pt-12">
          <p className="text-slate-500 font-black uppercase tracking-[0.3em] text-[10px] mb-8">Ready for the best day ever?</p>
          
          <div className="space-y-6 mb-10">
            <a href={`mailto:${contactInfo.email}`} className="flex items-center justify-center gap-3 text-2xl md:text-4xl font-black text-white hover:text-[#e599a7] transition-all">
              <Mail size={32} className="md:w-10 md:h-10" />
              <span className="break-all">{contactInfo.email}</span>
            </a>
            
            {contactInfo.phone && (
              <a href={`tel:${contactInfo.phone}`} className="flex items-center justify-center gap-3 text-xl md:text-2xl font-bold text-white hover:text-[#e599a7] transition-all">
                <Phone size={24} className="md:w-7 md:h-7" />
                <span>{contactInfo.phone}</span>
              </a>
            )}
          </div>

          <div className="flex items-center justify-center gap-6 pt-8 border-t border-slate-800">
            {contactInfo.instagramUrl && (
              <a href={contactInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-[#e599a7] transition-all group">
                <Instagram size={24} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold">{contactInfo.instagram}</span>
              </a>
            )}
            
            {contactInfo.tiktokUrl && (
              <a href={contactInfo.tiktokUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-[#e599a7] transition-all group">
                <Send size={24} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold">{contactInfo.tiktok}</span>
              </a>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
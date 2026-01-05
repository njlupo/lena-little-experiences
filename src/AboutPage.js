import React from 'react';
import {
  ArrowLeft,
  Heart,
  Sparkles,
  ShieldCheck,
  Zap,
  Instagram,
  MessageCircle,
  Mail,
  Phone
} from 'lucide-react';
import { aboutMe, contactInfo } from './data';
import ElenaPhoto from './photos/AboutMePhotoLenaLittleExperiences.jpeg';

const AboutPage = ({ setView }) => {
  return (
    <div className="min-h-screen bg-[#fcfaf2] text-[#2d3748] overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-100 px-4 py-4 animate-in fade-in slide-in-from-top duration-700">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <button
            onClick={() => setView('home')}
            className="group flex items-center gap-2 font-bold text-slate-600 hover:text-[#e599a7] transition-all"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back
          </button>
          <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-black text-slate-400 animate-pulse">
            Logic meets Magic
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-8 md:py-12">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:items-start mb-24">
          {/* Text Content with Staggered Entrance */}
          <div className="order-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-[#e599a7] rounded-full text-xs font-bold animate-in fade-in slide-in-from-left duration-500 fill-mode-both">
              <Sparkles size={14} className="animate-spin-slow" />
              <span>MEET THE ARCHITECT</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight animate-in fade-in slide-in-from-left duration-700 delay-200 fill-mode-both">
              About <span className="text-[#e599a7]">Me</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed animate-in fade-in slide-in-from-left duration-700 delay-300 fill-mode-both">
              {aboutMe.bio}
            </p>

            {/* Contact Info Cards with Hover Lift */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-in fade-in slide-in-from-bottom duration-700 delay-500 fill-mode-both">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 bg-white border border-slate-100 p-4 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-[#e599a7] group-hover:rotate-12 transition-transform">
                  <Mail size={18} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Email Me</p>
                  <p className="text-sm font-bold truncate">{contactInfo.email}</p>
                </div>
              </a>

              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 bg-white border border-slate-100 p-4 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-[#b2d3c2] group-hover:rotate-12 transition-transform">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Call / Text</p>
                  <p className="text-sm font-bold">{contactInfo.phone}</p>
                </div>
              </a>
            </div>
          </div>

          {/* THE PHOTO: Ultra-Smooth Hover & Floating Animation */}
          <div className="order-2 relative flex justify-center animate-in fade-in zoom-in duration-1000 delay-300 fill-mode-both">
            {/* Background Magic Glows */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#fbbf24] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#e599a7] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div
              className="
                relative
                aspect-[3/4] sm:aspect-[4/5]
                max-w-[280px] sm:max-w-[360px] lg:max-w-none
                bg-white p-3
                rounded-[3rem]
                shadow-2xl
                lg:rotate-3
                
                /* HOVER ANIMATIONS */
                hover:rotate-0 
                hover:scale-[1.05] 
                hover:shadow-[0_20px_50px_rgba(229,153,167,0.3)]
                
                transition-all 
                duration-700 
                ease-out
                cursor-pointer
                animate-float
                group
              "
            >
              <div className="overflow-hidden rounded-[2.5rem] w-full h-full">
                <img
                  src={ElenaPhoto}
                  alt="Elena Moisidis"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Floating Heart Badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#e599a7] p-4 rounded-2xl shadow-lg rotate-12 transition-all duration-500 group-hover:rotate-0 group-hover:scale-110 group-hover:bg-[#fbbf24]">
                <Heart className="text-white fill-white" size={24} />
              </div>
            </div>
          </div>
        </section>

        {/* Approach Cards with Hover Tilt */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutMe.approach.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-50 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-[#fcfaf2] group-hover:bg-[#e599a7] group-hover:scale-110 transition-all rounded-xl flex items-center justify-center mb-6">
                  {index === 0 && <Zap size={20} className="text-[#e599a7] group-hover:text-white group-hover:animate-bounce" />}
                  {index === 1 && <ShieldCheck size={20} className="text-[#e599a7] group-hover:text-white" />}
                  {index === 2 && <Heart size={20} className="text-[#e599a7] group-hover:text-white group-hover:animate-pulse" />}
                </div>
                <h3 className="text-xl font-black mb-3 group-hover:text-[#e599a7] transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story Section - High Contrast Reveal */}
        <section className="bg-[#2d3748] rounded-[3rem] md:rounded-[4rem] p-8 md:p-20 mb-24 text-white relative overflow-hidden shadow-2xl group transition-all duration-700 hover:shadow-pink-200/20">
          <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:rotate-12 transition-transform duration-1000">
             <Sparkles size={120} />
          </div>
          <div className="max-w-3xl relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-10 group-hover:translate-x-2 transition-transform">The Full Story</h2>
            <div className="space-y-8 opacity-90">
              {aboutMe.story.map((p, i) => (
                <p key={i} className="text-lg md:text-xl leading-relaxed font-light hover:opacity-100 transition-opacity">
                  {p}
                </p>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2 mt-12">
              {aboutMe.qualifications.map((q, i) => (
                <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10 hover:bg-white/20 transition-colors cursor-default">
                  {q}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Socials with Bounce Effect */}
        <div className="flex flex-col items-center gap-6 mb-24">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">Follow the Magic</p>
          <div className="flex gap-4">
            <a
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-white px-8 py-5 rounded-2xl shadow-sm font-bold hover:text-[#e599a7] hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <Instagram size={20} /> Instagram
            </a>
            <a
              href={contactInfo.tiktokUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-white px-8 py-5 rounded-2xl shadow-sm font-bold hover:text-[#e599a7] hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <MessageCircle size={20} /> TikTok
            </a>
          </div>
        </div>
      </main>

      {/* CUSTOM KEYFRAME ANIMATIONS */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(3deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .fill-mode-both {
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
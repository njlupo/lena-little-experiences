import React from 'react';
import { X } from 'lucide-react';

const ThemeDetailsModal = ({ theme, onClose, onBook }) => {
  if (!theme) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-900/90 backdrop-blur-xl">
      <div className="bg-white w-full max-w-2xl rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-12 relative text-slate-900 overflow-hidden max-h-[90vh] overflow-y-auto shadow-2xl">
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 p-3 bg-slate-100 rounded-full text-slate-400 hover:text-slate-900 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className={theme.id === 'custom' ? 'text-white' : 'text-[#e599a7]'}>
          {React.createElement(theme.icon, { size: 48 })}
        </div>
        
        <h3 className="text-3xl md:text-5xl font-black mb-2 mt-6">{theme.title}</h3>
        <p className="text-[#b2d3c2] font-black uppercase tracking-widest text-xs md:text-sm mb-6">
          {theme.slogan}
        </p>
        
        {theme.id === 'custom' && (
          <div className="mb-6 p-4 bg-gradient-to-r from-[#e599a7]/10 to-[#fbbf24]/10 rounded-2xl border-2 border-[#e599a7]/20">
            <p className="text-sm font-bold text-slate-700">
              Additional cost: <span className="text-[#e599a7] text-lg">${theme.additionalCost}</span> added to package price
            </p>
          </div>
        )}
        
        <p className="text-slate-600 text-lg leading-relaxed mb-10">{theme.desc}</p>
        
        <div className="mb-10">
          <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-6">
            Activities Include:
          </h4>
          <div className="grid grid-cols-1 gap-3">
            {theme.activities.map((activity, i) => (
              <div key={i} className="flex items-center gap-4 bg-slate-50 rounded-2xl p-4">
                <div className="w-10 h-10 bg-[#e599a7] rounded-full flex items-center justify-center text-white font-black shrink-0">
                  {i + 1}
                </div>
                <span className="font-bold text-slate-700 text-sm md:text-base">{activity}</span>
              </div>
            ))}
          </div>
        </div>

        {onBook && (
          <button
            onClick={onBook}
            className="w-full bg-[#e599a7] text-white py-5 rounded-[2rem] font-black uppercase tracking-widest text-lg hover:bg-[#d88996] transition-all shadow-xl"
          >
            Book This Theme
          </button>
        )}
      </div>
    </div>
  );
};

export default ThemeDetailsModal;
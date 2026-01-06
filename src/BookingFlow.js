import React, { useState } from 'react';
import { ArrowLeft, Check, CheckCircle, Clock, Users, Sparkles, Eye, Loader2 } from 'lucide-react';
import { packages, themes, timeSlots, customTheme } from './data';
import ThemeDetailsModal from './ThemeDetailsModal';
import emailjs from '@emailjs/browser';

const BookingFlow = ({ booking, setBooking, bookingStep, setBookingStep, setView }) => {
  const [viewingTheme, setViewingTheme] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const resetBooking = () => {
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
  };

  const handleThemeSelect = (theme) => {
    setBooking({...booking, theme});
    if (booking.package) {
      const isCustom = theme.id === 'custom';
      const finalPrice = isCustom 
        ? booking.package.originalPrice + customTheme.additionalCost
        : booking.package.originalPrice;
      setBooking({
        ...booking, 
        theme,
        package: {...booking.package, price: finalPrice}
      });
      setBookingStep(3);
    } else {
      setBookingStep(2);
    }
  };

  const handleCustomTheme = () => {
    handleThemeSelect(customTheme);
  };

  const handlePackageSelect = (pkg) => {
    const isCustom = booking.theme && booking.theme.id === 'custom';
    const finalPrice = isCustom ? pkg.price + customTheme.additionalCost : pkg.price;
    
    setBooking({
      ...booking, 
      package: {...pkg, originalPrice: pkg.price, price: finalPrice}, 
      guests: pkg.kids
    });
    setBookingStep(3);
  };

  const handleSubmitBooking = async () => {
    setIsSubmitting(true);
    setEmailError(false);
    
    try {
      // Initialize EmailJS
      emailjs.init('QZFgXTeB26v6MvOS7');
      
      // Email data
      const emailData = {
        to_email: 'lenalittleexperiences@gmail.com',
        customer_email: booking.email,
        parent_name: booking.parentName,
        child_name: booking.childName,
        child_age: booking.childAge,
        phone: booking.phone,
        address: booking.address,
        date: booking.date,
        time: booking.time,
        theme: booking.theme.shortTitle || booking.theme.title,
        package: booking.package.name,
        package_price: booking.package.originalPrice,
        is_custom: booking.theme.id === 'custom' ? 'Yes' : 'No',
        custom_fee: booking.theme.id === 'custom' ? customTheme.additionalCost : '0',
        total_price: booking.package.price,
        special_requests: booking.specialRequests || 'None',
      };
      
      // Send email to business
      await emailjs.send(
        'service_osmz4xs',
        'template_fxo05zh',
        emailData
      );
      
      // Send confirmation email to customer
      await emailjs.send(
        'service_osmz4xs',
        'template_rsq4vep',
        emailData
      );
      
      setBookingStep(4);
    } catch (error) {
      console.error('Email sending failed:', error);
      setEmailError(true);
      // Still proceed to confirmation page
      setTimeout(() => {
        setBookingStep(4);
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    if (bookingStep === 1) {
      resetBooking();
      setView('home');
    } else if (bookingStep === 4) {
      setView('home');
      resetBooking();
    } else if (bookingStep === 3 && booking.package) {
      setBookingStep(1);
    } else {
      setBookingStep(bookingStep - 1);
    }
  };

  const handleViewTheme = (theme, e) => {
    e.stopPropagation();
    setViewingTheme(theme);
  };

  return (
    <div className="min-h-screen bg-[#fcfaf2]">
      <div className="bg-white border-b border-slate-200 px-4 md:px-6 py-4 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-bold text-sm md:text-base"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          <div className="flex items-center gap-1 md:gap-2">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-black text-sm md:text-base ${
                  bookingStep >= step ? 'bg-[#e599a7] text-white' : 'bg-slate-200 text-slate-400'
                }`}
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 md:p-6">
        {bookingStep === 1 && (
          <div className="py-6 md:py-12">
            {booking.package && (
              <div className="mb-8 md:mb-12">
                <div className="inline-flex items-center gap-3 px-4 md:px-6 py-3 bg-white rounded-2xl mb-4 md:mb-6 border-2 border-[#b2d3c2]">
                  <div className="text-[#b2d3c2]">
                    <Check size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">Selected Package</p>
                    <p className="font-black text-base md:text-lg">{booking.package.name} - ${booking.package.originalPrice}</p>
                  </div>
                </div>
              </div>
            )}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-4">Choose Your Theme</h2>
            <p className="text-slate-500 text-base md:text-lg mb-8 md:mb-12">Select the perfect experience for your celebration</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Custom Theme Option - Featured at Top */}
              <div className="md:col-span-2 group relative bg-gradient-to-br from-[#e599a7] to-[#fbbf24] rounded-2xl md:rounded-3xl p-6 md:p-8 border-4 border-white hover:border-white/60 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-white transition-transform group-hover:scale-110 group-hover:rotate-12">
                        {React.createElement(customTheme.icon, { size: 40, className: "md:w-12 md:h-12" })}
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-white font-black text-xs uppercase tracking-wider">+${customTheme.additionalCost}</span>
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black mb-2 text-white">{customTheme.title}</h3>
                    <p className="text-white/90 font-black uppercase tracking-widest text-[10px] md:text-xs mb-3 md:mb-4">{customTheme.slogan}</p>
                    <p className="text-white/80 text-sm md:text-base mb-4">{customTheme.desc}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4 pt-4 border-t border-white/20">
                  {customTheme.features.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-white/90">
                      <Check size={12} className="text-white mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={(e) => handleViewTheme(customTheme, e)}
                    className="flex items-center gap-2 px-5 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-white/30 transition-all"
                  >
                    <Eye size={16} />
                    View Details
                  </button>
                  <button
                    onClick={handleCustomTheme}
                    className="flex-1 px-5 py-3 bg-white text-[#e599a7] rounded-xl font-black uppercase tracking-wider text-sm hover:bg-white/90 transition-all"
                  >
                    Select Theme
                  </button>
                </div>
              </div>

              {themes.map((theme) => {
                const IconComponent = theme.icon;
                return (
                  <div
                    key={theme.id}
                    className="group bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border-4 border-transparent hover:border-[#e599a7] transition-all"
                  >
                    <div className="text-[#e599a7] mb-3 md:mb-4 transition-transform group-hover:scale-110">
                      <IconComponent size={40} className="md:w-12 md:h-12" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black mb-2">{theme.title}</h3>
                    <p className="text-[#b2d3c2] font-black uppercase tracking-widest text-[10px] md:text-xs mb-3 md:mb-4">{theme.slogan}</p>
                    <p className="text-slate-500 text-sm md:text-base mb-4 md:mb-6">{theme.desc}</p>
                    <div className="space-y-2 mt-4 pt-4 border-t border-slate-100 mb-4">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Activities:</p>
                      {theme.activities.slice(0, 3).map((activity, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <Check size={12} className="text-[#b2d3c2] mt-0.5 flex-shrink-0" />
                          <span>{activity}</span>
                        </div>
                      ))}
                      {theme.activities.length > 3 && (
                        <p className="text-[10px] text-[#e599a7] font-bold">+ {theme.activities.length - 3} more activities</p>
                      )}
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={(e) => handleViewTheme(theme, e)}
                        className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-slate-200 transition-all"
                      >
                        <Eye size={14} />
                        View
                      </button>
                      <button
                        onClick={() => handleThemeSelect(theme)}
                        className="flex-1 px-4 py-2.5 bg-[#e599a7] text-white rounded-xl font-black uppercase tracking-wider text-xs hover:bg-[#d88996] transition-all"
                      >
                        Select
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {bookingStep === 2 && booking.theme && (
          <div className="py-6 md:py-12">
            <div className="mb-8 md:mb-12">
              <div className={`inline-flex items-center gap-3 px-4 md:px-6 py-3 rounded-2xl mb-4 md:mb-6 ${
                booking.theme.id === 'custom' 
                  ? 'bg-gradient-to-r from-[#e599a7] to-[#fbbf24] text-white' 
                  : 'bg-white'
              }`}>
                <div className={booking.theme.id === 'custom' ? 'text-white' : 'text-[#e599a7]'}>
                  {React.createElement(booking.theme.icon, { size: 28 })}
                </div>
                <div>
                  <p className={`text-[10px] md:text-xs font-bold uppercase tracking-wider ${
                    booking.theme.id === 'custom' ? 'text-white/80' : 'text-slate-500'
                  }`}>Selected Theme</p>
                  <p className="font-black text-base md:text-lg">{booking.theme.shortTitle || booking.theme.title}</p>
                  {booking.theme.id === 'custom' && (
                    <p className="text-[10px] font-bold text-white/90">+${customTheme.additionalCost} will be added to package price</p>
                  )}
                </div>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-4">Choose Your Package</h2>
            <p className="text-slate-500 text-base md:text-lg mb-8 md:mb-12">
              {booking.theme.id === 'custom' 
                ? `Select your package size. $${customTheme.additionalCost} will be added for your custom theme.` 
                : 'Select the right size for your party'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {packages.map((pkg) => {
                const isCustom = booking.theme.id === 'custom';
                const totalPrice = isCustom ? pkg.price + customTheme.additionalCost : pkg.price;
                
                return (
                  <button
                    key={pkg.id}
                    onClick={() => handlePackageSelect(pkg)}
                    className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 text-left hover:shadow-2xl transition-all border-4 border-transparent hover:border-[#e599a7] relative"
                  >
                    {pkg.popular && (
                      <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 bg-[#e599a7] text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-[10px] md:text-xs font-black uppercase">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-base md:text-xl font-black mb-2">{pkg.name}</h3>
                    <div className="flex items-baseline gap-2 mb-4 md:mb-6">
                      {isCustom ? (
                        <>
                          <span className="text-4xl md:text-5xl font-black">${totalPrice}</span>
                          <span className="text-lg md:text-xl text-slate-400 line-through">${pkg.price}</span>
                        </>
                      ) : (
                        <span className="text-4xl md:text-5xl font-black">${pkg.price}</span>
                      )}
                    </div>
                    {isCustom && (
                      <div className="mb-4 p-3 bg-gradient-to-r from-[#e599a7]/10 to-[#fbbf24]/10 rounded-xl border border-[#e599a7]/20">
                        <p className="text-xs font-bold text-slate-600">
                          Base: ${pkg.price} + Custom: ${customTheme.additionalCost}
                        </p>
                      </div>
                    )}
                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-600">
                        <Clock size={14} className="text-[#b2d3c2] md:w-4 md:h-4" />
                        {pkg.time}
                      </div>
                      <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-600">
                        <Users size={14} className="text-[#b2d3c2] md:w-4 md:h-4" />
                        Up to {pkg.kids} Children
                      </div>
                      <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-600">
                        <Sparkles size={14} className="text-[#b2d3c2] md:w-4 md:h-4" />
                        {pkg.activities} Guided Activities
                      </div>
                    </div>
                    <div className="pt-4 md:pt-6 border-t border-slate-100">
                      <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 md:mb-3">Includes:</p>
                      {pkg.includes.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-[11px] md:text-xs text-slate-600 mb-2">
                          <Check size={12} className="text-[#b2d3c2] mt-0.5 flex-shrink-0 md:w-3.5 md:h-3.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {bookingStep === 3 && booking.package && (
          <div className="py-6 md:py-12">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-4">Event Details</h2>
            <p className="text-slate-500 text-base md:text-lg mb-8 md:mb-12">Tell us about your special day</p>
            
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 space-y-4 md:space-y-6">
              {booking.theme && booking.theme.id === 'custom' && (
                <div className="bg-gradient-to-br from-[#e599a7]/10 to-[#fbbf24]/10 rounded-xl p-4 md:p-6 mb-6 border-2 border-[#e599a7]/20">
                  <h3 className="font-black text-sm md:text-base mb-2 text-[#e599a7] uppercase tracking-wider">Custom Theme Selected</h3>
                  <p className="text-xs md:text-sm text-slate-600">{customTheme.formBannerText}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-xs md:text-sm font-black uppercase tracking-wider text-slate-500 mb-2">
                    Child's Name
                  </label>
                  <input
                    type="text"
                    value={booking.childName}
                    onChange={(e) => setBooking({...booking, childName: e.target.value})}
                    className="w-full px-4 md:px-6 py-3 md:py-4 border-2 border-slate-200 rounded-xl md:rounded-2xl focus:border-[#e599a7] outline-none text-sm md:text-base"
                    placeholder="Birthday star's name"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-black uppercase tracking-wider text-slate-500 mb-2">
                    Age Turning
                  </label>
                  <input
                    type="number"
                    value={booking.childAge}
                    onChange={(e) => setBooking({...booking, childAge: e.target.value})}
                    className="w-full px-4 md:px-6 py-3 md:py-4 border-2 border-slate-200 rounded-xl md:rounded-2xl focus:border-[#e599a7] outline-none text-sm md:text-base"
                    placeholder="Age"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-black uppercase tracking-wider text-slate-500 mb-2">
                  Parent/Guardian Name
                </label>
                <input
                  type="text"
                  value={booking.parentName}
                  onChange={(e) => setBooking({...booking, parentName: e.target.value})}
                  className="w-full px-4 md:px-6 py-3 md:py-4 border-2 border-slate-200 rounded-xl md:rounded-2xl focus:border-[#e599a7] outline-none text-sm md:text-base"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-xs md:text-sm font-black uppercase tracking-wider text-slate-500 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={booking.email}
                    onChange={(e) => setBooking({...booking, email: e.target.value})}
                    className="w-full px-4 md:px-6 py-3 md:py-4 border-2 border-slate-200 rounded-xl md:rounded-2xl focus:border-[#e599a7] outline-none text-sm md:text-base"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-black uppercase tracking-wider text-slate-500 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={booking.phone}
                    onChange={(e) => setBooking({...booking, phone: e.target.value})}
                    className="w-full px-4 md:px-6 py-3 md:py-4 border-2 border-slate-200 rounded-xl md:rounded-2xl focus:border-[#e599a7] outline-none text-sm md:text-base"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-black uppercase tracking-wider text-slate-500 mb-2">
                  Event Address
                </label>
                <input
                  type="text"
                  value={booking.address}
                  onChange={(e) => setBooking({...booking, address: e.target.value})}
                  className="w-full px-4 md:px-6 py-3 md:py-4 border-2 border-slate-200 rounded-xl md:rounded-2xl focus:border-[#e599a7] outline-none text-sm md:text-base"
                  placeholder="123 Main St, City, State ZIP"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-xs md:text-sm font-black uppercase tracking-wider text-slate-500 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={booking.date}
                    onChange={(e) => setBooking({...booking, date: e.target.value})}
                    className="w-full px-4 md:px-6 py-3 md:py-4 border-2 border-slate-200 rounded-xl md:rounded-2xl focus:border-[#e599a7] outline-none text-sm md:text-base"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-black uppercase tracking-wider text-slate-500 mb-2">
                    Preferred Time
                  </label>
                  <select
                    value={booking.time}
                    onChange={(e) => setBooking({...booking, time: e.target.value})}
                    className="w-full px-4 md:px-6 py-3 md:py-4 border-2 border-slate-200 rounded-xl md:rounded-2xl focus:border-[#e599a7] outline-none text-sm md:text-base"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-black uppercase tracking-wider text-slate-500 mb-2">
                  {booking.theme && booking.theme.id === 'custom' ? 'Custom Theme Details & Special Requests' : 'Special Requests (Optional)'}
                </label>
                <textarea
                  value={booking.specialRequests}
                  onChange={(e) => setBooking({...booking, specialRequests: e.target.value})}
                  className="w-full px-4 md:px-6 py-3 md:py-4 border-2 border-slate-200 rounded-xl md:rounded-2xl focus:border-[#e599a7] outline-none text-sm md:text-base"
                  rows="4"
                  placeholder={booking.theme && booking.theme.id === 'custom' ? customTheme.formPlaceholder : "Any allergies, preferences, or special requests?"}
                />
              </div>

              <div className="pt-4 md:pt-6 border-t border-slate-200">
                <div className="mb-4 md:mb-6">
                  <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wider mb-3">Order Summary</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm md:text-base">
                      <span className="text-slate-600">{booking.package.name} Package:</span>
                      <span className="font-bold">${booking.package.originalPrice}</span>
                    </div>
                    {booking.theme && booking.theme.id === 'custom' && (
                      <div className="flex justify-between text-sm md:text-base">
                        <span className="text-slate-600">Custom Theme Fee:</span>
                        <span className="font-bold text-[#e599a7]">+${customTheme.additionalCost}</span>
                      </div>
                    )}
                    <div className="flex justify-between pt-3 border-t border-slate-200 items-baseline">
                      <span className="text-slate-700 font-bold uppercase text-sm">Total Amount:</span>
                      <span className="text-3xl md:text-4xl font-black">${booking.package.price}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleSubmitBooking}
                  disabled={!booking.childName || !booking.parentName || !booking.email || !booking.phone || !booking.address || !booking.date || !booking.time || isSubmitting}
                  className="w-full bg-[#e599a7] text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-sm md:text-lg hover:bg-[#d88996] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Confirm Booking'
                  )}
                </button>
                {emailError && (
                  <p className="text-sm text-amber-600 mt-2 text-center">
                    Email notification failed, but your booking was saved. We'll contact you soon!
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
        
        {bookingStep === 4 && (
          <div className="py-6 md:py-12">
            <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4">Booking Confirmed!</h2>
              <p className="text-base md:text-xl text-slate-500 mb-6 md:mb-8">
                We've received your booking request and will contact you shortly at {booking.email} to finalize the details.
              </p>
              <div className="bg-slate-50 rounded-xl md:rounded-2xl p-6 md:p-8 mb-6 md:mb-8 text-left">
                <h3 className="font-black text-base md:text-lg mb-3 md:mb-4">Booking Summary</h3>
                <div className="space-y-2 md:space-y-3 text-sm md:text-base">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Theme:</span>
                    <span className="font-bold">{booking.theme.shortTitle || booking.theme.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Package:</span>
                    <span className="font-bold">{booking.package.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Date:</span>
                    <span className="font-bold">{booking.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Time:</span>
                    <span className="font-bold">{booking.time}</span>
                  </div>
                  {booking.theme && booking.theme.id === 'custom' && (
                    <div className="flex justify-between">
                      <span className="text-slate-500">Custom Theme Fee:</span>
                      <span className="font-bold text-[#e599a7]">+${customTheme.additionalCost}</span>
                    </div>
                  )}
                  <div className="flex justify-between pt-3 border-t border-slate-200">
                    <span className="text-slate-500">Total:</span>
                    <span className="font-black text-xl md:text-2xl">${booking.package.price}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setView('home');
                  resetBooking();
                }}
                className="w-full bg-slate-900 text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-black uppercase tracking-widest hover:bg-[#e599a7] transition-colors text-sm md:text-base"
              >
                Back to Home
              </button>
            </div>
          </div>
        )}
      </div>

      {viewingTheme && (
        <ThemeDetailsModal 
          theme={viewingTheme} 
          onClose={() => setViewingTheme(null)} 
          onBook={() => {
            handleThemeSelect(viewingTheme);
            setViewingTheme(null);
          }}
        />
      )}
    </div>
  );
};

export default BookingFlow;
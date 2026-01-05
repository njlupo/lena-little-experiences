import React, { useState, useEffect } from 'react';
import { Sparkles, Palette, FlaskConical, Crown, Users, Clock, ChevronRight, X, Check, Calendar, ArrowLeft, CheckCircle, Utensils, Rocket, Shield, PawPrint, Drama, Sun, Baby } from 'lucide-react';
import logo from './logo.png';

const App = () => {
  const [view, setView] = useState('home');
  const [activeTheme, setActiveTheme] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  
  const [booking, setBooking] = useState({
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const data = {
    packages: [
      { 
        id: 1, 
        name: "Basic Experience", 
        price: 275, 
        time: "60 minutes", 
        kids: 8, 
        activities: 3, 
        accent: "#b2d3c2", 
        popular: false,
        includes: ["All materials provided", "Setup + cleanup of activities", "1 theme of your choice", "Professional party host"]
      },
      { 
        id: 2, 
        name: "Signature Experience", 
        price: 375, 
        time: "90 minutes", 
        kids: 12, 
        activities: 4, 
        accent: "#e599a7", 
        popular: true,
        includes: ["Keepsake craft for each child", "Music + movement game", "Full activity management", "1 theme of your choice", "All materials & cleanup"]
      },
      { 
        id: 3, 
        name: "Deluxe Experience", 
        price: 475, 
        time: "2 hours", 
        kids: 15, 
        activities: 5, 
        accent: "#fbbf24", 
        popular: false,
        includes: ["Custom theme touches (name, age)", "Mini finale (dance party/showcase)", "Extra helper included", "5 guided activities", "Everything provided & cleaned"]
      }
    ],
    themes: [
      { 
        id: 'artist', 
        title: "Little Artist Studio", 
        icon: Palette, 
        slogan: "Your home becomes an art studio", 
        desc: "Professional art experience with canvas paintings, texture art, and a mini art show finale where kids present to parents.",
        activities: ["Canvas paintings (kids choose colors + theme)", "Texture art (sponges, cotton balls, rollers)", "Sticker collage frames", "Mini art show at the end", "All supplies + cleanup included"]
      },
      { 
        id: 'science', 
        title: "Mini Scientist Lab", 
        icon: FlaskConical, 
        slogan: "Safe science kids can touch", 
        desc: "Hands-on experiments including color mixing, volcano cups, and slime making. Lab coats and certificates included!",
        activities: ["Color mixing experiments", "Volcano cups", "Slime or putty making", "Lab coat dress up", "Science certificates for all"]
      },
      { 
        id: 'unicorn', 
        title: "Magical Unicorn & Fairy Party", 
        icon: Sparkles, 
        slogan: "A magical world built in your home", 
        desc: "Enter a world of enchantment with wand decorating, fairy dust potions, and imagination-led storytelling.",
        activities: ["Wand decorating", "Fairy dust potion mixing", "Unicorn headband craft", "Story-led imagination game", "Magical keepsakes to take home"]
      },
      { 
        id: 'dino', 
        title: "Dino Discovery Party", 
        icon: PawPrint, 
        slogan: "Junior paleontologists on a mission", 
        desc: "Excavate fossils, create dino crafts, and go on a prehistoric adventure right from your living room!",
        activities: ["Dino dig excavation", "Fossil rubbing", "Build a dino craft", "Dino movement game and song", "Paleontologist certificates"]
      },
      { 
        id: 'chef', 
        title: "Little Chefs Party", 
        icon: Utensils, 
        slogan: "Hands-on cooking without the mess", 
        desc: "Culinary creativity for kids! Decorate treats, build snack mixes, and design personalized aprons.",
        activities: ["Decorate cupcakes or cookies", "Build your own snack mix", "Apron decorating", "Recipe card keepsake", "All ingredients provided"]
      },
      { 
        id: 'space', 
        title: "Space Explorer Mission", 
        icon: Rocket, 
        slogan: "Blast off from home", 
        desc: "Launch into adventure with rocket building, galaxy jars, and astronaut training challenges!",
        activities: ["Rocket building", "Galaxy jar making", "Astronaut training obstacle course", "Planet matching game", "Space explorer badges"]
      },
      { 
        id: 'superhero', 
        title: "Superhero Training Camp", 
        icon: Shield, 
        slogan: "Every child becomes the hero", 
        desc: "Transform into superheroes with cape decorating, strength challenges, and team rescue missions!",
        activities: ["Mask or cape decorating", "Hero strength challenges", "Team rescue game", "Hero affirmation moment", "Superhero certificates"]
      },
      { 
        id: 'sensory', 
        title: "Sensory Play Party", 
        icon: Baby, 
        slogan: "Engaging play right at home (ages 3-5)", 
        desc: "Perfect for younger children with sensory bins, playdough stations, and calm movement activities.",
        activities: ["Sensory bins (rice, beads, kinetic sand)", "Playdough stations", "Water bead scooping", "Calm movement games", "Age-appropriate fun"]
      },
      { 
        id: 'royal', 
        title: "Princess & Royal Ball", 
        icon: Crown, 
        slogan: "A royal celebration led by Lena", 
        desc: "Crown decorating, royal etiquette games, princess crafts, and a dance party finale fit for royalty!",
        activities: ["Crown decorating", "Royal etiquette game (bows, waves)", "Princess or prince craft", "Dance party finale", "Royal keepsakes"]
      },
      { 
        id: 'animal', 
        title: "Animal Adventure Party", 
        icon: PawPrint, 
        slogan: "Explore animals around the world", 
        desc: "Safari adventure with animal mask making, habitat games, and movement relays!",
        activities: ["Animal mask making", "Habitat matching game", "Animal movement relay", "Stuffed animal vet or safari game", "Explorer badges"]
      },
      { 
        id: 'drama', 
        title: "Dress-up & Drama Party", 
        icon: Drama, 
        slogan: "Create characters and stories", 
        desc: "Unleash creativity with costume stations, character crafts, and group performances!",
        activities: ["Costume station", "Create a character craft", "Acting out short stories", "Group performance (optional)", "Drama keepsakes"]
      },
      { 
        id: 'summer', 
        title: "Summer Fun Party", 
        icon: Sun, 
        slogan: "Outdoor fun without planning stress", 
        desc: "Seasonal favorite with water games, chalk art, sports challenges, and refreshing activities!",
        activities: ["Water games or bubble stations", "Chalk art", "Mini sports challenges", "Popsicle craft", "Summer memories"]
      }
    ],
    timeSlots: [
      "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
    ]
  };

  const handleThemeSelect = (theme) => {
    setBooking({...booking, theme});
    setBookingStep(2);
  };

  const handlePackageSelect = (pkg) => {
    setBooking({...booking, package: pkg, guests: pkg.kids});
    setBookingStep(3);
  };

  const handleSubmitBooking = () => {
    setBookingStep(4);
  };

  const renderBooking = () => {
    return (
      <div className="min-h-screen bg-[#fcfaf2]">
        <div className="bg-white border-b border-slate-200 px-4 md:px-6 py-4 sticky top-0 z-40">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <button
              onClick={() => {
                if (bookingStep === 1) {
                  setView('home');
                } else if (bookingStep === 4) {
                  setView('home');
                  resetBooking();
                } else {
                  setBookingStep(bookingStep - 1);
                }
              }}
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
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-4">Choose Your Theme</h2>
              <p className="text-slate-500 text-base md:text-lg mb-8 md:mb-12">Select the perfect experience for your celebration</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {data.themes.map((theme) => {
                  const IconComponent = theme.icon;
                  return (
                    <button
                      key={theme.id}
                      onClick={() => handleThemeSelect(theme)}
                      className="group bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 text-left hover:shadow-2xl transition-all border-4 border-transparent hover:border-[#e599a7]"
                    >
                      <div className="text-[#e599a7] mb-3 md:mb-4 transition-transform group-hover:scale-110">
                        <IconComponent size={40} className="md:w-12 md:h-12" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-black mb-2">{theme.title}</h3>
                      <p className="text-[#b2d3c2] font-black uppercase tracking-widest text-[10px] md:text-xs mb-3 md:mb-4">{theme.slogan}</p>
                      <p className="text-slate-500 text-sm md:text-base mb-4 md:mb-6">{theme.desc}</p>
                      <div className="text-[#e599a7] font-bold text-xs md:text-sm">
                        Tap to see activities →
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {bookingStep === 2 && booking.theme && (
            <div className="py-6 md:py-12">
              <div className="mb-8 md:mb-12">
                <div className="inline-flex items-center gap-3 px-4 md:px-6 py-3 bg-white rounded-2xl mb-4 md:mb-6">
                  <div className="text-[#e599a7]">
                    {React.createElement(booking.theme.icon, { size: 28 })}
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">Selected Theme</p>
                    <p className="font-black text-base md:text-lg">{booking.theme.title}</p>
                  </div>
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-4">Choose Your Package</h2>
              <p className="text-slate-500 text-base md:text-lg mb-8 md:mb-12">Select the right size for your party</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {data.packages.map((pkg) => (
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
                    <div className="flex items-baseline gap-1 mb-4 md:mb-6">
                      <span className="text-4xl md:text-5xl font-black">${pkg.price}</span>
                    </div>
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
                ))}
              </div>
            </div>
          )}

          {bookingStep === 3 && booking.package && (
            <div className="py-6 md:py-12">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-4">Event Details</h2>
              <p className="text-slate-500 text-base md:text-lg mb-8 md:mb-12">Tell us about your special day</p>
              
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 space-y-4 md:space-y-6">
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
                      {data.timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-black uppercase tracking-wider text-slate-500 mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    value={booking.specialRequests}
                    onChange={(e) => setBooking({...booking, specialRequests: e.target.value})}
                    className="w-full px-4 md:px-6 py-3 md:py-4 border-2 border-slate-200 rounded-xl md:rounded-2xl focus:border-[#e599a7] outline-none text-sm md:text-base"
                    rows="4"
                    placeholder="Any allergies, preferences, or special requests?"
                  />
                </div>

                <div className="pt-4 md:pt-6 border-t border-slate-200">
                  <div className="flex justify-between items-center mb-4 md:mb-6">
                    <div>
                      <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wider">Total Amount</p>
                      <p className="text-3xl md:text-4xl font-black">${booking.package.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleSubmitBooking}
                    disabled={!booking.childName || !booking.parentName || !booking.email || !booking.phone || !booking.address || !booking.date || !booking.time}
                    className="w-full bg-[#e599a7] text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-sm md:text-lg hover:bg-[#d88996] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Confirm Booking
                  </button>
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
                      <span className="font-bold">{booking.theme.title}</span>
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
      </div>
    );
  };

  if (view === 'booking') return renderBooking();

return (
    <div className="min-h-screen bg-[#fcfaf2] text-slate-900 font-sans antialiased">
      
      {/* Fixed Booking Button */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <button 
          onClick={() => setView('booking')}
          className="bg-[#e599a7] text-white px-5 py-3 md:px-8 md:py-4 rounded-full shadow-[0_20px_50px_rgba(229,153,167,0.3)] flex items-center gap-2 font-black uppercase tracking-wider hover:bg-[#d88996] transition-all hover:scale-105 active:scale-95 text-sm md:text-base"
        >
          <Calendar size={18} className="md:w-5 md:h-5" />
          <span>Book Now</span>
        </button>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 px-4 md:px-6 py-3 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 md:gap-4">
            {/* Logo scaling with scroll */}
            <div className={`transition-all duration-500 ease-in-out ${scrolled ? 'w-10 h-10' : 'w-14 h-14 md:w-16 md:h-16'}`}>
              <img src={logo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-black tracking-tighter text-lg md:text-2xl uppercase italic leading-none">
              Lena's Little Experiences
            </span>
          </div>
          <button 
            onClick={() => setView('booking')}
            className="text-xs md:text-sm font-black uppercase tracking-widest bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-[#e599a7] transition-all"
          >
            Book Now
          </button>
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
            {data.packages.map((pkg) => (
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
                  onClick={() => setView('booking')}
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {data.themes.map((theme) => {
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
              onClick={() => setView('booking')}
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
              onClick={() => {
                setActiveTheme(null);
                setView('booking');
              }}
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
          <a href="mailto:nlupo115@gmail.com" className="text-3xl md:text-5xl lg:text-6xl font-black text-white hover:text-[#e599a7] transition-all break-all leading-tight">
            nlupo115@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
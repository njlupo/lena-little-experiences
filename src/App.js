import React, { useState } from 'react';
import HomePage from './HomePage';
import BookingFlow from './BookingFlow';
import AboutPage from './AboutPage';

const App = () => {
  const [view, setView] = useState('home');
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

  if (view === 'booking') {
    return (
      <BookingFlow 
        booking={booking}
        setBooking={setBooking}
        bookingStep={bookingStep}
        setBookingStep={setBookingStep}
        setView={setView}
      />
    );
  }

  if (view === 'about') {
    return <AboutPage setView={setView} />;
  }

  return (
    <HomePage 
      setView={setView}
      booking={booking}
      setBooking={setBooking}
      setBookingStep={setBookingStep}
    />
  );
};

export default App;
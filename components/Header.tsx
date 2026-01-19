import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  
  const scrollToQuiz = () => {
    if (location.pathname !== '/') {
      window.location.hash = '/';
      setTimeout(() => {
        document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 animate-fade-in shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-28 flex items-center justify-between transition-all duration-300">
        <Link to="/" className="flex items-center group">
          <img 
            src="https://storage.googleapis.com/msgsndr/v3bzTwycj6KgGgtg9aua/media/696e46aeccb05144f36eda1b.png" 
            alt="Automates PH Logo" 
            className="h-12 md:h-18 w-auto object-contain transition-all group-hover:scale-105 active:scale-95"
          />
        </Link>
        <div className="flex items-center">
          <button 
            onClick={scrollToQuiz}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-100 text-xs md:text-sm"
          >
            Start Your Upgrade
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
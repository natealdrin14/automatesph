
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
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <span className="text-2xl font-bold font-heading bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent tracking-tight group-hover:opacity-80 transition-opacity">
            AutomatesPH
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          <button 
            onClick={scrollToQuiz}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-md shadow-blue-100"
          >
            Check Qualification
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;


import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-slate-50">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-16 text-center border border-slate-100">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Thank You!</h1>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          We've received your details. Our team is already reviewing your qualification status.
        </p>
        
        <div className="bg-slate-50 rounded-2xl p-8 mb-10 text-left">
          <h3 className="text-lg font-bold mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            What happens next?
          </h3>
          <ul className="space-y-4 text-slate-600">
            <li className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
              <span>We will contact you via email (within 24 hours) to confirm your business details.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
              <span>You'll receive a link to schedule a 15-minute Strategy Demo.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
              <span>We'll provide a custom blueprint for your Smart Website growth engine.</span>
            </li>
          </ul>
        </div>
        
        <Link 
          to="/"
          className="inline-block px-10 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;

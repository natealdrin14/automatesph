
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'terms' | 'privacy' | null>(null);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 py-16 px-4 reveal">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-8 md:space-y-0 text-center md:text-left">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold font-heading text-slate-900 tracking-tight">AutomatesPH</h3>
            <p className="max-w-xs text-sm text-slate-500 leading-relaxed mx-auto md:mx-0">
              Helping businesses build smart digital engines that convert clicks into cash flow.
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-sm font-semibold">
            <button onClick={() => setModalType('terms')} className="text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-widest text-xs">Terms & Conditions</button>
            <button onClick={() => setModalType('privacy')} className="text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-widest text-xs">Privacy Policy</button>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-slate-400 font-medium">
            &copy; {currentYear} AutomatesPH. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 italic">
            "Your privacy is our priority. We never share your data."
          </p>
        </div>
      </div>

      {/* Legal Modals */}
      {modalType && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white text-slate-900 w-full max-w-xl rounded-2xl p-8 md:p-12 relative max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200 animate-scale-in">
            <button 
              onClick={() => setModalType(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-6 tracking-tight">
              {modalType === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'}
            </h2>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p className="font-bold text-slate-900">Effective Date: January 1, {currentYear}</p>
              <p>Welcome to AutomatesPH. Our services are designed to help you grow securely and efficiently.</p>
              <p><strong>1. Our Commitment:</strong> We provide end-to-end automation and web development. Each project is handled with white-glove service and attention to detail.</p>
              <p><strong>2. Privacy:</strong> We process all lead data through secure, private channels. Your business intelligence is safe with us.</p>
              <p><strong>3. Usage:</strong> By providing your information, you authorize us to analyze your current infrastructure for optimization opportunities.</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;

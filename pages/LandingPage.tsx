import React, { useEffect, useState, useRef } from 'react';
import QuizForm from '../components/QuizForm';
import { HOW_IT_WORKS, OUTCOMES, BLUEPRINT, FAQS, BundleItem, BenefitOutcome, BlueprintStep } from '../constants';

interface ModalBaseProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  close: () => void;
  navItems: any[];
  currentActive: any;
  onNav: (item: any, list: any[], setter: (v: any) => void) => void;
  setter: (v: any) => void;
  swipeDirection: 'left' | 'right';
  onCTAClick: () => void;
}

const ModalBase: React.FC<ModalBaseProps> = ({ 
  title, subtitle, icon, children, close, navItems, currentActive, onNav, setter, swipeDirection, onCTAClick 
}) => {
  const currentIndex = navItems.indexOf(currentActive);
  
  const goPrev = () => {
    if (currentIndex > 0) {
      onNav(navItems[currentIndex - 1], navItems, setter);
    }
  };

  const goNext = () => {
    if (currentIndex < navItems.length - 1) {
      onNav(navItems[currentIndex + 1], navItems, setter);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-modal-overlay"
      onClick={close}
    >
      <div 
        className="bg-white text-slate-900 w-full max-w-[440px] rounded-2xl overflow-hidden shadow-2xl relative flex flex-col h-[640px] animate-modal-window"
        onClick={e => e.stopPropagation()}
      >
        {/* Fixed Close Button */}
        <button 
          onClick={close}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors z-[120]"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header (Fixed) */}
        <div className="px-8 pt-8 pb-4 flex items-center space-x-5 shrink-0 bg-white">
          <div className="w-14 h-14 bg-slate-900 text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg">
            {icon || <span className="font-bold text-xl">{currentActive.step}</span>}
          </div>
          <div className="min-w-0 pr-10">
            <h4 key={title} className="text-2xl font-black text-slate-900 leading-none truncate animate-title-change mb-2">
              {title}
            </h4>
            <p key={subtitle} className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.15em] animate-title-change opacity-80">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Swiping Content Area */}
        <div className="flex-grow px-8 pt-4 pb-4 bg-white relative overflow-hidden flex flex-col">
          <div 
            key={currentActive.title || currentActive.step} 
            className={`flex flex-col space-y-4 h-full ${swipeDirection === 'right' ? 'animate-content-right' : 'animate-content-left'}`}
          >
            <div className="flex-grow overflow-y-auto scrollbar-hide space-y-4">
                {children}
            </div>
          </div>
        </div>

        {/* Persistent Footer: CTA + Swipe Navigation Indicator */}
        <div className="shrink-0 bg-white">
          <div className="px-8 pb-4">
            <button 
              onClick={onCTAClick}
              className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-100 flex items-center justify-center space-x-3 active:scale-[0.98]"
            >
              <span className="text-base">Upgrade My Business</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {/* Swipe Indicator Bar */}
          <div className="bg-slate-50 border-t border-slate-100 px-8 py-5 flex items-center justify-between">
            <button 
              onClick={goPrev}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full transition-all ${currentIndex === 0 ? 'text-slate-200 cursor-not-allowed' : 'text-slate-400 hover:text-blue-600 hover:bg-white active:scale-90 shadow-sm'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex flex-col items-center space-y-2">
              <div className="flex space-x-1.5">
                {navItems.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-blue-600' : 'w-1.5 bg-slate-200'}`}
                  />
                ))}
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest animate-pulse">
                Swipe Left or Right
              </span>
            </div>

            <button 
              onClick={goNext}
              disabled={currentIndex === navItems.length - 1}
              className={`p-2 rounded-full transition-all ${currentIndex === navItems.length - 1 ? 'text-slate-200 cursor-not-allowed' : 'text-slate-400 hover:text-blue-600 hover:bg-white active:scale-90 shadow-sm'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const LandingPage: React.FC = () => {
  const [activeBundle, setActiveBundle] = useState<BundleItem | null>(null);
  const [activeBenefit, setActiveBenefit] = useState<BenefitOutcome | null>(null);
  const [activeBlueprint, setActiveBlueprint] = useState<BlueprintStep | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right'>('right');
  const lastIndex = useRef(-1);

  // Simple and safe scroll locking
  useEffect(() => {
    const isAnyModalOpen = !!(activeBundle || activeBenefit || activeBlueprint);
    if (isAnyModalOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [activeBundle, activeBenefit, activeBlueprint]);

  // Reveal-on-scroll
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  const closeModals = () => {
    setActiveBundle(null);
    setActiveBenefit(null);
    setActiveBlueprint(null);
    lastIndex.current = -1;
  };

  const handleNav = (item: any, list: any[], setter: (v: any) => void) => {
    const newIndex = list.indexOf(item);
    setSwipeDirection(newIndex > lastIndex.current ? 'right' : 'left');
    lastIndex.current = newIndex;
    setter(item);
  };

  const scrollToQuiz = () => {
    closeModals();
    setTimeout(() => {
      document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-20 pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full mb-10 reveal">
             <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest">Growth Engines for Business</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-heading tracking-tight text-slate-900 mb-8 leading-tight reveal">
            Transform Your Presence into a <br />
            <span className="text-blue-600">Lead Machine.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-500 mb-12 reveal">
            We build high-performance smart websites that don't just look pretty—they capture, manage, and nurture leads automatically.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 reveal">
            <button 
              onClick={() => document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-100 transform hover:scale-105 active:scale-95"
            >
              Check Qualification
            </button>
            <button 
              onClick={() => document.getElementById('bundle-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-white border border-slate-200 hover:border-slate-900 text-slate-900 rounded-xl font-bold text-lg transition-all"
            >
              Explore the Bundle
            </button>
          </div>
        </div>
      </section>

      {/* Smart Bundle Sections */}
      <section id="bundle-section" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">The Solution</h2>
            <h3 className="text-4xl font-black text-slate-900">The Smart Bundle</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map((item, idx) => (
              <button 
                key={idx}
                onClick={() => {
                  lastIndex.current = idx;
                  setActiveBundle(item);
                }}
                className="group p-8 bg-white rounded-2xl border border-slate-100 text-left transition-all hover:shadow-2xl hover:-translate-y-1 reveal"
              >
                <div className="flex items-center space-x-5 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 leading-none mb-2">{item.title}</h4>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">{item.subtitle}</p>
                  </div>
                </div>
                <p className="text-slate-500 leading-relaxed mb-6">{item.description}</p>
                <span className="text-blue-600 font-bold text-xs uppercase tracking-widest flex items-center group-hover:translate-x-1 transition-transform">
                  View Strategy 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" strokeWidth="2.5" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blueprint Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Our Process</h2>
            <h3 className="text-4xl font-black">14-Day Delivery</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLUEPRINT.map((step, idx) => (
              <button 
                key={idx}
                onClick={() => {
                    lastIndex.current = idx;
                    setActiveBlueprint(step);
                }}
                className="group p-8 bg-white/5 border border-white/10 rounded-2xl text-left transition-all hover:bg-white/10 reveal"
              >
                <div className="flex items-center space-x-5 mb-6">
                  <div className="relative flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-2 border-blue-500/20"></div>
                    <div className="absolute inset-0 rounded-full border-2 border-blue-500 border-t-transparent border-r-transparent animate-spin-slow"></div>
                    <span className="text-blue-400 font-bold relative z-10">{step.step}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em]">{step.timeline}</p>
                  </div>
                </div>
                <p className="text-slate-400 mb-6">{step.desc}</p>
                <span className="text-white font-bold text-xs uppercase tracking-widest flex items-center">
                  Full Timeline 
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" strokeWidth="2.5" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Results</h2>
            <h3 className="text-4xl font-black text-slate-900">Real Growth, Real Freedom</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OUTCOMES.map((outcome, idx) => (
              <button 
                key={idx} 
                onClick={() => {
                    lastIndex.current = idx;
                    setActiveBenefit(outcome);
                }}
                className="group p-10 bg-slate-50 border border-slate-100 rounded-2xl text-left transition-all hover:bg-blue-600 hover:text-white hover:shadow-2xl hover:-translate-y-1 reveal"
              >
                <div className="w-20 h-20 bg-white text-blue-600 rounded-xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  {outcome.icon}
                </div>
                <h4 className="text-2xl font-bold mb-2">{outcome.title}</h4>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-6 group-hover:text-blue-100">{outcome.subtitle}</p>
                <p className="text-slate-500 mb-8 leading-relaxed group-hover:text-blue-50">{outcome.description}</p>
                <span className="font-bold text-sm uppercase tracking-widest flex items-center">
                  See Business Impact 
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" strokeWidth="2.5" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz-section" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 reveal">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Get Started</h2>
            <h3 className="text-4xl font-black text-slate-900">Qualification Check</h3>
          </div>
          <QuizForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-4xl font-black text-center mb-16 reveal">FAQ</h3>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border border-slate-100 rounded-xl overflow-hidden reveal">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left px-8 py-6 flex justify-between items-center font-bold text-lg"
                >
                  {faq.question}
                  <svg className={`w-6 h-6 transform transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" strokeWidth="2.5" />
                  </svg>
                </button>
                {activeFaq === idx && (
                  <div className="px-8 pb-8 text-slate-600 leading-relaxed animate-fade">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Modal Content */}
      {activeBundle && (
        <ModalBase 
          title={activeBundle.title} 
          subtitle={activeBundle.subtitle} 
          icon={activeBundle.icon}
          navItems={HOW_IT_WORKS}
          currentActive={activeBundle}
          onNav={handleNav}
          setter={setActiveBundle}
          close={closeModals}
          swipeDirection={swipeDirection}
          onCTAClick={scrollToQuiz}
        >
          <div className="p-6 bg-[#FFF2F2] rounded-2xl border border-red-50 shadow-sm">
            <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-3">The Problem</p>
            <p className="text-slate-800 italic font-medium leading-relaxed text-sm">"{activeBundle.painPoint}"</p>
          </div>
          <div className="p-6 bg-[#F2FFF8] rounded-2xl border border-green-50 shadow-sm">
            <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-3">The Smart Solution</p>
            <p className="text-slate-800 font-medium leading-relaxed text-sm">{activeBundle.solution}</p>
          </div>
        </ModalBase>
      )}

      {/* Benefit Modal Content */}
      {activeBenefit && (
        <ModalBase 
          title={activeBenefit.title} 
          subtitle={activeBenefit.subtitle} 
          icon={activeBenefit.icon}
          navItems={OUTCOMES}
          currentActive={activeBenefit}
          onNav={handleNav}
          setter={setActiveBenefit}
          close={closeModals}
          swipeDirection={swipeDirection}
          onCTAClick={scrollToQuiz}
        >
          <div className="p-6 bg-blue-50/60 rounded-2xl border border-blue-50 shadow-sm">
            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-3">Business ROI</p>
            <p className="text-slate-800 font-medium leading-relaxed text-sm">{activeBenefit.businessImpact}</p>
          </div>
          <div className="p-6 bg-slate-900 text-white rounded-2xl shadow-lg">
            <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-3">Founder Result</p>
            <p className="text-blue-50 font-medium leading-relaxed text-sm">{activeBenefit.founderResult}</p>
          </div>
        </ModalBase>
      )}

      {/* Blueprint Modal Content */}
      {activeBlueprint && (
        <ModalBase 
          title={activeBlueprint.title} 
          subtitle={activeBlueprint.subtitle} 
          icon={null}
          navItems={BLUEPRINT}
          currentActive={activeBlueprint}
          onNav={handleNav}
          setter={setActiveBlueprint}
          close={closeModals}
          swipeDirection={swipeDirection}
          onCTAClick={scrollToQuiz}
        >
          <div className="space-y-4">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Core Deliverables</p>
            <ul className="space-y-3">
              {activeBlueprint.detailedKPIs.map((kpi, kIdx) => (
                <li key={kIdx} className="flex items-center space-x-3 text-[14px] font-bold text-slate-700">
                  <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeWidth="4" />
                    </svg>
                  </div>
                  <span>{kpi}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-3">What to expect</p>
            <p className="text-slate-700 leading-relaxed italic font-medium text-sm">
              {activeBlueprint.expectation}
            </p>
          </div>
        </ModalBase>
      )}
    </div>
  );
};

export default LandingPage;
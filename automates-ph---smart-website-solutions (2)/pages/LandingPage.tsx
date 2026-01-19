
import React, { useEffect } from 'react';
import QuizForm from '../components/QuizForm';
import { HOW_IT_WORKS, OUTCOMES, FAQS } from '../constants';

const LandingPage: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const scrollToQuiz = () => {
    document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHow = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-36 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-5 py-2 mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full animate-slide-up opacity-0" style={{ animationDelay: '0ms' }}>
            Smart Websites for Modern Growth
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1] animate-slide-up opacity-0" style={{ animationDelay: '150ms' }}>
            Turn Every Visitor Into <br className="hidden md:block" />
            <span className="text-blue-600">A Loyal Customer.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: '300ms' }}>
            AutomatesPH delivers a complete growth engine. High-performance design, automated lead capture, and AI-driven nurture systems. Bundled, managed, and optimized for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up opacity-0" style={{ animationDelay: '450ms' }}>
            <button 
              onClick={scrollToQuiz}
              className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg shadow-xl shadow-blue-100 transition-all transform hover:scale-105 active:scale-95"
            >
              See If You Qualify
            </button>
            <button 
              onClick={scrollToHow}
              className="w-full sm:w-auto px-10 py-5 bg-white hover:bg-slate-50 text-slate-700 rounded-full font-bold text-lg border border-slate-200 transition-all transform hover:scale-105"
            >
              View How It Works
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 -left-64 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-40 -z-10 animate-fade-in" />
        <div className="absolute bottom-0 -right-64 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[120px] opacity-40 -z-10 animate-fade-in" />
      </section>

      {/* Quiz Section */}
      <section id="quiz-section" className="py-20 md:py-24 px-4 bg-slate-50/50 reveal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Start Your Upgrade Today</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">Take our 30-second qualification quiz to see if we're a fit for your business goals.</p>
          </div>
          <QuizForm />
        </div>
      </section>

      {/* Outcomes Strip */}
      <section className="py-16 bg-blue-600 text-white overflow-hidden reveal">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left space-y-10 lg:space-y-0">
          {OUTCOMES.map((text, idx) => (
            <div key={idx} className="flex items-center space-x-5 group">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-blue-600 transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-2xl md:text-3xl font-bold font-heading tracking-tight">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section - The Smart Bundle */}
      <section id="how-it-works" className="py-20 md:py-24 px-4 bg-white reveal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">The Smart Bundle</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">We don't just build websites. We build automated growth engines that handle everything from discovery to conversion.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {HOW_IT_WORKS.map((card, idx) => (
              <div 
                key={idx} 
                className="group p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center reveal"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold mb-4 tracking-tight">{card.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA / Process Section */}
      <section className="py-20 md:py-28 px-4 bg-slate-900 text-white overflow-hidden relative reveal">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight tracking-tight">Ready to Scale Your Business?</h2>
              <div className="space-y-10 mb-10">
                {[
                  { step: 1, title: 'We review your details', desc: 'Our team analyzes your current setup and goals to prepare a custom plan.' },
                  { step: 2, title: 'We confirm missing info', desc: 'A quick call to align on branding, messaging, and automation triggers.' },
                  { step: 3, title: 'We start your build', desc: 'Go live in as little as 14 days with a fully-integrated follow-up system.' }
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-5 group">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xl shrink-0 border border-blue-500/30">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-[2.5rem] p-10 md:p-16 text-slate-900 shadow-2xl transform hover:scale-[1.01] transition-transform duration-500 reveal">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center tracking-tight">Check Your Qualification</h3>
              <p className="text-slate-500 text-center mb-10 text-lg leading-relaxed">Join hundreds of businesses growing smarter with AutomatesPH.</p>
              <button 
                onClick={scrollToQuiz}
                className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-xl shadow-lg shadow-blue-100 transition-all hover:translate-y-[-4px] active:translate-y-0"
              >
                Launch Quiz Now
              </button>
            </div>
          </div>
        </div>
        {/* Decor */}
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[150px] opacity-20" />
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 px-4 bg-white reveal">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-12">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border-b border-slate-100 pb-12 last:border-0 group reveal">
                <h4 className="text-xl md:text-2xl font-bold mb-4 leading-tight group-hover:text-blue-600 transition-colors">{faq.question}</h4>
                <p className="text-slate-500 leading-relaxed text-base md:text-lg">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

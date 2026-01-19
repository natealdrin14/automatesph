import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'terms' | 'privacy' | null>(null);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 py-16 px-4 reveal">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-8 md:space-y-0 text-center md:text-left">
          <div className="space-y-6">
            <img 
              src="https://storage.googleapis.com/msgsndr/v3bzTwycj6KgGgtg9aua/media/696e46aeccb05144f36eda1b.png" 
              alt="Automates PH Logo" 
              className="h-16 md:h-24 w-auto mx-auto md:mx-0 object-contain"
            />
            <p className="max-w-xs text-sm text-slate-500 leading-relaxed mx-auto md:mx-0 font-medium">
              Helping businesses build smart digital engines that convert clicks into cash flow.
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-sm font-bold">
            <button onClick={() => setModalType('terms')} className="text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-[0.2em] text-[10px]">Terms & Conditions</button>
            <button onClick={() => setModalType('privacy')} className="text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-[0.2em] text-[10px]">Privacy Policy</button>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
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
          <div className="bg-white text-slate-900 w-full max-w-2xl rounded-3xl p-8 md:p-12 relative max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200 animate-scale-in scrollbar-subtle">
            <button 
              onClick={() => setModalType(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className="text-3xl font-black mb-8 tracking-tight text-slate-900">
              {modalType === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'}
            </h2>
            
            <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed">
              <p className="font-bold text-blue-600 uppercase tracking-widest text-xs">Last Updated: October 2023</p>
              
              {modalType === 'terms' ? (
                <>
                  <section>
                    <h3 className="font-bold text-slate-900 mb-2">1. Agreement to Terms</h3>
                    <p>By accessing or using the services provided by Automates PH ("we," "us," or "our"), including our website and automated marketing tools, you agree to be bound by these Terms and Conditions. If you do not agree, you may not use our services.</p>
                  </section>
                  <section>
                    <h3 className="font-bold text-slate-900 mb-2">2. Scope of Services</h3>
                    <p>Automates PH provides digital marketing, website development, CRM integration, SEO, and AI-driven automation services. The specific deliverables and timelines for each client project are governed by a separate Service Agreement or Statement of Work (SOW).</p>
                  </section>
                  <section>
                    <h3 className="font-bold text-slate-900 mb-2">3. Intellectual Property</h3>
                    <p>Unless otherwise agreed in writing, all proprietary software, algorithms, and design frameworks used to deliver our services remain the exclusive property of Automates PH. Upon full payment, clients are typically granted a license to use the final deliverables for their intended business purposes.</p>
                  </section>
                  <section>
                    <h3 className="font-bold text-slate-900 mb-2">4. User Obligations</h3>
                    <p>You agree to provide accurate information through our qualification forms. You are responsible for ensuring that any data or content you provide does not violate any third-party rights or applicable laws.</p>
                  </section>
                  <section>
                    <h3 className="font-bold text-slate-900 mb-2">5. Limitation of Liability</h3>
                    <p>To the maximum extent permitted by law, Automates PH shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, including but not limited to loss of profits or data.</p>
                  </section>
                  <section>
                    <h3 className="font-bold text-slate-900 mb-2">6. Termination</h3>
                    <p>We reserve the right to terminate or suspend access to our services immediately, without prior notice or liability, for any reason, including breach of these Terms.</p>
                  </section>
                  <section>
                    <h3 className="font-bold text-slate-900 mb-2">7. Governing Law</h3>
                    <p>These Terms shall be governed by and construed in accordance with the laws of the Republic of the Philippines, without regard to its conflict of law provisions.</p>
                  </section>
                </>
              ) : (
                <>
                  <section>
                    <h3 className="font-bold text-slate-900 mb-2">1. Information We Collect</h3>
                    <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. This includes names, email addresses, phone numbers, and business details.</p>
                  </section>
                  <section>
                    <h3 className="font-bold text-slate-900 mb-2">2. How We Use Your Information</h3>
                    <p>We use your information to facilitate lead qualification, provide requested services, communicate with you regarding updates, and for marketing purposes (with your consent). Your data helps us customize our automation sequences to better serve your business needs.</p>
                  </section>
                  <section>
                    <h3 className="font-bold text-slate-900 mb-2">3. Data Sharing & Disclosure</h3>
                    <p>We do not sell your personal data. We may share information with third-party service providers (such as hosting partners, CRM platforms, and email service providers) who perform services for us and require access to such information to do that work.</p>
                  </section>
                  <section>
                    <h3 className="font-bold text-slate-900 mb-2">4. Data Security</h3>
                    <p>We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please remember that we cannot guarantee that the internet itself is 100% secure.</p>
                  </section>
                  <section>
                    <h3 className="font-bold text-slate-900 mb-2">5. Your Privacy Rights</h3>
                    <p>Depending on your location, you may have the right to request access to your personal information, request correction or deletion, or object to certain processing activities. You can exercise these rights by contacting us at support@automates.ph.</p>
                  </section>
                  <section>
                    <h3 className="font-bold text-slate-900 mb-2">6. Cookies and Tracking</h3>
                    <p>Our website uses cookies and similar tracking technologies to analyze traffic and improve user experience. You can control cookie preferences through your browser settings.</p>
                  </section>
                  <section>
                    <h3 className="font-bold text-slate-900 mb-2">7. Updates to This Policy</h3>
                    <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible.</p>
                  </section>
                </>
              )}
            </div>
            
            <div className="mt-10 pt-8 border-t border-slate-100 flex justify-end">
              <button 
                onClick={() => setModalType(null)}
                className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all active:scale-95"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
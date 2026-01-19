
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LeadData, StepId } from '../types';
import { BUSINESS_TYPES } from '../constants';
import { submitLead } from '../services/apiService';

const QuizForm: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<StepId>(StepId.Contact);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<LeadData>({
    name: '',
    email: '',
    companyName: '',
    phone: '',
    businessType: '',
    hasWebsite: 'No',
    websiteUrl: '',
    agreeToTerms: false,
    agreeToMarketing: false,
  });

  const totalSteps = 3;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const validateStep = (): boolean => {
    setError(null);
    if (currentStep === StepId.Contact) {
      if (!formData.name || !formData.email) {
        setError('Name and Email are required.');
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError('Please enter a valid email address.');
        return false;
      }
    } else if (currentStep === StepId.Company) {
      if (!formData.companyName) {
        setError('Company Name is required.');
        return false;
      }
    } else if (currentStep === StepId.Preferences) {
      if (!formData.agreeToTerms) {
        setError('You must agree to the Terms & Conditions.');
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps - 1));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    setIsSubmitting(true);
    const result = await submitLead(formData);
    setIsSubmitting(false);

    if (result.success) {
      navigate('/thank-you');
    } else {
      setError(result.error || 'Something went wrong. Please try again.');
    }
  };

  const progressPercent = ((currentStep + 1) / totalSteps) * 100;

  const inputClasses = "w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none placeholder:text-slate-400 text-lg";

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
      {/* Progress Bar */}
      <div className="h-2.5 bg-slate-100 w-full overflow-hidden">
        <div 
          className="h-full bg-blue-600 transition-all duration-700 ease-in-out" 
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="p-10 md:p-14">
        <div className="flex justify-between items-center mb-10">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Step {currentStep + 1} of {totalSteps}</span>
          {currentStep > 0 && (
            <button 
              onClick={prevStep}
              type="button"
              className="text-slate-400 hover:text-slate-600 flex items-center text-sm font-bold transition-colors"
            >
              <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {currentStep === StepId.Contact && (
            <div className="animate-in fade-in slide-in-from-right-6 duration-500">
              <h3 className="text-3xl font-bold mb-10 text-slate-900 leading-tight">Let's start with your basics</h3>
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2.5 ml-1">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className={inputClasses}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2.5 ml-1">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    className={inputClasses}
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === StepId.Company && (
            <div className="animate-in fade-in slide-in-from-right-6 duration-500">
              <h3 className="text-3xl font-bold mb-10 text-slate-900 leading-tight">Tell us about your business</h3>
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2.5 ml-1">Company Name *</label>
                  <input 
                    type="text" 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Your Business LLC"
                    className={inputClasses}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2.5 ml-1">Phone Number (Optional)</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    className={inputClasses}
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === StepId.Preferences && (
            <div className="animate-in fade-in slide-in-from-right-6 duration-500">
              <h3 className="text-3xl font-bold mb-10 text-slate-900 leading-tight">Almost there! Just a few more details</h3>
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2.5 ml-1">Business Type</label>
                  <select 
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className={inputClasses}
                  >
                    <option value="">Select an option</option>
                    {BUSINESS_TYPES.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-4 ml-1">Do you currently have a website?</label>
                  <div className="flex space-x-8 ml-1">
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="hasWebsite" 
                        value="Yes" 
                        checked={formData.hasWebsite === 'Yes'}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-blue-600 focus:ring-blue-500 bg-white border-slate-300"
                      />
                      <span className="text-lg text-slate-700 group-hover:text-blue-600 transition-colors">Yes</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="hasWebsite" 
                        value="No" 
                        checked={formData.hasWebsite === 'No'}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-blue-600 focus:ring-blue-500 bg-white border-slate-300"
                      />
                      <span className="text-lg text-slate-700 group-hover:text-blue-600 transition-colors">No</span>
                    </label>
                  </div>
                </div>
                {formData.hasWebsite === 'Yes' && (
                  <div className="animate-in zoom-in-95 duration-300">
                    <label className="block text-sm font-bold text-slate-700 mb-2.5 ml-1">Website URL</label>
                    <input 
                      type="url" 
                      name="websiteUrl"
                      value={formData.websiteUrl}
                      onChange={handleInputChange}
                      placeholder="https://example.com"
                      className={inputClasses}
                    />
                  </div>
                )}
                <div className="pt-6 space-y-4">
                  <label className="flex items-start space-x-4 cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="mt-1.5 w-5 h-5 text-blue-600 rounded focus:ring-blue-500 bg-white border-slate-300"
                    />
                    <span className="text-sm text-slate-500 leading-relaxed">
                      I agree to the Terms & Conditions and Privacy Policy. *
                    </span>
                  </label>
                  <label className="flex items-start space-x-4 cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="agreeToMarketing"
                      checked={formData.agreeToMarketing}
                      onChange={handleInputChange}
                      className="mt-1.5 w-5 h-5 text-blue-600 rounded focus:ring-blue-500 bg-white border-slate-300"
                    />
                    <span className="text-sm text-slate-500 leading-relaxed">
                      I agree to receive SMS and email messages from AutomatesPH. (Unsubscribe anytime)
                    </span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-50 border border-red-100 text-red-600 text-sm font-medium rounded-xl animate-bounce">
              {error}
            </div>
          )}

          <div className="pt-8">
            {currentStep < totalSteps - 1 ? (
              <button 
                type="button" 
                onClick={nextStep}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl shadow-xl shadow-blue-100 transition-all hover:translate-y-[-2px] text-xl"
              >
                Next
              </button>
            ) : (
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl shadow-xl shadow-blue-100 transition-all text-xl ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:translate-y-[-2px] active:scale-[0.98]'}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : 'Submit My Details'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuizForm;


export interface LeadData {
  name: string;
  email: string;
  companyName: string;
  phone?: string;
  businessType?: string;
  hasWebsite?: 'Yes' | 'No';
  websiteUrl?: string;
  agreeToTerms: boolean;
  agreeToMarketing: boolean;
}

export enum StepId {
  Contact = 0,
  Company = 1,
  Preferences = 2
}

export interface FAQItem {
  question: string;
  answer: string;
}

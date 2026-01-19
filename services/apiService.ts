
import { LeadData } from '../types';

/**
 * Handles form submission by logging to console and 
 * sending the lead payload to the configured webhook URL.
 */
export const submitLead = async (data: LeadData): Promise<{ success: boolean; error?: string }> => {
  try {
    // Basic validation
    if (!data.name || !data.email || !data.companyName) {
      return { success: false, error: 'Required fields are missing.' };
    }

    console.log('Submitting lead data to AutomatesPH webhook...', data);

    const WEBHOOK_URL = "https://automatesph.online/webhook/66f9e974-3c4f-42c4-907f-b6523bc3e615";

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...data,
        source: 'AutomatesPH Landing Page',
        submittedAt: new Date().toISOString(),
        userAgent: navigator.userAgent
      }),
    });

    if (!response.ok) {
      console.error('Webhook responded with error:', response.status);
      throw new Error('Server responded with an error.');
    }

    return { success: true };
  } catch (err) {
    console.error('Lead submission error:', err);
    return { 
      success: false, 
      error: 'We encountered an error while processing your request. Please try again or contact support.' 
    };
  }
};

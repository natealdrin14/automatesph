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

    console.log('Submitting full lead details to AutomatesPH webhook:', data);

    const WEBHOOK_URL = "https://primary-production-9c669.up.railway.app/webhook/homepage";

    // Prepare full payload
    const payload = {
      ...data,
      source: 'AutomatesPH Smart Landing Page',
      submittedAt: new Date().toISOString(),
      userAgent: navigator.userAgent,
      browserLanguage: navigator.language,
      screenResolution: `${window.screen.width}x${window.screen.height}`
    };

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error('Webhook responded with error status:', response.status);
      throw new Error('Server responded with an error.');
    }

    return { success: true };
  } catch (err) {
    console.error('Lead submission caught exception:', err);
    return { 
      success: false, 
      error: 'We encountered an error while processing your request. Please try again or contact support.' 
    };
  }
};

import React from 'react';

export const BUSINESS_TYPES = [
  'Real Estate',
  'Healthcare',
  'E-commerce',
  'SaaS / Technology',
  'Consulting / Services',
  'Home Services',
  'Other'
];

export const HOW_IT_WORKS = [
  {
    title: 'Design',
    description: 'High-performance, mobile-first website that builds trust and engagement with every visitor.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Capture',
    description: 'High-converting layout plus lead capture mechanisms like smart forms, chat widgets, and sales funnels.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
  },
  {
    title: 'Manage',
    description: 'Unified inbox for conversations, appointments, and reviews management—all from your mobile device.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Rank',
    description: 'Professional on-page and off-page SEO strategies to improve your search visibility and organic traffic.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Nurture',
    description: 'AI voice/chat bots plus personalized SMS and email automations to follow up fast and close more deals.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export const OUTCOMES = [
  'Rank higher. Get found. Grow faster.',
  'Convert visitors into customers.',
  'Work smarter, not harder.',
];

export const FAQS = [
  {
    question: 'What does the "Smart Website" package include?',
    answer: 'It includes a custom mobile-responsive design, integrated lead capture forms, a lead management dashboard, basic on-page SEO setup, and automated follow-up sequences (email/SMS).'
  },
  {
    question: 'How long does the buildout process take?',
    answer: 'A standard smart website buildout typically takes 14 to 21 business days, depending on the complexity of your automation needs and content readiness.'
  },
  {
    question: 'What information do I need to provide to get started?',
    answer: 'Once qualified, we will need your brand assets (logo, colors), basic company information, target audience details, and access to any existing domains or social profiles.'
  }
];

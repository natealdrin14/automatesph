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

export interface BundleItem {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  painPoint: string;
  solution: string;
}

export const HOW_IT_WORKS: BundleItem[] = [
  {
    title: 'Design',
    subtitle: 'Professional Presence',
    description: 'High-performance, mobile-first website layouts engineered for premium branding and trust.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="m2 2 5 5" /><path d="m11 11 1 1" />
      </svg>
    ),
    painPoint: "Your current website looks outdated, works poorly on mobile, or doesn't reflect the premium quality of your service, causing potential clients to leave in seconds.",
    solution: "We build high-trust, fast-loading digital storefronts that command attention. By focusing on modern aesthetics and UX, we ensure your first impression is a lasting conversion."
  },
  {
    title: 'Capture',
    subtitle: 'Lead Generation',
    description: 'Direct-response sales funnels and smart forms that stop the scroll and capture high-intent leads.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" />
      </svg>
    ),
    painPoint: "You're getting traffic to your site, but the phone isn't ringing and your inbox is empty because there's no clear 'path to purchase'.",
    solution: "We integrate direct-response mechanisms—like smart quizzes and high-converting funnels—that actively turn anonymous visitors into identified leads ready for follow-up."
  },
  {
    title: 'Manage',
    subtitle: 'Operational Efficiency',
    description: 'A mobile CRM to track leads, schedule appointments, and manage reviews on the go.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
      </svg>
    ),
    painPoint: "Leads are scattered across sticky notes, emails, and spreadsheets. You're losing thousands in revenue simply because things are slipping through the cracks.",
    solution: "Our Unified Lead Dashboard puts every conversation, appointment, and review into one mobile app. You get total visibility and organization, ensuring no opportunity is ever forgotten."
  },
  {
    title: 'Rank',
    subtitle: 'Market Authority',
    description: 'Strategic SEO and organic optimization to ensure your business appears when customers search.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-7" />
      </svg>
    ),
    painPoint: "When people search for your services in your area, your competitors show up first. You're essentially invisible to the highest-intent customers.",
    solution: "We execute local and on-page SEO strategies that climb the rankings. We ensure that when someone is ready to buy, it's your name they see at the top of Google."
  },
  {
    title: 'Nurture',
    subtitle: 'Automated Closing',
    description: 'AI-driven SMS and Email sequences that follow up instantly and book calls while you sleep.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
      </svg>
    ),
    painPoint: "You're too busy running the business to respond to every lead in 5 minutes. If you don't answer fast, they move on to the next guy.",
    solution: "Our AI systems handle the 'Speed to Lead'. Within seconds of an inquiry, your system sends a personalized text or email, qualifying them and booking them onto your calendar automatically."
  },
];

export interface BenefitOutcome {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  businessImpact: string;
  founderResult: string;
}

export const OUTCOMES: BenefitOutcome[] = [
  {
    title: 'Rank higher. Get found.',
    subtitle: 'Visibility & Trust',
    description: 'Dominating search results so your ideal customers find you before your competitors. High-intent traffic delivered daily.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    businessImpact: "You stop chasing customers and they start chasing you. Waking up to a calendar full of high-intent leads without spending a single dollar on unpredictable ads.",
    founderResult: "The confidence of knowing your business is authority-driven, not just luck-driven. You become the go-to expert in your local market by default."
  },
  {
    title: 'Convert into customers.',
    subtitle: 'Efficiency & ROI',
    description: 'Stop wasting expensive traffic. Our layouts are psychologically engineered to turn passive browsers into active buyers.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    businessImpact: "Every visitor represents a potential high-ticket sale. Our system ensures you catch 5x more leads than a traditional 'static' website.",
    founderResult: "The peace of mind that your digital storefront is working 24/7 as your best salesperson. You can sleep soundly knowing no one is bouncing off your site confused."
  },
  {
    title: 'Work smarter, not harder.',
    subtitle: 'Automation & Freedom',
    description: 'Automate the boring stuff. Let our AI-driven systems handle the follow-ups while you focus on high-level closing.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    businessImpact: "We eliminate the 'Response Lag' that kills deals. Leads are qualified, nurtured, and booked before you even pick up the phone.",
    founderResult: "Reclaiming 15-20 hours a week previously spent on admin and basic follow-up. This is time you can use to scale your team or finally take that weekend off."
  },
];

export interface BlueprintStep {
  step: string;
  timeline: string;
  title: string;
  subtitle: string;
  desc: string;
  detailedKPIs: string[];
  expectation: string;
  icon: React.ReactNode;
}

export const BLUEPRINT: BlueprintStep[] = [
  { 
    step: '01', 
    timeline: 'Days 1-3', 
    title: 'Audit & Plan', 
    subtitle: 'Strategy Phase',
    desc: 'We deep-dive into your brand, analyze gaps, and architect your custom conversion strategy.',
    detailedKPIs: [
      "Full funnel leak detection report",
      "Custom 90-day automation roadmap",
      "Brand messaging & copy strategy sign-off"
    ],
    expectation: "By the end of Day 3, you will have a crystal-clear vision of exactly how we will transform your lead flow, with every bottleneck identified and a solution mapped.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  { 
    step: '02', 
    timeline: 'Days 4-11', 
    title: 'Integrate & Build', 
    subtitle: 'Execution Phase',
    desc: 'Engineering your smart website, CRM triggers, and AI follow-up sequences for seamless performance.',
    detailedKPIs: [
      "V1 Website build ready for review",
      "CRM automations tested (100% success rate)",
      "Lead capture forms & SMS triggers live"
    ],
    expectation: "This is where the magic happens. You'll see your 'Growth Engine' come to life. No more theory—just working tech that starts catching and nurturing leads in a sandbox environment.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  { 
    step: '03', 
    timeline: 'Days 12-14', 
    title: 'Launch & Scale', 
    subtitle: 'Deployment Phase',
    desc: 'Quality testing, training your team on the dashboard, and pushing the high-performance system live.',
    detailedKPIs: [
      "Team dashboard training complete",
      "SEO indexing requested on Google",
      "First automated nurture sequence delivered"
    ],
    expectation: "Total hand-over. You'll have full control of your new dashboard, your site will be live to the public, and your automation will be actively working while you focus on closing deals.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
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
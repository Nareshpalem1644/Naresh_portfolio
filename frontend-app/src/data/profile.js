/**
 * profile.js
 * ----------------------------------------------------------------------------
 * Single source of truth for identity, contact and hero copy.
 * Values are read from .env (VITE_* variables) with safe fallbacks, so you can
 * update everything from `.env` without touching any component.
 */

const env = import.meta.env;

export const profile = {
  fullName: env.VITE_FULL_NAME || 'Naresh Palem',
  shortName: env.VITE_SHORT_NAME || 'Naresh',
  title: env.VITE_TITLE || 'Data Analyst & Power BI Developer',
  experienceYears: env.VITE_EXPERIENCE_YEARS || '4+',
  currentCompany: env.VITE_CURRENT_COMPANY || 'Cognit Analytics Solutions',
  location: env.VITE_LOCATION || 'Hyderabad, India',

  email: env.VITE_EMAIL || 'nareshpalem1644@gmail.com',
  phone: env.VITE_PHONE || '+91 97032 19526',
  phoneRaw: env.VITE_PHONE_RAW || '+919703219526',
  whatsapp: env.VITE_WHATSAPP || '919703219526',
  website: env.VITE_WEBSITE || 'https://naresh-portfolio-55wq.onrender.com',

  // Portrait assets (files live in public/images)
  portrait: env.VITE_PORTRAIT || '/images/naresh.jpg',
  portraitIcon: env.VITE_PORTRAIT_ICON || '/images/naresh-icon.png',

  heroTagline:
    env.VITE_HERO_TAGLINE ||
    'I turn messy operational data into clear, decision-ready dashboards — 4+ years ' +
    'building Power BI models, DAX measures and reports that people actually use.',

  // Roles cycled by Typed.js in the hero
  typedRoles: [
    'Data Analyst',
    'Power BI Developer',
    'Business Intelligence Analyst',
    'Reporting & Dashboard Specialist',
    'SQL & Data Modelling Analyst',
  ],

  summary:
    'Data Analyst and Power BI Developer with 4+ years of experience turning raw ' +
    'business data into clean, decision-ready reporting. I design star-schema models ' +
    'in Power BI, write DAX measures that stakeholders actually trust, and pull clean ' +
    'data from SQL, Excel and flat files with Power Query. From requirement gathering ' +
    'to publishing on Power BI Service, I build reports that speed up decisions instead ' +
    'of just displaying numbers.',

  // Highlight bullets used in the About section
  highlights: [
    'Design and maintain star-schema models in Power BI, keeping relationships clean and report queries fast.',
    'Write advanced DAX measures — time intelligence, variance analysis, dynamic segmentation — so numbers stay consistent across a report.',
    'Build refreshable data pipelines with Power Query and SQL instead of manual, copy-paste reporting.',
    'Publish and govern dashboards on Power BI Service with workspaces, scheduled refresh and row-level security.',
    'Work directly with business stakeholders to turn vague questions into clear KPIs and honest visual storytelling.',
  ],

  // Quick stat cards in the hero
  kpis: [
    { value: env.VITE_EXPERIENCE_YEARS || '4+', label: 'Years Experience', icon: 'badge-check' },
    { value: '40+', label: 'Reports & Dashboards', icon: 'layout-dashboard' },
    { value: 'DAX', label: 'Advanced Measures', icon: 'calculator' },
    { value: 'SQL', label: 'Data Modelling', icon: 'database' },
  ],

  // Theme colors (mirrored to CSS variables at runtime)
  theme: {
    primary: env.VITE_THEME_PRIMARY || '#2E8DFF',
    secondary: env.VITE_THEME_SECONDARY || '#14B8A6',
    accent: env.VITE_THEME_ACCENT || '#7DB6FF',
  },

  seo: {
    title: env.VITE_SEO_TITLE || 'Naresh Palem — Data Analyst & Power BI Developer',
    description:
      env.VITE_SEO_DESCRIPTION ||
      'Data Analyst & Power BI Developer with 4+ years building star-schema models, advanced DAX measures, Power Query pipelines and Power BI Service dashboards.',
  },

  footerText:
    env.VITE_FOOTER_TEXT || 'Turning data into decisions.',
};
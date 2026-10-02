/**
 * seo.js — keeps document title, meta description, OG/Twitter tags and the
 * JSON-LD structured data in sync with your .env-driven profile data.
 */
import { profile } from '../data/profile.js';
import { social } from '../data/social.js';

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

export function initSEO() {
  const { seo, fullName, title, website } = profile;

  document.title = seo.title;
  setMeta('meta[name="description"]', 'content', seo.description);
  setMeta('meta[name="author"]', 'content', fullName);
  setMeta('link[rel="canonical"]', 'href', website);

  // Open Graph
  setMeta('meta[property="og:title"]', 'content', seo.title);
  setMeta('meta[property="og:description"]', 'content', seo.description);
  setMeta('meta[property="og:url"]', 'content', website);

  // Twitter
  setMeta('meta[name="twitter:title"]', 'content', seo.title);
  setMeta('meta[name="twitter:description"]', 'content', seo.description);

  // JSON-LD
  const ld = document.getElementById('ld-json');
  if (ld) {
    ld.textContent = JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: fullName,
        jobTitle: title,
        url: website,
        email: profile.email,
        telephone: profile.phone,
        jobLocation: profile.location,
        address: {
          '@type': 'PostalAddress',
          addressLocality: profile.location,
        },
        description: seo.description,
        knowsLanguage: ['English', 'Telugu'],
        sameAs: social
          .filter((s) => s.external && !s.placeholder)
          .map((s) => s.url),
      },
      null,
      2
    );
  }
}
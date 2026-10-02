/**
 * social.js
 * ----------------------------------------------------------------------------
 * ⚠️  Social profiles below LinkedIn / GitHub / Facebook are PLACEHOLDER URLs.
 *     Replace them in `.env` (VITE_LINKEDIN, VITE_GITHUB, VITE_FACEBOOK) or
 *     directly below. Email, phone and WhatsApp are real.
 *
 * `primary: true`  -> shown as a contact card in the Contact section
 * `primary: false` -> shown as an icon in the footer "Connect" row
 * `placeholder: true` -> purely decorative until a real URL is supplied
 */
const env = import.meta.env;

export const social = [
  {
    name: 'Email',
    handle: env.VITE_EMAIL || 'nareshpalem1644@gmail.com',
    url: `mailto:${env.VITE_EMAIL || 'nareshpalem1644@gmail.com'}`,
    icon: 'mail',
    primary: true,
  },
  {
    name: 'Phone',
    handle: env.VITE_PHONE || '+91 97032 19526',
    url: `tel:${env.VITE_PHONE_RAW || '+919703219526'}`,
    icon: 'phone',
    primary: true,
  },
  {
    name: 'WhatsApp',
    handle: 'Message me on WhatsApp',
    url: `https://wa.me/${env.VITE_WHATSAPP || '919703219526'}`,
    icon: 'message-circle',
    primary: true,
    external: true,
  },
  {
    name: 'LinkedIn',
    handle: '@naresh-palem',
    url: env.VITE_LINKEDIN || 'https://www.linkedin.com/in/naresh-palem',
    icon: 'linkedin',
    primary: false,
    external: true,
    placeholder: true,
  },
  {
    name: 'GitHub',
    handle: '@Nareshpalem1644',
    url: env.VITE_GITHUB || 'https://github.com/Nareshpalem1644',
    icon: 'github',
    primary: false,
    external: true,
    placeholder: true,
  },
  {
    name: 'Facebook',
    handle: '/naresh.palem',
    url: env.VITE_FACEBOOK || 'https://www.facebook.com/naresh.palem',
    icon: 'facebook',
    primary: false,
    external: true,
    placeholder: true,
  },
];
/**
 * interests.js — placeholder interest cards driven by data/interests.js.
 * ⚠️ Replace the entries in src/data/interests.js with your real interests.
 */
import { interests } from '../data/interests.js';

export function renderInterests() {
  const cards = interests
    .map((item, idx) => {
      const mint = item.accent === 'mint';
      const iconCls = mint
        ? 'border-mint-500/30 bg-mint-500/10 text-mint-300 group-hover:text-mint-200'
        : 'border-azure-500/30 bg-azure-500/10 text-azure-300 group-hover:text-azure-200';
      const dotCls = mint ? 'bg-mint-400' : 'bg-azure-400';

      return `
      <div class="glass glass-hover group p-6" data-aos="fade-up" data-aos-delay="${idx * 70}">
        <span class="flex h-12 w-12 items-center justify-center rounded-xl border ${iconCls} transition-colors">
          <i data-lucide="${item.icon}" class="h-6 w-6"></i>
        </span>
        <h3 class="mt-4 font-heading text-base font-semibold text-white">${item.title}</h3>
        <p class="mt-2 text-sm leading-relaxed text-slate-400">${item.detail}</p>
        <div class="mt-4 h-1 w-10 rounded-full ${dotCls} opacity-60 transition-all duration-300 group-hover:w-16"></div>
      </div>`;
    })
    .join('');

  return `
  <section id="interests" class="section">
    <div class="container-x">
      <div class="mb-12 max-w-2xl" data-aos="fade-up">
        <span class="eyebrow mb-5"><i data-lucide="star" class="h-3.5 w-3.5"></i> Interests</span>
        <h2 class="section-title">Away from the <span class="text-gradient">dashboard</span>.</h2>
        <p class="section-subtitle">What keeps me curious and keeps me learning outside the reporting work.</p>
      </div>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">${cards}</div>
    </div>
  </section>`;
}
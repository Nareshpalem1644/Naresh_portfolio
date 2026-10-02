/**
 * education.js — academic background + language proficiency bars.
 */
import { education, languages } from '../data/education.js';

export function renderEducation() {
  const cards = education
    .map(
      (ed, idx) => `
      <div class="glass glass-hover p-6 sm:p-7" data-aos="fade-up" data-aos-delay="${idx * 80}">
        <div class="flex items-start gap-4">
          <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-azure-500/30 bg-azure-500/10 text-azure-300">
            <i data-lucide="graduation-cap" class="h-6 w-6"></i>
          </span>
          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 class="font-heading text-lg font-semibold text-white">${ed.degree}</h3>
                <p class="mt-1 flex flex-wrap items-center gap-2 text-sm text-azure-300">
                  <i data-lucide="book-open" class="h-4 w-4"></i> ${ed.institution}
                  <span class="text-slate-600">•</span>
                  <span class="inline-flex items-center gap-1 text-slate-500">
                    <i data-lucide="map-pin" class="h-3.5 w-3.5"></i> ${ed.location}
                  </span>
                </p>
              </div>
              <span class="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-slate-400">
                <i data-lucide="calendar" class="h-3.5 w-3.5"></i> ${ed.period}
              </span>
            </div>

            <p class="mt-4 text-sm leading-relaxed text-slate-400">${ed.detail}</p>

            <div class="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
              ${ed.tags.map((t) => `<span class="chip">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>`
    )
    .join('');

  const langRows = languages
    .map(
      (l, idx) => `
      <div class="skill-row" data-aos="fade-up" data-aos-delay="${100 + idx * 80}">
        <div class="mb-1.5 flex items-center justify-between gap-3">
          <span class="flex items-center gap-2 text-sm text-slate-300">
            <i data-lucide="languages" class="h-4 w-4 text-mint-400"></i> ${l.name}
            ${
              l.native
                ? '<span class="rounded-md border border-mint-500/30 bg-mint-500/10 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-mint-300">Native</span>'
                : ''
            }
          </span>
          <span class="font-mono text-xs text-slate-500">${l.percent}%</span>
        </div>
        <div class="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
          <div class="skill-bar h-full rounded-full bg-gradient-to-r from-mint-500 to-mint-300" style="width:0%" data-level="${l.percent}"></div>
        </div>
        <p class="mt-1.5 text-xs text-slate-500">${l.level}</p>
      </div>`
    )
    .join('');

  return `
  <section id="education" class="section">
    <div class="container-x">
      <div class="mb-12 max-w-2xl" data-aos="fade-up">
        <span class="eyebrow mb-5"><i data-lucide="graduation-cap" class="h-3.5 w-3.5"></i> Education &amp; Languages</span>
        <h2 class="section-title">A commerce degree with a <span class="text-gradient">tech edge</span>.</h2>
        <p class="section-subtitle">Commerce fundamentals paired with computer applications, plus two languages I can communicate in confidently with clients and teams.</p>
      </div>

      <div class="grid gap-6 lg:grid-cols-12 lg:gap-8">
        <div class="lg:col-span-7">
          <div class="space-y-5">${cards}</div>
        </div>

        <div class="lg:col-span-5">
          <div class="glass glass-hover h-full p-6 sm:p-7" data-aos="fade-up" data-aos-delay="120">
            <div class="mb-5 flex items-center gap-3">
              <span class="flex h-11 w-11 items-center justify-center rounded-xl border border-mint-500/30 bg-mint-500/10 text-mint-300">
                <i data-lucide="languages" class="h-5 w-5"></i>
              </span>
              <h3 class="font-heading text-base font-semibold text-white">Languages I Speak</h3>
            </div>
            <div class="space-y-5">${langRows}</div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}
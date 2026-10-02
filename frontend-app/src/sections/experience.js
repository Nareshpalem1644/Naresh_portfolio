/**
 * experience.js — vertical timeline rendered from data, plus an optional
 * "what I'm looking for next" card.
 */
import { experience, careerGoals } from '../data/experience.js';

export function renderExperience() {
  const items = experience
    .map((job, idx) => {
      const tags = job.tags.map((t) => `<span class="chip">${t}</span>`).join('');
      const bullets = job.highlights
        .map(
          (h) => `
          <li class="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300">
            <i data-lucide="chevron-right" class="mt-0.5 h-4 w-4 shrink-0 text-azure-400"></i>
            <span>${h}</span>
          </li>`
        )
        .join('');

      const client = job.client
        ? `<span class="text-slate-600">•</span>
                   <span class="text-slate-500">Client: <span class="text-mint-300">${job.client}</span></span>`
        : '';

      return `
      <div class="relative pl-12 sm:pl-16" data-aos="fade-up" data-aos-delay="${idx * 80}">
        <!-- node -->
        <span class="absolute left-[14px] top-1.5 z-10 flex h-5 w-5 items-center justify-center sm:left-[22px]">
          <span class="absolute h-5 w-5 rounded-full ${
            job.current ? 'bg-azure-500/30 animate-ping' : 'bg-transparent'
          }"></span>
          <span class="relative h-3 w-3 rounded-full border-2 ${
            job.current ? 'border-azure-400 bg-azure-500' : 'border-mint-400 bg-ink-800'
          }"></span>
        </span>

        <div class="glass glass-hover p-6">
          <div class="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 class="font-heading text-lg font-semibold text-white">${job.role}</h3>
              <p class="mt-0.5 flex flex-wrap items-center gap-2 text-sm text-azure-300">
                <i data-lucide="building-2" class="h-4 w-4"></i> ${job.company}
                <span class="text-slate-600">•</span>
                <span class="text-slate-500">${job.location}</span>
                ${client}
              </p>
            </div>
            <span class="inline-flex items-center gap-1.5 rounded-lg border ${
              job.current
                ? 'border-azure-500/40 bg-azure-500/10 text-azure-300'
                : 'border-white/10 bg-white/[0.03] text-slate-400'
            } px-3 py-1.5 font-mono text-xs">
              <i data-lucide="calendar" class="h-3.5 w-3.5"></i> ${job.period}
            </span>
          </div>

          ${
            job.employment
              ? `<p class="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-slate-500">
                   <i data-lucide="briefcase" class="h-3.5 w-3.5"></i> ${job.employment}
                 </p>`
              : ''
          }

          <p class="mt-4 text-sm leading-relaxed text-slate-400">${job.summary}</p>
          <ul class="mt-4 space-y-2">${bullets}</ul>
          <div class="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">${tags}</div>
        </div>
      </div>`;
    })
    .join('');

  const goalsCard = careerGoals.show
    ? `
      <div class="relative pl-12 sm:pl-16" data-aos="fade-up">
        <span class="absolute left-[14px] top-1.5 z-10 flex h-5 w-5 items-center justify-center sm:left-[22px]">
          <span class="absolute h-5 w-5 animate-ping rounded-full bg-mint-500/25"></span>
          <span class="relative h-3 w-3 rounded-full border-2 border-mint-400 bg-mint-500"></span>
        </span>

        <div class="glass p-6">
          <div class="flex flex-wrap items-start justify-between gap-3">
            <h3 class="font-heading text-lg font-semibold text-white">${careerGoals.title}</h3>
            <span class="inline-flex items-center gap-1.5 rounded-lg border border-mint-500/30 bg-mint-500/10 px-3 py-1.5 font-mono text-xs text-mint-300">
              <i data-lucide="target" class="h-3.5 w-3.5"></i> Now
            </span>
          </div>
          <p class="mt-3 text-sm leading-relaxed text-slate-400">${careerGoals.body}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            ${careerGoals.points
              .map(
                (p) =>
                  `<span class="chip"><i data-lucide="arrow-right" class="h-3.5 w-3.5 text-mint-400"></i> ${p}</span>`
              )
              .join('')}
          </div>
        </div>
      </div>`
    : '';

  return `
  <section id="experience" class="section">
    <div class="container-x">
      <div class="mb-12 max-w-2xl" data-aos="fade-up">
        <span class="eyebrow mb-5"><i data-lucide="briefcase" class="h-3.5 w-3.5"></i> Experience</span>
        <h2 class="section-title">Four years of reports, <span class="text-gradient">refined</span>.</h2>
        <p class="section-subtitle">From cleaning raw extracts and learning the fundamentals, to owning enterprise Power BI models end to end.</p>
      </div>

      <div class="relative">
        <!-- vertical line -->
        <span class="absolute bottom-2 left-[22px] top-2 w-px bg-gradient-to-b from-azure-500/60 via-white/10 to-mint-500/40 sm:left-[30px]"></span>
        <div class="space-y-6">${items}${goalsCard}</div>
      </div>
    </div>
  </section>`;
}
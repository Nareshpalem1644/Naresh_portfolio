/**
 * projects.js (section) — case-study cards rendered from data/projects.js.
 * Each project alternates mockup side on large screens.
 */
import { projects } from '../data/projects.js';

function accentClasses(accent) {
  return accent === 'mint'
    ? {
        icon: 'text-mint-300 border-mint-500/30 bg-mint-500/10',
        chip: 'border-mint-500/30 bg-mint-500/10 text-mint-300',
      }
    : {
        icon: 'text-azure-300 border-azure-500/30 bg-azure-500/10',
        chip: 'border-azure-500/30 bg-azure-500/10 text-azure-300',
      };
}

export function renderProjects() {
  const cards = projects
    .map((p, idx) => {
      const a = accentClasses(p.accent);
      const reversed = idx % 2 === 1;

      const approach = p.approach
        .map(
          (step) => `
          <li class="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300">
            <i data-lucide="chevron-right" class="mt-0.5 h-4 w-4 shrink-0 ${
              p.accent === 'mint' ? 'text-mint-400' : 'text-azure-400'
            }"></i>
            <span>${step}</span>
          </li>`
        )
        .join('');

      const metrics = p.outcome
        .map(
          (o) => `
          <div class="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div class="font-heading text-xl font-bold text-white">${o.value}</div>
            <div class="mt-1 text-xs leading-snug text-slate-400">${o.label}</div>
          </div>`
        )
        .join('');

      const mockup = `
        <div class="relative">
          <div class="glass overflow-hidden rounded-2xl p-2">
            <img src="${p.image}" alt="${p.title} dashboard concept"
              class="w-full rounded-xl" loading="lazy" decoding="async" />
          </div>
          <div class="glass absolute -bottom-4 ${
            reversed ? '-left-4' : '-right-4'
          } hidden items-center gap-2 px-3 py-2 sm:flex animate-float">
            <i data-lucide="${p.icon}" class="h-4 w-4 ${
            p.accent === 'mint' ? 'text-mint-400' : 'text-azure-400'
          }"></i>
            <span class="text-xs font-medium text-slate-200">${p.period}</span>
          </div>
        </div>`;

      const content = `
        <div>
          <div class="flex flex-wrap items-center gap-2">
            <span class="inline-flex items-center gap-1.5 rounded-lg border ${a.chip} px-2.5 py-1 font-mono text-xs">
              <i data-lucide="${p.icon}" class="h-3.5 w-3.5"></i> ${p.client}
            </span>
            <span class="chip">${p.domain}</span>
          </div>

          <h3 class="mt-4 font-heading text-xl font-bold text-white sm:text-2xl">${p.title}</h3>

          <p class="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <span class="inline-flex items-center gap-1.5">
              <i data-lucide="user-round" class="h-3.5 w-3.5 text-azure-400"></i> ${p.role}
            </span>
            <span class="text-slate-600">•</span>
            <span class="inline-flex items-center gap-1.5 font-mono text-xs">
              <i data-lucide="calendar" class="h-3.5 w-3.5"></i> ${p.period}
            </span>
          </p>

          <div class="mt-5">
            <h4 class="font-mono text-xs uppercase tracking-widest text-slate-500">The problem</h4>
            <p class="mt-2 text-sm leading-relaxed text-slate-400">${p.problem}</p>
          </div>

          <div class="mt-5">
            <h4 class="font-mono text-xs uppercase tracking-widest text-slate-500">What I built</h4>
            <ul class="mt-2 space-y-2">${approach}</ul>
          </div>

          <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            ${metrics}
          </div>

          <div class="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
            ${p.tech.map((t) => `<span class="chip">${t}</span>`).join('')}
          </div>
        </div>`;

      return `
      <article class="glass glass-hover overflow-hidden p-6 sm:p-8" data-aos="fade-up">
        <div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div class="lg:col-span-6 ${reversed ? 'lg:order-2' : ''}" data-aos="fade-right">
            ${mockup}
          </div>
          <div class="lg:col-span-6 ${reversed ? 'lg:order-1' : ''}" data-aos="fade-left">
            ${content}
          </div>
        </div>
      </article>`;
    })
    .join('');

  return `
  <section id="projects" class="section">
    <div class="container-x">
      <div class="mb-12 max-w-2xl" data-aos="fade-up">
        <span class="eyebrow mb-5"><i data-lucide="layers" class="h-3.5 w-3.5"></i> Projects</span>
        <h2 class="section-title">Dashboards that changed a <span class="text-gradient">decision</span>.</h2>
        <p class="section-subtitle">Two end-to-end Power BI builds — from messy source files to a model, a set of DAX measures and a report people open every morning.</p>
      </div>

      <div class="space-y-8">${cards}</div>
    </div>
  </section>`;
}
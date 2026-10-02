/**
 * hero.js — headline, animated typed role, tagline, CTAs, portrait and
 * a KPI strip. Content comes from data/profile.js.
 */
import { profile } from '../data/profile.js';

export function renderHero() {
  const kpis = profile.kpis
    .map(
      (k, idx) => `
      <div class="glass glass-hover group flex items-center gap-4 p-4" data-aos="fade-up" data-aos-delay="${
        120 + idx * 80
      }">
        <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-azure-500/30 bg-azure-500/10 text-azure-300 transition-colors group-hover:text-azure-200">
          <i data-lucide="${k.icon}" class="h-5 w-5"></i>
        </span>
        <div class="min-w-0">
          <div class="font-heading text-lg font-bold text-white">${k.value}</div>
          <div class="truncate text-xs text-slate-400">${k.label}</div>
        </div>
      </div>`
    )
    .join('');

  return `
  <section id="hero" class="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
    <!-- ambient grid -->
    <div class="pointer-events-none absolute inset-0 bg-grid opacity-60"></div>

    <!-- floating analytics glyphs -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <i data-lucide="bar-chart-3" class="absolute left-[8%] top-[22%] h-10 w-10 text-azure-500/20 animate-float"></i>
      <i data-lucide="database" class="absolute right-[10%] top-[28%] h-9 w-9 text-mint-500/20 animate-float-slow"></i>
      <i data-lucide="calculator" class="absolute left-[13%] bottom-[18%] h-8 w-8 text-mint-400/20 animate-float-slow"></i>
      <i data-lucide="terminal" class="absolute right-[15%] bottom-[24%] h-9 w-9 text-azure-400/20 animate-float"></i>
    </div>

    <div class="container-x relative z-10">
      <div class="grid items-center gap-12 lg:grid-cols-12">
        <!-- Copy -->
        <div class="lg:col-span-7" data-aos="fade-up">
          <span class="eyebrow mb-6">
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-400 opacity-75"></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-mint-400"></span>
            </span>
            Available for data analyst & Power BI roles
          </span>

          <h1 class="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-white text-balance sm:text-6xl lg:text-7xl">
            ${profile.fullName}
          </h1>

          <p class="mt-4 flex flex-wrap items-center gap-x-3 text-xl font-medium text-slate-300 sm:text-2xl">
            <span class="text-gradient" id="typed-role" aria-live="polite">${profile.title}</span>
          </p>

          <p class="mt-6 max-w-xl text-base leading-relaxed text-slate-400 text-balance sm:text-lg">
            ${profile.heroTagline}
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" class="btn-primary">
              <i data-lucide="send" class="h-4 w-4"></i> Hire Me
            </a>
            <a href="#projects" class="btn-ghost">
              <i data-lucide="layers" class="h-4 w-4"></i> View Projects
            </a>
            <a href="https://wa.me/${profile.whatsapp}" target="_blank" rel="noopener noreferrer" class="btn-accent">
              <i data-lucide="message-circle" class="h-4 w-4"></i> WhatsApp
            </a>
          </div>

          <div class="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span class="inline-flex items-center gap-1.5">
              <i data-lucide="map-pin" class="h-4 w-4 text-azure-400"></i> ${profile.location}
            </span>
            <span class="h-4 w-px bg-white/10"></span>
            <span class="inline-flex items-center gap-1.5">
              <i data-lucide="badge-check" class="h-4 w-4 text-mint-400"></i> ${profile.experienceYears} years in BI
            </span>
            <span class="h-4 w-px bg-white/10"></span>
            <span class="inline-flex items-center gap-1.5">
              <i data-lucide="building-2" class="h-4 w-4 text-mint-400"></i> ${profile.currentCompany}
            </span>
          </div>
        </div>

        <!-- Portrait -->
        <div class="lg:col-span-5" data-aos="fade-up" data-aos-delay="150">
          <div class="relative mx-auto max-w-sm lg:max-w-none">
            <div class="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-radial-fade blur-2xl"></div>

            <!-- rotating conic ring -->
            <div class="absolute -inset-3 -z-10 animate-spin-slow rounded-[2rem] opacity-70 ring-conic blur-[2px]"></div>

            <div class="glass overflow-hidden rounded-[1.6rem] p-2.5">
              <div class="relative overflow-hidden rounded-[1.15rem] bg-ink-800">
                <img
                  src="${profile.portrait}"
                  alt="${profile.fullName} — ${profile.title}"
                  class="aspect-[3/4] w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/10 to-transparent"></div>
                <div class="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4">
                  <div class="min-w-0">
                    <div class="font-heading text-sm font-semibold text-white">${profile.fullName}</div>
                    <div class="truncate text-xs text-slate-400">${profile.title}</div>
                  </div>
                  <span class="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-mint-400/30 bg-mint-500/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-mint-300">
                    <span class="h-1.5 w-1.5 rounded-full bg-mint-400"></span>
                    Open to work
                  </span>
                </div>
              </div>
            </div>

            <!-- floating chips -->
            <div class="glass absolute -left-4 top-16 hidden items-center gap-2 px-3 py-2 sm:flex animate-float">
              <i data-lucide="bar-chart-3" class="h-4 w-4 text-mint-400"></i>
              <span class="text-xs font-medium text-slate-200">Insight driven</span>
            </div>
            <div class="glass absolute -right-4 bottom-24 hidden items-center gap-2 px-3 py-2 sm:flex animate-float-slow">
              <i data-lucide="database" class="h-4 w-4 text-azure-400"></i>
              <span class="text-xs font-medium text-slate-200">Star-schema modelled</span>
            </div>
          </div>
        </div>
      </div>

      <!-- KPI strip -->
      <div class="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">${kpis}</div>

      <!-- scroll cue -->
      <a href="#about" aria-label="Scroll to about"
        class="mt-16 hidden items-center justify-center text-slate-500 transition-colors hover:text-azure-300 md:flex">
        <span class="flex h-10 w-6 items-start justify-center rounded-full border border-white/15 p-1.5">
          <span class="h-2 w-1 animate-bounce rounded-full bg-azure-400"></span>
        </span>
      </a>
    </div>
  </section>`;
}
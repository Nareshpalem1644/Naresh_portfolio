/**
 * skills.js — animated skill cards grouped by category, generated from data.
 */
import { skillGroups } from '../data/skills.js';

function accentClasses(accent) {
  return accent === 'mint'
    ? { icon: 'text-mint-300 border-mint-500/30 bg-mint-500/10', bar: 'from-mint-500 to-mint-300' }
    : { icon: 'text-azure-300 border-azure-500/30 bg-azure-500/10', bar: 'from-azure-500 to-azure-300' };
}

function skillRow(skill, accent) {
  const a = accentClasses(accent);
  return `
    <div class="skill-row">
      <div class="mb-1.5 flex items-center justify-between gap-3">
        <span class="text-sm text-slate-300">${skill.name}</span>
        <span class="font-mono text-xs text-slate-500">${skill.level}%</span>
      </div>
      <div class="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <div class="skill-bar h-full rounded-full bg-gradient-to-r ${a.bar}" style="width:0%" data-level="${skill.level}"></div>
      </div>
    </div>`;
}

export function renderSkills() {
  const cards = skillGroups
    .map((group, idx) => {
      const a = accentClasses(group.accent);
      const rows = group.skills.map((s) => skillRow(s, group.accent)).join('');
      return `
      <div class="glass glass-hover p-6" data-aos="fade-up" data-aos-delay="${(idx % 2) * 80}">
        <div class="mb-5 flex items-center gap-3">
          <span class="flex h-11 w-11 items-center justify-center rounded-xl border ${a.icon}">
            <i data-lucide="${group.icon}" class="h-5 w-5"></i>
          </span>
          <h3 class="font-heading text-base font-semibold text-white">${group.category}</h3>
        </div>
        <div class="space-y-4">${rows}</div>
      </div>`;
    })
    .join('');

  return `
  <section id="skills" class="section">
    <div class="container-x">
      <div class="mb-12 max-w-2xl" data-aos="fade-up">
        <span class="eyebrow mb-5"><i data-lucide="badge-check" class="h-3.5 w-3.5"></i> Skills</span>
        <h2 class="section-title">The toolkit behind every <span class="text-gradient">dashboard</span>.</h2>
        <p class="section-subtitle">Power BI, DAX, SQL and Excel — plus the modelling and communication habits that keep a report trustworthy long after launch.</p>
      </div>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">${cards}</div>
    </div>
  </section>`;
}
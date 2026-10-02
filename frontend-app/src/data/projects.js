/**
 * projects.js
 * ----------------------------------------------------------------------------
 * ⚠️  SAMPLE CASE STUDIES — EDIT BEFORE GOING LIVE
 *
 * Both projects below are written as realistic Power BI case studies, but the
 * client names ("Sundar Retail Chain", "Vertex Manufacturing Ltd") are invented.
 * Replace the client names, numbers and bullet points with your real projects —
 * ideally keep the same problem → approach → outcome shape, which is what
 * hiring managers look for.
 */
export const projects = [
  {
    title: 'Retail Sales Performance Dashboard',
    client: 'Sundar Retail Chain',
    domain: 'Retail · Sales & Margin',
    role: 'Power BI Developer',
    period: '2025 — 2026',
    image: '/images/project-retail.svg',
    icon: 'shopping-bag',
    accent: 'azure',
    problem:
      'Regional managers were chasing sales numbers through a chain of Excel sheets, ' +
      'so nobody could see revenue, margin or target variance in one place. Reports ' +
      'were rebuilt by hand every month and took days to consolidate.',
    approach: [
      'Connected Excel, CSV and SQL extracts in Power Query with staged queries to clean and reshape the raw data.',
      'Modelled sales, product, store, region and calendar tables into a proper star schema.',
      'Wrote DAX measures for revenue, gross margin, target variance and YoY / MoM growth using time intelligence.',
      'Built a two-level report — KPI cards → region → store drillthrough — with dynamic slicers for period and category.',
      'Published to a Power BI Service workspace with scheduled refresh and row-level security by region.',
    ],
    outcome: [
      { value: '12 → 1', label: 'Reports consolidated' },
      { value: 'Same day', label: 'Monthly reporting cycle' },
      { value: '< 3s', label: 'Report page load' },
      { value: '100%', label: 'RLS by region' },
    ],
    tech: ['Power BI', 'DAX', 'Power Query', 'SQL', 'Power BI Service'],
  },
  {
    title: 'Downtime & Quality Analytics',
    client: 'Vertex Manufacturing Ltd',
    domain: 'Manufacturing · Operations',
    role: 'Data Analyst',
    period: '2024 — 2025',
    image: '/images/project-manufacturing.svg',
    icon: 'boxes',
    accent: 'mint',
    problem:
      'Downtime logs were handwritten and defect counts lived in a separate tracker. ' +
      'Line supervisors had no single view of which machine, shift or defect type was ' +
      'costing the most production time.',
    approach: [
      'Imported and standardised downtime and defect registers from Excel and CSV using Power Query.',
      'Built a model linking lines, machines, shifts, defect types and downtime reasons.',
      'Created DAX measures for MTTR, MTBF, scrap rate and total downtime by reason.',
      'Added a variance visual comparing planned versus actual downtime across shifts and lines.',
      'Delivered a daily-refresh dashboard reviewed at the morning production meeting.',
    ],
    outcome: [
      { value: 'Top 5', label: 'Downtime causes identified' },
      { value: 'Daily', label: 'Scrap rate tracking' },
      { value: '0', label: 'Manual consolidation steps' },
      { value: '1 view', label: 'Replaces weekly review' },
    ],
    tech: ['Power BI', 'DAX', 'Power Query', 'Excel', 'Data Modelling'],
  },
];
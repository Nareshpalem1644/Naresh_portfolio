/**
 * experience.js
 * ----------------------------------------------------------------------------
 * ⚠️  PLACEHOLDER EMPLOYERS — EDIT BEFORE GOING LIVE
 *
 * The timeline below spans roughly 4 years (Nov 2022 → present) and uses
 * invented company names so the layout reads properly. Swap them for your real
 * employers, titles and dates. Nothing else needs to change.
 *
 * Set `current: true` to render the pulsing "live" node.
 */
export const experience = [
  {
    role: 'Power BI Developer',
    company: 'Cognit Analytics Solutions',
    client: '',
    location: 'Hyderabad, India',
    period: 'Jun 2024 — Present',
    current: true,
    employment: 'Full-time · Reporting & Analytics',
    summary:
      'Lead Power BI development for enterprise clients — owning requirements, data ' +
      'models, DAX measures and deployment through to Power BI Service.',
    highlights: [
      'Translate business requirements into Power BI data models, measures and report layouts.',
      'Write advanced DAX measures for revenue, margin, target variance and period-over-period growth.',
      'Build refreshable datasets with Power Query and SQL so figures update without manual work.',
      'Publish, schedule and govern reports in Power BI Service workspaces with row-level security.',
      'Optimise report performance using DAX Studio, query folding and model reduction.',
    ],
    tags: ['Power BI', 'DAX', 'Power Query', 'SQL', 'Power BI Service', 'Data Modelling'],
  },
  {
    role: 'Data Analyst',
    company: 'Bluepeak Analytics',
    client: '',
    location: 'Hyderabad, India',
    period: 'Aug 2023 — May 2024',
    current: false,
    employment: 'Full-time · Business Analytics',
    summary:
      'Supported retail and operations clients with reporting, dashboard development ' +
      'and ad-hoc analysis across sales, inventory and customer data.',
    highlights: [
      'Built interactive Power BI dashboards for sales, inventory and customer reporting.',
      'Wrote SQL queries to extract, join and aggregate data for recurring report needs.',
      'Created Excel pivot reports and Power Query steps for teams without BI access.',
      'Cleaned and validated incoming data, fixing quality issues before they reached reports.',
      'Documented report logic and delivered walkthroughs to business users.',
    ],
    tags: ['Power BI', 'SQL', 'Excel', 'Reporting', 'Data Cleaning'],
  },
  {
    role: 'Junior Data Analyst',
    company: 'Southern Tech Solutions',
    client: '',
    location: 'Hyderabad, India',
    period: 'Nov 2022 — Jul 2023',
    current: false,
    employment: 'Full-time · Entry Level',
    summary:
      'Started in a support-analytics role, learning data preparation and report ' +
      'building end to end alongside senior analysts.',
    highlights: [
      'Prepared and cleaned daily operational data from Excel and CSV sources.',
      'Assisted in building Excel pivot reports and the team’s first Power BI reports.',
      'Learned SQL fundamentals and basic DAX measures with senior analyst guidance.',
      'Maintained report accuracy and handled ad-hoc data requests from the wider team.',
    ],
    tags: ['Excel', 'Power Query', 'SQL Basics', 'Data Preparation'],
  },
];

/**
 * "What I'm looking for next" card at the end of the timeline.
 * Set `show: false` to hide it.
 */
export const careerGoals = {
  show: true,
  title: 'Open to new opportunities',
  body:
    'I am looking for a Data Analyst or Power BI Developer role where I can own ' +
    'dashboards end to end and keep growing deeper into data modelling and DAX. ' +
    'Comfortable working directly with business stakeholders and comfortable owning ' +
    'a report from first requirement to scheduled refresh.',
  points: [
    'Data Analyst',
    'Power BI Developer',
    'BI Analyst',
    'Reporting & Analytics',
  ],
};
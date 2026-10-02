/**
 * skills.js
 * ----------------------------------------------------------------------------
 * Skill groups rendered as cards with animated proficiency bars.
 * `level` is a percentage (0-100) driving the bar width.
 * `accent` is either 'azure' or 'mint' and controls the icon/bar colours.
 */
export const skillGroups = [
  {
    category: 'Power BI Development',
    icon: 'bar-chart-3',
    accent: 'azure',
    skills: [
      { name: 'Power BI Desktop & Reports', level: 95 },
      { name: 'DAX Measures', level: 88 },
      { name: 'Power Query (M)', level: 90 },
      { name: 'Data Visualisation & UX', level: 85 },
      { name: 'Bookmarks & Drillthrough', level: 82 },
    ],
  },
  {
    category: 'Data Modelling',
    icon: 'database',
    accent: 'mint',
    skills: [
      { name: 'Star Schema Design', level: 90 },
      { name: 'Relationships & Cardinality', level: 88 },
      { name: 'Normalisation & Denormalisation', level: 82 },
      { name: 'Data Quality & Validation', level: 84 },
      { name: 'Slowly Changing Dimensions', level: 76 },
    ],
  },
  {
    category: 'SQL',
    icon: 'terminal',
    accent: 'azure',
    skills: [
      { name: 'Query Writing & SELECT Logic', level: 85 },
      { name: 'Joins, CTEs & Subqueries', level: 84 },
      { name: 'Window Functions', level: 78 },
      { name: 'Stored Procedures', level: 72 },
      { name: 'Query Optimisation', level: 70 },
    ],
  },
  {
    category: 'Excel & Data Preparation',
    icon: 'file-spreadsheet',
    accent: 'mint',
    skills: [
      { name: 'Advanced Excel & Pivot Tables', level: 88 },
      { name: 'Power Query in Excel', level: 84 },
      { name: 'XLOOKUP & Dynamic Arrays', level: 82 },
      { name: 'Data Cleaning & Validation', level: 86 },
      { name: 'Conditional Formatting', level: 80 },
    ],
  },
  {
    category: 'Power BI Service & Deployment',
    icon: 'cloud',
    accent: 'azure',
    skills: [
      { name: 'Service Publishing & Workspaces', level: 86 },
      { name: 'Row-Level Security (RLS)', level: 82 },
      { name: 'Scheduled Refresh & Subscriptions', level: 80 },
      { name: 'On-premises Data Gateway', level: 76 },
      { name: 'Microsoft Fabric / OneLake', level: 72 },
    ],
  },
  {
    category: 'Business & Communication',
    icon: 'presentation',
    accent: 'mint',
    skills: [
      { name: 'Stakeholder Communication', level: 85 },
      { name: 'Requirement Gathering', level: 84 },
      { name: 'Insight & Data Storytelling', level: 82 },
      { name: 'Documentation & Report Notes', level: 80 },
    ],
  },
];
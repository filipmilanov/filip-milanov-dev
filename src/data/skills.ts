import type { SkillGroup } from '../types'

// ── PLACEHOLDER CONTENT ──────────────────────────────────────────────────────
// To add a skill: drop a string into the right group's `items`.
// To make one stand out: use { name: 'Thing', primary: true } instead.
// To add a group: copy one object. Groups render in the order listed here.
export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    items: [
      { name: 'Java', primary: true },
      { name: 'TypeScript', primary: true },
      { name: 'JavaScript', primary: true },
      { name: 'HTML', primary: true },
      { name: 'CSS', primary: true },
      { name: 'SQL', primary: true },
      { name: 'Python', primary: false },
      { name: 'C', primary: false },
    ],
  },
  {
    label: 'Frameworks',
    items: [
      { name: 'Angular', primary: true }, 
      { name: 'Spring Boot', primary: true }, 
      { name: 'Node.js', primary: true }, 
      { name: 'React', primary: false },
      { name: 'Vite', primary: false }
    ],
  },
  {
    label: 'Data',
    items: [
      { name: 'PostgreSQL', primary: true },
      { name: 'MongoDB', primary: true },
      { name: 'H2', primary: true },
      { name: 'Neo4j', primary: false },
    ],
  },
  {
    label: 'Infrastructure',
    items: [
      { name: 'Docker', primary: true },
      { name: 'GitHub Actions', primary: true },
      { name: 'Kubernetes', primary: false },
      { name: 'AWS', primary: false },
    ],
  },
  {
    label: 'Practices',
    items: [
      { name: 'Test-driven development', primary: true },
      { name: 'Code review', primary: true },
      { name: 'CI/CD', primary: true },
      { name: 'Agile delivery', primary: true }
    ],
  },
]

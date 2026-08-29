import type { Lang, SkillGroup } from '../types'

// ── PLACEHOLDER CONTENT ──────────────────────────────────────────────────────
// To add a skill: drop a string into the right group's `items`, for every
// language below (skill names are technology terms — universal, so identical
// across languages). To make one stand out: use { name: 'Thing', primary: true }
// instead. To add a group: copy one object into each language's array and add
// a translated `label`.
const items = {
  languages: [
    { name: 'Java', primary: true },
    { name: 'TypeScript', primary: true },
    { name: 'JavaScript', primary: true },
    { name: 'HTML', primary: true },
    { name: 'CSS', primary: true },
    { name: 'SQL', primary: true },
    { name: 'Python', primary: false },
    { name: 'C', primary: false },
  ],
  frameworks: [
    { name: 'Angular', primary: true },
    { name: 'Spring Boot', primary: true },
    { name: 'Node.js', primary: true },
    { name: 'React', primary: false },
    { name: 'Vite', primary: false },
  ],
  data: [
    { name: 'PostgreSQL', primary: true },
    { name: 'MongoDB', primary: true },
    { name: 'H2', primary: true },
    { name: 'Neo4j', primary: false },
  ],
  infrastructure: [
    { name: 'Docker', primary: true },
    { name: 'GitHub Actions', primary: true },
    { name: 'Kubernetes', primary: false },
    { name: 'AWS', primary: false },
  ],
  practices: [
    { name: 'Test-driven development', primary: true },
    { name: 'Code review', primary: true },
    { name: 'CI/CD', primary: true },
    { name: 'Agile delivery', primary: true },
  ],
}

export const skillsByLang: Record<Lang, SkillGroup[]> = {
  en: [
    { label: 'Languages', items: items.languages },
    { label: 'Frameworks', items: items.frameworks },
    { label: 'Data', items: items.data },
    { label: 'Infrastructure', items: items.infrastructure },
    { label: 'Practices', items: items.practices },
  ],
  de: [
    { label: 'Sprachen', items: items.languages },
    { label: 'Frameworks', items: items.frameworks },
    { label: 'Daten', items: items.data },
    { label: 'Infrastruktur', items: items.infrastructure },
    { label: 'Praktiken', items: items.practices },
  ],
  bg: [
    { label: 'Езици', items: items.languages },
    { label: 'Фреймуърци', items: items.frameworks },
    { label: 'Данни', items: items.data },
    { label: 'Инфраструктура', items: items.infrastructure },
    { label: 'Практики', items: items.practices },
  ],
}

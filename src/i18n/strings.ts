import type { Lang } from '../types'

export interface UiStrings {
  nav: { education: string; skills: string; projects: string; sectionsLabel: string }
  contact: { label: string; email: string }
  skills: { empty: string }
  projects: {
    empty: string
    snapshotsLabel: string
    showSnapshot: (n: number) => string
    for: string
    role: string
    viewGithub: string
    openSite: string
  }
  thesis: { toggle: string; readPdf: string }
  settings: {
    button: string
    theme: string
    language: string
    light: string
    dark: string
    langNames: Record<Lang, string>
  }
}

export const strings: Record<Lang, UiStrings> = {
  en: {
    nav: { education: 'Education', skills: 'Skills', projects: 'Projects', sectionsLabel: 'CV sections' },
    contact: { label: 'Contact links', email: 'Email' },
    skills: { empty: 'No skills listed yet. Add a group to src/data/skills.ts and it appears here.' },
    projects: {
      empty: 'No projects listed yet. Add one to src/data/projects.ts and it appears here.',
      snapshotsLabel: 'Snapshots',
      showSnapshot: (n) => `Show snapshot ${n}`,
      for: 'For',
      role: 'Role',
      viewGithub: 'View on GitHub ↗',
      openSite: 'Open the site ↗',
    },
    thesis: { toggle: 'Thesis', readPdf: 'Read the PDF ↗' },
    settings: {
      button: 'Settings',
      theme: 'Theme',
      language: 'Language',
      light: 'Light',
      dark: 'Dark',
      langNames: { en: 'English', de: 'German', bg: 'Bulgarian' },
    },
  },
  de: {
    nav: { education: 'Ausbildung', skills: 'Kenntnisse', projects: 'Projekte', sectionsLabel: 'Lebenslauf-Bereiche' },
    contact: { label: 'Kontaktlinks', email: 'E-Mail' },
    skills: {
      empty: 'Noch keine Kenntnisse hinterlegt. Füge in src/data/skills.ts eine Gruppe hinzu, damit sie hier erscheint.',
    },
    projects: {
      empty: 'Noch keine Projekte hinterlegt. Füge eines in src/data/projects.ts hinzu, damit es hier erscheint.',
      snapshotsLabel: 'Screenshots',
      showSnapshot: (n) => `Screenshot ${n} anzeigen`,
      for: 'Für',
      role: 'Rolle',
      viewGithub: 'Auf GitHub ansehen ↗',
      openSite: 'Seite öffnen ↗',
    },
    thesis: { toggle: 'Abschlussarbeit', readPdf: 'PDF lesen ↗' },
    settings: {
      button: 'Einstellungen',
      theme: 'Design',
      language: 'Sprache',
      light: 'Hell',
      dark: 'Dunkel',
      langNames: { en: 'Englisch', de: 'Deutsch', bg: 'Bulgarisch' },
    },
  },
  bg: {
    nav: { education: 'Образование', skills: 'Умения', projects: 'Проекти', sectionsLabel: 'Раздели на автобиографията' },
    contact: { label: 'Връзки за контакт', email: 'Еmail' },
    skills: { empty: 'Все още няма добавени умения. Добавете група в src/data/skills.ts и тя ще се появи тук.' },
    projects: {
      empty: 'Все още няма добавени проекти. Добавете такъв в src/data/projects.ts и той ще се появи тук.',
      snapshotsLabel: 'Снимки',
      showSnapshot: (n) => `Покажи снимка ${n}`,
      for: 'За',
      role: 'Роля',
      viewGithub: 'Виж в GitHub ↗',
      openSite: 'Отвори сайта ↗',
    },
    thesis: { toggle: 'Дипломна работа', readPdf: 'Прочети PDF ↗' },
    settings: {
      button: 'Настройки',
      theme: 'Тема',
      language: 'Език',
      light: 'Светла',
      dark: 'Тъмна',
      langNames: { en: 'Английски', de: 'Немски', bg: 'Български' },
    },
  },
}

import type { Lang, Project } from '../types'

// ── PLACEHOLDER CONTENT ──────────────────────────────────────────────────────
// To add a project: copy one object into `projectsBase`, give it a unique `id`,
// then add a matching entry (same `id`) to `translations` for every language.
// Snapshots go in `public/projects/` — wrap the path in `asset()` so it picks up
// the Vite `base` and still resolves once the site is served from a subpath.
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

interface ProjectBase {
  id: string
  name: string
  images: { src: string; alt: string }[]
  tech: string[]
  githubUrl?: string
  liveUrl?: string
  year?: string
}

interface ProjectTranslation {
  tagline: string
  description: string
  highlights?: string[]
  audience?: string[]
  role?: string
}

const projectsBase: ProjectBase[] = [
  {
    id: 'placeholder-one',
    name: 'PRISM',
    images: [
      {
        src: asset('projects/prism/prism-segments-raceline.jpg'),
        alt: 'PRISM segments and raceline: the track split into named segments with the racing line drawn through them',
      },
      {
        src: asset('projects/prism/prism-welcome.png'),
        alt: 'PRISM welcome screen, describing the system and showing the module rail and connection status bar',
      },
      {
        src: asset('projects/prism/prism-live-view.jpg'),
        alt: 'PRISM live view: the car running a lap on the 3D track with the navigation sidebar open and a lap timer along the bottom',
      },
      {
        src: asset('projects/prism/prism-parameter-tuning.png'),
        alt: 'PRISM parameter tuning: cards of autonomous-driving parameters grouped by module, each with its applied value and an edit field',
      },
      {
        src: asset('projects/prism/prism-track-editor.jpg'),
        alt: 'PRISM track editor: the cone map in 3D, blue and yellow cones either side of the centre line, with editing tools down the right edge',
      },
    ],
    tech: ['TypeScript', 'React', 'ROS2', 'Zenoh', 'MUI', 'Figma', 'Vite', 'Docker'],
    githubUrl: 'https://github.com/filipmilanov/PRISM-ASE/tree/master',
    year: '2025/2026',
  },
  {
    id: 'placeholder-two',
    name: 'QualiT',
    images: [
      {
        src: asset('projects/qualit/qualit-sonarqube-analysis.png'),
        alt: 'QualiT SonarQube analysis: a passed quality gate above metric cards for coverage, bugs, code smells, vulnerabilities and duplication, with issues broken down by severity and type',
      },
      {
        src: asset('projects/qualit/qualit-source-upload.png'),
        alt: 'QualiT source code step: a drop area for uploading the project as a ZIP file, with a questionnaire step marked complete behind it',
      },
      {
        src: asset('projects/qualit/qualit-ai-code-analysis.png'),
        alt: 'QualiT AI source-code quality analysis: an executive summary of test classes and untested files, a project overview of languages and frameworks, and ranked action items',
      },
      {
        src: asset('projects/qualit/qualit-ai-doc-analysis.png'),
        alt: 'QualiT AI test documentation analysis: each document rated for source-code relevance, then assessed against ISO 29119 and IEEE 829 standards coverage',
      },
      {
        src: asset('projects/qualit/qualit-test-evaluation.png'),
        alt: 'QualiT overall project test evaluation: a verdict with reasoning, followed by strengths and critical weaknesses cited against ISTQB and ISO/IEC/IEEE 29119 standards',
      },
    ],
    tech: ['AI', 'Python', 'Java', 'Angular', 'TypeScript', 'Spring Boot', 'Docker'],
    githubUrl: 'https://github.com/filipmilanov/Software-Quality-Testing-Tool',
    year: '2025',
  },
  {
    id: 'placeholder-four',
    name: 'EasyFlat',
    images: [
      {
        // Illustration, not a screenshot — this project has no captures.
        src: asset('projects/easyflat/easyflat-cover.svg'),
        alt: 'Illustration for EasyFlat: three overlapping panels standing for the shared grocery checklist, the task list assigned across housemates, and a matched recipe',
      },
    ],
    tech: ['Java', 'Angular', 'TypeScript', 'Spring Boot', 'H2'],
    githubUrl: 'https://github.com/filipmilanov/EasyFlat',
    year: '2023',
  },
]

const translations: Record<Lang, Record<string, ProjectTranslation>> = {
  en: {
    'placeholder-one': {
      tagline: 'A web-based trackside configuration and visualization system for autonomous racing.',
      description:
        'Between runs at a test day, an engineer has minutes to retune the car. PRISM puts that whole loop on a tablet at trackside, and brings a full reconfiguration cycle down to under 20 minutes.',
      highlights: [
        'View and edit autonomous driving parameters through a tablet interface',
        'Correct cone maps and racing paths between test runs',
        'Define sector-specific parameter overrides',
        'Save and load complete configuration snapshots',
      ],
      audience: ['TU Wien Racing driverless', 'Formula Student operations', 'Future team cohorts'],
      role: 'UI/UX/3D Vizualization Expert and Technical Architect',
    },
    'placeholder-two': {
      tagline: 'AI-Powered Software Quality Testing Tool',
      description:
        'QualiT is a semi-automated software quality testing tool developed using Angular (Frontend) and Spring Boot (Backend). It enables teams to evaluate the maturity and effectiveness of their software testing workflows using both industry standards and AI-driven artifact analysis.',
    },
    'placeholder-four': {
      tagline: 'EasyFlat is a web application that simplifies the management of shared flats.',
      description:
        'EasyFlat is a web application that simplifies the management of shared flats, providing a platform for residents to track grocery lists, manage tasks, and find recepies based on available ingredients.',
    },
  },
  de: {
    'placeholder-one': {
      tagline: 'Ein webbasiertes System zur Konfiguration und Visualisierung am Streckenrand für autonomes Rennfahren.',
      description:
        'Zwischen den Läufen an einem Testtag bleiben einem Ingenieur nur wenige Minuten, um das Auto neu abzustimmen. PRISM bringt diesen gesamten Ablauf auf ein Tablet direkt an der Strecke und verkürzt einen vollständigen Rekonfigurationszyklus auf unter 20 Minuten.',
      highlights: [
        'Parameter des autonomen Fahrens über eine Tablet-Oberfläche anzeigen und bearbeiten',
        'Pylonenkarten und Rennlinien zwischen Testläufen korrigieren',
        'Streckenabschnittsspezifische Parameter-Überschreibungen definieren',
        'Vollständige Konfigurationsstände speichern und laden',
      ],
      audience: ['TU Wien Racing Driverless', 'Formula-Student-Betrieb', 'Zukünftige Team-Generationen'],
      role: 'UI/UX & 3D-Visualisierung, technische Architektur',
    },
    'placeholder-two': {
      tagline: 'KI-gestütztes Werkzeug zur Prüfung der Softwarequalität',
      description:
        'QualiT ist ein halbautomatisiertes Werkzeug zur Prüfung der Softwarequalität, entwickelt mit Angular (Frontend) und Spring Boot (Backend). Es ermöglicht Teams, die Reife und Wirksamkeit ihrer Testprozesse anhand von Industriestandards und KI-gestützter Artefaktanalyse zu bewerten.',
    },
    'placeholder-four': {
      tagline: 'EasyFlat ist eine Webanwendung, die die Verwaltung von Wohngemeinschaften vereinfacht.',
      description:
        'EasyFlat ist eine Webanwendung, die die Verwaltung von Wohngemeinschaften vereinfacht und den Bewohnern eine Plattform bietet, um Einkaufslisten zu führen, Aufgaben zu verwalten und Rezepte anhand vorhandener Zutaten zu finden.',
    },
  },
  bg: {
    'placeholder-one': {
      tagline: 'Уеб базирана система за конфигуриране и визуализация край пистата за автономно състезаване.',
      description:
        'Между отделните пускания в тестов ден инженерът разполага само с минути да настрои отново колата. PRISM пренася целия този процес на таблет край пистата и съкращава пълен цикъл на препроверка до под 20 минути.',
      highlights: [
        'Преглед и редактиране на параметри за автономно шофиране през таблет интерфейс',
        'Коригиране на карти с конуси и състезателни траектории между тестовите пускания',
        'Задаване на настройки на параметри, специфични за отделен сектор',
        'Запазване и зареждане на пълни конфигурационни моментни снимки',
      ],
      audience: ['TU Wien Racing Driverless', 'Operations на Formula Student', 'Бъдещи поколения на отбора'],
      role: 'UI/UX и 3D визуализация, техническа архитектура',
    },
    'placeholder-two': {
      tagline: 'Инструмент за оценка на софтуерното качество с изкуствен интелект',
      description:
        'QualiT е полуавтоматизиран инструмент за оценка на софтуерното качество, разработен с Angular (Frontend) и Spring Boot (Backend). Той позволява на екипите да оценяват зрелостта и ефективността на процесите си за тестване чрез индустриални стандарти и AI анализ на артефакти.',
    },
    'placeholder-four': {
      tagline: 'EasyFlat е уеб приложение, което улеснява управлението на споделени апартаменти.',
      description:
        'EasyFlat е уеб приложение, което улеснява управлението на споделени апартаменти, като предоставя платформа на живущите да следят списъци за пазаруване, да управляват задачи и да намират рецепти според наличните продукти.',
    },
  },
}

export function getProjects(lang: Lang): Project[] {
  return projectsBase.map((base) => ({ ...base, ...translations[lang][base.id] }))
}

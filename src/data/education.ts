import type { EducationEntry, Lang } from '../types'

// ── PLACEHOLDER CONTENT ──────────────────────────────────────────────────────
// Newest first. To attach your thesis later, fill in the `thesis` field on the
// relevant degree — the page renders the attachment block automatically.
// Degree titles, institution names, and the thesis title are official
// credential names, kept identical across languages; summaries, highlights,
// and the abstract are prose, translated per language.
export const educationByLang: Record<Lang, EducationEntry[]> = {
  en: [
    {
      start: '2026',
      end: 'Current',
      degree: 'MSc Software & Information Engineering',
      institution: 'Technical University of Vienna',
      location: 'Vienna, Austria',
      summary:
        'This master’s in Software Engineering delivers a strong foundation in designing and developing complex software systems, blending theory with hands-on experience. From the start, you can specialize in robotics, automation, or AI, and gain the skills to build sustainable, reliable, and secure digital infrastructures. It prepares you for successful careers in both academia and industry.',
      highlights: [
        'Advanced Distributed Systems',
        'Machine Learning',
        'Advanced Software Engineering',
        'Advanced Databases',
        'Advanced Algorithms',
      ],
      // Delete this block until your thesis is ready, or fill it in now.
      /*
      thesis: {
        title: 'Placeholder Thesis Title',
        abstract:
          'Placeholder abstract. Two to four sentences describing the problem you tackled, the approach you took, and what the results showed. This block only appears when a degree has a thesis attached, so you can leave it out until yours is finished.',
        supervisor: 'Supervised by Prof. Placeholder Name',
        grade: 'Grade: 1.0',
        // pdfUrl: '/thesis.pdf',  ← put the PDF in public/ and uncomment
      },
      */
    },
    {
      start: '2020',
      end: '2026',
      degree: 'BSc Software & Information Engineering',
      institution: 'Technical University of Vienna',
      location: 'Vienna, Austria',
      summary:
        'This bachelor’s program in Software & Information Engineering covers core CS fundamentals (algorithms, data structures, architecture, math, statistics, HCI, programming paradigms) plus specialized topics like databases, knowledge-based systems, distributed computing, OS/compilers, and security/law. It also develops creativity, problem-solving, and teamwork skills for responsible, innovative practice.',
      highlights: ['Algorithms', 'Databases', 'Operating Systems', 'Distributed Systems', 'Software Engineering', 'Mathematics'],
      thesis: {
        title: 'LLM-Guided Abstraction Refinement for Answer Set Programs',
        abstract:
          'For large or complex programs, computing answer sets becomes computationally expensive. A well-established way to tame this cost is abstraction: construct a simplified version of the program that preserves the relevant properties while reducing complexity. This thesis investigates how to leverage large language models (LLMs) to guide the abstraction refinement process for answer set programs, aiming to improve efficiency and scalability in computing answer sets.',
        supervisor: '',
        grade: '',
        // pdfUrl: '/thesis.pdf',  ← put the PDF in public/ and uncomment
      },
    },
  ],
  de: [
    {
      start: '2026',
      end: 'Laufend',
      degree: 'MSc Software & Information Engineering',
      institution: 'Technical University of Vienna',
      location: 'Wien, Österreich',
      summary:
        'Dieser Master in Software Engineering vermittelt ein solides Fundament für die Konzeption und Entwicklung komplexer Softwaresysteme und verbindet Theorie mit praktischer Erfahrung. Von Beginn an kann man sich auf Robotik, Automatisierung oder KI spezialisieren und die Fähigkeiten erwerben, nachhaltige, zuverlässige und sichere digitale Infrastrukturen zu entwickeln. Er bereitet auf erfolgreiche Laufbahnen sowohl in der Wissenschaft als auch in der Industrie vor.',
      highlights: [
        'Advanced Distributed Systems',
        'Machine Learning',
        'Advanced Software Engineering',
        'Advanced Databases',
        'Advanced Algorithms',
      ],
    },
    {
      start: '2020',
      end: '2026',
      degree: 'BSc Software & Information Engineering',
      institution: 'Technical University of Vienna',
      location: 'Wien, Österreich',
      summary:
        'Dieser Bachelorstudiengang in Software & Information Engineering vermittelt die zentralen Grundlagen der Informatik (Algorithmen, Datenstrukturen, Architektur, Mathematik, Statistik, Mensch-Computer-Interaktion, Programmierparadigmen) sowie vertiefende Themen wie Datenbanken, wissensbasierte Systeme, verteiltes Rechnen, Betriebssysteme/Compilerbau und Sicherheit/Recht. Er fördert zudem Kreativität, Problemlösungsfähigkeit und Teamarbeit für eine verantwortungsvolle, innovative Praxis.',
      highlights: ['Algorithms', 'Databases', 'Operating Systems', 'Distributed Systems', 'Software Engineering', 'Mathematics'],
      thesis: {
        title: 'LLM-Guided Abstraction Refinement for Answer Set Programs',
        abstract:
          'Bei großen oder komplexen Programmen wird die Berechnung von Answer Sets rechnerisch aufwendig. Ein etablierter Weg, diesen Aufwand zu begrenzen, ist Abstraktion: die Konstruktion einer vereinfachten Version des Programms, die die relevanten Eigenschaften erhält und gleichzeitig die Komplexität reduziert. Diese Arbeit untersucht, wie sich große Sprachmodelle (LLMs) nutzen lassen, um den Verfeinerungsprozess der Abstraktion für Answer-Set-Programme zu steuern, mit dem Ziel, die Effizienz und Skalierbarkeit bei der Berechnung von Answer Sets zu verbessern.',
        supervisor: '',
        grade: '',
      },
    },
  ],
  bg: [
    {
      start: '2026',
      end: 'Сега',
      degree: 'MSc Software & Information Engineering',
      institution: 'Technical University of Vienna',
      location: 'Виена, Австрия',
      summary:
        'Тази магистърска програма по софтуерно инженерство изгражда солидна основа за проектиране и разработка на сложни софтуерни системи, съчетавайки теория с практически опит. От самото начало е възможна специализация в роботика, автоматизация или изкуствен интелект, както и придобиване на умения за изграждане на устойчиви, надеждни и сигурни цифрови инфраструктури. Тя подготвя за успешна кариера както в академичните среди, така и в индустрията.',
      highlights: [
        'Advanced Distributed Systems',
        'Machine Learning',
        'Advanced Software Engineering',
        'Advanced Databases',
        'Advanced Algorithms',
      ],
    },
    {
      start: '2020',
      end: '2026',
      degree: 'BSc Software & Information Engineering',
      institution: 'Technical University of Vienna',
      location: 'Виена, Австрия',
      summary:
        'Тази бакалавърска програма по софтуерно и информационно инженерство обхваща основите на компютърните науки (алгоритми, структури от данни, архитектура, математика, статистика, човеко-машинно взаимодействие, програмни парадигми), както и специализирани теми като бази данни, системи, базирани на знания, разпределени изчисления, операционни системи/компилатори и сигурност/право. Тя развива и креативност, умения за решаване на проблеми и работа в екип за отговорна и иновативна практика.',
      highlights: ['Algorithms', 'Databases', 'Operating Systems', 'Distributed Systems', 'Software Engineering', 'Mathematics'],
      thesis: {
        title: 'LLM-Guided Abstraction Refinement for Answer Set Programs',
        abstract:
          'При големи или сложни програми изчисляването на answer sets става изчислително скъпо. Утвърден начин за овладяване на тази цена е абстракцията: изграждане на опростена версия на програмата, която запазва релевантните свойства, като същевременно намалява сложността. Тази теза изследва как големи езикови модели (LLM) могат да бъдат използвани за насочване на процеса на усъвършенстване на абстракцията при answer set програми, с цел подобряване на ефективността и мащабируемостта при изчисляването на answer sets.',
        supervisor: '',
        grade: '',
      },
    },
  ],
}

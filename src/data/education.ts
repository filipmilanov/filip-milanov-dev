import type { EducationEntry } from '../types'

// ── PLACEHOLDER CONTENT ──────────────────────────────────────────────────────
// Newest first. To attach your thesis later, fill in the `thesis` field on the
// relevant degree — the page renders the attachment block automatically.
export const education: EducationEntry[] = [
  {
    start: '2026',
    end: 'Current',
    degree: 'MSc Software & Information Engineering',
    institution: 'Technical University of Vienna',
    location: 'Vienna, Austria',
    summary:
    'This master’s in Software Engineering delivers a strong foundation in designing and developing complex software systems, blending theory with hands-on experience. From the start, you can specialize in robotics, automation, or AI, and gain the skills to build sustainable, reliable, and secure digital infrastructures. It prepares you for successful careers in both academia and industry.',
    highlights: ['Advanced Distributed Systems', 'Machine Learning', 'Advanced Software Engineering', 'Advanced Databases', 'Advanced Algorithms'],
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
    highlights: ['Algorithms', 'Databases','Operating Systems', 'Distributed Systems', 'Software Engineering', 'Mathematics'],
    thesis: {
      title: 'LLM-Guided Abstraction Refinement for Answer Set Programs',
      abstract:
        'For large or complex programs, computing answer sets becomes computationally expensive. A well-established way to tame this cost is abstraction: construct a simplified version of the program that preserves the relevant properties while reducing complexity. This thesis investigates how to leverage large language models (LLMs) to guide the abstraction refinement process for answer set programs, aiming to improve efficiency and scalability in computing answer sets.',
      supervisor: '',
      grade: '',
      // pdfUrl: '/thesis.pdf',  ← put the PDF in public/ and uncomment
    },
  },
]

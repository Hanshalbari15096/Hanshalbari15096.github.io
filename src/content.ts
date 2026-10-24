export const BRAND = 'Hanshal'
export const NAME = 'Hanshal Bari'
export const EMAIL = 'hanshalbari15096@gmail.com'
export const GITHUB_URL = 'https://github.com/Hanshalbari15096'
export const PROJECTS_URL = `${GITHUB_URL}?tab=repositories`
export const LOCATION = 'Gandhinagar, India'

export const INTRO = {
  line1: 'Hey there, meet Hanshal,',
  line2: 'the human behind the dense-document tools',
}

export const TYPEWRITER_TEXT =
  'Glad you stopped in. I make dense information usable. Now, what are we building?'

export type NavLink = {
  label: string
  href: string
  external?: boolean
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: PROJECTS_URL, external: true },
  { label: 'Contact', href: '#contact' },
  { label: 'Query', href: '#query' },
]

export type Action = {
  label: string
  href: string
  external?: boolean
}

export const ACTIONS: Action[] = [
  { label: 'See selected work', href: '#work' },
  { label: 'View my GitHub', href: GITHUB_URL, external: true },
  { label: 'Send a brief hello', href: `mailto:${EMAIL}` },
  { label: 'Get in touch', href: '#contact' },
]

export type Project = {
  title: string
  kicker: string
  summary: string
  tags: string[]
  href: string
}

export const PROJECTS: Project[] = [
  {
    title: 'IP-SAKTI',
    kicker: 'Retrieval · Multilingual · Voice',
    summary:
      'A multilingual RAG assistant for Ayurveda IPR and biopiracy defence. Answers come back citation-grounded — source, category, jurisdiction and score — with India/International filtering across nine languages.',
    tags: ['Python', 'FastAPI', 'ChromaDB', 'BM25 + RRF', 'Sarvam AI'],
    href: `${GITHUB_URL}/ip-sakti-ayurveda-rag`,
  },
  {
    title: 'IndicGov',
    kicker: 'Document understanding · Vernacular',
    summary:
      'Government paperwork, in the language you actually speak. Upload a circular, PDF or photo and get a summary, eligibility, document checklist, deadlines and fee warnings in Hindi, Marathi, Gujarati, Tamil or English.',
    tags: ['Python', 'FastAPI', 'React', 'Amazon Bedrock', 'Streamlit'],
    href: `${GITHUB_URL}/indicgov`,
  },
  {
    title: 'Gemini CSV Cleaner',
    kicker: 'Data tools · Structured output',
    summary:
      'Messy spreadsheets, made usable in seconds. De-duplicates, drops blanks, invents missing column labels and normalises types — one model call for the labels, applied mechanically row by row.',
    tags: ['Python', 'Gemini 2.5 Flash', 'Streamlit', 'PyInstaller'],
    href: `${GITHUB_URL}/gemini-csv-cleaner`,
  },
]

export type SkillGroup = {
  category: string
  items: string[]
}

export const SKILLS: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'C'],
  },
  {
    category: 'ML & Data',
    items: ['PyTorch', 'ChromaDB', 'BM25', 'RRF', 'RAG', 'FastAPI'],
  },
  {
    category: 'LLM APIs',
    items: ['Gemini 2.5 Flash', 'Amazon Bedrock', 'Sarvam AI', 'Prompt engineering'],
  },
  {
    category: 'Frontend',
    items: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Streamlit'],
  },
  {
    category: 'Tooling',
    items: ['Git', 'GitHub', 'yt-dlp', 'FFmpeg', 'PyInstaller', 'Docker'],
  },
]

export const CONTACT = {
  kicker: 'Contact',
  heading: "Have a dense problem? Let's make it legible.",
  note: "I'm going deeper into retrieval and evaluation, and looking for an internship where the documents are real and the stakes are higher.",
  focus: 'Retrieval · Multilingual NLP · Document understanding',
  stack: 'Python · PyTorch · LLM APIs',
  status: 'Open to internships',
}

export const QUERY = {
  heading: 'Got a dense problem?',
  subject: 'Portfolio query from',
}

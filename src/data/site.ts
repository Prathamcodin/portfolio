export const site = {
  name: 'Pratham Goyal',
  role: 'Backend / SDE — Java · Spring Boot · Python',
  tagline:
    'SDE Intern candidate graduating 2027. I design and ship backend systems in Java, Spring Boot, and Python — with the CS fundamentals to back them up.',
  location: 'Indore, India',
  email: 'pratham.goyal2303@gmail.com',
  phone: '+91 7489234727',
  resumeUrl: '/resume.pdf',
  socials: {
    github: 'https://github.com/Prathamcodin',
    linkedin: 'https://www.linkedin.com/in/pratham-goyal-599b612bb/',
    leetcode: 'https://leetcode.com/u/pratham-goyal12/',
    codeforces: 'https://codeforces.com/profile/pratham-goyal12',
    email: 'mailto:pratham.goyal2303@gmail.com',
  },
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  status: 'Live' | 'WIP' | 'Shipped';
  summary: string;
  description: string;
  tech: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: 'safeeye',
    title: 'SafeEye',
    year: '2025',
    status: 'Shipped',
    summary: 'AI‑Powered CCTV Threat Detection System',
    description:
      'Scalable full‑stack system for real‑time CCTV video analysis and threat detection. Async FastAPI pipeline handles concurrent long‑running video processing jobs with a MongoDB‑based job state machine for reliable tracking. Live progress and detections stream to the frontend over WebSockets; frame‑by‑frame processing with OpenCV and YOLO + DeepSORT for multi‑object tracking.',
    tech: ['Next.js', 'FastAPI', 'MongoDB', 'YOLO', 'OpenCV', 'Docker', 'WebSockets'],
    links: [
      { label: 'Code', href: 'https://github.com/Prathamcodin/SAFEEYE' },
    ],
  },
  {
    slug: 'settlement-recon-agent',
    title: 'Settlement Reconciliation Agent',
    year: 'Aug 2026',
    status: 'Shipped',
    summary: 'Finance‑ops matcher + guarded LLM classifier',
    description:
      "Finance‑ops reconciliation pipeline that auto-matches merchant orders against aggregator settlements — closed 81% of a 63-record batch deterministically with Decimal-precise arithmetic and a centralized tolerance rule shared across layers. An LLM exception-classifier is bounded behind a validation guard that re-checks every model claim against the raw data, rejecting arithmetically-invalid 'fabrications' so the model can never move money on numbers it invents. Backed by 49 unit tests across matcher, classifier, guard, and API layers, plus a FastAPI /reconcile endpoint and a Dockerized one-command run.",
    tech: ['Python', 'FastAPI', 'Docker', 'Gemini API'],
    links: [
      { label: 'Code', href: 'https://github.com/Prathamcodin/settlement-recon-agent' },
    ],
  },
  {
    slug: 'high-concurrency-rate-limiter',
    title: 'High‑Concurrency Distributed Rate Limiter',
    year: 'Aug 2026',
    status: 'Shipped',
    summary: 'Redis + Lua token bucket with a proven race‑condition fix',
    description:
      'Distributed rate limiter on the token-bucket algorithm with Redis-backed shared state, enforcing consistent request quotas across horizontally scaled, independent server instances. Diagnosed a race condition on a non-atomic GET-then-SET path where 30 concurrent requests for one user all passed a 10-token bucket (30 admitted vs. 10 allowed); eliminated it with a single atomic Redis Lua check-and-decrement that caps admissions at exactly 10 under identical load. A multithreaded Python harness deterministically reproduces the race and proves correctness after the fix; packaged as a multi-stage Docker build via Docker Compose for one-command reproducible deployment.',
    tech: ['Java', 'Spring Boot', 'Redis', 'Lua', 'Docker', 'Docker Compose', 'Linux', 'Python'],
    links: [
      { label: 'Code', href: 'https://github.com/Prathamcodin/high-concurrency-rate-limiter' },
    ],
  },
  {
    slug: 'costumer-support-agent',
    title: 'costumer-support-agent',
    year: '2026',
    status: 'Shipped',
    summary: 'AI support agent for AmazonHelp tweets — grounded & auditable',
    description:
      'AI customer‑support agent for AmazonHelp tweets. Intent classification, grounded reply drafting, and cost‑asymmetric escalation — built with a hand‑labelled golden set and an honest evaluation harness so wins and losses are measurable, not vibes‑based.',
    tech: ['Python', 'LLM', 'NLP', 'Evaluation'],
    links: [
      { label: 'Code', href: 'https://github.com/Prathamcodin/costumer-support-agent' },
    ],
  },
  {
    slug: 'ss-skin-pedia',
    title: 'SS Skin & Pedia Clinic',
    year: '2025',
    status: 'Live',
    summary: 'Production website for a real clinic',
    description:
      'Responsive clinic website with online appointment booking and WhatsApp integration. Google Maps API for real‑time navigation. Delivered end‑to‑end from requirements to deployment and maintenance for an active client.',
    tech: ['React.js', 'Netlify', 'Google Maps API', 'WhatsApp API'],
    links: [
      { label: 'Live', href: 'https://ssskinpedia.netlify.app' },
      { label: 'Code', href: 'https://github.com/Prathamcodin/SS-skin-and-pedia-clinic' },
    ],
  },
  {
    slug: 'quiz-app',
    title: 'Interactive Quiz App',
    year: '2025',
    status: 'Shipped',
    summary: 'Real‑time quiz with DOM‑driven scoring',
    description:
      'Interactive quiz application built with vanilla HTML, CSS, and JavaScript. Real‑time question rendering and score tracking via direct DOM manipulation — no framework, just fundamentals.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    links: [
      { label: 'Code', href: 'https://github.com/Prathamcodin' },
    ],
  },
];

export const stats = [
  { label: 'DSA Problems', value: '700+' },
  { label: 'Codeforces Global Rank', value: '501' },
  { label: 'Goldman Sachs Hackathon', value: 'Top 6%' },
  { label: 'Projects Shipped', value: '6+' },
];

export const skills = {
  Languages: ['Java', 'C++', 'C', 'Python', 'JavaScript', 'SQL'],
  Backend: ['Spring Boot', 'REST APIs', 'FastAPI', 'WebSockets', 'Microservices', 'Multithreading', 'Concurrency'],
  'Databases & Infra': ['MySQL', 'MongoDB', 'Redis', 'Docker', 'Docker Compose', 'Maven', 'Linux', 'Git'],
  Frontend: ['React.js', 'Next.js', 'HTML', 'CSS', 'JavaScript'],
  Concepts: [
    'Object-Oriented Design',
    'Low-Level Design',
    'Distributed Systems',
    'Multi-tiered Systems',
    'Scalability',
    'Caching',
    'Data Structures & Algorithms',
    'Algorithm Design',
    'Complexity Analysis',
    'Operating Systems',
    'Computer Networks',
    'DBMS',
    'Agile',
  ],
};

export const achievements = [
  {
    title: 'Codeforces Global Rank 501',
    detail: 'Out of 28,000+ participants in Codeforces Round 1115 (Div. 2).',
  },
  {
    title: 'Top 6% at Goldman Sachs Hackathon',
    detail: 'Ranked in the top 6% of 15,000+ participants.',
  },
  {
    title: '700+ DSA problems solved',
    detail: 'Across LeetCode and Codeforces, with consistent practice in graphs, DP, and greedy.',
  },
  {
    title: 'Shortlisted for Amazon ML Summer School 2026',
    detail: 'Through a competitive resume and assessment screen.',
  },
];

export const experience = [
  {
    company: 'SS Skin & Pedia Clinic',
    role: 'Freelance Web Developer',
    period: '2025 – Present',
    location: 'Remote — Indore, India',
    bullets: [
      'Delivered and maintain a live production website for a two-doctor medical clinic serving 250+ patients — online appointment booking, WhatsApp integration, and Google Maps.',
      'Worked directly with clients on requirements and owned end-to-end delivery: responsive React UI across desktop, tablet and mobile.',
      'Deployment and ongoing maintenance on Netlify. Tech: React.js, JavaScript, Google Maps API, WhatsApp API, Netlify.',
    ],
  },
];

export const certifications = [
  {
    title: 'GPU Architectures and Programming',
    issuer: 'NPTEL · IIT',
    period: 'Jan – Apr 2026',
    duration: '12‑week course',
    credits: 4,
    score: 71,
    scoreMax: 100,
    rank: 418,
    breakdown: { assignment: '23.47/25', exam: '48/75' },
    verifyId: 'NPTEL26CS43S1056400208',
    tag: 'Systems / GPU',
  },
  {
    title: 'Spread Spectrum Communications and Jamming',
    issuer: 'NPTEL · IIT',
    period: 'Jan – Apr 2026',
    duration: '12‑week course',
    credits: 4,
    score: 54,
    scoreMax: 100,
    rank: 135,
    breakdown: { assignment: '21.28/25', exam: '33/75' },
    verifyId: 'NPTEL26EE60S1256400594',
    tag: 'Communications',
  },
  {
    title: 'The Joy of Computing using Python',
    issuer: 'NPTEL · IIT',
    period: 'Jul – Oct 2025',
    duration: '12‑week course',
    credits: 3,
    score: 82,
    scoreMax: 100,
    rank: 20403,
    breakdown: { assignment: '21.75/25', exam: '60/75' },
    verifyId: 'NPTEL25CS103S1058402431',
    tag: 'Python',
  },
];

export const leetcode = {
  username: 'pratham-goyal12',
  profileUrl: 'https://leetcode.com/u/pratham-goyal12/',
};

export const education = [
  {
    school: 'Shri G.S. Institute of Technology & Science (SGSITS)',
    degree: 'B.Tech in Electronics & Communication Engineering',
    period: '2023 – 2027',
    location: 'Indore, MP',
    coursework: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'DBMS',
      'Computer Networks',
      'Object-Oriented Programming',
      'Computer Architecture',
    ],
  },
];

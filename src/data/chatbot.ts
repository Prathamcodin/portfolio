// A small keyword-matched knowledge base — no external LLM.
// Each entry: `keywords` that trigger it, and a rotating list of `answers` (so it feels less scripted).

export type KBEntry = {
  id: string;
  keywords: string[][]; // OR of ANDs: [["react","use"]] means "react" AND "use"
  answers: string[];
};

export const kb: KBEntry[] = [
  {
    id: 'hello',
    keywords: [['hi'], ['hello'], ['hey'], ['yo'], ['sup'], ['heyy']],
    answers: [
      "Hey! I'm Pratham's site-bot. Ask me about his projects, stack, DSA, or anything from his resume.",
      "Hey there. I know Pratham's projects, stack, CP practice, and experience — fire away.",
    ],
  },
  {
    id: 'who',
    keywords: [['who', 'are', 'you'], ['who', 'is'], ['about', 'you'], ['introduce'], ['your', 'name']],
    answers: [
      "I'm a small chatbot living on Pratham Goyal's portfolio. Pratham is a 3rd-year B.Tech ECE student at SGSITS Indore who builds production full-stack apps and grinds DSA on the side.",
    ],
  },
  {
    id: 'role',
    keywords: [['what', 'do', 'you', 'do'], ['role'], ['job'], ['position'], ['title']],
    answers: [
      "Pratham is a Software & Full-Stack Developer. Strong preference for Next.js + FastAPI + MongoDB, with an interest in AI-adjacent systems (his SafeEye project runs YOLO on CCTV feeds).",
    ],
  },
  {
    id: 'projects',
    keywords: [['project'], ['projects'], ['built'], ['work'], ['portfolio', 'work']],
    answers: [
      "Main projects: **SafeEye** (AI CCTV threat detection — Next.js + FastAPI + YOLO), **Settlement Reconciliation Agent** (deterministic matcher + LLM guard), **High‑Concurrency Rate Limiter** (Redis + Lua, fixes a real race condition), **costumer-support-agent** (AI support for AmazonHelp tweets), and **SS Skin & Pedia Clinic** (a real client production site). Head to /projects for the full list.",
    ],
  },
  {
    id: 'safeeye',
    keywords: [['safeeye'], ['cctv'], ['yolo'], ['threat', 'detection'], ['video', 'analysis']],
    answers: [
      "SafeEye is a full-stack CCTV threat detection system. FastAPI backend runs an async job pipeline for long-running video processing, MongoDB tracks job state, and WebSockets stream live progress + detections back to a Next.js frontend. Detection uses OpenCV + YOLO with DeepSORT for multi-object tracking.",
    ],
  },
  {
    id: 'clinic',
    keywords: [['clinic'], ['ss', 'skin'], ['pedia'], ['skin'], ['booking']],
    answers: [
      "SS Skin & Pedia Clinic is a live production website Pratham built for a real dermatology client — appointment booking, WhatsApp integration, and Google Maps for navigation. Deployed on Netlify, delivered end-to-end from requirements through maintenance.",
    ],
  },
  {
    id: 'settlement',
    keywords: [['settlement'], ['reconciliation'], ['recon'], ['ledger'], ['balancing']],
    answers: [
      "**Settlement Reconciliation Agent** — a deterministic matcher pairs transactions first, then a validation guard boxes in an LLM classifier so it can't hallucinate money into balancing. Rule-based logic wins by default; the model handles only the ambiguous long-tail, and every classification is checked against invariants.",
    ],
  },
  {
    id: 'ratelimiter',
    keywords: [['rate'], ['limiter'], ['redis'], ['lua'], ['token', 'bucket']],
    answers: [
      "**High-Concurrency Rate Limiter** — distributed rate limiter using Redis + Lua for atomic token-bucket enforcement. Written in Java. The naive implementation over-admits by 300% under load; the atomic Lua version holds exactly to the limit. Ships with a load harness that proves the fix.",
    ],
  },
  {
    id: 'support',
    keywords: [['support'], ['customer'], ['costumer'], ['amazonhelp'], ['tweet'], ['tweets'], ['agent']],
    answers: [
      "**costumer-support-agent** — AI support agent for AmazonHelp tweets. Intent classification, grounded reply drafting, and cost-asymmetric escalation. Built with a hand-labelled golden set and an honest evaluation harness, so wins and losses are measurable — not vibes-based.",
    ],
  },
  {
    id: 'stack',
    keywords: [['stack'], ['tech'], ['technolog'], ['framework'], ['language'], ['tools'], ['language', 'know']],
    answers: [
      "Languages: **Java, C++, C, Python, JavaScript, SQL**. Backend: **Spring Boot, FastAPI, REST APIs, WebSockets, Microservices, Multithreading**. Data & Infra: **MySQL, MongoDB, Redis, Docker, Docker Compose, Maven, Linux, Git**. Frontend: **React.js, Next.js**.",
    ],
  },
  {
    id: 'react',
    keywords: [['react'], ['next.js'], ['nextjs'], ['frontend']],
    answers: [
      "Comfortable in React and Next.js — the CodSoft internship was mostly React component work, and both SafeEye and the clinic site have React/Next frontends.",
    ],
  },
  {
    id: 'backend',
    keywords: [['backend'], ['fastapi'], ['api'], ['python', 'server'], ['node']],
    answers: [
      "Backend is Pratham's stronger side. FastAPI for Python services (async job pipelines like SafeEye), Node/Express for JS services. Comfortable designing REST APIs and streaming over WebSockets.",
    ],
  },
  {
    id: 'db',
    keywords: [['database'], ['db'], ['mongo'], ['mongodb'], ['sql'], ['postgres']],
    answers: [
      "MongoDB is the daily driver — used it for the job-state machine in SafeEye. Also comfortable with SQL/PostgreSQL for structured data.",
    ],
  },
  {
    id: 'dsa',
    keywords: [['dsa'], ['algorithm'], ['leetcode'], ['codeforces'], ['problem'], ['problems'], ['cp'], ['competitive']],
    answers: [
      "**700+ DSA problems** solved across LeetCode and Codeforces. **Codeforces Div. 2 Global Rank 501** on Round 1115 (out of 28,000+). Comfortable with graphs, DP, and greedy. Live counts on /credentials.",
    ],
  },
  {
    id: 'hackathon',
    keywords: [['hackathon'], ['goldman'], ['sachs']],
    answers: [
      "Ranked in the **top 6%** of 15,000+ participants in the **Goldman Sachs Hackathon**.",
    ],
  },
  {
    id: 'amazon',
    keywords: [['amazon'], ['ml', 'summer'], ['summer', 'school']],
    answers: [
      "Shortlisted for **Amazon ML Summer School 2026** through a competitive resume and assessment screen.",
    ],
  },
  {
    id: 'education',
    keywords: [['education'], ['college'], ['school'], ['university'], ['sgsits'], ['study'], ['degree'], ['btech']],
    answers: [
      "B.Tech in Electronics & Communication Engineering at Shri G.S. Institute of Technology & Science (SGSITS), Indore. Batch of 2023–2027, currently in 3rd year.",
    ],
  },
  {
    id: 'experience',
    keywords: [['experience'], ['freelance'], ['worked', 'at'], ['job', 'exp'], ['work', 'exp']],
    answers: [
      "**Freelance Web Developer** at **SS Skin & Pedia Clinic** (2025 – Present). Delivered and maintain a live production website for a two-doctor clinic serving 250+ patients — appointment booking, WhatsApp integration, and Google Maps. Owned end-to-end delivery: responsive React UI, deployment, and ongoing maintenance on Netlify.",
    ],
  },
  {
    id: 'certs',
    keywords: [['cert'], ['certification'], ['nptel'], ['iit'], ['gpu'], ['spread', 'spectrum'], ['joy', 'computing']],
    answers: [
      "3 NPTEL certifications: **GPU Architectures and Programming** (score 71, rank 418), **Spread Spectrum Communications and Jamming** (score 54, rank 135), and **The Joy of Computing using Python** (score 82, rank 20,403). Full breakdown at /credentials.",
    ],
  },
  {
    id: 'contact',
    keywords: [['contact'], ['email'], ['reach'], ['hire'], ['get', 'in', 'touch'], ['phone'], ['mail']],
    answers: [
      "Email: **pratham.goyal2303@gmail.com**. Phone: **+91 7489234727**. Or head to /contact for all the links.",
    ],
  },
  {
    id: 'github',
    keywords: [['github'], ['git', 'hub'], ['repo']],
    answers: [
      "GitHub: [github.com/Prathamcodin](https://github.com/Prathamcodin). Most of the projects on this site link to their repos.",
    ],
  },
  {
    id: 'linkedin',
    keywords: [['linkedin'], ['linked', 'in']],
    answers: [
      "LinkedIn: [pratham-goyal-599b612bb](https://www.linkedin.com/in/pratham-goyal-599b612bb/).",
    ],
  },
  {
    id: 'location',
    keywords: [['where'], ['location'], ['from'], ['based'], ['live'], ['indore'], ['city']],
    answers: [
      "Indore, Madhya Pradesh, India.",
    ],
  },
  {
    id: 'resume',
    keywords: [['resume'], ['cv'], ['pdf']],
    answers: [
      "Resume link is on the homepage hero — the 'Resume ↗' button. Drop it at `public/resume.pdf` if it isn't there yet.",
    ],
  },
  {
    id: 'availability',
    keywords: [['hiring'], ['looking', 'for'], ['open', 'to'], ['available'], ['opportunity'], ['opportunities'], ['freelance']],
    answers: [
      "Open to internships, freelance builds, and interesting collaborations. Easiest way to reach out: email or LinkedIn.",
    ],
  },
  {
    id: 'joke',
    keywords: [['joke'], ['funny'], ['bored']],
    answers: [
      "Why did the developer go broke? Because they used up all their cache. 🙃",
      "There are 10 kinds of people — those who understand binary, and those who don't.",
    ],
  },
  {
    id: 'age',
    keywords: [['age'], ['old', 'are', 'you'], ['born']],
    answers: [
      "Pratham is in his 3rd year of B.Tech (2023–2027 batch). I'll let him fill in the exact number 😄",
    ],
  },
  {
    id: 'thanks',
    keywords: [['thanks'], ['thank', 'you'], ['thx'], ['ty']],
    answers: [
      "Anytime. Ping me if there's anything else you want to know about Pratham.",
    ],
  },
  {
    id: 'bye',
    keywords: [['bye'], ['goodbye'], ['see', 'you'], ['cya']],
    answers: [
      "Take care! Reach out via /contact if you'd like to chat with the real Pratham.",
    ],
  },
];

export const suggestedPrompts = [
  'Who are you?',
  'What projects has Pratham built?',
  'What is his tech stack?',
  'How many DSA problems has he solved?',
  'Tell me about SafeEye',
  'What certifications does he have?',
  'How can I contact him?',
  'Is he available for internships?',
];

function tokenMatches(token: string, keyword: string): boolean {
  // Exact match, or the token starts with the keyword (for stemming: "projects" matches "project"),
  // or the keyword starts with the token when the token is long enough. No naive substring includes.
  if (token === keyword) return true;
  if (token.length >= 3 && token.startsWith(keyword)) return true;
  if (keyword.length >= 3 && keyword.startsWith(token) && token.length >= 4) return true;
  return false;
}

export function findAnswer(input: string): string {
  const q = input.toLowerCase().trim();
  if (!q) return "Ask me something! Try the suggestions above.";

  const tokens = q.split(/[^a-z0-9+#.]+/).filter(Boolean);

  let best: { entry: KBEntry; score: number } | null = null;
  for (const entry of kb) {
    for (const group of entry.keywords) {
      const all = group.every((k) => tokens.some((t) => tokenMatches(t, k)));
      if (all) {
        // Longer keyword groups win (more specific); on tie, prefer longer keyword strings.
        const specificity = group.reduce((s, k) => s + k.length, 0);
        const score = group.length * 100 + specificity;
        if (!best || score > best.score) best = { entry, score };
      }
    }
  }

  if (best) {
    const a = best.entry.answers;
    return a[Math.floor(Math.random() * a.length)];
  }

  return [
    "I don't have a specific answer for that yet — try one of the suggested questions, or ask about his **projects**, **stack**, **DSA practice**, **certifications**, or **contact info**.",
    "Not sure about that one. I know his resume well — try asking about **SafeEye**, **the clinic site**, his **tech stack**, or his **NPTEL certs**.",
  ][Math.floor(Math.random() * 2)];
}

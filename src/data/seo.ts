import { absoluteUrl, siteConfig } from '../utils/seo';

export type PillarPage = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  intro: string;
  audience: string;
  focusAreas: string[];
  proofPoints: string[];
  faq: { question: string; answer: string }[];
  internalLinks: { label: string; href: string; description: string }[];
  searchTopics: string[];
};

const articleTemplates = [
  'How to learn {title} from scratch in 2026',
  '{title} roadmap for beginners',
  'Best tools for {title}',
  '{title} project ideas for a portfolio',
  '{title} interview questions and answers',
  '{title} case study: how Vinod M solves business problems',
  '{title} checklist for real-world delivery',
  '{title} vs adjacent approaches: what to choose and why',
  '{title} trends every professional should watch',
  '{title} for startups: practical use cases',
  '{title} for small businesses and founders',
  '{title} for enterprise teams and operations',
  'Portfolio tips for showing {title} work',
  'Common {title} mistakes to avoid',
  'Implementation guide for {title} projects',
  'Metrics and KPIs for measuring {title} success',
  'Learning path and certifications for {title}',
  'How {title} supports growth for Mysuru businesses',
] as const;

function buildIdeas(title: string, searchTopics: string[]) {
  return articleTemplates.map((template, index) => {
    const topic = searchTopics[index % searchTopics.length] ?? title;
    return template.replaceAll('{title}', topic);
  });
}

export const pillarPages: PillarPage[] = [
  {
    slug: 'ai',
    title: 'Artificial Intelligence & Generative AI',
    subtitle: 'LLMs, AI agents, and practical automation systems',
    description: 'A pillar page covering applied AI, generative AI, AI agents, and production-ready workflows built by Vinod M from Mysuru.',
    intro: 'This pillar explains how I design AI systems that are useful in real business contexts, from LLM prototypes and prompt workflows to agentic automation and AI-powered product experiences.',
    audience: 'Founders, product teams, recruiters, and businesses looking for applied AI execution rather than theory alone.',
    focusAreas: ['Generative AI', 'Large Language Models', 'AI Agents', 'Prompt Engineering', 'Applied NLP', 'Document Intelligence'],
    proofPoints: ['AI document intelligence platform', 'AI-powered WhatsApp automation', 'MediSense AI healthcare assistant', 'Deva AI experimentation track'],
    faq: [
      {
        question: 'What kind of AI work does Vinod M focus on?',
        answer: 'Applied AI, generative AI, AI automation, LLM-based workflows, and product-minded prototypes that can be shipped and measured.',
      },
      {
        question: 'How does this page help Google understand the brand?',
        answer: 'It connects the Vinod M personal brand to AI, generative AI, and Mysuru-based professional identity using visible copy and structured data.',
      },
    ],
    internalLinks: [
      { label: 'Featured projects', href: '/featured', description: 'See deployed AI systems and software prototypes.' },
      { label: 'Blog architecture', href: '/blog', description: 'Explore the SEO content strategy for this brand.' },
      { label: 'Get in touch', href: '/#contact', description: 'Connect for AI consulting or collaboration.' },
    ],
    searchTopics: ['AI', 'Generative AI', 'LLMs', 'AI agents', 'prompt engineering', 'document intelligence'],
  },
  {
    slug: 'machine-learning',
    title: 'Machine Learning, Deep Learning, NLP & Computer Vision',
    subtitle: 'Model building, experimentation, and research-backed delivery',
    description: 'A technical pillar for machine learning, deep learning, NLP, and computer vision work that supports Vinod M’s portfolio and research output.',
    intro: 'This page groups the model-building part of my work: classification, detection, extraction, experiment tracking, and research-oriented prototypes that connect ML output to business value.',
    audience: 'Hiring managers, researchers, and teams that need machine learning engineering plus communication and delivery.',
    focusAreas: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Model Evaluation', 'Research Prototypes'],
    proofPoints: ['Object detection and speed estimation publication', 'Fruit quality detection source project', 'Document key-value extraction pipeline', 'Applied computer-vision experiments and model evaluation'],
    faq: [
      {
        question: 'Does Vinod M work only on dashboards?',
        answer: 'No. The portfolio also includes ML, deep learning, NLP, and computer vision projects with research and product implications.',
      },
      {
        question: 'Does the site show evidence of ML experience?',
        answer: 'Yes. It highlights publication work, source code, model tracking, and practical computer vision and NLP systems.',
      },
    ],
    internalLinks: [
      { label: 'Publication', href: '/publication', description: 'Read the research publication linked to the computer vision work.' },
      { label: 'Research certificate', href: '/certificate', description: 'View the supporting certificate page.' },
      { label: 'Featured projects', href: '/featured', description: 'See applied AI, research, and software projects.' },
    ],
    searchTopics: ['machine learning', 'deep learning', 'NLP', 'computer vision', 'model evaluation', 'research prototypes'],
  },
  {
    slug: 'power-bi',
    title: 'Data Tools & Reporting Systems',
    subtitle: 'Reliable data handling inside business systems',
    description: 'A practical overview of data tools used within reporting systems, workflow automation, and software applications.',
    intro: 'This page covers the role of structured data, validation, reporting, and automation inside dependable business systems.',
    audience: 'Teams that need reliable reporting, data validation, and software-supported operational visibility.',
    focusAreas: ['Data validation', 'Operational reporting', 'Data modeling', 'Reliable integrations', 'Workflow automation', 'System monitoring'],
    proofPoints: ['Operational KPI views', 'Reporting workflows', 'Validated data consolidation', 'System-supported decision views'],
    faq: [
      {
        question: 'Why does reporting matter in business systems?',
        answer: 'Reliable reporting helps teams see process status, detect exceptions, and make better operational decisions.',
      },
      {
        question: 'Does the page still feel human-first?',
        answer: 'The emphasis is on dependable systems and practical outcomes, with tools selected to fit the requirements.'
      },
    ],
    internalLinks: [
      { label: 'About Vinod M', href: '/#about', description: 'Read the professional summary.' },
      { label: 'Featured projects', href: '/featured', description: 'Review reporting, software, and automation demonstrations.' },
      { label: 'Featured projects', href: '/featured', description: 'Inspect operational reporting and software examples.' },
    ],
    searchTopics: ['operational reporting', 'data validation', 'data modeling', 'workflow automation', 'system monitoring', 'business systems'],
  },
  {
    slug: 'software-engineering',
    title: 'Software Engineering, Full Stack Development & Cloud Computing',
    subtitle: 'Shipping production apps and deployable systems',
    description: 'A pillar page that connects Vinod M with software engineering, full stack development, deployment, and cloud-ready product delivery.',
    intro: 'This section covers the engineering side of the brand: apps, APIs, deployments, front-end systems, database workflows, and cloud-friendly implementation.',
    audience: 'Product teams, startups, and founders that need shipping capability rather than isolated code snippets.',
    focusAreas: ['Full Stack Development', 'Software Engineering', 'APIs', 'Cloud Computing', 'Deployment', 'Database Integration'],
    proofPoints: ['Next.js + Prisma + Supabase automation hub', 'Vercel deployments', 'FastAPI backends', 'Multi-platform product prototypes'],
    faq: [
      {
        question: 'Why does a personal brand need software engineering content?',
        answer: 'Because the site shows end-to-end execution, not just analysis and dashboards.',
      },
      {
        question: 'How does cloud computing fit here?',
        answer: 'Cloud deployment and hosting are essential to shipping projects that recruiters and users can actually access.',
      },
    ],
    internalLinks: [
      { label: 'Featured projects', href: '/featured', description: 'See deployed software and automation systems.' },
      { label: 'Blog architecture', href: '/blog', description: 'Explore engineering and cloud content ideas.' },
      { label: 'Resume', href: '/resume/Vinod_M_ATS_Resume.pdf', description: 'Review the ATS-friendly resume.' },
    ],
    searchTopics: ['full stack development', 'software engineering', 'cloud computing', 'deployment', 'APIs', 'database integration'],
  },
  {
    slug: 'automation',
    title: 'Workflow Automation & Data Systems',
    subtitle: 'Systems that remove manual work and scale operations',
    description: 'A pillar page for workflow automation, reliable data movement, integrations, and maintainable operational systems.'
    intro: 'This page focuses on connecting tools and processes, moving information reliably, and reducing repetitive manual work.'
    audience: 'Founders and operations teams that need maintainable workflows, integrations, and dependable internal systems.'
    focusAreas: ['Workflow automation', 'Data movement', 'System integrations', 'Workflow design', 'Operational controls', 'Internal applications'],
    proofPoints: ['WhatsApp automation', 'Back-office task hub', 'Document intelligence pipelines', 'FastAPI and webhook-based workflows'],
    faq: [
      {
        question: 'Is automation only about chatbots?',
        answer: 'No. It includes workflow orchestration, system integrations, validation, and reliable movement of information between tools.'
      },
      {
        question: 'How does this help entrepreneurship?',
        answer: 'Automation reduces operational overhead and lets founders focus on product, customers, and growth.',
      },
    ],
    internalLinks: [
      { label: 'Featured projects', href: '/featured', description: 'Explore automation projects with live demos.' },
      { label: 'Blog architecture', href: '/blog', description: 'Read automation-led content ideas.' },
      { label: 'Contact', href: '/#contact', description: 'Discuss consulting or automation work.' },
    ],
    searchTopics: ['workflow automation', 'system integrations', 'data validation', 'workflow design', 'webhooks', 'operations systems'],
  },
];

export function getPillarPage(slug: string) {
  return pillarPages.find((pillar) => pillar.slug === slug);
}

export function buildArticleIdeasForPillar(pillar: PillarPage) {
  return buildIdeas(pillar.title, pillar.searchTopics);
}

export const blogArchitecture = pillarPages.map((pillar) => ({
  pillar,
  ideas: buildArticleIdeasForPillar(pillar),
}));

export const routeLabels: Record<string, string> = {
  '/': 'Home',
  '/featured': 'Featured Projects',
  '/publication': 'Publication',
  '/certificate': 'Certificate',
  '/blog': 'Blog Architecture',
  '/expertise': 'Expertise Hub',
  '/ai': 'Artificial Intelligence & Generative AI',
  '/machine-learning': 'Machine Learning, Deep Learning, NLP & Computer Vision',
  '/power-bi': 'Data Tools & Reporting Systems',
  '/software-engineering': 'Software Engineering, Full Stack Development & Cloud Computing',
  '/automation': 'Workflow Automation & Data Systems',
};

export const siteRoutes = [
  '/',
  '/featured',
  '/publication',
  '/certificate',
  '/blog',
  '/expertise',
  ...pillarPages.map((pillar) => `/${pillar.slug}`),
];

export const socialProfiles = [
  siteConfig.github,
  siteConfig.githubReadme,
  siteConfig.linkedin,
  absoluteUrl('/'),
];
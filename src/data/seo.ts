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
      { label: 'Featured projects', href: '/featured', description: 'See deployed AI and analytics case studies.' },
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
    proofPoints: ['Object detection and speed estimation publication', 'Fruit quality detection source project', 'Document key-value extraction pipeline', 'Visionverse analytics dashboard'],
    faq: [
      {
        question: 'Is Vinod M focused only on data dashboards?',
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
      { label: 'Featured projects', href: '/featured', description: 'See applied ML and analytics case studies.' },
    ],
    searchTopics: ['machine learning', 'deep learning', 'NLP', 'computer vision', 'model evaluation', 'research prototypes'],
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics, Business Analytics & Business Intelligence',
    subtitle: 'Dashboards, KPIs, and decision-making systems',
    description: 'A pillar page for data analytics, business analytics, and BI work that helps search engines connect Vinod M with SQL, dashboards, and business insight delivery.',
    intro: 'This page explains how I turn data into decisions using KPI design, reporting automation, self-service dashboards, and analytics communication for stakeholders.',
    audience: 'Operations teams, analysts, founders, and recruiters searching for analytics delivery and BI problem-solving.',
    focusAreas: ['Data Analytics', 'Business Analytics', 'Business Intelligence', 'KPI Design', 'Dashboard Strategy', 'Stakeholder Reporting'],
    proofPoints: ['Financial analytics dashboard', 'GRS analytics dashboard', 'Resume and portfolio branding', 'Stakeholder reporting workflows'],
    faq: [
      {
        question: 'What business problems does this pillar address?',
        answer: 'Manual reporting, poor KPI visibility, slow decision-making, and scattered analytics workflows.',
      },
      {
        question: 'Why include Mysuru in the analytics brand?',
        answer: 'Location context helps reinforce real-world identity while keeping the copy natural and user-focused.',
      },
    ],
    internalLinks: [
      { label: 'Featured projects', href: '/featured', description: 'Open the analytics case studies.' },
      { label: 'Home page', href: '/#projects', description: 'Jump directly to the project portfolio section.' },
      { label: 'Contact', href: '/#contact', description: 'Start a project conversation.' },
    ],
    searchTopics: ['data analytics', 'business analytics', 'business intelligence', 'KPI dashboards', 'reporting automation', 'stakeholder analytics'],
  },
  {
    slug: 'power-bi',
    title: 'Power BI, SQL & Python',
    subtitle: 'Analytics stack for reporting, modeling, and automation',
    description: 'A pillar page that positions Vinod M around Power BI, SQL, and Python for analytics engineering, reporting, and data workflow automation.',
    intro: 'This page focuses on the practical stack I use to build analytics systems: SQL for data shaping, Python for automation, and BI tools for stakeholder-friendly output.',
    audience: 'Teams looking for dashboard implementation, data preparation, and reporting automation built on dependable tooling.',
    focusAreas: ['Power BI', 'SQL', 'Python', 'Data Modeling', 'ETL', 'Analytics Automation'],
    proofPoints: ['KPI dashboard builds', 'Python ETL scripts', 'Dashboard reporting workflows', 'Resume-ready analytics stack'],
    faq: [
      {
        question: 'Why create a separate Power BI page?',
        answer: 'It gives Google a clear topical signal for one of the strongest intent keywords in the personal brand.',
      },
      {
        question: 'Does the page still feel human-first?',
        answer: 'Yes. It frames the tools as part of business problem-solving rather than a keyword list.',
      },
    ],
    internalLinks: [
      { label: 'About Vinod M', href: '/#about', description: 'Read the professional summary.' },
      { label: 'Blog architecture', href: '/blog', description: 'See the content plan around Power BI, SQL, and Python.' },
      { label: 'Featured projects', href: '/featured', description: 'Inspect the dashboards built with this stack.' },
    ],
    searchTopics: ['Power BI', 'SQL', 'Python', 'ETL', 'data modeling', 'analytics automation'],
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
    title: 'AI Automation, Data Engineering & Analytics Engineering',
    subtitle: 'Systems that remove manual work and scale operations',
    description: 'A pillar page for automation, data engineering, and analytics engineering that reflects Vinod M’s hands-on work on workflows, integrations, and scalable pipelines.',
    intro: 'This page focuses on the systems mindset: automate repetitive work, move data reliably, and make analytics delivery easier to maintain.',
    audience: 'Founders, operations teams, and data teams that need process automation and maintainable pipelines.',
    focusAreas: ['AI Automation', 'Data Engineering', 'Analytics Engineering', 'Workflow Design', 'Integrations', 'Operational Systems'],
    proofPoints: ['WhatsApp automation', 'Back-office task hub', 'Document intelligence pipelines', 'FastAPI and webhook-based workflows'],
    faq: [
      {
        question: 'Is automation only about chatbots?',
        answer: 'No. It also includes workflow orchestration, data movement, and analytics operations that save time at scale.',
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
    searchTopics: ['AI automation', 'data engineering', 'analytics engineering', 'workflow automation', 'webhooks', 'operations systems'],
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
  '/data-analytics': 'Data Analytics, Business Analytics & Business Intelligence',
  '/power-bi': 'Power BI, SQL & Python',
  '/software-engineering': 'Software Engineering, Full Stack Development & Cloud Computing',
  '/automation': 'AI Automation, Data Engineering & Analytics Engineering',
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
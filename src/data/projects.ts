export type ProjectSection = 'live' | 'source' | 'ongoing';
export type ProjectCategory =
  | 'Analytics & Dashboards'
  | 'Websites & Platforms'
  | 'AI Automation & Chatbots'
  | 'Utilities & Media'
  | 'Computer Vision';

export interface ProjectCard {
  section: ProjectSection;
  category: ProjectCategory;
  title: string;
  description: string;
  platform: string;
  status: string;
  tags: string[];
  monogram: string;
  accent: string;
  liveUrl?: string;
  githubUrl?: string;
  publicationUrl?: string;
  certificateUrl?: string;
  flagLabel?: string;
  featured?: boolean;
}

export const completedProjects: ProjectCard[] = [
  {
    section: 'live',
    category: 'Websites & Platforms',
    title: 'Vinod M Portfolio',
    description: 'A personal brand site that brings together my projects, resume, contact links, and work history in one place.',
    platform: 'Vercel',
    status: 'Live',
    tags: ['Portfolio', 'Personal Brand', 'Web'],
    monogram: 'VM',
    accent: 'from-fuchsia-400/25 via-pink-400/20 to-rose-500/20',
    liveUrl: 'https://vinod-m-psi.vercel.app/',
    githubUrl: 'https://github.com/Vinodvinum/Vinod_M'
  },
  {
    section: 'live',
    category: 'Websites & Platforms',
    title: 'Sushvin AI Labs',
    description: 'A deployed playground for experiments, prototypes, and small product ideas that need a public home.',
    platform: 'Vercel',
    status: 'Live',
    tags: ['AI Lab', 'Experiments', 'Deployment'],
    monogram: 'SL',
    accent: 'from-violet-400/25 via-purple-400/20 to-indigo-500/20',
    liveUrl: 'https://sushvinailabs.vercel.app/',
    githubUrl: 'https://github.com/Vinodvinum/sushvinailabs-astro'
  },
  {
    section: 'live',
    category: 'Websites & Platforms',
    title: 'Bharaath Grocery',
    description: 'An e-commerce grocery app with product listings, cart flow, and a straightforward shopping experience for local customers.',
    platform: 'Vercel',
    status: 'Live',
    tags: ['E-commerce', 'Grocery', 'Web App'],
    monogram: 'BG',
    accent: 'from-emerald-400/25 via-teal-400/20 to-cyan-500/20',
    liveUrl: 'https://bharaath-grocery.vercel.app/',
    githubUrl: 'https://github.com/Vinodvinum/BharaathGrocery'
  },
  {
    section: 'live',
    category: 'Websites & Platforms',
    title: 'Kamadenu Goushala',
    description: 'A public-facing site built for the Kamadenu Goushala project and deployed on Vercel.',
    platform: 'Vercel',
    status: 'Live',
    tags: ['Web App', 'Community', 'Deployment'],
    monogram: 'KG',
    accent: 'from-amber-400/25 via-orange-400/20 to-red-500/20',
    liveUrl: 'https://kamadenu-goushalaa.vercel.app/',
    githubUrl: 'https://github.com/Vinodvinum/kamadenu-goushala'
  },
  {
    section: 'live',
    category: 'Analytics & Dashboards',
    title: 'Financial Analytics Dashboard',
    description: 'An interactive Streamlit dashboard that uses Python and SQL to surface revenue, profit, and trend insights for stakeholders.',
    platform: 'Streamlit',
    status: 'Live',
    tags: ['Finance', 'Analytics', 'Dashboard'],
    monogram: 'FD',
    accent: 'from-emerald-400/25 via-lime-400/20 to-green-500/20',
    liveUrl: 'https://aifinancialdashboard.streamlit.app/',
    githubUrl: 'https://github.com/Vinodvinum/Financial_dashboard'
    ,
    featured: true
  },
  {
    section: 'live',
    category: 'Analytics & Dashboards',
    title: 'Visionverse Analytics Dashboard',
    description: 'A Streamlit dashboard for tracking computer vision experiments, model metrics, and dataset distribution in one view.',
    platform: 'Streamlit',
    status: 'Live',
    tags: ['Dashboard', 'Streamlit', 'Analytics'],
    monogram: 'VD',
    accent: 'from-sky-400/25 via-cyan-400/20 to-blue-500/20',
    liveUrl: 'https://visonversedashboard.streamlit.app/',
    githubUrl: 'https://github.com/Vinodvinum/visonverse_dashboard'
    ,
    featured: true
  },
  {
    section: 'live',
    category: 'Analytics & Dashboards',
    title: 'GRS Analytics Dashboard',
    description: 'A public Streamlit dashboard that makes operational KPIs easier for stakeholders to monitor and review.',
    platform: 'Streamlit',
    status: 'Live',
    tags: ['Dashboard', 'Streamlit', 'Analytics'],
    monogram: 'GR',
    accent: 'from-emerald-400/25 via-cyan-400/20 to-blue-500/20',
    liveUrl: 'https://grsdashboard.streamlit.app/',
    githubUrl: 'https://github.com/Vinodvinum/GRS_Dashboard',
    flagLabel: 'Featured Analytics Project'
    ,
    featured: true
  },
  {
    section: 'live',
    category: 'Utilities & Media',
    title: 'Image Compressor App',
    description: 'A simple Streamlit utility for compressing images quickly before upload or sharing.',
    platform: 'Streamlit',
    status: 'Live',
    tags: ['Images', 'Compression', 'Utility'],
    monogram: 'IC',
    accent: 'from-blue-400/25 via-indigo-400/20 to-violet-500/20',
    liveUrl: 'https://image-compreappr-app.streamlit.app/',
    githubUrl: 'https://github.com/Vinodvinum/image-compressor-app'
  },
  {
    section: 'live',
    category: 'AI Automation & Chatbots',
    title: 'Hiring Chatbot',
    description: 'A Streamlit chatbot that automates early candidate interaction and basic screening workflows.',
    platform: 'Streamlit',
    status: 'Live',
    tags: ['Chatbot', 'HR', 'Automation'],
    monogram: 'HC',
    accent: 'from-cyan-400/25 via-sky-400/20 to-blue-500/20',
    liveUrl: 'https://oymhwdaagy29uyftpklvah.streamlit.app/',
    githubUrl: 'https://github.com/Vinodvinum/Hirinig_chatbot'
  },
  {
    section: 'source',
    category: 'Computer Vision',
    title: 'Fruits Quality Detection',
    description: 'A computer vision prototype that classifies fruit quality using OpenCV and custom datasets.',
    platform: 'GitHub',
    status: 'Source',
    tags: ['Computer Vision', 'Detection', 'ML'],
    monogram: 'FQ',
    accent: 'from-orange-400/25 via-amber-400/20 to-yellow-500/20',
    githubUrl: 'https://github.com/Vinodvinum/Fruits_quality_detection'
  },
  {
    section: 'source',
    category: 'Utilities & Media',
    title: 'Image Animation',
    description: 'A small tool for turning static images into lightweight animations for demos and portfolio use.',
    platform: 'GitHub',
    status: 'Source',
    tags: ['Animation', 'Images', 'Creative'],
    monogram: 'IA',
    accent: 'from-pink-400/25 via-rose-400/20 to-red-500/20',
    githubUrl: 'https://github.com/Vinodvinum/image_animation'
  },
  {
    section: 'source',
    category: 'AI Automation & Chatbots',
    title: 'AI-Powered WhatsApp Business Automation',
    description: 'An automation system for WhatsApp support flows, reminders, bookings, and handoffs using FastAPI and messaging APIs.',
    platform: 'Python + FastAPI',
    status: 'Source',
    tags: ['WhatsApp API', 'NLP', 'Automation'],
    monogram: 'WA',
    accent: 'from-emerald-400/25 via-green-400/20 to-teal-500/20'
  },
  {
    section: 'source',
    category: 'AI Automation & Chatbots',
    title: 'Intelligent Document Key-Value Extraction System',
    description: 'A transformer-based NLP pipeline that extracts key-value pairs from unstructured documents for downstream use.',
    platform: 'Python + NLP',
    status: 'Source',
    tags: ['Transformers', 'OCR', 'Information Extraction'],
    monogram: 'DE',
    accent: 'from-violet-400/25 via-indigo-400/20 to-blue-500/20'
  },
  {
    section: 'source',
    category: 'Computer Vision',
    title: 'Object Detection and Speed Estimation System',
    description: 'A computer vision pipeline for detecting, tracking, and estimating object speed from video streams.',
    platform: 'OpenCV + Python',
    status: 'Source',
    tags: ['Object Tracking', 'Speed Estimation', 'Computer Vision'],
    monogram: 'CV',
    accent: 'from-sky-400/25 via-blue-400/20 to-indigo-500/20',
    publicationUrl: '/publication',
    certificateUrl: '/certificate'
  }
];

export const ongoingProjects: ProjectCard[] = [
  {
    section: 'ongoing',
    category: 'AI Automation & Chatbots',
    title: 'Deva AI',
    description: 'An active AI project that I keep improving as I explore new ideas and workflows.',
    platform: 'Vercel',
    status: 'Ongoing',
    tags: ['AI', 'Live', 'In Progress'],
    monogram: 'DA',
    accent: 'from-violet-400/25 via-fuchsia-400/20 to-pink-500/20',
    liveUrl: 'https://deva-ai-vph5.vercel.app/'
  },
  {
    section: 'ongoing',
    category: 'Analytics & Dashboards',
    title: 'Sutra',
    description: 'An ongoing dashboard project where I continue to refine design and data presentation.',
    platform: 'Vercel',
    status: 'Ongoing',
    tags: ['Dashboard', 'Live', 'In Progress'],
    monogram: 'SU',
    accent: 'from-emerald-400/25 via-teal-400/20 to-cyan-500/20',
    liveUrl: 'https://sutra-flame.vercel.app/dashboard'
  },
  {
    section: 'live',
    category: 'AI Automation & Chatbots',
    title: 'AI Document Intelligence Engine',
    description: 'A full-stack document intelligence platform with FastAPI, Next.js, and Streamlit for extraction, validation, and export.',
    platform: 'Render + Vercel + Streamlit',
    status: 'Live',
    tags: ['AI', 'FastAPI', 'Next.js', 'Streamlit', 'DeepSeek', 'OCR', 'Live'],
    monogram: 'AI',
    accent: 'from-blue-500/25 via-cyan-400/20 to-teal-500/20',
    liveUrl: 'https://ai-document-intelligence-two.vercel.app',
    githubUrl: 'https://github.com/Vinodvinum/Ai_document_intelligence'
  },
  {
    section: 'live',
    category: 'AI Automation & Chatbots',
    title: 'MediSense AI - Healthcare Diagnosis Platform',
    description: 'A healthcare guidance assistant built with NLP that analyzes symptoms, suggests next steps, and includes local support resources.',
    platform: 'Streamlit',
    status: 'Live',
    tags: ['AI', 'NLP', 'Healthcare', 'Chatbot', 'Python', 'spaCy', 'Live'],
    monogram: 'MS',
    accent: 'from-green-500/25 via-emerald-400/20 to-teal-600/20',
    liveUrl: 'https://medisenseaivin.streamlit.app',
    githubUrl: 'https://github.com/Vinodvinum/MediSense_ai'
  },
  {
    section: 'live',
    category: 'AI Automation & Chatbots',
    title: 'Office Automation - Back-Office Hub',
    description: 'A back-office hub that combines task management, webhook triggers, and n8n automation in a single system.',
    platform: 'Vercel + Railway',
    status: 'Live',
    tags: ['Next.js', 'n8n', 'Prisma', 'Supabase', 'TypeScript', 'Automation', 'Webhooks'],
    monogram: 'OA',
    accent: 'from-orange-400/25 via-amber-400/20 to-yellow-500/20',
    liveUrl: 'https://office-automation-rho.vercel.app',
    githubUrl: 'https://github.com/Vinodvinum/office-automation',
    featured: true
  }
];

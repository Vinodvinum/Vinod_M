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
}

export const completedProjects: ProjectCard[] = [
  {
    section: 'live',
    category: 'Websites & Platforms',
    title: 'Vinod M Portfolio',
    description: 'My personal portfolio site showing projects, experience, and contact details.',
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
    description: 'A Vercel-hosted AI lab and experimentation space for applied AI ideas.',
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
    description: 'An e-commerce grocery web app deployed on Vercel. Admin access is handled privately.',
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
    description: 'A Vercel-deployed platform for the Kamadenu Goushala project with public source code.',
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
    title: 'AI Financial Dashboard',
    description: 'An AI-focused financial dashboard deployed on Streamlit for interactive analytics and reporting.',
    platform: 'Streamlit',
    status: 'Live',
    tags: ['Finance', 'AI', 'Dashboard'],
    monogram: 'FD',
    accent: 'from-emerald-400/25 via-lime-400/20 to-green-500/20',
    liveUrl: 'https://aifinancialdashboard.streamlit.app/',
    githubUrl: 'https://github.com/Vinodvinum/Financial_dashboard'
  },
  {
    section: 'live',
    category: 'Analytics & Dashboards',
    title: 'Visionverse Dashboard',
    description: 'A Streamlit dashboard for the Visionverse project with a live deployment and source repository.',
    platform: 'Streamlit',
    status: 'Live',
    tags: ['Dashboard', 'Streamlit', 'Analytics'],
    monogram: 'VD',
    accent: 'from-sky-400/25 via-cyan-400/20 to-blue-500/20',
    liveUrl: 'https://visonversedashboard.streamlit.app/',
    githubUrl: 'https://github.com/Vinodvinum/visonverse_dashboard'
  },
  {
    section: 'live',
    category: 'Analytics & Dashboards',
    title: 'GRS Dashboard',
    description: 'A Streamlit dashboard for GRS analytics with a public deployment and source repository.',
    platform: 'Streamlit',
    status: 'Live',
    tags: ['Dashboard', 'Streamlit', 'Analytics'],
    monogram: 'GR',
    accent: 'from-emerald-400/25 via-cyan-400/20 to-blue-500/20',
    liveUrl: 'https://grsdashboard.streamlit.app/',
    githubUrl: 'https://github.com/Vinodvinum/GRS_Dashboard'
  },
  {
    section: 'live',
    category: 'Utilities & Media',
    title: 'Image Compressor App',
    description: 'A lightweight app for compressing images with a public deployment and GitHub source code.',
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
    description: 'A chatbot application for hiring and candidate interaction workflows.',
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
    description: 'A GitHub-hosted computer vision project for fruit quality detection.',
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
    description: 'A GitHub project focused on animation workflows for images.',
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
    description: 'An intelligent WhatsApp automation system for customer support, booking flows, reminders, and human handover.',
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
    description: 'A transformer-based NLP system to extract structured key-value information from unstructured documents.',
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
    description: 'A computer vision pipeline to detect, track, and estimate object speed from video streams in real time.',
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
    description: 'An active AI project currently deployed on Vercel and still evolving.',
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
    description: 'An ongoing dashboard-style project available through the public dashboard route.',
    platform: 'Vercel',
    status: 'Ongoing',
    tags: ['Dashboard', 'Live', 'In Progress'],
    monogram: 'SU',
    accent: 'from-emerald-400/25 via-teal-400/20 to-cyan-500/20',
    liveUrl: 'https://sutra-flame.vercel.app/dashboard'
  }
];
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
    description: 'Problem: Need a clear professional presence to attract analytics roles. Solution: Built a focused portfolio showcasing analytics, dashboards, and projects with clear business context. Impact: Improved recruiter clarity and centralized contact/resume access.',
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
    description: 'Problem: Prototyping and experimentation lacked a central showcase. Solution: Built Sushvin AI Labs as a deployed playground for applied projects and demos. Impact: Centralized experimental demos for stakeholder review and demos.',
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
    description: 'Problem: Local grocers need an online storefront. Solution: Built a deployed e-commerce grocery web app with product listings and cart flows. Impact: Enabled online orders and improved local customer reach.',
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
    title: 'Financial Analytics Dashboard',
    description: 'Problem: Businesses lack real-time financial insights. Solution: Built an interactive Streamlit dashboard with Python and SQL-driven ETL to surface revenue, profit, and trend analytics. Impact: Enabled faster financial reporting and clearer trend-based decisions for stakeholders.',
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
    description: 'Problem: Product teams need consolidated KPIs for computer vision experiments. Solution: Built a Streamlit dashboard to visualize model metrics, dataset distributions, and deployment logs. Impact: Helped product and engineering teams track experiment performance and prioritize improvements.',
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
    description: 'Built a public Streamlit analytics dashboard to monitor GRS metrics, enabling quick stakeholder access to key operational KPIs. Featured as a focused analytics project.',
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
    description: 'Problem: Large images slow web workflows. Solution: Built a Streamlit-based image compressor for fast compression and download. Impact: Reduced image sizes for faster uploads and lower bandwidth consumption.',
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
    description: 'Problem: Hiring teams require scalable candidate screening. Solution: Built a Streamlit chatbot to automate candidate interactions and basic screening flows. Impact: Reduced initial screening time and improved candidate engagement.',
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
    description: 'Problem: Manual fruit quality checks are slow and inconsistent. Solution: Developed a computer vision model to classify fruit quality using OpenCV and custom datasets. Impact: Automated quality spotting and reduced manual inspection time in prototype environments.',
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
    description: 'Problem: Static images limit engagement. Solution: Built tools to animate images and export lightweight animations. Impact: Improved visual content quality for demos and portfolios.',
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
    description: 'Problem: Businesses need automated customer interactions on WhatsApp. Solution: Built an automation system using WhatsApp APIs and FastAPI to handle support flows, bookings, reminders, and handovers. Impact: Streamlined customer workflows and reduced manual response workload.',
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
    description: 'Problem: Extracting structured data from unstructured documents is time-consuming. Solution: Built a transformer-based NLP pipeline to extract key-value pairs and normalize outputs for downstream analytics. Impact: Reduced manual data entry and improved extraction accuracy for prototyped datasets.',
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
    description: 'Problem: Traffic monitoring lacked accurate speed estimations. Solution: Developed a CV pipeline to detect, track, and estimate object speed from video streams using OpenCV and tracking algorithms. Impact: Produced reproducible speed estimates used in the published research and prototype demos.',
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

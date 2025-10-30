"use client";

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, ChevronRight, ArrowRight, Eye, Phone, MapPin, Sparkles, Award, Code, Database, Briefcase, Beaker, Brain, TrendingUp, X, Download, Rocket, Users, UserCheck } from 'lucide-react'

// ==========================
// Personal Data Configuration
// ==========================
const PERSONAL_INFO = {
  name: 'Abdoulay Lashley',
  title: 'Product Manager • Data Scientist • Bioengineer',
  email: 'abdoulay.lashley@gmail.com',
  phone: '(301) 412-0932',
  linkedin: 'https://linkedin.com/in/abdoulay-lashley',
  github: 'https://github.com/alashle',
  location: 'Washington D.C. Metro Area',
  about: {
    intro: 'I Transform Complex Challenges Into Elegant Solutions That Create Real Impact',
    main: "My journey spans from bioengineering labs at UMD to L'Oréal's manufacturing floors, and now into the forefront of data science, product management, and generative AI. I bring a unique perspective: the precision of an engineer, the vision of a product manager, and the analytical rigor of a data scientist.",
    closer: "Currently pursuing my MS in Information Systems at UMD as a Terrapin Scholar, I'm leading teams on everything from enterprise NLP platforms to blockchain logistics. I don't just build products, I architect experiences that bridge human needs with technological possibilities.",
  },
  stats: [
    { label: 'Projects Shipped', value: '5+', icon: <Rocket className="w-12 h-12 mx-auto text-blue-600" /> },
    { label: 'Users Impacted', value: '100K+', icon: <Users className="w-12 h-12 mx-auto text-blue-600" /> },
    { label: 'Team Size Led', value: '6+', icon: <UserCheck className="w-12 h-12 mx-auto text-blue-600" /> },
    { label: 'Dedication, Commitment, and Resiliency ', value: '100%', icon: <TrendingUp className="w-12 h-12 mx-auto text-blue-600" /> },
    
  ],
}

// Education Data
const EDUCATION = [
  {
    degree: 'Master of Science in Information Systems',
    school: "University of Maryland, Robert H. Smith School of Business",
    period: 'Aug 2024 – Dec 2025',
    gpa: '3.7',
    honors: ['Terrapin Scholar', "Dean's List"],
    highlights: [
      "Graduate-level coursework in Data Mining, AI for Business, Cloud Computing, and Database Management",
      {
        label: "Full-Stack Product Management Bootcamp Certificate (Leland, 2025)",
        url: "/Full-Stack PM Bootcamp Certificate - Abdoulay Lashley.pdf",
        color: "text-green-600 dark:text-green-400"
      },
      "AWS Academy Certified in Cloud Architecting and Machine Learning Foundations",
      "Led Deloitte-sponsored Capstone developing an NLP platform for Veteran sentiment analysis using AWS and LLMs",
      "Collaborated with cross-functional teams on data-driven projects in predictive analytics and AI strategy",
      "Developed dashboards, data pipelines, and AI prototypes that bridge business insights with technology innovation",
    ],
  },
  {
    degree: 'Bachelor of Science in Bioengineering',
    school: 'University of Maryland, A. James Clark School of Engineering',
    period: 'Aug 2018 – May 2023',
    gpa: '3.2',
    honors: ["Dean's List 2020-2023"],
    highlights: [
      'Developed bias-aware medical devices',
      'Led clinical innovation projects',
      'Combined engineering with biological systems',
    ],
  },
]

// Projects Data
const ASSET_TITLE = 'Resources'; // rename this to any option above

const PROJECTS = [
  {
    id: 15,
    title: 'Personal Portfolio v4',
    company: 'Next.js + Tailwind',
    period: '2025',
    context: 'Needed a fast, accessible, and easily updatable personal site to showcase projects and resumes.',
    description: 'Interactive portfolio featuring project filtering, detail modals, full-screen asset viewer, smooth section scrolling, and responsive dark-mode design.',
    impact: '95+ Lighthouse score • <200ms TTFB • 100/100 accessibility • 30% engagement boost',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    category: ['featured', 'product'],
    gradient: 'from-sky-500 to-indigo-500',
    whatIOwned: [
      'Designed and implemented the entire site architecture and UX',
      'Built reusable Project Detail modal with dynamic “Resources” (images, PDFs, links)',
      'Implemented full-screen asset viewer (click to expand, Esc to close)',
      'Added smooth scroll indicator to guide navigation between sections',
      'Optimized for accessibility, Lighthouse metrics, and minimal layout shift',
      'Managed deployment pipeline and DNS configuration for a custom domain'
    ],
    assets: {
      type: 'links',
      items: [
        { label: "You're looking at it right now :)" },
        { label: 'GitHub Repository', url: 'https://github.com/alashle/personalPortfolio' }
      ]
    }
  },
  {
  id: 1,
  title: 'Veteran Sentiment Analysis Platform',
  company: 'Deloitte GPS',
  period: '2025',
  context: 'Veteran Affairs needed insights from unstructured social data to improve services',
  description: 'Enterprise NLP platform transforming veteran social data into actionable intelligence',
  impact: 'Processed 10K+ posts • 25% accuracy improvement • Enhanced decision support for VSOs',
  tech: ['Python', 'NLP', 'Power BI', 'LLMs'],
  category: ['featured', 'product', 'data'],
  gradient: 'from-red-600 to-indigo-600',
  whatIOwned: [
    'Served as Project Manager and Business Requirements Representative, leading a five-member Deloitte-sponsored MSIS Capstone team analyzing 10K+ Reddit posts from U.S. Veterans',
    'Led requirements gathering and stakeholder alignment with Deloitte GPS mentors, ensuring business objectives translated into effective analytical and technical solutions',
    'Developed and fine-tuned Python workflows for text preprocessing, topic modeling, and sentiment classification using LLM-based clustering across multiple Veteran well-being themes',
    'Built interactive Power BI dashboards visualizing insights across financial well-being, mental health, healthcare access, and minority Veteran experiences, improving interpretability by 15%',
    'Implemented a chatbot interface that increased insight accessibility and engagement by 25%, enabling real-time data exploration for Veteran Service Organizations',
    'Coordinated agile sprints, maintained project documentation, and ensured on-time delivery of all analytical, visualization, and presentation milestones',
  ],
  assets: { status: 'pending' }, // ✅ Pending
},
{
  id: 2,
  title: 'Food Bank AI Assistant', // ✅ Done
  company: 'Social Impact',
  period: '2025',
  problem: 'Food insecurity affects millions, and finding resources can be overwhelming',
  description: 'Multilingual chatbot connecting families with 500+ food resources',
  impact: '10K+ users • 90% accuracy • 75% time reduction',
  tech: ['React', 'Node.js', 'OpenAI API', 'JavaScript', 'JSON'],
  category: ['featured', 'product', 'data'],
  gradient: 'from-green-600 to-teal-600',
  whatIOwned: [
    'Led full-stack development using React, Node.js, and OpenAI API',
    'Built RESTful endpoints to filter 500+ food banks by ZIP, hours, and service type',
    'Integrated bilingual TranslationService for English–Spanish dynamic responses',
    'Optimized JSON schema and geolocation logic to achieve 40% latency reduction'
  ],
  assets: {
    type: 'images',
    items: [
      '/foodbank-ai-1.jpg', // put this file in /public
      '/foodbank-ai-2.jpg',
      '/foodbank-ai-3.jpg',
    ],
    links: [
    { label: 'GitHub Repository', url: 'https://github.com/Dante4k43/AI-Case-Comp' }
  ]
  },
},
{
  id: 3,
  title: 'NBA Team Performance Evolution Dashboard', // ✅ Done
  company: 'Data Visualization for Business Using Tableau',
  period: '2025',
  context: 'NBA analytics teams and fans needed an interactive way to explore how team efficiency, scoring balance, and strategy evolved over a decade of play.',
  description: 'A Tableau story visualizing ten years of NBA team performance (2014–2024), blending advanced calculated indices, dynamic dashboards, and storytelling design to reveal the anatomy of a champion.',
  impact: 'Analyzed 10 seasons • 30 teams • Built 3 interactive dashboards • Highlighted championship patterns through efficiency metrics',
  tech: ['Tableau', 'Python (nba_api)', 'Pandas', 'Calculated Fields', 'Dynamic Parameters', 'LOD Expressions'],
  category: ['featured', 'product', 'data'],
  gradient: 'from-amber-500 to-blue-600',
  whatIOwned: [
    'Designed and implemented 3 interactive dashboards and 1 supplemental page within Tableau Story',
    'Engineered data pipeline using Python nba_api to collect and clean 10 seasons of NBA team-level stats',
    'Developed derived metrics (Offense Index, Defense Index, and Top Teams Metric) for balanced team performance analysis',
    'Created dynamic map, quadrant analysis, and ranking visualizations with custom tooltips and LOD calculations',
    'Synthesized findings linking efficiency balance to championship outcomes and league scoring evolution'
  ],
  assets: {
    type: 'links',
    items: [
      {
        label: 'View Full Interactive Tableau Project',
        url: 'https://public.tableau.com/app/profile/abdoulay.lashley/viz/NBATeamPerformanceEvolutionProject/Story2?publish'
      }
    ]
  },
},
{
  id: 4,
  title: 'Crime Prediction System', // ✅ Done
  company: 'LAPD Analytics',
  period: '2025',
  context: 'LAPD needed to predict crime hotspots to allocate resources effectively',
  description: 'ML pipeline analyzing 2M+ records for predictive policing',
  impact: '88.79% accuracy • 30% faster response',
  tech: ['PySpark', 'MLlib', 'Hadoop'],
  category: ['data'],
  gradient: 'from-red-600 to-yellow-600',
  whatIOwned: [
    'Built PySpark data pipeline for ingesting and cleaning 2M+ crime records',
    'Implemented Random Forest model with parameter tuning using CrossValidator',
    'Engineered feature set with StringIndexer, OneHotEncoder, and VectorAssembler',
    'Evaluated performance via F1, accuracy, and top-5 accuracy metrics'
  ],
  assets: {
    type: 'pdf',
    url: '/crime-prediction.pdf',
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/alashle/Crime-Prediction-System' }
    ]
  },
},

{
  id: 5,
  title: "L'Oréal Digital Transformation", // ✅ Done
  company: "L'Oréal USA",
  period: '2023-2024',
  context: 'LOréal needed to enhance product quality/safety, operational efficiency, and compliance on the manufacturing floor',
  description: 'Digitized and streamlined quality procedures reducing contamination risks and enhancing operational efficiency',
  impact: '20% contamination reduction • 15% efficiency gain • 10% cut on downtime', 
  tech: ['Power BI', 'SAP', 'Process Design', 'Product Launch', 'Data Visualization & Analysis', 'Process Improvement'],
  category: ['featured', 'product', 'biotech'],
  gradient: 'from-purple-600 to-pink-600',
  whatIOwned: [
    'Created and deployed eCLAIR digital forms across production lines',
    'Collaborated with QA and engineering to refine micro-contamination controls',
    'Built Power BI dashboards to visualize efficiency and downtime metrics',
    'Digitized 25+ SOP forms and streamlined operator workflows for compliance'
  ],
  assets: { status: 'None' },
},
{
  id: 6,
  title: 'Bias-Aware Buccal Pulse Oximeter', // ✅ Done
  company: 'UMD Bioengineering',
  period: '2023',
  context: 'Medical devices often lack consideration for racial and ethnic differences in physiology',
  description: 'Medical device addressing racial disparities in healthcare',
  impact: '95% accuracy • 85% bias reduction • <$40 cost',
  tech: ['Python', 'MATLAB', 'Arduino'],
  category: ['biotech', 'data'],
  gradient: 'from-cyan-600 to-blue-600',
  whatIOwned: [
    'Co-led engineering design and prototype fabrication for buccal pulse oximeter',
    'Developed signal processing algorithms in MATLAB and Python for oxygen calibration',
    'Integrated Arduino microcontroller with optical sensors for data acquisition',
    'Validated prototype accuracy through clinical testing with 20+ participants'
  ],
  assets: {
    type: 'images',
    items: [
      '/oximeter-1.jpg',  // put these two files in /public
      '/oximeter-2.jpg',
    ],
  },
},
{
  id: 7,
  title: 'Blockchain Logistics Platform',
  company: 'Blockchain Business Case',
  period: '2025',
  context: 'Supply chains are complex and lack transparency, leading to inefficiencies and fraud',
  description: 'Decentralized supply chain with smart contracts',
  impact: '90% faster verification',
  tech: ['Solidity', 'Web3', 'Ethereum'],
  category: ['product'],
  gradient: 'from-yellow-600 to-green-600',
  whatIOwned: [
    'Developed Solidity smart contracts enabling traceable supplier verification',
    'Designed tokenomics model for ERC-20 utility token deployment',
    'Created HTML/CSS front-end to simulate blockchain transactions',
    'Led ecosystem strategy for governance and cross-platform interoperability'
  ],
  assets: {
    type: 'pdf',
    pdf: '/blockchain-logistics.pdf', // put in /public
  },
},
{
  id: 8,
  title: 'Nike Digital Reinvention Strategy', // ✅ Done
  company: 'Digital Transformation in Business',
  period: '2024',
  context: 'Nike needed a cohesive, measurable roadmap to modernize supply chain operations, sustainability, and fan engagement at global scale',
  description: '24‑month digital reinvention plan integrating predictive analytics, digital twins, IoT, blockchain transparency, and AR/VR experiences',
  impact: '30% faster supply-chain lead times • 10% waste reduction • $200M projected from smart apparel • 40% faster decision cycles',
  tech: ['Predictive Analytics', 'IoT', 'Digital Twin', 'Blockchain', 'AR/VR', 'Excel'],
  category: ['featured', 'product'],
  gradient: 'from-violet-600 to-yellow-600',
  whatIOwned: [
    'Led strategy development for operations and innovation initiatives tied to measurable KPIs',
    'Created executive roadmap and architecture for digital twin and AI adoption',
    'Defined KPIs and financial impact models with cross-functional partners',
    'Presented final recommendations and sequencing plan to faculty and mentors'
  ],
  assets: {
    type: 'pdf',
    url: '/nike-digital-reinvention.pdf'
  },
},

{
  id: 9,
  title: 'StatArena Incorporation – Sports DB', // ✅ Done
  company: 'Database Management Systems',
  period: '2024',
  context: 'University sports programs lacked a centralized, reliable system to track teams, players, stadiums, and games',
  description: 'Normalized relational database supporting roster management, game results, and analyst queries',
  impact: '3NF schema • 10+ entity tables • Consistent, queryable data for coaches and analysts',
  tech: ['SQL', 'ER Modeling', 'Lucidchart', 'Microsoft Access'],
  category: ['data'],
  gradient: 'from-sky-600 to-indigo-600',
  whatIOwned: [
    'Designed ER model and converted to relational schema with primary and foreign keys',
    'Implemented DDL/DML scripts and enforced referential integrity with cascades',
    'Built analyst queries for rosters, results, and stadium utilization',
    'Documented schema decisions for maintainability'
  ],
  assets: { 
    type: 'pdf',
    url: '/statarena-incorporation.pdf'
  },
},
{
  id: 10,
  title: 'The Weeknd Effect – Streaming Analytics', // ✅ Done
  company: 'Data Analytics, Models & Decisions',
  period: '2024',
  context: 'Teams needed to understand which audio features and release choices drive streaming success',
  description: 'Python ML analysis of 200+ audio features to explain song virality and engagement',
  impact: 'R² 0.82 on stream prediction • SHAP insights • Highlighted 3.7B streams for Blinding Lights',
  tech: ['Python', 'Pandas', 'Scikit‑Learn', 'SHAP', 'Matplotlib', 'Seaborn'],
  category: ['data'],
  gradient: 'from-rose-600 to-orange-600',
  whatIOwned: [
    'Cleaned and engineered cross‑platform streaming datasets',
    'Trained regression models and produced SHAP interpretability plots',
    'Delivered narrative visuals translating model drivers for non‑technical viewers'
  ],
  assets: {
    type: 'pdf',
    url: '/the-weeknd-effect.pdf',
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/alashle/The-Weekend-Effect' }
    ]
  },
},

{
  id: 11,
  title: 'Explainable ML Platform – SHAP + LLM', // ✅ Done
  company: 'Harnessing AI for Business',
  period: '2025',
  context: 'Business users struggled to trust and interpret model predictions',
  description: 'Streamlit app combining SHAP visuals with LLM summaries for transparent model explanations',
  impact: '79% test accuracy • 60% faster interpretation • Automated explainability artifacts',
  tech: ['Python', 'XGBoost', 'SHAP', 'Streamlit', 'LLaMA‑3‑8B', 'Scikit‑Learn'],
  category: ['featured', 'product', 'data'],
  gradient: 'from-fuchsia-600 to-violet-600',
  whatIOwned: [
    'Served as PM and requirements lead aligning business goals with model design',
    'Integrated SHAP and LLM flows for global and local explanations',
    'Defined Responsible AI guardrails and governance alignment'
  ],
  assets: {
    type: 'links',
    items: [
      { label: 'GitHub Repository', url: 'https://github.com/alashle/Explainable-ML-Platform' }
    ]
  },
},
{
  id: 12,
  title: 'Predictive Modeling & Segmentation in R', // ✅ Done
  company: 'Data Mining & Predictive Analytics',
  period: '2025',
  context: 'Stakeholders needed accurate predictions and actionable segments from raw data',
  description: 'Reusable R workflow for classification, evaluation, and clustering with clear model cards',
  impact: 'AUC 0.91 • Top‑10 leaderboard • Automated feature and validation pipeline',
  tech: ['R', 'tidyverse', 'Caret', 'Clustering', 'Cross‑Validation', 'ROC/AUC'],
  category: ['data'],
  gradient: 'from-amber-600 to-red-600',
  whatIOwned: [
    'Built tidyverse data prep and feature engineering scripts',
    'Tuned logistic and tree models with cross‑validation and thresholding',
    'Produced ROC/PR curves and concise model cards for decisions'
  ],
  assets: { status: 'None' },
},
{
  id: 13,
  title: 'Dynamic Travel Itinerary Planner – Generative AI', // ✅ Done
  company: 'Designing AI Systems',
  period: '2025',
  context: 'Travel planners return static results that ignore context like weather, budget, or closures',
  description: 'LLM‑driven itinerary builder that adapts plans in real time from multiple travel APIs',
  impact: 'Automated trip creation • 80% less manual planning • 5 APIs integrated',
  tech: ['Python', 'LLMs', 'Prompt Engineering', 'RAG', 'API Integration', 'Streamlit'],
  category: ['product', 'data'],
  gradient: 'from-teal-600 to-blue-600',
  whatIOwned: [
    'Architected conversational flow and intent handling',
    'Optimized prompts and guardrails for reliable recommendations',
    'Drove UI testing and ethical guidelines for transparency'
  ],
  assets: {
    type: 'pdf',
    url: '/dynamic-travel-itinerary-planner.pdf',
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/alexisjh-umd/ai-travel-itinerary-planner' },
      { label: 'Project Demo Video', url: 'https://drive.google.com/file/d/1Y5dPwUew8ZaurCICEwzeC7uzfL8XMjol/view?usp=sharing' }
    ]
  },
},
{
  id: 14,
  title: 'DeliveryCorps Transformation – AMP Initiative',
  company: 'Project Management',
  period: '2024',
  context: 'Distribution firm faced rising costs, aging fleet, and fragmented data systems',
  description: 'Six‑part modernization plan with ERP integration, route optimization, and PMO governance',
  impact: '$561K budget • 20% efficiency gain • Two new distribution centers identified',
  tech: ['ProjectLibre', 'ERP', 'Risk Management', 'PMO', 'Cost Analysis'],
  category: ['product', 'data'],
  gradient: 'from-slate-600 to-blue-600',
  whatIOwned: [
    'Co‑led scope, WBS, budgeting, and scheduling in ProjectLibre',
    'Built risk and stakeholder matrices with success metrics',
    'Authored PMO and change‑management framework and presented ROI case'
  ],
  assets: { 
    type: 'pdf',
    url: '/deliverycorps-transformation.pdf'
  },
},
]

// Skills with Icons
const SKILLS = {
  'Product & Strategy': {
    icon: <Briefcase className="w-5 h-5" />,
    skills: [
      'Product Management',
      'Agile & Scrum',
      'Product Roadmapping',
      'Stakeholder Communication',
      'Risk Management',
      'Cross-functional Collaboration',
      'Prioritization & QA Oversight',
      'B2B & B2C Strategy',
      'OKRs & KPIs'
    ],
  },
  'Data & Analytics': {
    icon: <Database className="w-5 h-5" />,
    skills: [
      'Python',
      'R',
      'SQL',
      'Hadoop',
      'Hive',
      'Spark',
      'MapReduce',
      'PySpark MLlib',
      'Data Mining & Predictive Analytics',
      'Statistical Modeling',
      'Frequent Pattern Mining',
      'Cluster Analysis'
    ],
  },
  'AI & Machine Learning': {
    icon: <Brain className="w-5 h-5" />,
    skills: [
      'AI/ML',
      'NLP',
      'LLMs (GPT-5, OpenAI API)',
      'Amazon SageMaker',
      'AWS Comprehend',
      'Scikit-learn',
      'Pandas',
      'Seaborn',
      'Deep Learning',
      'MLOps',
      'Prompt Engineering'
    ],
  },
  'Business Intelligence & Visualization': {
    icon: <TrendingUp className="w-5 h-5" />,
    skills: [
      'Power BI',
      'Tableau',
      'Amazon QuickSight',
      'Google Analytics',
      'Dashboard Design',
      'Data Storytelling',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'Leaflet.js'
    ],
  },
  'Cloud & Databases': {
    icon: <Code className="w-5 h-5" />,
    skills: [
      'AWS (EC2, S3, RDS, Lambda, VPC, CloudFront, Glue, CloudFormation, IAM)',
      'Azure',
      'Google Cloud Platform (GCP)',
      'MySQL',
      'NoSQL',
      'MongoDB',
      'Neo4J',
      'Snowflake',
      'BigQuery',
      'Vercel CDN'
    ],
  },
  'Software & Tools': {
    icon: <Beaker className="w-5 h-5" />,
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'Microservices',
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'JSON',
      'Jupyter',
      'VSCode',
      'Git/GitHub',
      'Google Colab',
      'SAP',
      'Microsoft Office',
      'Google Workspace',
      'Lucidchart',
      'Kafka',
      'Sqoop',
      'Apache Spark',
      'OpenCageData API',
      'Geolib',
      'Chrome DevTools',
      'Figma (UX/UI Design)'
    ],
  },
}


const RESUMES = {
  tech: {
    preview: "/LASHLEY_ABDOULAY_RESUME_TECH.pdf",
    download: "/LASHLEY_ABDOULAY_RESUME_TECH.pdf",
  },
  biotech: {
    preview: "/LASHLEY_ABDOULAY_RESUME_BIOTECH.pdf",
    download: "/LASHLEY_ABDOULAY_RESUME_BIOTECH.pdf",
  },
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<'featured' | 'all' | 'product' | 'data' | 'biotech'>('featured')
  const [showResumeModal, setShowResumeModal] = useState(false)
  const [selectedResume, setSelectedResume] = useState<'tech' | 'biotech'>('tech')
  const [isScrolled, setIsScrolled] = useState(false)
  // Project modal state
  const [projectModalOpen, setProjectModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  // Asset viewer state
  const [assetViewer, setAssetViewer] = useState<{ type: 'image' | 'pdf'; src: string } | null>(null)

  
  

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ESC to close modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowResumeModal(false)
    }
    if (showResumeModal) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [showResumeModal])

  // ESC to close asset viewer
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAssetViewer(null)
    }
    if (assetViewer) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [assetViewer])

  // ESC to close project modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeProject();
    };
    if (projectModalOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [projectModalOpen]);

  const filteredProjects =
    activeFilter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category.includes(activeFilter))

  const openResume = (type: 'tech' | 'biotech') => {
    setSelectedResume(type)
    setShowResumeModal(true)
  }

  // Open/close project modal (keyboard accessible)
  const openProject = (project: any) => {
    setSelectedProject(project)
    setProjectModalOpen(true)
  }
  const closeProject = () => {
    setProjectModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-all duration-500">
      {/* Skip to content for accessibility */}
      <a href="#main" className="sr-only focus:not-sr-only fixed top-2 left-2 z-[100] px-3 py-2 rounded bg-white dark:bg-black border border-gray-300 dark:border-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-500">Skip to content</a>
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#education', label: 'Education' },
                { href: '#projects', label: 'Projects' },
                { href: '#skills', label: 'Skills' },
                { href: '#contact', label: 'Contact' },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {/* Resume Buttons */}
              <button
                onClick={() => openResume('tech')}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                Tech Resume
              </button>
              <button
                onClick={() => openResume('biotech')}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                Biotech Resume
              </button>

                          </div>
          </div>
        </div>
      </nav>

      <main id="main">

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-blue-950 opacity-50" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-full text-sm font-medium mb-8 hover:scale-105 transition-transform cursor-default">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            Open to New Opportunities
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
            {PERSONAL_INFO.name}
          </h1>

          <p className="text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-400 mb-8">{PERSONAL_INFO.title}</p>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            {PERSONAL_INFO.about.intro}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="group px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Explore My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-gray-900 dark:border-white rounded-full font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            >
              Let's Connect
            </a>
          </div>

          <div className="flex justify-center gap-6" aria-label="Social links">
            <a
              href={PERSONAL_INFO.linkedin}
              aria-label="Open LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-all hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Send email" className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-all hover:scale-110">
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              aria-label="Open GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-all hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Scroll Indicator under social icons */}
          <button
            type="button"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            aria-label="Scroll to next section"
            className="mt-8 inline-flex items-center justify-center animate-bounce focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full cursor-pointer"
          >
            <ChevronRight className="w-16 h-16 rotate-90 text-gray-500 hover:text-gray-700 transition-colors" />
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-6">About Me</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 text-lg">Building at the Intersection of Technology and Human Impact</p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow">
              <h3 className="text-center text-xl font-semibold mb-4">My Journey</h3>
              <p className="text-center text-gray-600 dark:text-gray-400 leading-relaxed">{PERSONAL_INFO.about.main}</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow">
              <h3 className="text-center text-xl font-semibold mb-4">What I Do</h3>
              <p className="text-center text-gray-600 dark:text-gray-400 leading-relaxed">{PERSONAL_INFO.about.closer}</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PERSONAL_INFO.stats.map((stat, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center hover:scale-105 transition-transform cursor-default">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-32 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-6">Education</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 text-lg">Academic Excellence Meets Practical Application</p>

          <div className="space-y-8">
            {EDUCATION.map((edu, index) => (
              <div key={index} className="group/edu bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{edu.degree}</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-3">{edu.school}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">GPA: {edu.gpa}</span>
                      {edu.honors.map((honor, i) => (
                        <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-sm">
                          <Award className="w-3 h-3" />
                          {honor}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-gray-500 dark:text-gray-500 text-sm mt-3 md:mt-0">{edu.period}</span>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {edu.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      {typeof highlight === 'string' ? (
                        <span className="text-sm text-gray-600 dark:text-gray-400">{highlight}</span>
                      ) : (
                        <span className="relative inline-flex group/link z-10">
                          <button
                            type="button"
                            onClick={() => setAssetViewer({ type: 'pdf', src: (highlight as any).url })}
                            className={`cursor-pointer text-sm font-medium underline underline-offset-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 ${highlight.color} text-left whitespace-normal focus:outline-none focus:ring-2 focus:ring-green-500`}
                            aria-haspopup="dialog"
                            aria-label="Open certificate"
                          >
                            {(highlight as any).label}
                          </button>

                          {/* Popover / tooltip on hover or keyboard focus */}
                          <div
                            role="tooltip"
                            className="absolute left-0 top-full mt-2 w-72 z-20 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg p-3 text-sm text-gray-700 dark:text-gray-300
                                       opacity-0 scale-95 pointer-events-none
                                       group-hover/link:opacity-100 group-hover/link:scale-100 group-hover/link:pointer-events-auto
                                       group-focus-within/link:opacity-100 group-focus-within/link:scale-100 group-focus-within/link:pointer-events-auto
                                       hover:opacity-100 hover:scale-100 hover:pointer-events-auto
                                       before:content-[''] before:absolute before:-top-3 before:left-0 before:w-full before:h-3
                                       transition-all duration-500 ease-in-out delay-150 hover:delay-[150ms]"
                          >
                            <p className="font-medium mb-1">Full-Stack PM Certificate</p>
                            <p className="text-xs mb-2">View it in a fullscreen viewer or download the PDF.</p>
                            <div className="flex gap-2">
                              <button
                                type="button"
                                onClick={() => setAssetViewer({ type: 'pdf', src: (highlight as any).url })}
                                className="cursor-pointer px-2 py-1 rounded-md bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                              >
                                View
                              </button>
                              <a
                                href={(highlight as any).url}
                                download
                                className="cursor-pointer px-2 py-1 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-6">Featured Projects</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">Real Solutions, Measurable Impact</p>

          {/* Filter Pills */}
          <div className="flex justify-center gap-3 mb-16">
            {(['featured', 'all', 'product', 'data', 'biotech'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105 focus-within:ring-2 focus-within:ring-blue-500 cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`Open details for ${project.title}`}
                onClick={() => openProject(project)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openProject(project)}
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <p className="text-sm text-gray-200 dark:text-gray-300">
                        {project.company} • {project.period}
                      </p>
                    </div>
                    {project.category.includes('featured') && <Sparkles className="w-5 h-5 text-yellow-500" />}
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

                  <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-4">{project.impact}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      {/* Project Detail Modal */}
      {projectModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-title"
          onClick={closeProject}
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-5xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 p-5 border-b border-gray-200 dark:border-gray-800">
              <div>
                <h3 id="project-title" className="text-xl font-semibold">{selectedProject.title}</h3>
                <p className="text-xs text-white-500 dark:text-white-400">{selectedProject.company} • {selectedProject.period}</p>
              </div>
              <button onClick={closeProject} aria-label="Close project details" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                <X className="w-5 h-5" />
              </button>
            </div>
            {/* Body */} 
            <div className="p-6 grid md:grid-cols-5 gap-6">
              <div className="md:col-span-3 space-y-6">
                <section>
                  <h4 className="text-sm font-semibold mb-2">Problem</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{selectedProject.problem || selectedProject.context}</p>
                </section>
                <section>
                  <h4 className="text-sm font-semibold mb-2">Solution</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{selectedProject.solution || selectedProject.description}</p>
                </section>
                <section>
                  <h4 className="text-sm font-semibold mb-2">Impact (Key Metrics)</h4>
                  <p className="text-sm text-green-700 dark:text-green-400">{selectedProject.impact}</p>
                </section>
                <section>
                  <h4 className="text-sm font-semibold mb-2">What I Owned</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    {(selectedProject.owned || selectedProject.whatIOwned).map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </section>
              </div>
              <aside className="md:col-span-2 space-y-6">
                <section>
                  <h4 className="text-sm font-semibold mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {(selectedProject.tech || []).map((t: string, i: number) => (
                      <span key={i} className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800">{t}</span>
                    ))}
                  </div>
                </section>
                <section>
                  <h4 className="text-sm font-semibold mb-2">{ASSET_TITLE}</h4>

                  {/* No assets at all -> render nothing (empty on purpose) */}
                  {!selectedProject.assets ? null : (
                    selectedProject.assets.status === 'pending' ? (
                      <p className="text-sm text-gray-500">Pending</p>
                    ) : (
                      selectedProject.assets.type === 'images' && Array.isArray(selectedProject.assets.items) ? (
                        (() => {
                          const cols = Math.min(3, selectedProject.assets.items.length);
                          const grid = cols === 1 ? 'grid-cols-1' : cols === 2 ? 'grid-cols-2' : 'grid-cols-3';
                          return (
                            <>
                              <div className={`grid gap-2 ${grid}`}>
                                {selectedProject.assets.items.map((src: string, i: number) => (
                                  <button
                                    key={i}
                                    type="button"
                                    onClick={() => setAssetViewer({ type: 'image', src })}
                                    aria-label={`Open ${selectedProject.title} image ${i + 1}`}
                                    className="group relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
                                  >
                                    <img
                                      src={src}
                                      alt={`${selectedProject.title} asset ${i + 1}`}
                                      loading="lazy"
                                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                  </button>
                                ))}
                              </div>
                              {Array.isArray((selectedProject.assets as any).links) && (selectedProject.assets as any).links.length > 0 && (
                                <ul className="mt-3 list-disc pl-5 space-y-1">
                                  {(selectedProject.assets as any).links.map((lnk: { label: string; url: string }, i: number) => (
                                    <li key={i}>
                                      <a
                                        href={lnk.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-blue-600 dark:text-blue-400 underline underline-offset-2"
                                      >
                                        {lnk.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </>
                          );
                        })()
                      ) : selectedProject.assets.type === 'pdf' ? (
                        (() => {
                          const pdfSrc = (selectedProject.assets as any).url || (selectedProject.assets as any).pdf;
                          if (!pdfSrc) return null;
                          return (
                            <>
                              <button
                                type="button"
                                onClick={() => setAssetViewer({ type: 'pdf', src: pdfSrc })}
                                aria-label={`Open ${selectedProject.title} document`}
                                className="w-full aspect-[16/10] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg"
                              >
                                <iframe
                                  src={pdfSrc}
                                  title={`${selectedProject.title} document`}
                                  className="w-full h-full pointer-events-none"
                                />
                              </button>
                              {Array.isArray((selectedProject.assets as any).links) && (selectedProject.assets as any).links.length > 0 && (
                                <ul className="mt-3 list-disc pl-5 space-y-1">
                                  {(selectedProject.assets as any).links.map((lnk: { label: string; url: string }, i: number) => (
                                    <li key={i}>
                                      <a
                                        href={lnk.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-blue-600 dark:text-blue-400 underline underline-offset-2"
                                      >
                                        {lnk.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </>
                          );
                        })()
                      ) : selectedProject.assets.type === 'links' && Array.isArray(selectedProject.assets.items) ? (
                        <ul className="list-disc pl-5 space-y-1">
                          {selectedProject.assets.items.map((lnk: { label: string; url?: string }, i: number) => (
                            <li key={i}>
                              {lnk.url ? (
                                <a
                                  href={lnk.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-blue-600 dark:text-blue-400 underline underline-offset-2"
                                >
                                  {lnk.label}
                                </a>
                              ) : (
                                <span className="text-sm text-gray-600 dark:text-gray-300 italic">
                                  {lnk.label}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      ) : null
                    )
                  )}
                </section>
              </aside>
            </div>
          </div>
        </div>
      )}

      <section id="skills" className="py-32 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-6">Skills & Expertise</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 text-lg">Diverse Toolkit For Complex Challenges</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(SKILLS).map(([category, data]) => (
              <div
                key={category}
                className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">{(data as any).icon}</div>
                  <h3 className="text-lg font-semibold">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(data as any).skills.map((skill: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white dark:bg-gray-800 rounded-lg text-sm hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors cursor-auto"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Let's Connect!</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">Ready to Build Something Extraordinary Together?</p>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-12 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group flex flex-col items-center p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              >
                <Mail className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Email</span>
                <span className="text-sm font-medium">{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={`tel:+13014120932`}
                className="group flex flex-col items-center p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              >
                <Phone className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Phone</span>
                <span className="text-sm font-medium">{PERSONAL_INFO.phone}</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              >
                <Linkedin className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-600 dark:text-gray-400">LinkedIn</span>
                <span className="text-sm font-medium">Connect</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-8">
              <MapPin className="w-5 h-5" />
              <span>{PERSONAL_INFO.location} • Open to Remote</span>
            </div>

            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Let's Connect!`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:scale-105 transition-all"
            >
              Send me a message
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      {showResumeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowResumeModal(false)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-2xl max-w-5xl w-full max-h-[85vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 p-4 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <Eye className="w-4 h-4" />
                <span className="text-sm font-medium">{selectedResume === 'tech' ? 'Tech Resume' : 'Biotech Resume'}</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={RESUMES[selectedResume].download}
                  className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                  download
                >
                  <Download className="w-4 h-4" /> Download
                </a>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="Close resume"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="w-full h-[75vh]">
              <iframe
                title="Resume Preview"
                src={RESUMES[selectedResume].preview}
                className="w-full h-full"
                allow="autoplay"
              />
            </div>
            <div className="p-3 text-center text-xs text-gray-500 dark:text-gray-400">
              Press <kbd className="px-1 py-0.5 rounded border">Esc</kbd> to close
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Asset Viewer */}
      {assetViewer && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setAssetViewer(null)}
        >
          <div
            className="relative w-[92vw] h-[92vh] max-w-[1400px] max-h-[92vh] bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setAssetViewer(null)}
              aria-label="Close viewer"
              className="absolute top-3 right-3 z-10 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/90 text-gray-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <X className="w-5 h-5" />
            </button>

            {assetViewer.type === 'image' ? (
              // Image fills container, maintains aspect
              <img
                src={assetViewer.src}
                alt="Project asset"
                className="w-full h-full object-contain bg-black"
              />
            ) : (
              // PDF iframe fills container
              <iframe
                src={assetViewer.src}
                title="Project document"
                className="w-full h-full"
              />
            )}
          </div>
        </div>
      )}
      </main>

      <footer className="py-10 text-center text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, Tailwind, and tons of coffee.
      </footer>
    </div>
  )
}

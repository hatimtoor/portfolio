export const info = {
  name: 'Hatim Toor',
  title: 'AI Automation Engineer',
  subtitle: 'Workflow Specialist',
  email: 'hatimtoor2025@gmail.com',
  phone: '+92 327 808 0883',
  location: 'Sheikhupura, Pakistan',
  github: 'https://github.com/hatimtoor',
  linkedin: 'https://www.linkedin.com/in/hatim-toor',
  summary:
    'AI Automation Engineer and Team Lead with 3+ years of hands-on expertise in n8n workflow automation, LLM integration, and intelligent agent development. Designing end-to-end automation pipelines that reduce manual effort, integrate REST APIs, and leverage AI models to deliver measurable business outcomes.',
};

export const skills = [
  { label: 'n8n Automation', level: 'Expert' },
  { label: 'LLM / AI Agents', level: '' },
  { label: 'REST API Integration', level: '' },
  { label: 'Voice AI (VAPI)', level: '' },
  { label: 'Workflow Orchestration', level: '' },
  { label: 'Python', level: 'Intermediate' },
  { label: 'Web App Development', level: '' },
  { label: 'Data Pipelines', level: '' },
  { label: 'Prompt Engineering', level: '' },
  { label: 'Team Leadership', level: '' },
];

export const services = [
  {
    title: 'Automation',
    description:
      'End-to-end workflow automation using n8n — covering API integrations, branching logic, error handling, webhooks, and scheduling to eliminate manual effort.',
    tags: ['n8n', 'Webhooks', 'Scheduling', 'Data Pipelines', 'REST APIs'],
  },
  {
    title: 'AI & LLMs',
    description:
      'Intelligent agent development powered by LLMs and voice AI. From outbound sales bots to email triage systems — I build AI that works autonomously.',
    tags: ['LLM Agents', 'VAPI', 'Prompt Engineering', 'OpenAI API', 'Voice AI'],
  },
  {
    title: 'Integrations',
    description:
      'Connecting platforms and services via REST APIs — WhatsApp Business, Google Workspace, YouTube, Instagram, CRMs and more into unified pipelines.',
    tags: ['WhatsApp API', 'Google Workspace', 'OAuth', 'JSON', 'CRM'],
  },
  {
    title: 'Web Apps',
    description:
      'Lightweight web applications that bridge no-code automation with custom front-end interfaces — delivering complete, polished solutions.',
    tags: ['React', 'TypeScript', 'Low-code', 'UI Design', 'Vite'],
  },
];

export const projects = [
  {
    title: 'HatAssembly',
    tech: 'n8n · Supabase · OpenAI · Claude',
    description:
      'RAG-powered n8n workflow generator. 794 n8n node schemas indexed in Supabase with OpenAI embeddings — takes plain text input and outputs fully deployable n8n workflow JSON via a multi-agent pipeline (Claude Opus + Gemini). Dual input via chat and webhook.',
    tags: ['n8n', 'RAG', 'Supabase', 'LLM Agents', 'OpenAI', 'Claude'],
    outcome: 'Generates production-ready n8n workflows from natural language — zero manual node-building.',
    github: 'https://github.com/hatimtoor/HatAssembly',
  },
  {
    title: 'Sorcer AI',
    tech: 'Next.js · Supabase · Gemini · n8n',
    description:
      'Full-stack automation agency internal portal. An AI clarifier conversation drives a CLARITY_READY signal, Gemini infers required credentials and cross-references a Supabase vault, then smart-dispatches to n8n webhooks or a CRM factory supporting GHL, ActiveCampaign, and HubSpot.',
    tags: ['Next.js', 'Supabase', 'Gemini', 'GHL', 'ActiveCampaign', 'n8n'],
    outcome: 'End-to-end client onboarding to automation delivery — no manual handoffs at any stage.',
    github: 'https://github.com/hatimtoor/sorcer-ai',
  },
  {
    title: 'AI Outbound Sales Voice Agent',
    tech: 'n8n + VAPI',
    description:
      'End-to-end outbound cold-calling agent integrating n8n orchestration with VAPI voice AI — automating lead dialling, dynamic script delivery, and response logging.',
    tags: ['n8n', 'VAPI', 'REST API', 'Webhooks'],
    outcome: 'Automated full call lifecycle, improved lead contact rate & pipeline velocity.',
    github: null,
  },
  {
    title: 'Multi-Platform Content Automation',
    tech: 'n8n + LLM APIs',
    description:
      'Fully automated n8n workflows for AI-generated short-form video content published to YouTube, TikTok, and Instagram at near-zero marginal cost.',
    tags: ['n8n', 'LLM APIs', 'YouTube API', 'Instagram API'],
    outcome: 'High-volume content production pipeline running 24/7 without human input.',
    github: null,
  },
  {
    title: 'AI Email & Calendar Management',
    tech: 'n8n + Google Workspace',
    description:
      'Intelligent automation for email triage, smart reply drafting (LLM-assisted), meeting scheduling, and calendar conflict resolution.',
    tags: ['n8n', 'Gmail API', 'Google Calendar', 'LLM'],
    outcome: 'Eliminated repetitive scheduling overhead, improved executive productivity.',
    github: null,
  },
  {
    title: 'WhatsApp AI Booking Agent',
    tech: 'n8n + WhatsApp Business API',
    description:
      'Conversational AI agent on WhatsApp that qualifies inbound leads, collects customer details, and autonomously books appointments into a shared calendar.',
    tags: ['n8n', 'WhatsApp API', 'LLM', 'Google Calendar'],
    outcome: 'Reduced time-to-booking by automating the full customer interaction funnel 24/7.',
    github: null,
  },
  {
    title: 'Inbound Call AI Sales Handler',
    tech: 'n8n + VAPI',
    description:
      'Inbound call automation capable of fielding customer enquiries, conducting needs qualification, and progressing leads through the sales funnel without human intervention.',
    tags: ['n8n', 'VAPI', 'Telephony API', 'CRM'],
    outcome: 'Full inbound funnel handled autonomously — zero agent required.',
    github: null,
  },
];

export const experience = [
  {
    role: 'Automation Team Lead',
    company: 'Schmoozzer',
    period: 'Sep 2025 – Present',
    bullets: [
      'Lead a team of engineers delivering low-code/no-code automation solutions and custom web apps.',
      'Architect end-to-end n8n workflows covering API integrations, data pipelines, and AI agent deployment.',
      'Oversee full project lifecycle: requirements, design, delegation, code review, QA, and deployment.',
    ],
  },
  {
    role: 'Sales Manager',
    company: 'Orchard Logistics',
    period: 'Feb 2024 – May 2025',
    bullets: [
      'Led a team of 8 sales agents — pipeline performance, KPI tracking, and coaching.',
      'Achieved 30% increase in company revenue through sales process redesign and workflow automation.',
      'Introduced automation tooling to reduce manual data entry and reporting time.',
    ],
  },
  {
    role: 'Truck Dispatcher',
    company: 'Falcon Dispatch Company',
    period: 'Oct 2023 – Jan 2024',
    bullets: [
      'Managed real-time customer communications and coordinated multi-carrier load scheduling.',
      'Streamlined dispatch workflows to improve on-time delivery rates.',
    ],
  },
];

export const education = [
  {
    degree: 'BS Robotics & Intelligent Systems',
    institution: 'University of Management and Technology (UMT), Lahore',
    period: 'Expected 2027',
  },
  {
    degree: 'Intermediate (Pre-Engineering)',
    institution: 'APEX College, Sheikhupura',
    period: '2023',
  },
];

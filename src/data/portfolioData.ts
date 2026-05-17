export const info = {
  name: 'Hatim Toor',
  title: 'AI Automation Engineer',
  subtitle: 'Workflow Specialist',
  email: 'hatimtoor2025@gmail.com',
  phone: '+92 327 808 0883',
  location: 'Sheikhupura, Pakistan',
  github: 'https://github.com/hatimtoor',
  linkedin: 'https://www.linkedin.com/in/hatim-toor',
  yearsExp: '3+',
  projectsCount: '50+',
  revGrowth: '30%',
  summary:
    'AI Automation Engineer and Team Lead with three years of hands-on expertise in n8n workflow automation, LLM integration, and intelligent agent development.',
  longBio:
    'I design end-to-end automation pipelines that reduce manual effort, integrate REST APIs, and leverage AI models to deliver measurable business outcomes — for operators, agencies, and engineering teams that need their software to do the work, not the staff.',
} as const;

export const skills = [
  { label: 'n8n Automation', level: 'Expert' },
  { label: 'LLM / AI Agents', level: '' },
  { label: 'REST API Integration', level: '' },
  { label: 'Voice AI · VAPI', level: '' },
  { label: 'Workflow Orchestration', level: '' },
  { label: 'Python', level: 'Intermediate' },
  { label: 'Web App Development', level: '' },
  { label: 'Data Pipelines', level: '' },
  { label: 'Prompt Engineering', level: '' },
  { label: 'Team Leadership', level: '' },
] as const;

export const services = [
  {
    n: '01',
    title: 'Automation',
    description:
      'End-to-end workflow automation in n8n — API integrations, branching logic, error handling, webhooks, scheduling. Manual effort goes to zero.',
    tags: ['n8n', 'Webhooks', 'Scheduling', 'Pipelines', 'REST'],
  },
  {
    n: '02',
    title: 'AI & LLMs',
    description:
      'Intelligent agent development powered by LLMs and voice AI. Outbound sales bots, email triage, RAG, multi-agent pipelines.',
    tags: ['LLMs', 'VAPI', 'Prompts', 'OpenAI', 'Voice AI'],
  },
  {
    n: '03',
    title: 'Integrations',
    description:
      'Plumbing between platforms — WhatsApp Business, Google Workspace, YouTube, Instagram, CRMs — into one coherent system.',
    tags: ['WhatsApp', 'Workspace', 'OAuth', 'JSON', 'CRM'],
  },
  {
    n: '04',
    title: 'Web Apps',
    description:
      'Light front-ends that turn back-end automation into real product — internal tools, dashboards, client portals, smart forms.',
    tags: ['React', 'TypeScript', 'Vite', 'Low-code', 'UI'],
  },
] as const;

export const stack = [
  'n8n', 'OpenAI', 'Anthropic', 'Claude', 'Gemini', 'Python', 'Node.js',
  'TypeScript', 'React', 'Next.js', 'Supabase', 'PostgreSQL', 'MongoDB',
  'Docker', 'VAPI', 'WhatsApp API', 'Google Workspace', 'HubSpot',
  'ActiveCampaign', 'GHL', 'Webhooks', 'REST', 'RAG', 'LangChain',
] as const;

export type Project = {
  title: string;
  field: string;
  tech: string;
  description: string;
  outcome: string;
  tags: string[];
  layout: 'featured' | 'large' | 'mid' | 'small';
  year: string;
  github?: string | null;
};

export const projects: Project[] = [
  {
    title: 'HatAssembly',
    field: 'Field Report №01',
    tech: 'n8n · Supabase · OpenAI · Claude',
    description:
      'A RAG-powered n8n workflow generator. 794 node schemas indexed in Supabase with OpenAI embeddings; takes a plain-text brief and returns deployable n8n JSON via a multi-agent pipeline (Claude Opus + Gemini).',
    outcome: 'Production-ready n8n workflows from natural language — zero manual node-building.',
    tags: ['n8n', 'RAG', 'LLM Agents', 'Supabase', 'OpenAI'],
    layout: 'featured',
    year: '2025',
    github: 'https://github.com/hatimtoor/HatAssembly',
  },
  {
    title: 'Sorcer AI',
    field: 'Field Report №02',
    tech: 'Next.js · Supabase · Gemini · n8n',
    description:
      'Full-stack automation agency portal. An AI clarifier conversation drives a CLARITY_READY signal; Gemini cross-references a Supabase credentials vault and smart-dispatches to n8n webhooks or a CRM factory (GHL, ActiveCampaign, HubSpot).',
    outcome: 'End-to-end client onboarding to automation delivery — no manual handoffs.',
    tags: ['Next.js', 'Gemini', 'Supabase', 'CRM'],
    layout: 'large',
    year: '2025',
    github: 'https://github.com/hatimtoor/sorcer-ai',
  },
  {
    title: 'Outbound Voice Agent',
    field: 'Field Report №03',
    tech: 'n8n · VAPI',
    description:
      'End-to-end outbound cold-calling agent integrating n8n orchestration with VAPI voice AI — lead dialling, dynamic script delivery, response logging.',
    outcome: 'Full call lifecycle automated, lead contact rate and pipeline velocity up.',
    tags: ['n8n', 'VAPI', 'Voice AI'],
    layout: 'small',
    year: '2025',
  },
  {
    title: 'WhatsApp Booking Agent',
    field: 'Field Report №04',
    tech: 'n8n · WhatsApp Business',
    description:
      'Conversational AI on WhatsApp that qualifies inbound leads, collects details, and books appointments into a shared calendar autonomously.',
    outcome: 'Time-to-booking cut to zero — full customer funnel runs 24/7.',
    tags: ['n8n', 'WhatsApp', 'LLM', 'Calendar'],
    layout: 'mid',
    year: '2024',
  },
  {
    title: 'Content Multiplier',
    field: 'Field Report №05',
    tech: 'n8n · LLM APIs',
    description:
      'Fully automated workflows for AI-generated short-form video, published to YouTube, TikTok, and Instagram at near-zero marginal cost.',
    outcome: 'High-volume content pipeline running 24/7 without human input.',
    tags: ['n8n', 'LLMs', 'YouTube', 'Instagram'],
    layout: 'mid',
    year: '2024',
  },
  {
    title: 'Email & Calendar Brain',
    field: 'Field Report №06',
    tech: 'n8n · Google Workspace',
    description:
      'Intelligent automation for email triage, LLM-assisted reply drafting, meeting scheduling, and calendar conflict resolution.',
    outcome: 'Eliminated repetitive scheduling overhead for two exec teams.',
    tags: ['n8n', 'Gmail', 'Calendar', 'LLM'],
    layout: 'small',
    year: '2024',
  },
  {
    title: 'Inbound Call Handler',
    field: 'Field Report №07',
    tech: 'n8n · VAPI',
    description:
      'Inbound call automation that fields customer enquiries, qualifies needs, and progresses leads through the sales funnel — no human in the loop.',
    outcome: 'Full inbound funnel handled autonomously — zero agent required.',
    tags: ['n8n', 'VAPI', 'Telephony', 'CRM'],
    layout: 'large',
    year: '2024',
  },
];

export const experience = [
  {
    role: 'Automation Team Lead',
    company: 'Schmoozzer',
    period: 'Sep 2025 — Present',
    bullets: [
      'Lead a team of engineers delivering low-code/no-code automation solutions and custom web apps.',
      'Architect end-to-end n8n workflows covering API integrations, data pipelines, and AI agent deployment.',
      'Oversee full project lifecycle: requirements, design, delegation, code review, QA, and deployment.',
    ],
  },
  {
    role: 'Sales Manager',
    company: 'Orchard Logistics',
    period: 'Feb 2024 — May 2025',
    bullets: [
      'Led a team of 8 sales agents — pipeline performance, KPI tracking, and coaching.',
      'Drove 30% revenue growth via sales-process redesign and workflow automation.',
      'Introduced automation tooling to compress manual data entry and reporting time.',
    ],
  },
  {
    role: 'Truck Dispatcher',
    company: 'Falcon Dispatch',
    period: 'Oct 2023 — Jan 2024',
    bullets: [
      'Managed real-time customer communications and coordinated multi-carrier load scheduling.',
      'Streamlined dispatch workflows to improve on-time delivery rates.',
    ],
  },
];

export const education = [
  {
    degree: 'BS Robotics & Intelligent Systems',
    institution: 'University of Management and Technology · Lahore',
    period: 'Expected 2027',
  },
  {
    degree: 'Intermediate · Pre-Engineering',
    institution: 'APEX College · Sheikhupura',
    period: '2023',
  },
];

export const filterTags = ['All', 'n8n', 'LLM', 'Voice AI', 'RAG', 'WhatsApp', 'CRM'] as const;

export function matchesTag(p: Project, tag: string): boolean {
  if (tag === 'All') return true;
  return (p.tags || []).join(' ').toLowerCase().includes(tag.toLowerCase());
}

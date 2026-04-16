import { useState, useRef, useEffect } from 'react'
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi'
import './styles/ChatBot.css'

interface Message {
  role: 'user' | 'bot'
  text: string
}

const STARTERS = [
  "What projects has Hatim built?",
  "What's his tech stack?",
  "Is he available for hire?",
  "How do I contact him?",
]

function getResponse(input: string): string {
  const q = input.toLowerCase()

  if (/hatassembly|hat assembly|rag|workflow generator|794/i.test(q)) {
    return `**HatAssembly** is one of Hatim's flagship open-source projects.\n\n• RAG-powered n8n workflow generator\n• 794 n8n node schemas indexed in Supabase with OpenAI embeddings\n• Takes plain text input and outputs fully deployable n8n workflow JSON\n• Multi-agent pipeline using Claude Opus + Gemini\n• Dual input via chat and webhook\n\nView it on GitHub: github.com/hatimtoor/HatAssembly`
  }

  if (/sorcer|sorcerer|agency portal|crm factory|clarity/i.test(q)) {
    return `**Sorcer AI** is Hatim's full-stack automation agency internal portal.\n\n• AI clarifier conversation drives a CLARITY_READY signal\n• Gemini infers required credentials and cross-references a Supabase vault\n• Smart-dispatches to n8n webhooks or a CRM factory\n• Supports GHL, ActiveCampaign, and HubSpot out of the box\n• Built with Next.js 16 + Supabase + Gemini\n\nView it on GitHub: github.com/hatimtoor/sorcer-ai`
  }

  if (/project|built|work|portfolio|automation/i.test(q)) {
    return `Hatim has built 50+ AI automation projects. Key highlights:\n\n• **HatAssembly** — RAG-powered n8n workflow generator. 794 node schemas indexed in Supabase, generates deployable workflow JSON from plain text via Claude + Gemini agents. Open source on GitHub.\n• **Sorcer AI** — Full-stack automation agency portal. AI clarifier → credential detection → smart dispatch to n8n or CRM factory (GHL, ActiveCampaign, HubSpot). Open source on GitHub.\n• **AI Outbound Voice Agent** — n8n + VAPI, automated cold-calling with dynamic scripts\n• **Multi-Platform Content Pipeline** — AI-generated video published to YouTube, TikTok & Instagram 24/7\n• **AI Email & Calendar Management** — LLM-powered email triage and meeting scheduling\n• **WhatsApp AI Booking Agent** — Qualifies leads and books appointments autonomously\n• **Inbound Call AI Handler** — Fields customer calls and progresses leads without human input\n\nAsk me about any specific project for more detail!`
  }

  if (/stack|tech|tool|language|use|skill|python|n8n|vapi|llm|api/i.test(q)) {
    return `Hatim's core stack:\n\n**Automation:** n8n (Expert), Webhooks, REST APIs\n**AI / LLMs:** OpenAI API, VAPI Voice AI, Prompt Engineering, Claude, Gemini\n**Integrations:** WhatsApp Business API, Google Workspace, YouTube API, Instagram API\n**Code:** Python (Intermediate), JavaScript, TypeScript\n**Web:** React, Next.js, Node.js, MongoDB, PostgreSQL, Supabase, Docker\n\nHis n8n expertise is at expert level — he leads a team at Schmoozzer building end-to-end automation pipelines.`
  }

  if (/hire|available|open|remote|job|role|opportunit|freelan/i.test(q)) {
    return `Yes! Hatim is open to remote-first opportunities.\n\nHe's interested in roles like:\n• AI Automation Engineer\n• Workflow Automation Specialist\n• n8n Developer\n• AI Integration Engineer\n• Automation Team Lead\n\nHe's currently leading the automation team at Schmoozzer while open to new opportunities. Best way to reach him is hatimtoor2025@gmail.com or via the contact form on this page.`
  }

  if (/contact|email|reach|message|talk|call|phone/i.test(q)) {
    return `You can reach Hatim at:\n\n📧 hatimtoor2025@gmail.com\n📱 +92 327 808 0883\n💼 linkedin.com/in/hatim-toor\n🐙 github.com/hatimtoor\n\nOr just use the contact form at the bottom of this page — he typically responds within 24 hours.`
  }

  if (/experience|year|background|career|job|schmoozzer|orchard|falcon/i.test(q)) {
    return `Hatim has 3+ years of experience:\n\n**Automation Team Lead @ Schmoozzer** (Sep 2025 – Present)\nLeads engineers building low-code automation and web apps for clients.\n\n**Sales Manager @ Orchard Logistics** (Feb 2024 – May 2025)\nManaged a team of 8, achieved 30% revenue growth through automation.\n\n**Truck Dispatcher @ Falcon Dispatch** (Oct 2023 – Jan 2024)\nStreamlined dispatch workflows and real-time customer communications.\n\nHe's also pursuing a BS in Robotics & Intelligent Systems at UMT Lahore.`
  }

  if (/education|degree|study|university|umt|robotic/i.test(q)) {
    return `Hatim is currently pursuing a **BS in Robotics & Intelligent Systems** at the University of Management and Technology (UMT), Lahore — expected graduation 2027.\n\nHe also completed Intermediate (Pre-Engineering) at APEX College, Sheikhupura in 2023.`
  }

  if (/revenue|result|outcome|impact|achieve|grow|save|hour/i.test(q)) {
    return `Hatim delivers measurable results:\n\n📈 **30%** revenue growth at Orchard Logistics through sales automation\n⏱️ **10,000+** hours automated across client workflows\n🤖 **50+** AI projects shipped\n📞 Doubled lead contact rates with voice AI agents\n📅 Eliminated scheduling overhead for executive teams\n🛒 Enabled 24/7 customer booking without human agents`
  }

  if (/service|offer|do|help|solve|build for/i.test(q)) {
    return `Hatim offers four core services:\n\n🔧 **Automation** — End-to-end n8n workflows, API integrations, scheduling\n🤖 **AI & LLMs** — Voice agents, chatbots, email automation, prompt engineering\n🔌 **Integrations** — WhatsApp, Google Workspace, CRMs, social platforms\n🌐 **Web Apps** — Lightweight apps that bridge no-code automation with custom UIs\n\nEvery solution is built to run 24/7 without manual input.`
  }

  if (/cv|resume|download/i.test(q)) {
    return `You can download Hatim's CV directly from this portfolio — there's a "Download CV" button right in the hero section at the top of the page.\n\nAlternatively, reach out at hatimtoor2025@gmail.com and he'll send it over.`
  }

  if (/github|open.?source|repo/i.test(q)) {
    return `Hatim has two open-source projects on GitHub:\n\n• **HatAssembly** — github.com/hatimtoor/HatAssembly\nRAG-powered n8n workflow generator with 794 node schemas\n\n• **Sorcer AI** — github.com/hatimtoor/sorcer-ai\nFull-stack automation agency portal with AI-driven CRM dispatch\n\nBrowse his full profile at github.com/hatimtoor`
  }

  if (/who|about|hatim|introduce|yourself/i.test(q)) {
    return `Hatim Toor is an **AI Automation Engineer and Team Lead** based in Sheikhupura, Pakistan.\n\nHe specialises in building intelligent systems that work around the clock — from n8n automation pipelines to voice AI sales agents. Currently leading the engineering team at Schmoozzer while pursuing a degree in Robotics & Intelligent Systems.\n\nHis two flagship open-source projects are **HatAssembly** (a RAG-powered n8n workflow generator) and **Sorcer AI** (a full-stack automation agency portal) — both available on GitHub.\n\nWith 3+ years of hands-on experience and 50+ projects shipped, he brings a business-first perspective to every automation — built to deliver real outcomes, not just clever tech.`
  }

  return `I'm not sure about that specific question, but I can help with:\n\n• Hatim's projects and work (including HatAssembly & Sorcer AI)\n• His tech stack and skills\n• Availability and hiring\n• Contact details\n• Experience and background\n• Services he offers\n\nWhat would you like to know?`
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hey! I'm Hatim's assistant. Ask me anything about his work, skills, or availability 👋" }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const send = (text: string) => {
    if (!text.trim()) return
    const userMsg: Message = { role: 'user', text }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      const response = getResponse(text)
      setMessages(prev => [...prev, { role: 'bot', text: response }])
      setTyping(false)
    }, 800)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    send(input)
  }

  const formatText = (text: string) => {
    return text.split('\n').map((line, i) => {
      const formatted = line
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      return <p key={i} dangerouslySetInnerHTML={{ __html: formatted }} />
    })
  }

  return (
    <>
      <button
        className={`chatbot__toggle${open ? ' chatbot__toggle--open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Open chat"
      >
        {open ? <FiX /> : <FiMessageSquare />}
        {!open && <span className="chatbot__toggle-label">Ask me anything</span>}
      </button>

      <div className={`chatbot__panel${open ? ' chatbot__panel--open' : ''}`}>
        <div className="chatbot__header">
          <div className="chatbot__header-avatar">HT</div>
          <div>
            <div className="chatbot__header-name">Hatim's Assistant</div>
            <div className="chatbot__header-status">
              <span className="chatbot__dot" />
              Online
            </div>
          </div>
        </div>

        <div className="chatbot__messages">
          {messages.map((m, i) => (
            <div key={i} className={`chatbot__msg chatbot__msg--${m.role}`}>
              <div className="chatbot__bubble">
                {formatText(m.text)}
              </div>
            </div>
          ))}
          {typing && (
            <div className="chatbot__msg chatbot__msg--bot">
              <div className="chatbot__bubble chatbot__bubble--typing">
                <span /><span /><span />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {messages.length === 1 && (
          <div className="chatbot__starters">
            {STARTERS.map(s => (
              <button key={s} className="chatbot__starter" onClick={() => send(s)}>
                {s}
              </button>
            ))}
          </div>
        )}

        <form className="chatbot__input-row" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask about projects, skills, availability..."
            className="chatbot__input"
          />
          <button type="submit" className="chatbot__send" aria-label="Send">
            <FiSend />
          </button>
        </form>
      </div>
    </>
  )
}

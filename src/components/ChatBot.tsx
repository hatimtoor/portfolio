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

  if (/project|built|work|portfolio|automation/i.test(q)) {
    return `Hatim has built 50+ AI automation projects. Key highlights:\n\n• **AI Outbound Voice Agent** — n8n + VAPI, automated cold-calling with dynamic scripts\n• **Multi-Platform Content Pipeline** — AI-generated video published to YouTube, TikTok & Instagram 24/7\n• **AI Email & Calendar Management** — LLM-powered email triage and meeting scheduling\n• **WhatsApp AI Booking Agent** — Qualifies leads and books appointments autonomously\n• **Inbound Call AI Handler** — Fields customer calls and progresses leads without human input\n\nAll projects deliver measurable outcomes — ask me about any specific one!`
  }

  if (/stack|tech|tool|language|use|skill|python|n8n|vapi|llm|api/i.test(q)) {
    return `Hatim's core stack:\n\n**Automation:** n8n (Expert), Webhooks, REST APIs\n**AI / LLMs:** OpenAI API, VAPI Voice AI, Prompt Engineering\n**Integrations:** WhatsApp Business API, Google Workspace, YouTube API, Instagram API\n**Code:** Python (Intermediate), JavaScript, TypeScript\n**Web:** React, Node.js, MongoDB, PostgreSQL, Docker\n\nHis n8n expertise is at expert level — he leads a team at Schmoozzer building end-to-end automation pipelines.`
  }

  if (/hire|available|open|remote|job|role|opportunit|freelan/i.test(q)) {
    return `Yes! Hatim is open to remote-first opportunities.\n\nHe's interested in roles like:\n• AI Automation Engineer\n• Workflow Automation Specialist\n• n8n Developer\n• AI Integration Engineer\n• Automation Team Lead\n\nHe's currently leading the automation team at Schmoozzer while open to new opportunities. Best way to reach him is hatimtoor2025@gmail.com or via the contact form on this page.`
  }

  if (/contact|email|reach|message|talk|call|phone/i.test(q)) {
    return `You can reach Hatim at:\n\n📧 hatimtoor2025@gmail.com\n📱 +92 327 808 0883\n💼 linkedin.com/in/hatim-toor\n🐙 github.com/hatimtoor\n\nOr just use the contact form at the bottom of this page — he typically responds within 24 hours.`
  }

  if (/experience|year|background|work|career|job|schmoozzer|orchard|falcon/i.test(q)) {
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

  if (/who|about|hatim|introduce|yourself/i.test(q)) {
    return `Hatim Toor is an **AI Automation Engineer and Team Lead** based in Sheikhupura, Pakistan.\n\nHe specialises in building intelligent systems that work around the clock — from n8n automation pipelines to voice AI sales agents. Currently leading the engineering team at Schmoozzer while pursuing a degree in Robotics & Intelligent Systems.\n\nWith 3+ years of hands-on experience and 50+ projects shipped, he brings a business-first perspective to every automation — built to deliver real outcomes, not just clever tech.`
  }

  return `I'm not sure about that specific question, but I can help with:\n\n• Hatim's projects and work\n• His tech stack and skills\n• Availability and hiring\n• Contact details\n• Experience and background\n• Services he offers\n\nWhat would you like to know?`
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
      {/* Toggle button */}
      <button
        className={`chatbot__toggle${open ? ' chatbot__toggle--open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Open chat"
      >
        {open ? <FiX /> : <FiMessageSquare />}
        {!open && <span className="chatbot__toggle-label">Ask me anything</span>}
      </button>

      {/* Panel */}
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

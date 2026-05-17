import { useState } from 'react';
import { services } from '../data/portfolioData';
import { CmdHead } from './Hero';

type Node = {
  id: string;
  name: string;
  sub: string;
  desc: string;
  tags: string[];
  x: number;
  y: number;
};

const NODES: Node[] = [
  {
    id: 'trigger',
    name: 'Trigger',
    sub: 'webhook · cron · email',
    desc: 'Workflows fire from real-world events — webhooks, schedules, inbound email, WhatsApp messages, CRM updates. Branching logic and error handling baked in.',
    tags: ['webhook', 'cron', 'WhatsApp', 'Gmail'],
    x: 20, y: 100,
  },
  {
    id: 'agent',
    name: 'AI Agent',
    sub: 'llm · rag · prompts',
    desc: 'An LLM with tools. Claude / GPT / Gemini wired to vector stores, RAG indexes, and structured prompts — multi-step reasoning, function calls, fallbacks.',
    tags: ['Claude', 'OpenAI', 'Gemini', 'RAG', 'VAPI'],
    x: 320, y: 100,
  },
  {
    id: 'integrate',
    name: 'Integrate',
    sub: 'rest · oauth · queues',
    desc: 'Plumbing between platforms — Google Workspace, WhatsApp Business, HubSpot, GHL, ActiveCampaign — into one coherent system with auth, retries, and queues.',
    tags: ['REST', 'OAuth', 'HubSpot', 'GHL', 'n8n'],
    x: 640, y: 100,
  },
  {
    id: 'ship',
    name: 'Action',
    sub: 'deploy · log · monitor',
    desc: 'Output goes somewhere real — a booked appointment, a sent email, a logged call, a Slack message, a deployed JSON workflow. Everything observable.',
    tags: ['Deploy', 'Logs', 'Monitor', 'Slack'],
    x: 940, y: 100,
  },
];

const NODE_W = 220;
const NODE_H = 130;

function curvePath(x1: number, y1: number, x2: number, y2: number) {
  const dx = (x2 - x1) * 0.55;
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

export default function Pipeline() {
  const [active, setActive] = useState('agent');
  const node = NODES.find((n) => n.id === active)!;

  return (
    <section className="os" id="s-workflow">
      <CmdHead n="03" cmd="cat" args="./pipeline.yaml" label="capabilities" />

      <div className="pipeline-wrap">
        <div className="pipeline-head">
          <div className="t">
            <span>workflow.pipeline </span><span className="dim">— event → reasoning → side-effect</span>
          </div>
          <div className="legend">
            <span><span className="sw"></span>live edge</span>
            <span><span className="sw dim"></span>inactive</span>
          </div>
        </div>

        <div className="pipeline-svg-wrap">
          <svg className="pipeline-svg" viewBox="0 0 1180 280" preserveAspectRatio="xMidYMid meet">
            {NODES.slice(0, -1).map((n, i) => {
              const next = NODES[i + 1];
              const x1 = n.x + NODE_W;
              const y1 = n.y + NODE_H / 2;
              const x2 = next.x;
              const y2 = next.y + NODE_H / 2;
              return (
                <g key={'e' + i}>
                  <path className="edge" d={curvePath(x1, y1, x2, y2)} />
                  <path className="edge-flow" d={curvePath(x1, y1, x2, y2)} />
                  <polygon
                    points={`${x2},${y2} ${x2 - 8},${y2 - 5} ${x2 - 8},${y2 + 5}`}
                    fill="var(--accent)"
                  />
                </g>
              );
            })}

            {NODES.map((n, i) => (
              <g key={n.id} transform={`translate(${n.x},${n.y})`} style={{ cursor: 'pointer' }} onClick={() => setActive(n.id)}>
                <rect
                  className={'node-rect' + (active === n.id ? ' active' : '')}
                  x="0" y="0" width={NODE_W} height={NODE_H} rx="10"
                />
                <text x="18" y="28" className="node-sub">STEP · {String(i + 1).padStart(2, '0')}</text>
                <circle cx={NODE_W - 22} cy="22" r="4" className="node-status" />
                <text x="18" y="62" className="node-title">{n.name}</text>
                <text x="18" y="84" className="node-sub">{n.sub}</text>
                <g transform={`translate(18, ${NODE_H - 30})`}>
                  <rect x="0" y="0" width="22" height="22" rx="3" fill="none" stroke="var(--rule-2)" />
                  <circle cx="6"  cy="6"  r="1.5" className="node-icon" />
                  <circle cx="16" cy="6"  r="1.5" className="node-icon" />
                  <circle cx="6"  cy="16" r="1.5" className="node-icon" />
                  <circle cx="16" cy="16" r="1.5" className="node-icon" />
                </g>
                <text x={NODE_W - 18} y={NODE_H - 14} textAnchor="end" className="node-sub">→ out</text>
                {i > 0 ? (
                  <circle cx="0" cy={NODE_H / 2} r="4" fill="var(--bg-2)" stroke="var(--accent)" strokeWidth="1.5" />
                ) : null}
                <circle cx={NODE_W} cy={NODE_H / 2} r="4" fill="var(--accent)" />
              </g>
            ))}
          </svg>
        </div>

        <div className="pipeline-detail">
          <div>
            <div className="nm">$ inspect {node.id}</div>
            <div className="sub">node · step {NODES.findIndex((n) => n.id === active) + 1} of 4</div>
          </div>
          <div>
            <div className="desc">{node.desc}</div>
          </div>
          <div className="tags">
            {node.tags.map((t) => <span key={t}>{t}</span>)}
          </div>
        </div>
      </div>

      <div className="stack-strip" style={{ marginTop: 28 }}>
        <span className="label" style={{ marginRight: 12, padding: '5px 0' }}>// capabilities</span>
        {Array.from(new Set(services.flatMap((s) => s.tags))).map((t, i) => (
          <span key={t} className={'chip' + (i < 4 ? ' hl' : '')}>{t}</span>
        ))}
      </div>
    </section>
  );
}

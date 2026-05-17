import { info, stack } from '../data/portfolioData';
import { CmdHead } from './Hero';

export default function About() {
  return (
    <section className="os" id="s-profile">
      <CmdHead n="02" cmd="whoami" args="--verbose" label="profile" />
      <div className="panels">
        <article className="panel">
          <div className="panel-head">
            <div className="title">~/<span className="ex">bio.md</span></div>
            <div className="meta">md · 2.1 kb</div>
          </div>
          <div className="panel-body">
            <p style={{ marginBottom: 14, color: 'var(--fg)' }}># {info.name}</p>
            <p style={{ marginBottom: 14 }}>{info.summary}</p>
            <p style={{ color: 'var(--fg-1)' }}>{info.longBio}</p>

            <div style={{ marginTop: 22, paddingTop: 14, borderTop: '1px dashed var(--rule-2)' }}>
              <span className="label" style={{ display: 'block', marginBottom: 10 }}>// signal</span>
              <div className="kv-list">
                <span className="k">role</span><span className="v">Automation Team Lead</span>
                <span className="k">at</span><span className="v acc">@schmoozzer</span>
                <span className="k">prev</span><span className="v">Orchard · Falcon</span>
                <span className="k">edu</span><span className="v">UMT Lahore · BS Robotics</span>
              </div>
            </div>
          </div>
        </article>

        <article className="panel">
          <div className="panel-head">
            <div className="title">~/<span className="ex">metrics.log</span></div>
            <div className="meta">live</div>
          </div>
          <div className="panel-body">
            <pre style={{ fontFamily: 'var(--f-mono)', fontSize: 12.5, lineHeight: 1.75, color: 'var(--fg-1)', whiteSpace: 'pre-wrap' }}>
{`[2026-05-16]  metrics --since=2023
─────────────────────────────────
years.shipping       `}<span className="tok-num">{info.yearsExp}</span>{`
projects.deployed    `}<span className="tok-num">{info.projectsCount}</span>{`
revenue.growth       `}<span style={{ color: 'var(--accent)' }}>{info.revGrowth}</span>{` YoY
team.size            `}<span className="tok-num">8</span>{` engineers
n8n.nodes.indexed    `}<span className="tok-num">794</span>{`
voice.calls.handled  `}<span className="tok-num">12,300</span>{`+
─────────────────────────────────
status               `}<span className="tok-ok">● healthy</span>{`
`}
            </pre>
          </div>
        </article>

        <article className="panel">
          <div className="panel-head">
            <div className="title">~/<span className="ex">stack.json</span></div>
            <div className="meta">json · 1.4 kb</div>
          </div>
          <div className="panel-body json-block">
            <span className="l">1</span><span className="tok-dim">{'{'}</span>{'\n'}
            <span className="l">2</span>  <span className="tok-key">"automation"</span><span className="tok-dim">:</span> <span className="tok-str">"n8n / webhooks / pipelines"</span><span className="tok-dim">,</span>{'\n'}
            <span className="l">3</span>  <span className="tok-key">"models"</span><span className="tok-dim">:</span> [<span className="tok-str">"claude"</span>, <span className="tok-str">"gpt"</span>, <span className="tok-str">"gemini"</span>]<span className="tok-dim">,</span>{'\n'}
            <span className="l">4</span>  <span className="tok-key">"voice"</span><span className="tok-dim">:</span> <span className="tok-str">"vapi"</span><span className="tok-dim">,</span>{'\n'}
            <span className="l">5</span>  <span className="tok-key">"data"</span><span className="tok-dim">:</span> [<span className="tok-str">"supabase"</span>, <span className="tok-str">"postgres"</span>, <span className="tok-str">"mongo"</span>]<span className="tok-dim">,</span>{'\n'}
            <span className="l">6</span>  <span className="tok-key">"runtime"</span><span className="tok-dim">:</span> [<span className="tok-str">"node"</span>, <span className="tok-str">"python"</span>, <span className="tok-str">"docker"</span>]<span className="tok-dim">,</span>{'\n'}
            <span className="l">7</span>  <span className="tok-key">"web"</span><span className="tok-dim">:</span> [<span className="tok-str">"react"</span>, <span className="tok-str">"next.js"</span>, <span className="tok-str">"ts"</span>]<span className="tok-dim">,</span>{'\n'}
            <span className="l">8</span>  <span className="tok-key">"crm"</span><span className="tok-dim">:</span> [<span className="tok-str">"hubspot"</span>, <span className="tok-str">"ghl"</span>, <span className="tok-str">"activecampaign"</span>]<span className="tok-dim">,</span>{'\n'}
            <span className="l">9</span>  <span className="tok-key">"channels"</span><span className="tok-dim">:</span> [<span className="tok-str">"whatsapp"</span>, <span className="tok-str">"gmail"</span>, <span className="tok-str">"calendar"</span>]<span className="tok-dim">,</span>{'\n'}
            <span className="l">10</span> <span className="tok-key">"langs"</span><span className="tok-dim">:</span> [<span className="tok-str">"en"</span>, <span className="tok-str">"ur"</span>, <span className="tok-str">"pa"</span>]{'\n'}
            <span className="l">11</span><span className="tok-dim">{'}'}</span>{'\n'}
          </div>
        </article>
      </div>

      <div className="stack-strip">
        <span className="label" style={{ marginRight: 12, padding: '5px 0' }}>// rotation</span>
        {stack.map((s, i) => (
          <span key={s} className={'chip' + (i < 4 ? ' hl' : '')}>{s}</span>
        ))}
      </div>
    </section>
  );
}

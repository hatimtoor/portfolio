import { useState, type FormEvent } from 'react';
import { info } from '../data/portfolioData';
import { CmdHead } from './Hero';

export default function Contact() {
  const [v, setV] = useState({ name: '', email: '', project: '', msg: '' });
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`[Console] ${v.project || 'New brief'}`);
    const body = encodeURIComponent(`From: ${v.name} <${v.email}>\n\n${v.msg}`);
    window.location.href = `mailto:${info.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="os" id="s-dispatch">
      <CmdHead n="06" cmd="mail" args="--compose --to=hatim" label="dispatch" />

      <div className="console-wrap">
        <form className="console-left" onSubmit={submit} autoComplete="off">
          <div className="console-line">
            <span className="pr">›</span>
            <span className="ar">--from</span>
            <input value={v.name} required onChange={(e) => setV({ ...v, name: e.target.value })} placeholder="your name" />
          </div>
          <div className="console-line">
            <span className="pr">›</span>
            <span className="ar">--reply-to</span>
            <input type="email" value={v.email} required onChange={(e) => setV({ ...v, email: e.target.value })} placeholder="you@company.com" />
          </div>
          <div className="console-line">
            <span className="pr">›</span>
            <span className="ar">--subject</span>
            <input value={v.project} onChange={(e) => setV({ ...v, project: e.target.value })} placeholder="whatsapp booking agent for a clinic" />
          </div>
          <div className="console-divider"></div>
          <div className="console-line" style={{ alignItems: 'flex-start' }}>
            <span className="pr">›</span>
            <span className="ar">--body</span>
            <textarea required value={v.msg} onChange={(e) => setV({ ...v, msg: e.target.value })} placeholder="stack, integrations, current pain, rough timeline…"></textarea>
          </div>
        </form>

        <aside className="console-right">
          <div className="blk">
            <div className="k">// direct line</div>
            <div className="v"><a href={`mailto:${info.email}`}>{info.email}</a></div>
          </div>
          <div className="blk">
            <div className="k">// whatsapp / phone</div>
            <div className="v">{info.phone}</div>
          </div>
          <div className="blk">
            <div className="k">// github</div>
            <div className="v"><a href={info.github} target="_blank" rel="noreferrer">github.com/hatimtoor ↗</a></div>
          </div>
          <div className="blk">
            <div className="k">// linkedin</div>
            <div className="v"><a href={info.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/hatim-toor ↗</a></div>
          </div>
          <div className="blk">
            <div className="k">// hours</div>
            <div className="v">10:00 — 19:00 PKT · Mon–Sat</div>
          </div>
          <div className="blk">
            <div className="k">// booking</div>
            <div className="v">2-week lead time on new builds</div>
          </div>
        </aside>

        <div className="send-row">
          <span className="label">$ send · encrypted · routed to inbox</span>
          <button className="cta cta-primary" type="submit" onClick={submit}>
            <span className="bracket">[</span><span>{sent ? 'sent ✓' : 'send dispatch'}</span><span className="bracket">]</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

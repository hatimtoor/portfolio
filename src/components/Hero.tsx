import { useEffect, useRef, useState } from 'react';

type Line = { kind: 'cmd' | 'out' | 'out-ok'; text: string };

const TERMINAL_SCRIPT: Line[] = [
  { kind: 'cmd',    text: 'whoami' },
  { kind: 'out',    text: 'hatim · ai automation engineer' },
  { kind: 'cmd',    text: 'ls ./capabilities' },
  { kind: 'out',    text: 'n8n/  agents/  voice/  integrations/' },
  { kind: 'cmd',    text: 'cat now.txt' },
  { kind: 'out',    text: 'shipping production ai automations.' },
  { kind: 'cmd',    text: 'tail -f calls.log' },
  { kind: 'out',    text: '[14:02] ▸ vapi inbound · qualified · booked' },
  { kind: 'out',    text: '[14:18] ▸ whatsapp · 3 leads triaged' },
  { kind: 'out',    text: '[14:41] ▸ n8n trigger · workflow #218' },
  { kind: 'cmd',    text: 'stat availability' },
  { kind: 'out-ok', text: '✓ open · 2-week lead time' },
  { kind: 'cmd',    text: '' },
];

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

function TerminalStream() {
  const [lines, setLines] = useState<Line[]>([]);
  const [typing, setTyping] = useState('');
  const [step, setStep] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      for (let i = 0; i < TERMINAL_SCRIPT.length; i++) {
        if (cancelled) return;
        const item = TERMINAL_SCRIPT[i];
        if (item.kind === 'cmd') {
          for (let j = 0; j <= item.text.length; j++) {
            if (cancelled) return;
            setTyping(item.text.slice(0, j));
            await sleep(26 + Math.random() * 30);
          }
          await sleep(180);
          setLines((L) => [...L, item]);
          setTyping('');
        } else {
          await sleep(140);
          setLines((L) => [...L, item]);
        }
        setStep(i);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, [lines, typing]);

  return (
    <div className="hero-term-left" ref={ref}>
      <div className="term-line"><span className="dim">Last login: today · 09:14 PKT</span></div>
      <div className="term-line"><span className="dim">— booting field-manual.v2 …</span></div>
      <div className="term-line"><span className="ok">✓ runtime ok · 0 warnings</span></div>
      <div className="term-line"></div>
      {lines.map((ln, i) => (
        <div key={i} className="term-line">
          {ln.kind === 'cmd' ? (
            <span><span className="term-prompt">hatim@toor ~ %</span> {ln.text}</span>
          ) : ln.kind === 'out-ok' ? (
            <span className="ok">{ln.text}</span>
          ) : (
            <span>{ln.text}</span>
          )}
        </div>
      ))}
      {step < TERMINAL_SCRIPT.length - 1 ? (
        <div className="term-line">
          <span className="term-prompt">hatim@toor ~ %</span> {typing}<span className="tok-cur"></span>
        </div>
      ) : (
        <div className="term-line">
          <span className="term-prompt">hatim@toor ~ %</span> <span className="tok-cur"></span>
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="s-index">
      <div className="hero-term">
        <div className="term-chrome">
          <div className="traffic"><span></span><span></span><span></span></div>
          <div className="title">hatim@toor: ~/portfolio · zsh — 142 × 38</div>
        </div>
        <div className="hero-term-body">
          <TerminalStream />

          <div className="hero-term-right">
            <div className="handle">
              <span>hatim</span><span className="at">@</span><span>toor</span>
              <span style={{ color: 'var(--fg-3)' }}> · ai automation engineer</span>
            </div>
            <h1 className="hero-name">
              HATIM<span className="slash">_</span>TOOR<span className="cursor-blk">_</span>
            </h1>
            <p className="hero-tag">
              I build production AI automations — <em>n8n workflows, LLM agents, voice AI, RAG systems</em> — that quietly remove humans from the boring parts.
            </p>
            <div className="hero-stats">
              <div><div className="k">yrs.shipping</div><div className="v">3+</div></div>
              <div><div className="k">projects.deployed</div><div className="v">50+</div></div>
              <div><div className="k">rev.growth</div><div className="v" style={{ color: 'var(--accent)' }}>+30%</div></div>
              <div><div className="k">stack</div><div className="v">n8n · py · ts</div></div>
              <div><div className="k">loc</div><div className="v">PK · remote</div></div>
              <div><div className="k">status</div><div className="v" style={{ color: 'var(--accent)' }}>● available</div></div>
            </div>
            <div className="hero-cta">
              <a className="cta cta-primary" href="#s-dispatch">
                <span className="bracket">[</span><span>start a project</span><span className="bracket">]</span>
                <span>→</span>
              </a>
              <a className="cta" href="#s-work">
                <span className="bracket">$</span><span>ls work/</span>
              </a>
              <a className="cta" href="#s-workflow">
                <span className="bracket">$</span><span>view pipeline</span>
              </a>
              <a className="cta" href="/Resume.docx" download>
                <span className="bracket">$</span><span>download cv</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CmdHead({ n, cmd, args, label }: { n: string; cmd: string; args?: string; label: string }) {
  return (
    <div className="cmd-head">
      <span className="prompt">$</span>
      <span className="cmd">{cmd}</span>
      {args ? <span className="args">{args}</span> : null}
      <span className="pipe">|</span>
      <span className="label">{label}</span>
      <span className="num">§ {n}</span>
    </div>
  );
}

import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { id: 's-index',    n: '01', label: 'boot' },
  { id: 's-profile',  n: '02', label: 'whoami' },
  { id: 's-workflow', n: '03', label: 'pipeline' },
  { id: 's-work',     n: '04', label: 'work' },
  { id: 's-career',   n: '05', label: 'career' },
  { id: 's-dispatch', n: '06', label: 'dispatch' },
];

function fmtClock(d: Date) {
  const h = (d.getUTCHours() + 5) % 24;
  const m = String(d.getUTCMinutes()).padStart(2, '0');
  return String(h).padStart(2, '0') + ':' + m;
}

export default function StatusBar() {
  const [now, setNow] = useState(() => fmtClock(new Date()));
  const [active, setActive] = useState('s-index');

  useEffect(() => {
    const id = setInterval(() => setNow(fmtClock(new Date())), 30_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    NAV_LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  function go(e: React.MouseEvent, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 56, behavior: 'smooth' });
  }

  return (
    <div className="statusbar">
      <div className="sb"><span className="dot"></span><span>online</span></div>
      <div className="sb pwd">~/portfolio <span className="branch">·main</span></div>
      <nav className="sb-nav" aria-label="Sections">
        {NAV_LINKS.map((l) => (
          <a
            key={l.id}
            href={'#' + l.id}
            className={active === l.id ? 'active' : ''}
            onClick={(e) => go(e, l.id)}
          >
            <span className="n">§{l.n}</span>
            <span>{l.label}</span>
          </a>
        ))}
      </nav>
      <div className="sb">build: <span style={{ color: 'var(--green)' }}>ok</span></div>
      <div className="sb">{now} PKT</div>
    </div>
  );
}

import { useState } from 'react';
import { projects, filterTags, matchesTag } from '../data/portfolioData';
import { CmdHead } from './Hero';

function shortHash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h.toString(16).slice(0, 7);
}

export default function Work() {
  const [tag, setTag] = useState<string>('All');
  const [open, setOpen] = useState<string | null>(null);
  const filtered = projects.filter((p) => matchesTag(p, tag));

  return (
    <section className="os" id="s-work">
      <CmdHead n="04" cmd="ls" args="-la ./projects/" label="field-reports" />

      <div className="log-bar">
        <span className="lbl">grep</span>
        {filterTags.map((t) => (
          <button
            key={t}
            className={'chip' + (tag === t ? ' on' : '')}
            onClick={() => { setTag(t); setOpen(null); }}
          >
            {t === 'All' ? `* (${projects.length})` : t.toLowerCase()}
          </button>
        ))}
      </div>

      <div className="log-table">
        <div className="log-row head">
          <span>id</span>
          <span className="date">year</span>
          <span className="name">project</span>
          <span className="tech">stack</span>
          <span>status</span>
          <span></span>
        </div>
        {filtered.map((p) => {
          const hash = shortHash(p.title);
          const isOpen = open === p.title;
          return (
            <div
              key={p.title}
              className={'log-row' + (isOpen ? ' open' : '')}
              onClick={() => setOpen(isOpen ? null : p.title)}
            >
              <span className="id">{hash}</span>
              <span className="date">{p.year}</span>
              <span className="name">{p.title}</span>
              <span className="tech">{p.tech}</span>
              <span><span className={'status' + (p.layout === 'small' ? ' dev' : '')}>● {p.layout === 'small' ? 'private' : 'shipped'}</span></span>
              <span className="toggle">+</span>
              <div className="row-body">
                <div>
                  <div className="row-detail">
                    <div>
                      <p className="desc">{p.description}</p>
                      <div className="tags">
                        {p.tags.map((t) => <span key={t}>{t}</span>)}
                      </div>
                      {p.github ? (
                        <a className="open-repo" href={p.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                          $ git clone {p.github.replace('https://', '')} ↗
                        </a>
                      ) : null}
                    </div>
                    <div className="outcome">
                      <span className="lbl">→ outcome</span>
                      {p.outcome}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

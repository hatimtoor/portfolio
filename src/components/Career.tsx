import { experience, education } from '../data/portfolioData';
import { CmdHead } from './Hero';

function shortHash(s: string) {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
  return h.toString(16).slice(0, 7);
}

export default function Career() {
  return (
    <section className="os" id="s-career">
      <CmdHead n="05" cmd="git" args="log --career --oneline" label="career" />

      <div className="gitlog">
        {experience.map((e) => (
          <div key={e.role} className="commit">
            <span className="hash">{shortHash(e.role + e.company)}</span>
            <span className="when">{e.period}</span>
            <div className="msg">
              <span className="role">{e.role}</span>
              <span className="at">@</span>
              <span className="co">{e.company}</span>
              <ul>
                {e.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}

        <div className="commit merge">
          <span className="hash" style={{ color: 'var(--fg-3)' }}>merge</span>
          <span className="when">— pre-2024 —</span>
          <div className="msg">
            <span className="role">Education</span>
            <span className="at">·</span>
            <span className="co" style={{ color: 'var(--fg-2)' }}>academic branch</span>
            <ul>
              {education.map((ed) => (
                <li key={ed.degree}>
                  <span style={{ color: 'var(--fg)' }}>{ed.degree}</span>
                  <span style={{ color: 'var(--fg-3)' }}> · {ed.institution} · </span>
                  <span style={{ color: 'var(--amber)' }}>{ed.period}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

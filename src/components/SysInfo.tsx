import { info } from '../data/portfolioData';

const ASCII = `
  _  _____ ___
 | |/  _  /_  |
 | |  /_/  / /
 |_|\\____/ /_/   hatim-toor
`;

export default function SysInfo() {
  return (
    <>
      <div className="sysinfo">
        <pre className="ascii">{ASCII}</pre>
        <div className="data">
          <span className="k">os</span><span className="v">field-manual 2026.05</span>
          <span className="k">shell</span><span className="v">zsh 5.9</span>
          <span className="k">host</span><span className="v">lahore.pk</span>
          <span className="k">kernel</span><span className="v">n8n + llm core</span>
          <span className="k">runtime</span><span className="v">node 22 · python 3.12</span>
          <span className="k">uptime</span><span className="v">3 years 4 months</span>
          <span className="k">availability</span><span className="v acc">● open · Q3 2026</span>
          <span className="k">contact</span><span className="v acc">{info.email}</span>
        </div>
      </div>
      <div className="fm-foot">
        <span>© 2026 hatim toor · console.v2 · ed. 2026.05</span>
        <span>set in jetbrains mono &amp; inter tight</span>
        <span>made in lahore · remote-friendly</span>
      </div>
    </>
  );
}

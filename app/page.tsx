import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <div className="container">
      <header>
        <a className="brand" href="#top">
          <span className="avatar-ring">
            <img src="/assets/img/avatar.png" alt="Avatar" />
          </span>
          <b>m2hcs</b>
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#focus">Focus</a>
          <a href="#arsenal">Arsenal</a>
          <a href="#analytics">Analytics</a>
          <a href="#connect">Connect</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="pfp-wrap">
          <div className="pfp">
            <img src="/assets/img/avatar.png" alt="Profile picture" />
          </div>
        </div>
        <div>
          <div className="eyebrow">Senior Offensive Security Engineer</div>
          <h1>m2hcs</h1>
          <p><em>APT Emulation &amp; Exploit Research</em></p>
          <div className="actions">
            <a className="btn" href="#connect" aria-label="Contact">Contact</a>
            <a className="btn" href="#about" aria-label="About">About</a>
            <a className="btn btn-ghost" href="#arsenal" aria-label="Arsenal">Arsenal</a>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <h2>About Me</h2>
        <p>
          Offensive Security Engineer with <strong>8+ years</strong> of experience in APT emulation,
          zero-day research, and custom exploit development. Driven to turn curiosity into code and
          complexity into clarity.
        </p>
      </section>

      <section className="section" id="focus">
        <h2>Current Focus</h2>
        <ul className="list">
          <li>Advanced Persistent Threat (APT) Emulation</li>
          <li>Zero-day Vulnerability Research &amp; Custom Exploits</li>
          <li>Red Team Operations &amp; TIBER-EU Assessments</li>
          <li>Security Tool Development (Python, Rust, Go)</li>
          <li>Cloud Security &amp; DevSecOps (AWS, Azure, Kubernetes)</li>
        </ul>
      </section>

      <section className="section" id="arsenal">
        <h2>Arsenal &amp; Tech Stack</h2>
        <div className="two-col">
          <div className="card">
            <h3>Languages</h3>
            <div className="badges">
              <span className="badge">Python</span>
              <span className="badge">Rust</span>
              <span className="badge">C</span>
              <span className="badge">C++</span>
            </div>
            <h3 style={{ marginTop: 14 }}>Security Tools</h3>
            <ul className="list">
              <li>Web: Burp Suite Pro, OWASP ZAP, Custom Tools</li>
              <li>Network: Nmap, Masscan, Nuclei, ffuf</li>
              <li>Reversing: Ghidra, IDA Pro, x64dbg, Binary Ninja</li>
              <li>Exploitation: Metasploit, Cobalt Strike, Custom Frameworks</li>
            </ul>
          </div>
          <div className="card">
            <h3>Cloud &amp; Infrastructure</h3>
            <div style={{ margin: '8px 0 10px' }}>
              <img
                src="https://skillicons.dev/icons?i=aws,docker,kubernetes,terraform,ansible,linux&theme=dark"
                alt="Cloud & Infra"
                loading="lazy"
              />
            </div>
            <h3 style={{ marginTop: 6 }}>DevSecOps &amp; Automation</h3>
            <ul className="list">
              <li>CI/CD: GitHub Actions, GitLab CI, Jenkins</li>
              <li>Containers: Docker, Kubernetes Security</li>
              <li>IaC: Terraform, CloudFormation, Pulumi</li>
              <li>Monitoring: ELK Stack, Splunk, Prometheus</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="analytics">
        <h2>GitHub Analytics</h2>
        <div className="analytics">
          <img src="https://github-readme-stats.vercel.app/api?username=m2hcz&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true&border_color=0a0a0a" alt="GitHub stats" />
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=m2hcz&layout=compact&theme=tokyonight&border_color=0a0a0a" alt="Top languages" />
          <img src="https://github-readme-streak-stats.herokuapp.com/?user=m2hcz&theme=tokyonight&border=0a0a0a" alt="Contrib streak" />
        </div>
      </section>

      <section className="section" id="connect">
        <h2>Let’s Connect</h2>
        <div className="contacts">
          <a className="contact" href="https://x.com/inf0secc" target="_blank" rel="noreferrer noopener">
            <strong>X (Twitter)</strong><span>@inf0secc</span>
          </a>
          <a className="contact" href="https://github.com/m2hcz" target="_blank" rel="noreferrer noopener">
            <strong>GitHub</strong><span>m2hcz</span>
          </a>
          <a className="contact" href="mailto:m2hczs@proton.me">
            <strong>ProtonMail</strong><span>m2hczs@proton.me</span>
          </a>
        </div>
        <blockquote>
          <em>“The best defense is a good offense.”</em><br />
          <em>Open to collaborations, conference talks &amp; advanced security discussions.</em>
        </blockquote>
      </section>

      <footer>© <span id="year">{new Date().getFullYear()}</span> m2hcs • All rights reserved</footer>

      <SmoothScroll />
    </div>
  );
}

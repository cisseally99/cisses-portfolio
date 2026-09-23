import Image from "next/image";
import PageHeader from "@/components/PageHeader";

const skillGroups = [
  { number: "01", label: "Frontend", skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind"] },
  { number: "02", label: "Backend", skills: ["Node.js", "Express.js", "REST APIs", "Axios", "Fetch API"] },
  { number: "03", label: "Data & tools", skills: ["MongoDB", "Mongoose", "Git", "GitHub", "Postman", "Vite"] },
];

function ArrowUpRight() {
  return <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="icon icon-arrow"><path d="M3.5 12.5 12.5 3.5M5 3.5h7.5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function Home() {
  return (
    <main>
      <PageHeader />

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Full-stack engineer · Lagos, Nigeria</p>
          <h1>I build digital <span className="display-accent">experiences</span><br />that feel inevitable.</h1>
          <p className="hero-intro">I&apos;m Jamiu Aliyu Adekunle — a full-stack engineer crafting thoughtful, responsive products across the frontend and backend.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowUpRight /></a><a className="text-link" href="mailto:jamiualiyuolanrewaju@gmail.com">Let&apos;s talk <span>↗</span></a></div>
        </div>
        <div className="hero-visual" aria-label="Abstract developer profile graphic">
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="visual-grid" />
          <div className="visual-card"><div className="avatar-placeholder" style={{ position: "relative" }}><Image src="/profile.jpg" alt="Jamiu Aliyu Adekunle" fill priority sizes="260px" /></div><div className="card-name">Jamiu Aliyu<br /><em>full-stack engineer</em></div></div>
        </div>
      </section>

      <section className="ticker" aria-label="Areas of interest"><div className="ticker-track"><span>Frontend development</span><i>✦</i><span>Full-stack web apps</span><i>✦</i><span>API development</span><i>✦</i><span>AI-powered solutions</span><i>✦</i><span>Frontend development</span><i>✦</i><span>Full-stack web apps</span><i>✦</i><span>API development</span><i>✦</i><span>AI-powered solutions</span></div></section>

      <section id="work" className="section shell work-section"><div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" /> Featured project</p><span className="section-index">01 / 03</span></div><div className="work-intro"><h2>Made with intent.<br /><span>Built to matter.</span></h2><p>A living portfolio for thoughtful interfaces, full-stack experiments, and the work still taking shape.</p></div><article className="project-card"><div className="project-card-main"><div className="project-card-top"><span className="project-number">PROJECT 001 / 2026</span><span className="project-status"><span className="status-dot" /> Live build</span></div><h3>Cisse&apos;s<br /><em>portfolio.</em></h3><p>A responsive software developer portfolio built to present work clearly today and grow into an AI-assisted project publishing platform tomorrow.</p><div className="project-tags"><span>Next.js</span><span>TypeScript</span><span>Tailwind CSS</span><span>Responsive UI</span></div></div><div className="project-card-side"><a className="circle-link" href="https://github.com/cisseally99" target="_blank" rel="noreferrer" aria-label="View Cisse's portfolio on GitHub"><ArrowUpRight /></a><span>Frontend · Full-stack<br />Personal platform</span></div></article></section>

      <section id="about" className="section shell about-section"><div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" /> What I bring</p><span className="section-index">02 / 03</span></div><div className="about-grid"><h2>Less noise.<br /><span>More signal.</span></h2><div><p className="large-copy">I care about the space between an idea and the person using it. That means clean interfaces, resilient systems, and enough curiosity to keep asking better questions.</p><p className="muted-copy">Currently growing at the intersection of frontend craft, full-stack thinking, and AI-powered software.</p></div></div><div className="skills-grid">{skillGroups.map((group) => <div className="skill-group" key={group.number}><span className="skill-number">{group.number}</span><h3>{group.label}</h3><div className="skill-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></section>

      <section id="contact" className="contact-section"><div className="shell contact-inner"><div><p className="eyebrow"><span className="eyebrow-line" /> Have an idea?</p><h2>Let&apos;s make it<br /><span>real.</span></h2></div><a className="button button-light" href="mailto:jamiualiyuolanrewaju@gmail.com">Start a conversation <ArrowUpRight /></a></div></section>
      <footer className="site-footer shell"><span>© 2026 Jamiu Aliyu Adekunle</span><div><a href="https://github.com/cisseally99" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/aliyu-jamiu-1231a4297" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:jamiualiyuolanrewaju@gmail.com">Email ↗</a></div></footer>
    </main>
  );
}

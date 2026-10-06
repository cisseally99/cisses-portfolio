import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

const skillGroups = [
  { number: "01", label: "Frontend", skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind"] },
  { number: "02", label: "Backend", skills: ["Node.js", "Express.js", "REST APIs", "Axios", "Fetch API"] },
  { number: "03", label: "Data & tools", skills: ["MongoDB", "Mongoose", "Git", "GitHub", "Postman", "Vite"] },
];

const processSteps = [
  { number: "01", title: "Frame", description: "Clarify the audience, the problem, and the signal the product needs to send." },
  { number: "02", title: "Build", description: "Turn the idea into a considered interface and a dependable technical foundation." },
  { number: "03", title: "Refine", description: "Remove friction, test the details, and ship something that earns trust." },
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
          <p className="eyebrow"><span className="eyebrow-line" /> Independent developer · Lagos, Nigeria</p>
          <h1>Digital products<br /><span className="display-accent">with a point of view.</span></h1>
          <p className="hero-intro">I&apos;m Jamiu Aliyu Adekunle — a full-stack engineer turning ambitious ideas into clear, confident, and useful web experiences.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowUpRight /></a><Link className="text-link" href="/contact">Let&apos;s talk <span>↗</span></Link></div>
          <div className="hero-proof"><span>01</span><p>Design-minded<br />engineering</p><span>✦</span><p>Built for<br />the real world</p></div>
        </div>
        <div className="hero-visual" aria-label="Abstract developer profile graphic">
          <div className="visual-card"><div className="avatar-placeholder" style={{ position: "relative" }}><Image src="/mascot.png" alt="Illustrated mascot of Jamiu Aliyu Adekunle" fill priority sizes="260px" /></div><div className="card-name">Jamiu Aliyu<br /><em>full-stack engineer</em></div></div>
        </div>
      </section>

      <section className="ticker" aria-label="Areas of interest"><div className="ticker-track"><span>Frontend craft</span><i>✦</i><span>Full-stack thinking</span><i>✦</i><span>Useful software</span><i>✦</i><span>AI-assisted workflows</span><i>✦</i><span>Frontend craft</span><i>✦</i><span>Full-stack thinking</span><i>✦</i><span>Useful software</span><i>✦</i><span>AI-assisted workflows</span></div></section>

      <section id="work" className="section shell work-section"><div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" /> Featured project</p><span className="section-index">01 / 03</span></div><div className="work-intro"><h2>Made with intent.<br /><span>Built to matter.</span></h2><p>A living portfolio for thoughtful interfaces, full-stack experiments, and the work still taking shape.</p></div><article className="project-card"><div className="project-card-main"><div className="project-card-top"><span className="project-number">PROJECT 001 / 2026</span><span className="project-status"><span className="status-dot" /> Live build</span></div><h3>Cisse&apos;s<br /><em>portfolio.</em></h3><p>A responsive personal platform designed to turn a developer&apos;s work into a clear, memorable story — with room to grow into an AI-assisted publishing system.</p><div className="project-tags"><span>Next.js</span><span>TypeScript</span><span>App Router</span><span>Responsive UI</span></div></div><div className="project-card-side"><Link className="circle-link" href="/projects/cisse-portfolio" aria-label="View the Cisse portfolio case study"><ArrowUpRight /></Link><span>Strategy · Design<br />Engineering</span></div></article><div className="work-footer"><span>More case studies are in progress</span><Link className="text-link" href="/projects">View project archive <span>↗</span></Link></div></section>

      <section id="about" className="section shell about-section"><div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" /> What I bring</p><span className="section-index">02 / 03</span></div><div className="about-grid"><h2>Less noise.<br /><span>More signal.</span></h2><div><p className="large-copy">I care about the space between an idea and the person using it. That means clean interfaces, resilient systems, and enough curiosity to keep asking better questions.</p><p className="muted-copy">My sweet spot is the intersection of frontend craft, full-stack thinking, and products that make people&apos;s work feel lighter.</p></div></div><div className="skills-grid">{skillGroups.map((group) => <div className="skill-group" key={group.number}><span className="skill-number">{group.number}</span><h3>{group.label}</h3><div className="skill-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></section>

      <section className="section shell process-section"><div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" /> How I work</p><span className="section-index">03 / 03</span></div><div className="process-intro"><h2>Good work has<br /><span>a rhythm.</span></h2><p>I bring structure to the messy middle between a first idea and a finished product.</p></div><div className="process-grid">{processSteps.map((step) => <article className="process-step" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></section>

      <section id="contact" className="contact-section"><div className="shell contact-inner"><div><p className="eyebrow"><span className="eyebrow-line" /> Have an idea?</p><h2>Let&apos;s make it<br /><span>real.</span></h2><p className="contact-note">Tell me what you&apos;re building, what feels stuck, or what you want to explore next.</p></div><a className="button button-light" href="mailto:jamiualiyuolanrewaju@gmail.com">Start a conversation <ArrowUpRight /></a></div></section>
      <footer className="site-footer shell"><span>© 2026 Jamiu Aliyu Adekunle</span><div><a href="https://github.com/cisseally99" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/aliyu-jamiu-1231a4297" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:jamiualiyuolanrewaju@gmail.com">Email ↗</a></div></footer>
    </main>
  );
}

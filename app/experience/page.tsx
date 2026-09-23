import PageHeader from "@/components/PageHeader";
import PageIntro from "@/components/PageIntro";
import { experience } from "@/data/portfolio";

export default function ExperiencePage() { return <><PageHeader /><main><PageIntro eyebrow="Experience" title="Growing through the work." description="A simple timeline that will expand as new roles, collaborations, and milestones become part of the journey." /><section className="timeline-section shell">{experience.map((item) => <article className="timeline-item" key={`${item.role}-${item.company}`}><span className="project-number">{item.period}</span><div><h2>{item.role}</h2><h3>{item.company}</h3><p>{item.description}</p></div></article>)}</section></main></>; }

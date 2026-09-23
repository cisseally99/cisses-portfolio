import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageIntro from "@/components/PageIntro";
import { projects } from "@/data/portfolio";

export default function ProjectsPage() {
  return <><PageHeader /><main><PageIntro eyebrow="Selected work" title="Projects that solve real problems." description="A growing collection of interfaces, systems, and experiments built with curiosity and care." /><section className="listing-section shell">{projects.map((project) => <article className="listing-card" key={project.slug}><div><span className="project-number">{project.year} / {project.status}</span><h2>{project.title}</h2><p>{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><Link className="circle-link" href={`/projects/${project.slug}`} aria-label={`View ${project.title}`}><span>↗</span></Link></article>)}</section></main></>;
}

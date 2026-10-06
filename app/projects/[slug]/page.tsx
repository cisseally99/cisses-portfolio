import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { projects } from "@/data/portfolio";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <><PageHeader /><main className="detail-page shell"><Link className="back-link" href="/projects">← All projects</Link><header className="detail-hero"><p className="eyebrow"><span className="eyebrow-line" /> {project.year} · {project.status}</p><h1>{project.title}</h1><p className="detail-lead">{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="detail-actions"><a className="button button-primary" href={project.github} target="_blank" rel="noreferrer">View on GitHub ↗</a><span className="detail-role">{project.role}</span></div></header><section className="case-study-grid"><div className="case-study-intro"><p className="eyebrow"><span className="eyebrow-line" /> The brief</p><h2>{project.overview}</h2></div><div className="case-study-copy"><div><span className="case-label">The problem</span><p>{project.problem}</p></div><div><span className="case-label">The approach</span><p>{project.solution}</p></div></div></section><section className="case-highlights"><div><p className="eyebrow"><span className="eyebrow-line" /> What I shipped</p><h2>Small details.<br /><span>Clear intent.</span></h2></div><ul>{project.highlights.map((highlight) => <li key={highlight}><span>✦</span>{highlight}</li>)}</ul></section><div className="detail-note"><span>Next step</span><p>This project will continue evolving into a structured platform for publishing work, writing, and the systems behind the build.</p></div></main></>;
}

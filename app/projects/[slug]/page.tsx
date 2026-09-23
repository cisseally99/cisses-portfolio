import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { projects } from "@/data/portfolio";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <><PageHeader /><main className="detail-page shell"><Link className="back-link" href="/projects">← All projects</Link><p className="eyebrow"><span className="eyebrow-line" /> {project.year} · {project.status}</p><h1>{project.title}</h1><p className="detail-lead">{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="button button-primary detail-button" href={project.github} target="_blank" rel="noreferrer">View on GitHub ↗</a><div className="detail-note"><span>Next step</span><p>This project will become the foundation for the portfolio&apos;s structured content and approval-first AI publishing system.</p></div></main></>;
}

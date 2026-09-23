import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { articles } from "@/data/portfolio";

export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  return <><PageHeader /><article className="article-page shell"><Link className="back-link" href="/writing">← All writing</Link><span className="project-number">{article.date}</span><h1>{article.title}</h1><p className="detail-lead">{article.excerpt}</p><div className="article-body"><h2>The idea</h2><p>This space is ready for a long-form article. As the portfolio grows, articles will live in structured content and can later move through the same draft, review, and publishing workflow as projects.</p><h2>Why it matters</h2><p>Writing creates a durable record of the decisions, trade-offs, and lessons behind the work—not just the finished interface.</p></div></article></>;
}

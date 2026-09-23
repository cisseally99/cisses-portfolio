import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageIntro from "@/components/PageIntro";
import { articles } from "@/data/portfolio";

export default function WritingPage() { return <><PageHeader /><main><PageIntro eyebrow="Writing" title="Notes from the build." description="Writing about frontend craft, full-stack development, and the systems behind a thoughtful portfolio." /><section className="listing-section shell">{articles.map((article) => <article className="article-row" key={article.slug}><div><span className="project-number">{article.date}</span><h2>{article.title}</h2><p>{article.excerpt}</p></div><Link className="text-link" href={`/writing/${article.slug}`}>Read article ↗</Link></article>)}</section></main></>; }

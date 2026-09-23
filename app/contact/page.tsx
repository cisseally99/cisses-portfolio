import PageHeader from "@/components/PageHeader";
import PageIntro from "@/components/PageIntro";
import { profile } from "@/data/portfolio";

export default function ContactPage() { return <><PageHeader /><main><PageIntro eyebrow="Contact" title="Let&apos;s make something real." description="Have an idea, an opportunity, or a problem worth solving? I&apos;d be glad to hear from you." /><section className="contact-links-section shell"><a href={`mailto:${profile.email}`}><span>Email</span>{profile.email} ↗</a><a href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span>github.com/cisseally99 ↗</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span>aliyu-jamiu-1231a4297 ↗</a></section></main></>; }

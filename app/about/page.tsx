import PageHeader from "@/components/PageHeader";
import PageIntro from "@/components/PageIntro";
import { profile, skills } from "@/data/portfolio";

export default function AboutPage() { return <><PageHeader /><main><PageIntro eyebrow="About" title="Less noise. More signal." description={profile.summary} /><section className="content-section shell"><p className="large-copy">I care about the space between an idea and the person using it. That means clean interfaces, resilient systems, and enough curiosity to keep asking better questions.</p><p className="muted-copy">{profile.now}</p><div className="skills-grid page-skills">{Object.entries(skills).map(([group, items]) => <div className="skill-group" key={group}><span className="skill-number">{group}</span><div className="skill-list">{items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></section></main></>; }

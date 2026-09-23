type PageIntroProps = { eyebrow: string; title: string; description: string };

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return <header className="inner-page-intro shell"><p className="eyebrow"><span className="eyebrow-line" /> {eyebrow}</p><h1>{title}</h1><p>{description}</p></header>;
}

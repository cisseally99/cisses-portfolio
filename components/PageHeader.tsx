import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import MoreMenu from "@/components/MoreMenu";

export default function PageHeader() {
  return (
    <nav className="site-nav shell" aria-label="Main navigation">
      <Link className="wordmark" href="/" aria-label="Cisse home"><svg className="brand-symbol" viewBox="0 0 64 64" aria-hidden="true"><path d="M46 18.5C42 14.4 36.5 12 30.3 12 19.8 12 11.5 20.5 11.5 32s8.3 20 18.8 20c6.2 0 11.7-2.4 15.7-6.5" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/><path d="M43.5 21.5 37 28" fill="none" stroke="var(--blue)" strokeWidth="5" strokeLinecap="round"/><circle cx="47" cy="17.5" r="4" fill="var(--orange)"/></svg><span className="wordmark-label">CISSE<span>.</span></span></Link>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <MoreMenu />
      </div>
      <div className="nav-actions"><span className="nav-availability"><span className="status-dot" /> Available for work</span><ThemeToggle /></div>
    </nav>
  );
}

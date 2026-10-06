import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import MoreMenu from "@/components/MoreMenu";

export default function PageHeader() {
  return (
    <nav className="site-nav shell" aria-label="Main navigation">
      <Link className="wordmark" href="/" aria-label="Cisse home"><span className="brand-symbol" aria-hidden="true">C</span><span className="wordmark-label">CISSE<span>.</span></span></Link>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <MoreMenu />
      </div>
      <div className="nav-actions"><span className="nav-availability"><span className="status-dot" /> Available for work</span><ThemeToggle /></div>
    </nav>
  );
}

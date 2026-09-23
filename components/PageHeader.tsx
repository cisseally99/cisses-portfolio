import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import MoreMenu from "@/components/MoreMenu";

export default function PageHeader() {
  return (
    <nav className="site-nav shell" aria-label="Main navigation">
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <MoreMenu />
      </div>
      <div className="nav-actions"><ThemeToggle /></div>
    </nav>
  );
}

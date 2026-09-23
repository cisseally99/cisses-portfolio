"use client";

import Link from "next/link";
import { useState } from "react";

export default function MoreMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return <div className="more-menu"><button className="more-menu-trigger" type="button" aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>More pages <span aria-hidden="true">⌄</span></button>{isOpen && <div className="more-menu-panel"><Link href="/writing" onClick={() => setIsOpen(false)}>Writing</Link><Link href="/about" onClick={() => setIsOpen(false)}>About</Link><Link href="/experience" onClick={() => setIsOpen(false)}>Experience</Link><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></div>}</div>;
}

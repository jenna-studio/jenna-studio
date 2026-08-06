"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  ["About", "/about/"],
  ["Projects", "/projects/"],
  ["Portfolios", "/portfolios/"],
  ["Contact", "/contact/"],
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" onClick={() => setMenuOpen(false)} aria-label="Jenna Studio home">
        Jenna Studio<span>®</span>
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span>{menuOpen ? "Close" : "Menu"}</span>
        <i aria-hidden="true" />
      </button>
      <nav id="site-navigation" className={menuOpen ? "nav-open" : ""} aria-label="Main navigation">
        {navigation.map(([label, href]) => (
          <Link href={href} onClick={() => setMenuOpen(false)} key={href}>{label}</Link>
        ))}
      </nav>
    </header>
  );
}

import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <Link className="wordmark" href="/">Jenna Studio<span>®</span></Link>
      <p>© 2026 Jenna Studio</p>
      <div>
        <a href="https://linkedin.com/in/jinseon-yoo" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/jenna-studio" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </footer>
  );
}

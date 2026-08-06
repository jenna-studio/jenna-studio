"use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "Agent Track",
    type: "AI operations platform",
    description:
      "A live, legible command center for teams building with AI agents — from task state to code changes and performance signals.",
    tags: ["TypeScript", "React", "MCP"],
    link: "https://github.com/yoojinseon/agent-track-dashboard",
    tone: "coral",
  },
  {
    number: "02",
    title: "CS UniVerse",
    type: "Learning workspace",
    description:
      "One focused place for computer-science students to code, plan, study, and keep their momentum together.",
    tags: ["Next.js", "Product design", "Systems"],
    link: "https://csuniverse.org",
    tone: "blue",
  },
  {
    number: "03",
    title: "Connect Mate",
    type: "Social discovery app",
    description:
      "A Korean social platform that makes finding the right people for everyday activities feel simple and safe.",
    tags: ["Android", "Kakao Maps", "Community"],
    link: "https://github.com/yoojinseon/ConnectMate",
    tone: "lime",
  },
];

const capabilities = [
  ["01", "Product thinking", "Turning a fuzzy opportunity into a product people can actually use."],
  ["02", "Digital experiences", "Designing interfaces with personality, clarity, and a sense of place."],
  ["03", "Creative technology", "Using code as a material for thoughtful tools, visual systems, and prototypes."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Jenna Studio home">
          JENNA<span>®</span>
        </a>
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
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">Independent designer &amp; developer · Seoul / everywhere</p>
        <div className="hero-grid">
          <h1>Digital ideas<br /><em>with a pulse.</em></h1>
          <div className="hero-note">
            <p>I make expressive, useful digital products where people, technology, and a little wonder meet.</p>
            <a className="text-link" href="#work">See selected work <b>↘</b></a>
          </div>
        </div>
        <div className="orbital-art" aria-hidden="true">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="star star-one">✦</span>
          <span className="star star-two">✳</span>
          <span className="orb-center">J</span>
          <span className="orbit-label">CURIOUS<br />BY DESIGN</span>
        </div>
      </section>

      <section className="statement" id="about">
        <p className="section-kicker">A small studio with a wide view</p>
        <div>
          <h2>Thoughtful systems<br />for the way <em>we live now.</em></h2>
          <p>I’m Jenna — a developer and digital artist drawn to work that is both clear and alive. My practice moves between product design, creative code, and the small interactions that make technology feel more human.</p>
        </div>
      </section>

      <section className="capabilities" aria-label="Capabilities">
        {capabilities.map(([number, title, description]) => (
          <article key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </section>

      <section className="work" id="work">
        <div className="section-heading">
          <p className="section-kicker">Selected work</p>
          <h2>Built to be<br /><em>felt &amp; used.</em></h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <a className={`project project-${project.tone}`} href={project.link} target="_blank" rel="noreferrer" key={project.title}>
              <div className="project-meta"><span>{project.number}</span><span>{project.type}</span></div>
              <div className="project-visual" aria-hidden="true">
                <span className="project-mark">{project.number}</span>
                <span className="project-shape" />
              </div>
              <div className="project-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              </div>
              <span className="project-arrow" aria-label={`Open ${project.title}`}>↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="process">
        <p className="section-kicker">How I work</p>
        <div className="process-content">
          <h2>Start with the<br />right <em>question.</em></h2>
          <ol>
            <li><span>01</span><div><h3>Find the signal</h3><p>Listen closely, understand the context, and identify what matters.</p></div></li>
            <li><span>02</span><div><h3>Make it tangible</h3><p>Prototype ideas early so the conversation has something real to orbit.</p></div></li>
            <li><span>03</span><div><h3>Refine the feeling</h3><p>Build with care until the experience feels as good as it works.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-kicker">Have a good idea?</p>
        <h2>Let’s give it<br /><em>some gravity.</em></h2>
        <a className="contact-button" href="mailto:hello@jenna-studio.dev">Start a conversation <span>↗</span></a>
      </section>

      <footer>
        <a className="wordmark" href="#top">JENNA<span>®</span></a>
        <p>© 2026 Jenna Studio</p>
        <div><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/yoojinseon" target="_blank" rel="noreferrer">GitHub</a></div>
      </footer>
    </main>
  );
}

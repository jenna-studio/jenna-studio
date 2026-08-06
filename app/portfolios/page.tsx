import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { travelPosts } from "../content";
import { PortfolioCatalog } from "./PortfolioCatalog";

export const metadata: Metadata = {
  title: "Portfolios — Jenna Studio",
  description: "Research, music, AI tools, 3D work, design, Apple Shortcuts, and travel journals by Jenna Studio.",
};

export default function PortfoliosPage() {
  return (
    <main className="interior-main">
      <SiteHeader />
      <section className="page-hero page-hero-portfolios">
        <p className="section-kicker">Portfolios</p>
        <h1>Creative <em>Work.</em></h1>
        <p>A visual journey through my creative work and design evolution</p>
      </section>

      <div className="content-shell">
        <section className="content-section research-feature">
          <div><span>Featured</span><p>Research · HFES International Symposium 2026</p></div>
          <h2>RAG-Enhanced LLM System with Decision Tree for Medical Device Usability Engineering Process</h2>
          <p className="research-authors">Junhee Choi, Jinseon Yoo, Saram Lee, Jung Chan Lee</p>
          <p>An AI-assisted system that pairs a 37-point decision tree with RAG-enhanced document generation (Gemini Flash and Claude Opus) to guide small and medium medical device manufacturers through the IEC 62366-1/-2 usability engineering process. Applied to four South Korean medical device companies, the framework generates usability engineering documentation while keeping human oversight at every step.</p>
          <p className="muted">Poster Session 1 · Medical and Drug Delivery Devices · Rhinelander Gallery</p>
          <ul><li>Research</li><li>LLM</li><li>RAG</li><li>IEC 62366</li><li>Medical Devices</li></ul>
          <details className="research-details">
            <summary>View Details ↗</summary>
            <div>
              <p>An AI-assisted system that helps small and medium medical device manufacturers implement the IEC 62366-1/-2 usability engineering process. A decision tree with 37 decision points guides manufacturers through regulatory requirements, while RAG-enhanced document generation (Gemini Flash and Claude Opus) drafts usability engineering documentation with human oversight. The framework was applied to four South Korean medical device companies. Co-authored with Junhee Choi, Saram Lee, and Jung Chan Lee; presented as a poster at the HFES International Symposium 2026 (Poster Session 1, Medical and Drug Delivery Devices).</p>
              <iframe src="https://hfeshcs2026.conference-program.com/presentation/?id=POST270&sess=sess106" title="HFES International Symposium 2026 — Poster POST270" loading="lazy" />
            </div>
          </details>
          <div className="button-row"><a href="https://hfeshcs2026.conference-program.com/presentation/?id=POST270&sess=sess106" target="_blank" rel="noreferrer">Conference Page ↗</a></div>
        </section>

        <section className="content-section">
          <div className="content-heading"><p className="section-kicker">Full collection</p><h2>Portfolio</h2></div>
          <PortfolioCatalog />
        </section>

        <section className="content-section travel-journal">
          <div className="content-heading"><p className="section-kicker">Field notes</p><h2>Travel Journal</h2></div>
          <p className="section-intro">Field notes from my travels — <a href="https://seonyisland.tistory.com" target="_blank" rel="noreferrer">read all on Tistory ↗</a></p>
          <div className="travel-scroll">
            {travelPosts.map((post) => (
              <a href={post.url} target="_blank" rel="noreferrer" className="travel-card" key={post.url}>
                <img src={post.image} alt="" aria-hidden="true" />
                <div><time>{post.date}</time><h3>{post.title}</h3><p>{post.excerpt}</p><span>Read on Tistory ↗</span></div>
              </a>
            ))}
          </div>
        </section>

        <section className="content-section portfolio-stats">
          <div className="content-heading"><p className="section-kicker">At a glance</p><h2>Portfolio Highlights</h2></div>
          <div className="metric-row"><div><strong>30+</strong><span>Design Projects</span></div><div><strong>4+</strong><span>Years Experience</span></div><div><strong>5+</strong><span>Work Experience</span></div></div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}

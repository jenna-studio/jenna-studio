import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { featuredGlue } from "../content";
import { ContributionActivity } from "./ContributionActivity";
import { ProjectsCatalog } from "./ProjectsCatalog";

export const metadata: Metadata = {
  title: "Projects — Jenna Studio",
  description: "Web applications, mobile apps, tools, and creative experiments by Jenna Studio.",
  alternates: { canonical: "/projects/" },
};

export default function ProjectsPage() {
  return (
    <main className="interior-main">
      <SiteHeader />
      <section className="page-hero page-hero-projects">
        <p className="section-kicker">Projects</p>
        <h1>My <em>Projects.</em></h1>
        <p>A collection of my latest work and creative experiments</p>
      </section>

      <div className="content-shell">
        <section className="content-section featured-project-card">
          <div className="featured-project-image"><img src="/media/glue-featured.png" alt="GLUE medical-device human factors documentation workspace" /><span>Featured · New</span></div>
          <div className="featured-project-copy">
            <p className="section-kicker">Featured Project</p>
            <h2>{featuredGlue.title}</h2>
            <h3>{featuredGlue.subtitle}</h3>
            <p>{featuredGlue.description}</p>
            <ul>{featuredGlue.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            <div className="button-row"><a href="https://glue-snuh.web.app" target="_blank" rel="noreferrer">Visit Site ↗︎</a><a href="https://glue-snuh.web.app/signup.html" target="_blank" rel="noreferrer">Start for Free ↗︎</a></div>
          </div>
        </section>

        <section className="content-section">
          <div className="content-heading"><p className="section-kicker">All work</p><h2>All Projects</h2></div>
          <ProjectsCatalog />
        </section>

        <ContributionActivity />
      </div>
      <SiteFooter />
    </main>
  );
}

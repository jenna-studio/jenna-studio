import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { Hero } from "./components/Hero";
import { AboutAvatar } from "./components/AboutAvatar";

const featuredProjects = [
  {
    number: "01", title: "GLUE", type: "Medical-device workflow",
    description: "An AI-assisted workspace for medical-device usability engineering that connects project context, safety evidence, evaluation records, and documentation through an IEC 62366-1 workflow.",
    tags: ["Medical Devices", "IEC 62366-1", "Human Factors"], image: "/media/glue-main-thumbnail.png",
    links: [["Visit Site", "https://glue-snuh.web.app"], ["Start for Free", "https://glue-snuh.web.app/signup.html"]], tone: "lime",
  },
  {
    number: "02", title: "CS UniVerse", type: "Learning workspace",
    description: "An all-in-one workspace for computer science students to code, study, and collaborate. Features include code editor, browser-based terminal, calendar integration, assignment tracking, and Baekjoon competitive programming integration.",
    tags: ["Next.js", "Task Management"], image: "/media/csuniverse-thumbnail.png",
    links: [["Visit Site", "https://csuniverse.org"], ["Learn More", "https://csuniverse.org"]], tone: "blue",
  },
  {
    number: "03", title: "Agent Track Dashboard", type: "AI agent operations",
    description: "A comprehensive kanban-based monitoring system for AI agents. Features real-time activity tracking, code change visibility, task lifecycle management, and agent performance insights including token usage and completion metrics.",
    tags: ["TypeScript", "React", "MCP"], image: "/media/agent-track-dashboard-thumbnail.png",
    links: [["View Docs", "https://github.com/jenna-studio/agent-track-dashboard#readme"], ["View Code", "https://github.com/jenna-studio/agent-track-dashboard"]], tone: "coral",
  },
];

const portfolioHighlights = [
  { title: "Web Design", description: "Modern, responsive websites crafted with clean aesthetics and intuitive user experiences that engage audiences. Blending creativity with functionality to create digital spaces that drive meaningful interactions.", image: "/og.png", href: "/portfolios/", tone: "peach" },
  { title: "AI Music Generation", description: "Independent artist transforming personal growth into emotional pop, indie, and cinematic soundscapes that capture the journey from uncertainty to freedom through warm melodies and reflective intensity.", image: "/media/jenna-studio-square.jpeg", href: "/portfolios/#ai-music", tone: "violet" },
  { title: "Apple Shortcuts", description: "Diverse and practical Apple Shortcuts that streamline daily tasks, enhancing productivity and efficiency, making technology work seamlessly for everyday life. Automated workflows designed to simplify routines.", image: "/media/shortcuts-thumbnail.png", href: "/portfolios/#apple-shortcuts", tone: "mint" },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <Hero />

      <section className="statement" id="about">
        <p className="section-kicker">About Me</p>
        <div className="statement-main">
          <h2>Developer &amp;<br /><em>digital artist.</em></h2>
          <div className="statement-body">
            <AboutAvatar />
            <div className="home-about-copy">
              <p><b>Developer</b><br />Hi! I&apos;m Jenna, a passionate developer who thrives on transforming complex problems into elegant, user-centered solutions. I approach every project with curiosity and precision, combining modern development practices with creative problem-solving to build applications that not only work flawlessly but also delight users at every interaction.</p>
              <p><b>Digital Artist</b><br />As a digital artist, I specialize in crafting immersive visual experiences that tell compelling stories. From UI design and interactive prototypes to 3D modelings, I merge artistic vision with technical expertise to create content that captivates audiences and enhances user engagement.</p>
              <div className="button-row"><a href="/about/">View More ↗︎</a><a href="https://linkedin.com/in/jinseon-yoo" target="_blank" rel="noreferrer">LinkedIn ↗︎</a></div>
            </div>
          </div>
        </div>
      </section>


      <section className="work" id="projects">
        <div className="section-heading"><p className="section-kicker">Featured Projects</p><h2>Built to be<br /><em>felt &amp; used.</em></h2></div>
        <div className="project-list">
          {featuredProjects.map((project) => (
            <article className={`project project-${project.tone}`} key={project.title}>
              <div className="project-meta"><span>{project.number}</span><span>{project.type}</span></div>
              <div className="project-visual"><img src={project.image} alt={`${project.title} screenshot`} /></div>
              <div className="project-copy"><h3>{project.title}</h3><p>{project.description}</p><ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul><div className="project-links">{project.links.map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={label}>{label} ↗︎</a>)}</div></div>
              <span className="project-arrow" aria-hidden="true">↗︎</span>
            </article>
          ))}
        </div>
        <div className="section-end-link"><a href="/projects/">View All Projects ↗︎</a></div>
      </section>

      <span className="legacy-anchor" id="portfolio" aria-hidden="true" />
      <section className="portfolios" id="portfolios">
        <div className="portfolio-heading"><p className="section-kicker">Portfolio Highlights</p><h2>Creative work,<br /><em>many forms.</em></h2></div>
        <div className="portfolio-grid">
          {portfolioHighlights.map((portfolio) => (
            <a className={`portfolio-card portfolio-${portfolio.tone}`} href={portfolio.href} key={portfolio.title}>
              <div className="portfolio-art"><img src={portfolio.image} alt="" aria-hidden="true" /></div>
              <div className="portfolio-copy"><h3>{portfolio.title}</h3><p>{portfolio.description}</p><b>View Details ↗︎</b></div>
            </a>
          ))}
        </div>
        <div className="section-end-link"><span>to explore</span><a href="/portfolios/">View Full Portfolio ↗︎</a></div>
      </section>

      <section className="contact" id="contact">
        <p className="section-kicker">Let&apos;s Work Together</p>
        <h2>Bring your vision<br /><em>to life.</em></h2>
        <p className="contact-description">Ready to bring your vision to life? I&apos;d love to hear about your project and discuss how we can create something amazing together.</p>
        <div className="contact-options">
          <a href="mailto:jenna@jenna-studio.dev"><img src="/media/email-pixel.png" alt="" /><span><b>Email</b>Message directly</span></a>
          <a href="https://www.linkedin.com/in/jinseon-yoo" target="_blank" rel="noreferrer"><img src="/media/linkedin-pixel.png" alt="" /><span><b>LinkedIn</b>Connect professionally</span></a>
          <a href="https://github.com/jenna-studio" target="_blank" rel="noreferrer"><img src="/media/github-pixel.png" alt="" /><span><b>GitHub</b>View my code</span></a>
        </div>
        <div className="button-row"><a href="/contact/">Get In Touch ↗︎</a><a href="https://linkedin.com/in/jinseon-yoo" target="_blank" rel="noreferrer">LinkedIn ↗︎</a><a href="https://github.com/jenna-studio" target="_blank" rel="noreferrer">GitHub ↗︎</a></div>
      </section>
      <SiteFooter />
    </main>
  );
}

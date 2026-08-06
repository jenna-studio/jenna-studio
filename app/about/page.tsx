import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { education, experience, journey, skillGroups, stories, values } from "../content";

export const metadata: Metadata = {
  title: "About Jenna — Jenna Studio",
  description: "Education, experience, story, skills, values, and journey of Jenna Studio.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <main className="interior-main">
      <SiteHeader />
      <section className="page-hero page-hero-about">
        <p className="section-kicker">About</p>
        <h1>About <em>Me.</em></h1>
        <p>Get to know me better!</p>
      </section>

      <div className="content-shell">
        <section className="profile-intro content-section">
          <div className="profile-photo-wrap"><img src="/media/profile-closeup.PNG" alt="Jenna" /></div>
          <div className="profile-intro-copy">
            <p className="section-kicker">Hello, I&apos;m Jenna! 👋</p>
            <h2>Technical excellence meets <em>creative innovation.</em></h2>
            <p className="lead">A dedicated Software Engineering student at Kookmin University, passionate about bridging the gap between technical excellence and creative innovation. I&apos;m currently pursuing my Bachelor&apos;s degree while building a strong foundation in development and other areas.</p>
            <div className="metric-row">
              <div><strong>2+</strong><span>Years Experience</span></div>
              <div><strong>10+</strong><span>Projects Completed</span></div>
              <div><strong>15+</strong><span>Skills Acquired</span></div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="content-heading"><p className="section-kicker">Background</p><h2>Education</h2></div>
          <div className="record-list">
            {education.map((item) => (
              <article className="record" key={`${item.school}-${item.period}`}>
                <img src={item.logo} alt="" aria-hidden="true" />
                <div><h3>{item.school}</h3><p>{item.program}</p></div>
                <span>{item.period}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="content-heading"><p className="section-kicker">In practice</p><h2>Experience</h2></div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-card" key={`${item.company}-${item.period}`}>
                <div className="experience-logo"><img src={item.logo} alt="" aria-hidden="true" /></div>
                <div className="experience-body">
                  <div className="experience-top"><div><h3>{item.role}</h3><p>{item.company}</p></div><span>{item.period}</span></div>
                  <p className="muted">{item.location}</p>
                  <ul>
                    {item.bullets.map((bullet, index) => (
                      <li key={bullet}>{item.link && index === 1 ? <a href={item.link} target="_blank" rel="noreferrer">{bullet} ↗</a> : bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="content-heading"><p className="section-kicker">The throughline</p><h2>My Story</h2></div>
          <div className="editorial-grid">
            {stories.map((story, index) => <article key={story.title}><span>0{index + 1}</span><h3>{story.title}</h3><p>{story.text}</p></article>)}
          </div>
        </section>

        <section className="content-section skills-block">
          <div className="content-heading"><p className="section-kicker">Toolkit</p><h2>Skills &amp; Expertise</h2></div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <span>{item.name}</span>
                      <span className="skill-level" aria-label={`${item.level} percent`}>
                        <i style={{ "--skill-level": `${item.level}%` } as CSSProperties} />
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="content-heading"><p className="section-kicker">Principles</p><h2>What Drives Me</h2></div>
          <div className="value-grid">
            {values.map((value) => <article key={value.title}><span>{value.icon}</span><h3>{value.title}</h3><p>{value.text}</p></article>)}
          </div>
        </section>

        <section className="content-section journey-section">
          <div className="content-heading"><p className="section-kicker">Milestones</p><h2>My Journey</h2></div>
          <ol className="journey-list">
            {journey.map((item) => <li key={item.date}><span>{item.date}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}
          </ol>
        </section>
      </div>

      <section className="page-cta">
        <p className="section-kicker">Let&apos;s create</p>
        <h2>Something amazing, <em>together.</em></h2>
        <p>I&apos;m always excited to work on new projects and collaborate with creative people. Whether you have a specific project in mind or just want to chat about something, I&apos;d love to hear from you!</p>
        <div className="button-row"><a href="/contact/">Get In Touch ↗</a><a href="https://linkedin.com/in/jinseon-yoo" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="/projects/">See My Work ↗</a></div>
      </section>
      <SiteFooter />
    </main>
  );
}

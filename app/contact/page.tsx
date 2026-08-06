import type { Metadata } from "next";
import { Suspense } from "react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { ContactForm, ContactSuccess } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — Jenna Studio",
  description: "Get in touch with Jenna for web development projects, collaborations, and creative opportunities.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <main className="interior-main">
      <SiteHeader />
      <section className="page-hero page-hero-contact">
        <p className="section-kicker">Contact</p>
        <h1>Let&apos;s work <em>together.</em></h1>
        <p>Ready to bring your ideas to life? I&apos;d love to hear from you!</p>
      </section>
      <div className="content-shell contact-page-shell">
        <section className="content-section contact-form-section">
          <div className="contact-form-heading">
            <p className="section-kicker">Send me a message</p>
            <h2>Tell me about<br /><em>your project.</em></h2>
            <div className="contact-direct">
              <a href="mailto:jenna@jenna-studio.dev">jenna@jenna-studio.dev ↗</a>
              <a href="https://linkedin.com/in/jinseon-yoo" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://github.com/jenna-studio" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>
          <div>
            <Suspense fallback={null}><ContactSuccess /></Suspense>
            <ContactForm />
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}

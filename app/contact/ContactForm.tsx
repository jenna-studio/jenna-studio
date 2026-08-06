"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export function ContactSuccess() {
  const searchParams = useSearchParams();
  const sent = searchParams.get("success") === "true";

  return sent ? <p className="form-success" role="status">Thank you — your message has been sent. I&apos;ll be in touch soon.</p> : null;
}

export function ContactForm() {
  const [sending, setSending] = useState(false);

  return (
    <form className="contact-form-grid" action="https://formspree.io/f/xzzaypnq" method="POST" onSubmit={() => setSending(true)}>
        <input type="hidden" name="_to" value="jenna@jenna-studio.dev" />
        <input type="hidden" name="_subject" value="New Contact Form Submission from Jenna Studio" />
        <input type="hidden" name="_replyto" value="jenna@jenna-studio.dev" />
        <input type="hidden" name="_next" value="https://jenna-studio.dev/contact/?success=true" />
        <div className="form-row">
          <label>First Name *<input type="text" name="firstName" autoComplete="given-name" required /></label>
          <label>Last Name *<input type="text" name="lastName" autoComplete="family-name" required /></label>
        </div>
        <label>Email Address *<input type="email" name="email" autoComplete="email" required /></label>
        <label>Company/Organization<input type="text" name="company" autoComplete="organization" /></label>
        <label>Project Type
          <select name="projectType" defaultValue="">
            <option value="">Select a project type</option><option value="website">Website Development</option><option value="redesign">Website Design</option><option value="webapp">Web Application</option><option value="AI">AI Chatbot</option><option value="automation">AI Automation</option><option value="other">Other</option>
          </select>
        </label>
        <label>Project Timeline
          <select name="timeline" defaultValue="">
            <option value="">Select timeline</option><option value="asap">ASAP</option><option value="1-2months">1-2 Months</option><option value="3-6months">3-6 Months</option><option value="6months+">6+ Months</option><option value="flexible">Flexible</option>
          </select>
        </label>
        <label>Tell Me About Your Project *<textarea name="message" rows={6} placeholder="Describe your project, goals, and any specific requirements..." required /></label>
        <button type="submit" disabled={sending}>{sending ? "Sending..." : "Send Message ↗"}</button>
    </form>
  );
}

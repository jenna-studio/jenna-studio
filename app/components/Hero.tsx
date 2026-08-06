"use client";

import Image from "next/image";
import Link from "next/link";
import type { PointerEvent } from "react";

export function Hero() {
  const updatePerspective = (event: PointerEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    event.currentTarget.style.setProperty("--hero-shift-x", `${(x * 18).toFixed(2)}px`);
    event.currentTarget.style.setProperty("--hero-shift-y", `${(y * 18).toFixed(2)}px`);
    event.currentTarget.style.setProperty("--hero-tilt-x", `${(y * -4).toFixed(2)}deg`);
    event.currentTarget.style.setProperty("--hero-tilt-y", `${(x * 5).toFixed(2)}deg`);
  };

  const resetPerspective = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--hero-shift-x", "0px");
    event.currentTarget.style.setProperty("--hero-shift-y", "0px");
    event.currentTarget.style.setProperty("--hero-tilt-x", "0deg");
    event.currentTarget.style.setProperty("--hero-tilt-y", "0deg");
  };

  return (
    <section
      className="hero hero-v2"
      id="top"
      onPointerMove={updatePerspective}
      onPointerLeave={resetPerspective}
    >
      <div className="hero-mesh" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <div className="hero-utility">
        <p className="eyebrow"><span aria-hidden="true" /> Creative Next-Gen Developer &amp; Digital Artist</p>
        <p className="hero-disciplines">Code <i>✦</i> Design <i>✦</i> Create</p>
      </div>

      <div className="hero-stage">
        <div className="hero-copy">
          <h1 aria-label="Welcome to Jenna Studio">
            <span className="hero-welcome">Welcome to</span>
            <span className="hero-title-line hero-title-jenna">Jenna</span>
            <span className="hero-title-line hero-title-studio"><em>Studio</em><i>.</i></span>
          </h1>

          <div className="hero-description">
            <p>Blending creativity and code to design meaningful, human-centered digital experiences. Let&apos;s build beautiful things together!</p>
            <div className="hero-actions">
              <Link className="hero-action hero-action-primary" href="/projects/">
                <span>View My Work</span><b aria-hidden="true">↗</b>
              </Link>
              <Link className="hero-action hero-action-secondary" href="/about/">
                <span>Meet Jenna</span><b aria-hidden="true">↗</b>
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-aura" />
          <span className="hero-orbit hero-orbit-one" />
          <span className="hero-orbit hero-orbit-two" />
          <span className="hero-orbit-dot hero-orbit-dot-one" />
          <span className="hero-orbit-dot hero-orbit-dot-two" />

          <div className="hero-bunny-stage">
            <span className="hero-bunny-shine" />
            <Image
              className="hero-bunny"
              src="/bunny-friend.svg"
              width={256}
              height={489}
              sizes="(max-width: 740px) 38vw, (max-width: 1100px) 27vw, 310px"
              priority
              alt=""
            />
            <span className="hero-bunny-shadow" />
          </div>

          <span className="hero-sticker hero-sticker-code">CODE / 01</span>
          <span className="hero-sticker hero-sticker-design">DESIGN / 02</span>
          <span className="hero-spark hero-spark-one">✦</span>
          <span className="hero-spark hero-spark-two">✳</span>
          <span className="hero-spark hero-spark-three">✦</span>
        </div>
      </div>

      <div className="hero-footerline">
        <p>Human-centered ideas, shaped through code.</p>
        <a href="#about" className="hero-scroll">
          <span>Scroll to explore</span><i aria-hidden="true" />
        </a>
      </div>

      <div className="hero-ticker" aria-hidden="true">
        <div className="hero-ticker-track">
          {Array.from({ length: 6 }, (_, index) => (
            <span key={index}>Creative technology&nbsp;&nbsp;✦&nbsp;&nbsp;Expressive interfaces&nbsp;&nbsp;✦&nbsp;&nbsp;Thoughtful systems&nbsp;&nbsp;✦&nbsp;&nbsp;</span>
          ))}
        </div>
      </div>
    </section>
  );
}

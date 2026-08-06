"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const revealSelector = [
  ".statement .section-kicker",
  ".statement h2",
  ".statement-body > *",
  ".section-heading > *",
  ".project",
  ".portfolio-heading > *",
  ".portfolio-card",
  ".contact > *",
  ".page-hero > *",
  ".content-heading > *",
  ".profile-intro > *",
  ".record",
  ".experience-card",
  ".editorial-grid > *",
  ".skill-grid > *",
  ".value-grid > *",
  ".journey-list > li",
  ".featured-project-card > *",
  ".catalog-card",
  ".contribution-card > *",
  ".contribution-panel",
  ".research-feature > *",
  ".portfolio-detail",
  ".travel-card",
  ".metric-row > div",
  ".contact-form-heading > *",
  ".contact-form-grid",
  ".page-cta > *",
].join(",");

export function SiteMotion() {
  const pathname = usePathname();
  const progressRef = useRef<HTMLSpanElement | null>(null);
  const glowRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    const siblingCounts = new Map<Element, number>();

    document.documentElement.classList.add("motion-enabled");

    elements.forEach((element) => {
      const parent = element.parentElement;
      const siblingIndex = parent ? siblingCounts.get(parent) ?? 0 : 0;
      if (parent) siblingCounts.set(parent, siblingIndex + 1);

      element.classList.add("motion-reveal");
      element.style.setProperty("--motion-delay", `${Math.min(siblingIndex * 70, 280)}ms`);
    });

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("motion-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.12) {
            entry.target.classList.add("motion-visible");
          } else if (!entry.isIntersecting) {
            entry.target.classList.remove("motion-visible");
          }
        });
      },
      { rootMargin: "0px 0px -7%", threshold: [0, 0.12] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      progressRef.current?.style.setProperty("transform", `scaleX(${Math.min(Math.max(progress, 0), 1)})`);
    };

    const queueProgressUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateProgress);
    };

    queueProgressUpdate();
    window.addEventListener("scroll", queueProgressUpdate, { passive: true });
    window.addEventListener("resize", queueProgressUpdate);

    return () => {
      window.removeEventListener("scroll", queueProgressUpdate);
      window.removeEventListener("resize", queueProgressUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  useEffect(() => {
    const supportsGlow = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const glow = glowRef.current;
    if (!supportsGlow || reducedMotion || !glow) return;

    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const paintGlow = () => {
      frame = 0;
      glow.style.transform = `translate3d(${pointerX}px,${pointerY}px,0) translate(-50%,-50%)`;
    };

    const moveGlow = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      glow.classList.add("cursor-glow-visible");
      const target = event.target instanceof Element ? event.target : null;
      glow.classList.toggle(
        "cursor-glow-over-action",
        Boolean(target?.closest("a,button,summary,input,select,textarea,model-viewer")),
      );
      if (!frame) frame = window.requestAnimationFrame(paintGlow);
    };

    const hideGlow = () => glow.classList.remove("cursor-glow-visible");

    window.addEventListener("pointermove", moveGlow, { passive: true });
    document.documentElement.addEventListener("mouseleave", hideGlow);
    window.addEventListener("blur", hideGlow);

    return () => {
      window.removeEventListener("pointermove", moveGlow);
      document.documentElement.removeEventListener("mouseleave", hideGlow);
      window.removeEventListener("blur", hideGlow);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="site-motion-layer" aria-hidden="true">
      <span className="scroll-progress" ref={progressRef} />
      <span className="cursor-glow" ref={glowRef} />
    </div>
  );
}

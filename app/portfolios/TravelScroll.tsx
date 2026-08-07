"use client";

import { useEffect, useRef } from "react";
import { travelPosts } from "../content";

export function TravelScroll() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let direction = 1;
    let paused = false;
    let visible = false;
    let frame = 0;
    let position = 0;

    track.style.scrollSnapType = "none";

    const step = () => {
      if (visible && !paused) {
        const max = track.scrollWidth - track.clientWidth;
        if (max > 0) {
          position = Math.min(Math.max(position + direction * 0.4, 0), max);
          track.scrollLeft = position;
          if (position >= max - 1) direction = -1;
          else if (position <= 1) direction = 1;
        }
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);

    const pause = () => { paused = true; };
    const resume = () => { paused = false; position = track.scrollLeft; };
    track.addEventListener("pointerenter", pause);
    track.addEventListener("pointerleave", resume);
    track.addEventListener("pointerdown", pause);
    track.addEventListener("focusin", pause);
    track.addEventListener("focusout", resume);

    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(track);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      track.removeEventListener("pointerenter", pause);
      track.removeEventListener("pointerleave", resume);
      track.removeEventListener("pointerdown", pause);
      track.removeEventListener("focusin", pause);
      track.removeEventListener("focusout", resume);
    };
  }, []);

  return (
    <div className="travel-scroll" ref={trackRef}>
      {travelPosts.map((post) => (
        <a href={post.url} target="_blank" rel="noreferrer" className="travel-card" key={post.url}>
          <img src={post.image} alt="" aria-hidden="true" />
          <div><time>{post.date}</time><h3>{post.title}</h3><p>{post.excerpt}</p><span>Read on Tistory ↗︎</span></div>
        </a>
      ))}
    </div>
  );
}

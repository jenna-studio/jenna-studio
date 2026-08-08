"use client";

import { createElement, useEffect, useRef, useState } from "react";

export function AboutAvatar() {
  const modelRef = useRef<HTMLElement | null>(null);
  const [viewerFailed, setViewerFailed] = useState(false);

  useEffect(() => {
    let active = true;
    const showFallback = () => setViewerFailed(true);
    const model = modelRef.current;

    model?.addEventListener("error", showFallback);

    void import("@google/model-viewer").catch(() => {
      if (active) setViewerFailed(true);
    });

    return () => {
      active = false;
      model?.removeEventListener("error", showFallback);
    };
  }, []);

  const model = createElement("model-viewer", {
    ref: modelRef,
    className: "about-avatar-model",
    src: "/models/3d-avatar.glb",
    alt: "Front-facing 3D avatar of Jenna",
    loading: "lazy",
    reveal: "auto",
    "camera-orbit": "0deg 90deg 105%",
    "camera-controls": true,
    "disable-zoom": true,
    "interaction-prompt": "none",
    "touch-action": "pan-y",
    "field-of-view": "28deg",
    orientation: "0deg 0deg 0deg",
    "shadow-intensity": "0",
    exposure: "1.05",
    "environment-image": "neutral",
    "tone-mapping": "commerce",
    tabIndex: 0,
  });

  return (
    <figure className="about-avatar">
      {model}
      {viewerFailed && <span className="about-avatar-fallback" role="img" aria-label="Jenna 3D avatar">J</span>}
    </figure>
  );
}

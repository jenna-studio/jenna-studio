"use client";

import { useEffect, useState } from "react";
import { shortcuts, travelMaps } from "../content";
import ThemeGallery from "./ThemeGallery";

type PortfolioEntry = {
  id: string;
  category: "3d" | "web-design" | "ui-ux" | "tools" | "creation";
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  cover: string;
};

const portfolioEntries: PortfolioEntry[] = [
  {
    id: "ai-music", category: "creation", title: "AI Music Generation", subtitle: "Artist name: Jenna Studio", cover: "/media/portfolio-thumbnails/jenna-studio-music-thumbnail.jpeg",
    description: "Made AI music and distributed it to YouTube Music, Apple Music, Spotify, etc via an artist name Jenna Studio. Jenna Studio is an independent artist that transforms personal growth and resilience into emotional pop, indie, and cinematic soundscapes, capturing the journey from uncertainty to freedom through warm melodies and reflective intensity. Each track is designed to grow with you: gentle yet unshakable, quietly powerful and deeply hopeful, soundtracking moments of healing, self-belief, and the courage to keep moving forward at your own pace.",
    tags: ["Music", "Suno AI", "Jenna Studio"],
  },
  {
    id: "travel-map", category: "creation", title: "Travel Maps Design", subtitle: "Create cruise travel maps", cover: "/media/travel-maps-thumbnail.JPG",
    description: "Create custom cruise journey maps for (주)삶은여행 that visually highlight routes, ports, and key experiences with clear, intuitive design. These maps help travelers easily understand their itinerary and feel the excitement of their voyage before departure.",
    tags: ["Travel", "Map", "Photoshop"],
  },
  {
    id: "chrome-theme", category: "ui-ux", title: "Chrome Theme Extension", subtitle: "Browser Extension", cover: "/media/pink-workspace-thumbnail.png",
    description: "Curated Chrome themes that blend pastel gradients and clean geometry for a calm, modern browsing experience. Lightweight and readability-tuned across tabs, the Omnibox, and system UI, with cohesive palettes for both light and dark modes.",
    tags: ["Chrome", "Theme", "UI/UX"],
  },
  {
    id: "humidifier", category: "3d", title: "Raindrop ASMR LED Humidifier", subtitle: "3D Modeling/Printing", cover: "/media/portfolio-thumbnails/asmr-humidifier-wide.png",
    description: "A custom-designed 3D printed humidifier featuring LED lighting and ASMR raindrop effects. Combines functionality with aesthetic appeal through innovative 3D modeling and printing techniques.",
    tags: ["3D Modeling", "3D Printing", "Product Design", "LED"],
  },
  {
    id: "hello-kitty-modeling", category: "3d", title: "Hello Kitty 3D Modeling", subtitle: "Modeling tutorial PDF", cover: "/media/portfolio-thumbnails/hello-kitty-thumbnail.png",
    description: "Made a Fusion Hello Kitty 3D modeling tutorial that walks through the entire process step by step, from sketching the basic forms to shaping the face, body, and signature ribbon. Written as an easy-to-follow PDF guideline so that even beginners new to Fusion can complete their own Hello Kitty model from start to finish.",
    tags: ["3D Modeling", "Guideline", "Tutorial", "PDF"],
  },
  {
    id: "floating-lyrics", category: "tools", title: "Floating Lyrics", subtitle: "Native macOS Overlay", cover: "/media/floating-lyrics-thumbnail.png",
    description: "A native macOS overlay that shows the lyrics of whatever you're playing, in sync, and gets out of the way. Apple Music, Spotify, and YouTube Music are polled once a second and the source actually playing wins. Synced LRC lyrics come from LRCLIB and are cached on disk, so the current line is highlighted and scrolled to as it plays. The panel floats above other windows, joins all Spaces, and switches between a compact one-line bar and a full scrolling lyric sheet, with font, weight, colors, and size all tunable from a live-preview settings window.",
    tags: ["Swift", "SwiftUI", "macOS", "LRCLIB"],
  },
  {
    id: "apple-shortcuts", category: "tools", title: "Apple Shortcuts", subtitle: "A collection of Apple's Shortcuts", cover: "/media/shortcuts-thumbnail.png",
    description: "A collection of useful automation shortcuts for iOS and MacOS.",
    tags: ["Apple", "iOS", "MacOS", "automation"],
  },
  {
    id: "english-tutor", category: "tools", title: "Your English Tutor", subtitle: "Custom ChatGPT", cover: "/media/portfolio-thumbnails/english-tutor-thumbnail-blue.png",
    description: "A custom ChatGPT-powered English tutor designed to help students improve their language skills through interactive conversations, grammar corrections, and personalized learning experiences. Features include real-time feedback, progress tracking, and adaptive difficulty levels.",
    tags: ["Education", "Language", "ChatGPT"],
  },
  {
    id: "personal-color-analysis-service", category: "tools", title: "Personal Color Analysis Service", subtitle: "Custom ChatGPT", cover: "/media/portfolio-thumbnails/personal-color-analysis-thumbnail.png",
    description: "A specialized ChatGPT service that provides personalized color analysis and styling recommendations. Helps users discover their ideal color palette, makeup suggestions, and fashion advice based on their unique features and preferences.",
    tags: ["Color Analysis", "Lifestyle", "ChatGPT", "AI"],
  },
];

const filters = [["all", "All Work"], ["3d", "3D Work"], ["web-design", "Web Design"], ["ui-ux", "UI/UX"], ["tools", "Tools"], ["creation", "Creation"]] as const;

function ZoomGallery({ images, galleryClass = "" }: { images: [string, string][]; galleryClass?: string }) {
  const [zoomed, setZoomed] = useState<[string, string] | null>(null);

  useEffect(() => {
    if (!zoomed) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setZoomed(null); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [zoomed]);

  return (
    <>
      <div className={`media-gallery zoom-gallery ${galleryClass}`}>
        {images.map(([src, alt]) => (
          <button type="button" onClick={() => setZoomed([src, alt])} aria-label={`View ${alt} larger`} key={src}>
            <img src={src} alt={alt} />
          </button>
        ))}
      </div>
      {zoomed && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={zoomed[1]} onClick={() => setZoomed(null)}>
          <img src={zoomed[0]} alt={zoomed[1]} />
        </div>
      )}
    </>
  );
}

function DetailContent({ id }: { id: string }) {
  if (id === "ai-music") return (
    <>
      <div className="embed-grid">
        <iframe data-testid="embed-iframe" className="spotify-embed" style={{ borderRadius: 12 }} src="https://open.spotify.com/embed/artist/10YbtQS5pUWj10uNEpFxZr?utm_source=generator&si=b5d8e04fa4904d61" width="100%" height={500} title="Jenna Studio on Spotify" loading="lazy" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />      </div>
      <div className="card-actions"><a href="https://open.spotify.com/artist/10YbtQS5pUWj10uNEpFxZr?si=lJ884oKJQqGfgroLVfpXeA" target="_blank" rel="noreferrer">Spotify ↗︎</a><a href="https://music.apple.com/kr/artist/jenna-studio/1871000252" target="_blank" rel="noreferrer">Apple Music ↗︎</a><a href="https://www.youtube.com/channel/UCNYh9DsdcEyJn5DeBrXoZUw" target="_blank" rel="noreferrer">YouTube Music ↗︎</a></div>
    </>
  );
  if (id === "english-tutor") return <div className="card-actions"><a href="https://chatgpt.com/g/g-L4mUqZGvo-your-english-tutor" target="_blank" rel="noreferrer">Try This Tool ↗︎</a></div>;
  if (id === "personal-color-analysis-service") return <div className="card-actions"><a href="https://chatgpt.com/g/g-dMlQgetqz-personal-color-analysis-service" target="_blank" rel="noreferrer">Try This Service ↗︎</a></div>;
  if (id === "travel-map") return <ZoomGallery galleryClass="travel-gallery" images={travelMaps.map(([file, alt]) => [`/media/travel-maps/${file}`, alt])} />;
  if (id === "chrome-theme") return (
    <><ThemeGallery /><div className="card-actions"><a href="https://chromewebstore.google.com/detail/kaedikmphlfjdjhodnigpmacidjkjlbl?utm_source=item-share-cb" target="_blank" rel="noreferrer">Install Pink Workspace ↗︎</a><a href="https://github.com/jenna-studio/chrome-theme-extension" target="_blank" rel="noreferrer">View Code ↗︎</a></div></>
  );
  if (id === "humidifier") return <ZoomGallery galleryClass="media-gallery-two" images={[["/media/portfolio-thumbnails/asmr-humidifier-thumbnail.png", "ASMR Humidifier"], ["/media/portfolio-thumbnails/asmr-humidifier-panel.png", "ASMR Humidifier panel"]]} />;
  if (id === "hello-kitty-modeling") return <div className="card-actions"><a href="/files/fusion-hello-kitty-modeling-guideline.pdf" target="_blank" rel="noreferrer">Download PDF ↗︎</a></div>;
  if (id === "floating-lyrics") return (
    <>
      <ZoomGallery images={[["/media/portfolio-thumbnails/floating-lyrics-mini-full-player.png", "Floating Lyrics full overlay"], ["/media/portfolio-thumbnails/floating-lyrics-one-line-player.png", "Floating Lyrics compact bar"], ["/media/portfolio-thumbnails/floating-lyrics-settings.png", "Floating Lyrics settings window"]]} />
      <div className="card-actions"><a href="https://github.com/jenna-studio/floating-lyrics#build" target="_blank" rel="noreferrer">How to Build ↗︎</a><a href="https://github.com/jenna-studio/floating-lyrics" target="_blank" rel="noreferrer">View Code ↗︎</a></div>
    </>
  );
  if (id === "apple-shortcuts") return <div className="shortcut-grid">{shortcuts.map(([name, url]) => <a href={url} target="_blank" rel="noreferrer" key={name}><span>{name}</span><b>Get Shortcut ↗︎</b></a>)}</div>;
  return null;
}

export function PortfolioCatalog() {
  const [filter, setFilter] = useState("all");
  const visible = filter === "all" ? portfolioEntries : portfolioEntries.filter((entry) => entry.category === filter);

  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      setFilter("all");
      requestAnimationFrame(() => requestAnimationFrame(() => {
        const target = document.getElementById(id) as HTMLDetailsElement | null;
        if (target) { target.open = true; target.scrollIntoView({ behavior: "smooth", block: "start" }); }
      }));
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return (
    <>
      <div className="filter-bar" aria-label="Filter portfolios">
        {filters.map(([value, label]) => <button className={filter === value ? "active" : ""} onClick={() => setFilter(value)} type="button" key={value}>{label}</button>)}
      </div>
      <div className="portfolio-catalog" aria-live="polite">
        {visible.length ? visible.map((entry) => (
          <details className="portfolio-detail" id={entry.id} key={entry.id}>
            <summary>
              <img src={entry.cover} alt="" aria-hidden="true" />
              <div><span>{entry.subtitle}</span><h2>{entry.title}</h2><p>Explore details</p></div>
            </summary>
            <div className="portfolio-detail-body">
              {entry.description && <p>{entry.description}</p>}
              <ul>{entry.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              <DetailContent id={entry.id} />
            </div>
          </details>
        )) : <p className="empty-state">More work in this category is coming soon.</p>}
      </div>
    </>
  );
}

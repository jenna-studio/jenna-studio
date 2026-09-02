import { chromeThemes } from "../content";

export default function ThemeGallery() {
  return (
    <div className="theme-gallery">
      {chromeThemes.map(([name, file, url]) => (
        <div className="theme-card" key={name}>
          <a className="theme-shot" href={url} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true"><img src={`/media/chrome-theme-thumbnails/${file}`} alt="" /></a>
          <div className="theme-card-foot">
            <a href={url} target="_blank" rel="noreferrer"><span>{name} ↗︎</span></a>
          </div>
        </div>
      ))}
    </div>
  );
}

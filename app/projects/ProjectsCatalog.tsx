"use client";

import { useState } from "react";
import { projects } from "../content";

const filters = [
  ["all", "All Projects"], ["web-app", "Web Apps"], ["website", "Websites"],
  ["mobile-app", "Mobile Apps"], ["tools", "Tools"], ["other", "Other"],
] as const;

export function ProjectsCatalog() {
  const [filter, setFilter] = useState("all");
  const visibleProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter);

  return (
    <>
      <div className="filter-bar" aria-label="Filter projects">
        {filters.map(([value, label]) => (
          <button className={filter === value ? "active" : ""} onClick={() => setFilter(value)} type="button" key={value}>{label}</button>
        ))}
      </div>
      <div className="catalog-grid" aria-live="polite">
        {visibleProjects.map((project, index) => (
          <article className="catalog-card" key={project.title}>
            <div className="catalog-image"><img src={project.image} alt={`${project.title} screenshot`} /></div>
            <div className="catalog-copy">
              <div className="catalog-index"><span>{String(index + 1).padStart(2, "0")}</span><span>{project.type} · {project.year}</span></div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              <div className="card-actions">{project.links.map((link) => <a href={link.url} target="_blank" rel="noreferrer" key={link.label}>{link.label} ↗</a>)}</div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

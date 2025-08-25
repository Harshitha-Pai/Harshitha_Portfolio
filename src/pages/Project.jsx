import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import { useState } from "react";

export default function Project() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  const [idx, setIdx] = useState(0);

  if (!project) {
    return (
      <section className="section">
        <p>Project not found.</p>
        <Link to="/" className="btn ghost">← Back to Home</Link>
      </section>
    );
    }

  const next = () => setIdx((idx + 1) % project.images.length);
  const prev = () => setIdx((idx - 1 + project.images.length) % project.images.length);

  return (
    <section className="section">
      <Link to="/" className="back-link">← Back</Link>

      <div className="project-header reveal">
        <h1>{project.title}</h1>
        <p className="muted">{project.brief}</p>
      </div>

      {/* Gallery */}
      <div className="gallery reveal">
        <button className="nav left" onClick={prev} aria-label="Previous">‹</button>
        <img src={project.images[idx]} alt={`${project.title} screenshot ${idx+1}`} />
        <button className="nav right" onClick={next} aria-label="Next">›</button>
      </div>

      {/* Details */}
      <div className="project-body reveal">
        <div className="stack">
          <h3>About this project</h3>
          <p>{project.description}</p>
        </div>

        <div className="stack">
          <h3>Tech</h3>
          <div className="tags">
            {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>

        <div className="links">
          {project.links?.github && (
            <a className="btn ghost" href={project.links.github} target="_blank">GitHub ↗</a>
          )}
          {project.links?.live && (
            <a className="btn primary" href={project.links.live} target="_blank">Live Demo ↗</a>
          )}
        </div>
      </div>
    </section>
  );
}

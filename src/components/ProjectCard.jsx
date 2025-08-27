import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.slug}`} className="card reveal">
      <div className="card-media flex items-center justify-center bg-gray-100 h-48">
        <img 
          src={project.images?.[0]} 
          alt={project.title} 
          loading="lazy"
          className="max-h-full max-w-full object-contain rounded-lg"
        />
      </div>
      <div className="card-body">
        <h3>{project.title}</h3>
        <p className="muted">{project.brief}</p>
        <div className="tags">
          {project.tech.slice(0, 4).map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <div className="card-cta">View details →</div>
      </div>
    </Link>
  );
}

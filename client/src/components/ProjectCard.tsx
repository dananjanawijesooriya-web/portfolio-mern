import type { Project } from '../types/Project';

export const ProjectCard = ({ project }: { project: Project }) => (
  <div className="project-card">
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <div className="tech-stack">
      {project.technologies.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
    {project.link && (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-btn">
        View project
      </a>
    )}
  </div>
);
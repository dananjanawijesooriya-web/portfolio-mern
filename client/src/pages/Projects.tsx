import { useEffect, useState } from 'react';
import { getProjects } from '../services/api';
import type { Project } from '../types/Projects';
import { ProjectCard } from '../components/ProjectCard';
import { useFadeIn } from '../hooks/useFadeIn';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  useFadeIn();

  useEffect(() => {
    getProjects()
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="projects fade-in show">
      <h2 className="section-title">Projects</h2>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        Browse my latest work and see the technologies I use to bring ideas to life.
      </p>
      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading projects...</p>
      ) : projects.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No projects yet. Add some from the Admin page.</p>
      ) : (
        <div className="projects-container">
          {projects.map((p) => (
            <ProjectCard key={p._id} project={p} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
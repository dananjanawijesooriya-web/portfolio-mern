import { useEffect, useState } from 'react';
import { getProjects, createProject, updateProject, deleteProject } from '../services/api';
import type { Project } from '../types/Projects';

const emptyForm = { title: '', description: '', technologies: '', link: '' };

const Admin = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const loadProjects = () => {
    getProjects()
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateProject(editingId, form);
      } else {
        await createProject(form);
      }
      setForm(emptyForm);
      setEditingId(null);
      loadProjects();
    } catch (err) {
      console.error(err);
      alert('Something went wrong saving the project.');
    }
  };

  const handleEdit = (project: Project) => {
    setEditingId(project._id);
    setForm({
      title: project.title,
      description: project.description,
      technologies: project.technologies.join(', '),
      link: project.link || '',
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this project? This cannot be undone.')) return;
    try {
      await deleteProject(id);
      loadProjects();
    } catch (err) {
      console.error(err);
      alert('Failed to delete project.');
    }
  };

  const handleReset = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  return (
    <section className="admin" style={{ padding: '120px 10% 60px' }}>
      <h2 className="section-title">{editingId ? 'Update Project' : 'Add Project'}</h2>

      <form onSubmit={handleSubmit} className="admin-form">
        <label htmlFor="title">Project Title</label>
        <input
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Project title"
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Short project description"
          rows={4}
          required
        />

        <label htmlFor="technologies">Technologies (comma separated)</label>
        <input
          id="technologies"
          name="technologies"
          value={form.technologies}
          onChange={handleChange}
          placeholder="React, MongoDB, Express"
          required
        />

        <label htmlFor="link">Project Link</label>
        <input
          id="link"
          name="link"
          value={form.link}
          onChange={handleChange}
          placeholder="https://github.com/username/project"
        />

        <div className="admin-buttons" style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
          <button type="submit" className="github-btn">
            Save Project
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="github-btn"
            style={{ background: '#374151' }}
          >
            Reset
          </button>
        </div>
      </form>

      <h2 className="section-title" style={{ marginTop: '60px' }}>Projects</h2>

      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading...</p>
      ) : projects.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No projects yet.</p>
      ) : (
        <div className="admin-list">
          {projects.map((p) => (
            <div key={p._id} className="project-card" style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '15px' }}>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="tech-stack">
                    {p.technologies.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                      {p.link}
                    </a>
                  )}
                </div>
                <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
                  <button onClick={() => handleEdit(p)} className="github-btn">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="github-btn"
                    style={{ background: '#dc2626' }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Admin;
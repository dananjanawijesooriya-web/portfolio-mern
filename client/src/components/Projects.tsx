import React from 'react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Logistics Management System',
      description: 'A console-based Java application developed to streamline logistics operations, including city management, route tracking, delivery assignment, and cost calculation. The system enables users to manage deliveries efficiently, generate reports, and save data using text files for persistent storage.',
      techStack: ['Java', 'Netbeans', 'Git'],
      githubLink: 'https://github.com/dananjanawijesooriya-web/logistics-management-system',
    },
    {
      title: 'Sales Management System',
      description: 'A Java-based desktop application developed to manage products, customers, and sales transactions efficiently. The system integrates with a MySQL database to perform CRUD operations, record sales, and automatically calculate totals and discounts, helping improve accuracy and streamline store management.',
      techStack: ['Java', 'Netbeans IDE', 'MySQL', 'MySQL Connector'],
    },
  ];

  return (
    <section id="projects" className="projects fade-in">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-btn">
                View in GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

import React from 'react';

interface Skill {
  name: string;
  image: string;
}

export const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'HTML', image: 'images/skills/html.png' },
    { name: 'CSS', image: 'images/skills/css.png' },
    { name: 'Python', image: 'images/skills/python.png' },
    { name: 'Java', image: 'images/skills/java.png' },
    { name: 'SQL', image: 'images/skills/sql.png' },
    { name: 'MySQL', image: 'images/skills/mysql.png' },
    { name: 'React', image: 'images/skills/react.png' },
    { name: 'Git', image: 'images/skills/git.png' },
    { name: 'GitHub', image: 'images/skills/github.png' },
    { name: 'Docker', image: 'images/skills/docker.png' },
    { name: 'VS Code', image: 'images/skills/vscode.png' },
  ];

  return (
    <section id="skills" className="skills fade-in">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <img src={skill.image} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

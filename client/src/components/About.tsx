import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="about fade-in">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="about-text">
          <p>
            I am a passionate undergraduate student with a strong interest in software development, web technologies, and DevOps practices. I enjoy turning ideas into real-world projects and continuously sharpening my technical skills. My focus is on building robust, user-friendly applications while exploring modern tools and frameworks that enhance efficiency and scalability.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Beyond coding, I value continuous learning and problem-solving, which drive me to keep exploring new technologies and finding creative ways to tackle challenges.
          </p>
        </div>
        
        <div className="about-card">
          <h3>Quick Info</h3>
          <p><b>Name:</b> Dananjana Wijesooriya</p>
          <p><b>University:</b> University of Sri Jayawardhanapura</p>
          <p><b>Degree:</b> B.Sc. in Physics & Information and Communication Technology</p>
          <p><b>Focus:</b> Web Development & DevOps</p>
        </div>
      </div>
    </section>
  );
};

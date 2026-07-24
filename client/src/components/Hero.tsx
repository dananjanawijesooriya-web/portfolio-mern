import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span>Dananjana Wijesooriya</span></h1>
        <p>University Student | Web Developer | DevOps Learner</p>
        <p className="sub-text">I build modern web applications and enjoy solving real-world challenges using technology.</p>
      </div>
      <div className="hero-image">
        <img src="images/skills/myprofile.png" alt="Dananjana Wijesooriya" />
      </div>
    </section>
  );
};

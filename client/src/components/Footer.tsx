import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Dananjana Wijesooriya</h3>
        <p>Undergraduate | Web Developer | DevOps Learner</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Dananjana Wijesooriya. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

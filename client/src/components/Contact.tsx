import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact fade-in">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-card">
          <h3>Let's Connect</h3>
          <p>
            I'm always interested in learning new technologies,
            collaborating on projects, and connecting with other developers.
            Feel free to reach out!
          </p>

          <div className="contact-info">
            <p>
              <strong>Email:</strong>
              <br />
              <a href="mailto:dananjanawijesooriya@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                dananjanawijesooriya@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>
              <br />
              <a href="tel:+94714658685" style={{ textDecoration: 'none', color: 'inherit' }}>
                +94 71 465 8685
              </a>
            </p>
            <p>
              <strong>Location:</strong>
              <br />
              Kandy, Sri Lanka
            </p>
          </div>

          <div className="social-links">
            <a href="https://github.com/dananjanawijesooriya-web" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dananjana-wijesooriya-7b348241a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <nav className="navbar">
      <ul className={`nav-links ${isActive ? 'active' : ''}`} id="navLinks">
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#education" onClick={closeMenu}>Education</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      <div className="nav-toggle" id="navToggle" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

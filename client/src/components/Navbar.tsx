import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => setIsActive(!isActive);
  const closeMenu = () => setIsActive(false);

  return (
    <nav className="navbar">
      <ul className={`nav-links ${isActive ? 'active' : ''}`} id="navLinks">
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
        <li><Link to="/admin" onClick={closeMenu}>Admin</Link></li>
      </ul>
      <div className="nav-toggle" id="navToggle" onClick={toggleMenu}>☰</div>
    </nav>
  );
};
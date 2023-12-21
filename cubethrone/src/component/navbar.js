import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../asset/Cubethrone_Logo.png';
import './navbar.css';

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('about');

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div className="navbar">
      <img src={logo} alt="CubeThrone" className="logo" />
      <p className="cube">CubeThrone</p>
      <span className="material-symbols-outlined menu" onClick={handleMenuToggle}>
        menu
      </span>
      <ul className={`page ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/about" onClick={() => handleLinkClick('about')} className={activeLink === 'about' ? 'clicked' : ''}>
          <li className="link">About</li>
        </Link>

        <Link
          to="/projects"
          onClick={() => handleLinkClick('projects')}
          className={activeLink === 'projects' ? 'clicked' : ''}
        >
          <li className="link">Projects</li>
        </Link>

        <Link
          to="/services"
          onClick={() => handleLinkClick('services')}
          className={activeLink === 'services' ? 'clicked' : ''}
        >
          <li className="link">Services</li>
        </Link>

        <Link
          to="/contact_us"
          onClick={() => handleLinkClick('contact_us')}
          className={activeLink === 'contact_us' ? 'clicked' : ''}
        >
          <li className="link">Contact</li>
        </Link>
      </ul>
    </div>
  );
}

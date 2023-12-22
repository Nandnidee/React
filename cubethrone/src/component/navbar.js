import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import logo from '../asset/Cubethrone_Logo.png';
import './navbar.css';
import About from '../pages/about';
import Projects from '../pages/projects';
import Services from '../pages/services';
import Contact from '../pages/contact_us';

const Navbar = ({ onNavClick }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="logo-link">
        <img src={logo} alt="CubeThrone" className="logo" />
        <p className="cube">CubeThrone</p>
        <span className="material-symbols-outlined menu" onClick={handleMenuToggle}>
          menu
        </span>
      </div>
      <ul className={`page ${isMenuOpen ? 'open' : ''}`}>
        <ScrollLink activeClass="clicked" smooth spy to="about" onClick={() => handleLinkClick()}>
          <li className="link">About</li>
        </ScrollLink>
        <ScrollLink activeClass="clicked"   offset={-90} smooth spy to="projects" onClick={() => handleLinkClick()}>
          <li className="link">Projects</li>
        </ScrollLink>
        <ScrollLink activeClass="clicked"   offset={-90} smooth spy to="services" onClick={() => handleLinkClick()}>
          <li className="link">Services</li>
        </ScrollLink>
        <ScrollLink activeClass="clicked"   offset={-70} smooth spy to="contact" onClick={() => handleLinkClick()}>
          <li className="link">Contact</li>
        </ScrollLink>
      </ul>
    </div>
  );
};

export default Navbar;

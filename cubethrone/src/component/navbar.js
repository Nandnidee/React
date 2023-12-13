import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from '../pages/about';
import Services from '../pages/services';
import Projects from '../pages/projects';
import Contact from '../pages/contact_us';

import logo from '../asset/Cubethrone_Logo.png';
import './navbar.css';

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    
    <div className="navbar">
      <img src={logo} alt="CubeThrone" className="logo" />
    
<p className='cube'>CubeThrone</p>
<span class="material-symbols-outlined menu" onClick={()=>setMenuOpen(!isMenuOpen)}>
menu
</span>
      <ul className={`page ${isMenuOpen?'open':''}`}>
       
          <Link to="/about"> <li >About </li></Link>
          <Link to="/projects">  <li>Projects</li></Link>
          <Link to="/services">  <li>Services  </li></Link>
          <Link to="/contact_us"> <li>Contact</li></Link>
        
      </ul>
    </div>
  );
}

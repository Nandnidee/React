// Navbar.js
import './Navbar.css';
import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Form2555 from '../pages/Form 2555.js';
import Home from '../pages/Home.js';
import Contact from '../pages/Contact.js';
import Form1040 from '../pages/Form1040';
import Foreign from '../pages/foreign';
import Tax from '../pages/Corporate tax';
import LOGO from '../asset/LOGO-removebg.png'
const Navbar = () => {
  let [isMenuOpen, setMenuOpen] = useState(false);
  let handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  let [isIndividualsOpen, setIndividualsOpen] = useState(false);
  let toggleIndividuals = () => {
    setIndividualsOpen(!isIndividualsOpen);
    // Close the Businesses section when opening Individuals
    setBusinessesOpen(false);
  };

 let [isBusinessesOpen, setBusinessesOpen] = useState(false);
 let toggleBusinesses = () => {
  setBusinessesOpen(!isBusinessesOpen);
  // Close the Individuals section when opening Businesses
  setIndividualsOpen(false);
};
let menu =()=>{
  isIndividualsOpen=false;
  setIndividualsOpen(isIndividualsOpen);
  isBusinessesOpen=false;
  setBusinessesOpen(isBusinessesOpen);
}
  return (
    <div className="navbar">
      <div className="nav-logo"> <img src={LOGO} alt="Logo" className='logo' /> </div>

      <span className="material-symbols-outlined" onClick={handleMenuToggle}>
        Menu
      </span>

      <div className={`nav-link ${isMenuOpen ? 'menu-visible' : ''}`}>
        <ul>
          <span className="material-symbols-outlined" onClick={()=>{handleMenuToggle(); menu();}}>
            Menu
          </span>
          <li className="link"><Link to="./pages/Home" >Home</Link></li>
          <li className={`link Services`}>
            Services
            <ul className="Sub-nav">
              <li className={`Individuals ${isIndividualsOpen ? 'active' : ''}`}>
                <span onClick={toggleIndividuals}>+ Individuals</span>
                <ul className="form">
                  <li ><Link to="./pages/Form 2555" onClick={()=>{toggleIndividuals(); handleMenuToggle()}} >- Form 2555</Link></li>
                  <li><Link to={'./pages/foreign'}onClick={()=>{toggleIndividuals(); handleMenuToggle()}}>- Foreign Tax Credit</Link></li>
                  <li><Link to={'./pages/Form1040'} onClick={()=>{toggleIndividuals(); handleMenuToggle()}}>- Form 1040NR</Link></li>
                </ul>
              </li>
              <li className={`Businesses ${isBusinessesOpen ? 'active' : ''}`}>
                <span onClick={toggleBusinesses}>+ Businesses</span>
                <ul className="tax">
                  <li><Link to={'./pages/Corporate tax'} onClick={()=>{toggleBusinesses(); handleMenuToggle()}}>- Corporate tax</Link></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="link"><Link to={'./pages/Contact'} onClick={handleMenuToggle}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import './Navbar.css'
import React, { useState } from 'react';
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };
  const [bus,setbus]=useState(false);
  const setbustoggle=()=>{
  setbus(!bus);
  }
  const [isin,setin]=useState(false)
  const setisintoggle=()=>{setin(!isin);
  }
  const change =()=>{
    if(isin){
      setisintoggle();
    }
    return 'mob';
  }
  const cha=()=>{
    if(bus) setbustoggle();
    return 'Indi';
  }
  return(
    <div className={`navbar `}>
    <div className="nav-logo">LOGO</div>
    
    <span className="material-symbols-outlined" onClick={handleMenuToggle}>
      Menu
    </span>

    <div className={`nav-link ${isMenuOpen ? 'menu-visible' : ''}`}>
      <ul>
      <span className="material-symbols-outlined" onClick={handleMenuToggle}>
      Menu
    </span>
        <li className="link" >
          Home
        </li>
        <li className={`link Services `}> Services
          <ul className="Sub-nav">
            <li className={ `Individuals ${isin?cha():""}`} ><span className='add' onClick={setisintoggle}>+   Individuals</span> 
            <ul  className='form'>
            <li>- Form 2555</li>
            <li>- Foreign Tax Credit</li>
            <li>- Form 1040NR</li>
            </ul>
            </li>
            <li className={`Businessses ${bus? change():""}`} ><span className="add" onClick={setbustoggle}>+  Businesses</span>
                <ul className='tax'>
                    <li>- Corporate tax</li>
                </ul>
            </li>
          </ul>
        </li>
        <li className="link" >
          Contact
        </li>
      </ul>
    </div>
  </div>
  );
};

export default Navbar;
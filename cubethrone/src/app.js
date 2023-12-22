import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './component/navbar';
import About from './pages/about';
import Services from './pages/services';
import Projects from './pages/projects';
import Contact from './pages/contact_us';
const App = () => {
    const [activeSection, setActiveSection] = useState('about');
  
    const handleNavClick = (section) => {
      setActiveSection(section);
    };
  
    return (
      <div className="app">
        <Navbar onNavClick={handleNavClick} />
        <div className="content">
        <div name="about">
        <About />
      </div>
      <div name="projects">
        <Projects />
      </div>
      <div name="services">
        <Services />
      </div>
      <div name="contact">
        <Contact />
      </div>
        </div>
      </div>
    );
  };
  
  export default App;
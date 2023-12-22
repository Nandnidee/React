import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './component/navbar';
import About from './pages/about';
import Services from './pages/services';
import Projects from './pages/projects';
import Contact from './pages/contact_us';
import App from './app';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);



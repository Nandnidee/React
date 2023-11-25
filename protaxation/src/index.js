import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Nav-bar';
import Form from './Components/form';
import './index.css';
import Form2555 from './pages/Form 2555'
import Home from './pages/Home'
import Form1040 from './pages/Form1040';
import Foreign from './pages/foreign';
import Tax from './pages/Corporate tax';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Navbar/>
  <Form/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pages/Home' element={<Home/>}/>
      <Route path='/pages/Form 2555' element={<Form2555/>}/>
      <Route path='/pages/Contact' element={<Contact/>}/>
      <Route path='/pages/Corporate tax' element={<Tax/>}/>
      <Route path='/pages/foreign' element={<Foreign/>}/>
      <Route path='/pages/Form1040' element={<Form1040/>}/>
     
    </Routes>

  </Router>
);

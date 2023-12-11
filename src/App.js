import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import "./App.css"
import MainContent from './components/Main-Content/MainContent';
import Courses from './components/Courses/Courses';
import Aboutus from './components/AboutUs/Aboutus';
import Gallary from './components/Gallary/Gallary';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
function App() {
  return (
    

<Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<MainContent />} />
             <Route path="/aboutus" element={<Aboutus />} /> 
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Gallary" element={<Gallary />} />
            
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>










  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfinity } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import "./styles.css"


function Navbar() {
    const contactNumber = "+91-9993772717"; 



  return (
    <nav className="navbar">
      <Link to="/">
      <FontAwesomeIcon icon={faInfinity} flip size="2xl" style={{color: "#ebfb09",}} />
      <span>Infinity Solutions</span>
      </Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/Gallary">Gallary</Link></li>

        {/* Add more navigation links as needed */}
      </ul>
      <div className="contact-info">
        <span><FontAwesomeIcon icon={faPhone} shake size="2xl" style={{color: "#f20707",}} /> </span>
        <a href={`tel:${contactNumber}`} className="highlighted">{contactNumber}</a>
        
      </div>
    </nav>
  );
}

export default Navbar;

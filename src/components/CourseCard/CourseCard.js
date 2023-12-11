import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./styles.css"

const CourseCard = ({course,fee,duration}) => {
  return (
   
    <Link to="/courses" className="custom-link">
     <div className='card'>

    <h2>{course}</h2>
    <span>
    <FontAwesomeIcon icon={faStar} size="2xl" style={{color: "#dffb09",}} />
    <FontAwesomeIcon icon={faStar} size="2xl" style={{color: "#dffb09",}} />
    <FontAwesomeIcon icon={faStar} size="2xl" style={{color: "#dffb09",}} />
    <FontAwesomeIcon icon={faStar} size="2xl" style={{color: "#dffb09",}} />
    <h6>(108)</h6>
    </span>
    <h6>Fee:{fee}</h6>
    <h6>{duration}</h6>
    </div>
    
    </Link>
    

      
    
  )
}

export default CourseCard

import React,{useState} from 'react'
import CourseContent from '../CourseContent/CourseContent';
import "./styles.css"

const Courses = () => {

    const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div>

        <div className="course-list">
            <h2>Available Courses</h2>
            <ul>
              <li onClick={() => handleCourseClick('Front-End Web Development')}>Front-End Web Development</li>
              <li onClick={() => handleCourseClick('Backend Development')}>Backend Development</li>
              <li onClick={() => handleCourseClick('Python Programming')}>Python Programming</li>
            </ul>
          </div>
          <div className="course-content">
            {selectedCourse && <CourseContent course={selectedCourse} />}
          </div>

          
    </div>
    
  )
}

export default Courses

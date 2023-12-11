import React from 'react';
import "./styles.css"

const CourseContent = ({ course }) => {
  // You can customize the content for each course
  let content;
  switch (course) {
    case 'Front-End Web Development':
      content = (
        <div className='course-content'>
          <h2>{course}</h2>
          <h2>This course covers the essentials of front-end web development (40Hours)</h2>
          <h4>Week 1-2: Introduction to Web Development and HTML5 (8 hours)</h4>
          <ul>
            <li><h6>Understanding the basics of web development.</h6></li>
            <li><h6>Introduction to HTML5 syntax and structure.</h6></li>
            <li><h6>Creating and organizing content with HTML tags.</h6></li>
            <li><h6>Semantic HTML for improved accessibility.</h6></li>
           
          </ul>

          <h6>Week 3-4: Styling with CSS3 (8 hours)</h6>
          <ul>
            <li><h6>Cascading Style Sheets (CSS) fundamentals.</h6></li>
            <li><h6>Selectors, properties, and values in CSS.</h6></li>
            <li><h6>Box model and layout techniques.</h6></li>
            <li><h6>Responsive design and media queries.</h6></li>
           
          </ul>
          <h6>Week 5-6: JavaScript Fundamentals (12 hours)</h6>
          <ul>
            <li><h6>Introduction to JavaScript programming.</h6></li>
            <li><h6>Variables, data types, and operators.</h6></li>
            <li><h6>Control flow and loops.</h6></li>
            <li><h6>Functions and scope.</h6></li>
           
          </ul>
          <h6>Week 7-8: Dynamic Web Pages with JavaScript (12 hours)</h6>
          <ul>
            <li><h6>DOM manipulation for interactive web pages.</h6></li>
            <li><h6>Event handling and listeners in JavaScript.</h6></li>
            <li><h6>Introduction to asynchronous JavaScript.</h6></li>
            <li><h6>Basics of error handling.</h6></li>
           
          </ul>

          <h6>Final Project: Build a Responsive Website (4 hours)</h6>
          <ul>
            <li><h6>Apply the skills learned to create a fully responsive and interactive website.</h6></li>
            
          </ul>
          {/* Add more content specific to Front-End Web Development */}
        </div>
      );
      break;
    case 'Backend Development':
      content = (
        <div className='course-content'>
          <h2>{course}</h2>
          <h2>This course deals into server-side programming using Node.js and Express(40 hours)</h2>
          <h6>Week 1-2: Introduction to Backend Development and Node.js (8 hours)</h6>
          <ul>
            <li><h6>Understanding the role of the backend in web development.</h6></li>
            <li><h6>Introduction to Node.js and its architecture.</h6></li>
            <li><h6>Setting up a Node.js environment.</h6></li>
           
           
          </ul>

          <h6>Week 3-4: Building APIs with Express.js (12 hours)</h6>
          <ul>
            <li><h6>Introduction to Express.js framework.</h6></li>
            <li><h6>Creating routes and handling HTTP requests.</h6></li>
            <li><h6>Middleware and its role in Express.</h6></li>
            <li><h6>Implementing CRUD operations.</h6></li>
           
          </ul>
          <h6>Week 5-6: JavaScript Fundamentals (12 hours)</h6>
          <ul>
            <li><h6>Introduction to JavaScript programming.</h6></li>
            <li><h6>Variables, data types, and operators.</h6></li>
            <li><h6>Control flow and loops.</h6></li>
            <li><h6>Functions and scope.</h6></li>
           
          </ul>
          <h6>Week 5-6: Working with Databases (8 hours)</h6>
          <ul>
            <li><h6>Overview of databases and data modeling.</h6></li>
            <li><h6>Introduction to MongoDB.</h6></li>
            <li><h6>Connecting Node.js with MongoDB using Mongoose.</h6></li>
            <li><h6>Basics of error handling.</h6></li>
           
          </ul>

          <h6>Week 7-8: Authentication and Authorization (8 hours)</h6>
          <ul>
            <li><h6>User authentication with JWT (JSON Web Tokens).</h6></li>
            <li><h6>Authorization and role-based access control.</h6></li>
            <li><h6>Implementing secure password storage.</h6></li>
            
           
          </ul>
          

          <h6>Final Project: Build a RESTful API (4 hours)</h6>
          <ul>
            <li><h6>Apply the skills learned to create a backend API with Express and MongoDB.</h6></li>
            
          </ul>
        </div>
      );
      break;
    case 'Python Programming':
      content = (
        <div className='course-content'>
          <h2>{course}</h2>
          <h2>This course introduces the fundamentals of Python programming...</h2>
          <h6>Week 1-2: Introduction to Python (8 hours)</h6>
          <ul>
            <li><h6>Understanding Python's syntax and data types.</h6></li>
            <li><h6>Variables, operators, and expressions in Python.</h6></li>
            <li><h6>Control flow with if statements and loops.</h6></li>
           
           
          </ul>

          <h6>Week 3-4: Functions and Object-Oriented Programming (12 hours)</h6>
          <ul>
            <li><h6>Defining and using functions in Python.</h6></li>
            <li><h6>Introduction to object-oriented programming (OOP).</h6></li>
            <li><h6>Creating classes and objects in Python.</h6></li>
           
           
          </ul>
          <h6>Week 5-6: Python Libraries and Frameworks (8 hours)</h6>
          <ul>
            <li><h6>Overview of popular Python libraries (e.g., NumPy, Pandas).</h6></li>
            <li><h6>Introduction to web frameworks (e.g., Flask, Django).</h6></li>
            
          </ul>
          <h6>Week 7-8: Practical Python Projects (8 hours)</h6>
          <ul>
            <li><h6>Building a web application with Flask.</h6></li>
            <li><h6>Basic data analysis and visualization with Python.</h6></li>
            <li><h6>Introduction to automation using Python scripts.</h6></li>
            
          </ul>

          
          

          <h6>Final Project: Create a Python Application (4 hours)</h6>
          <ul>
            <li><h6>Apply the skills learned to create a practical Python application or project.</h6></li>
            
          </ul>
        </div>
      );
      break;
    default:
      content = null;
  }

  return (
    <div className="course-details">
      {content}
    </div>
  );
};

export default CourseContent;

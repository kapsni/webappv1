import React from 'react'

import image1 from "../../images/item-1.jpeg";
import image2 from "../../images/item-2.jpeg";
import image3 from "../../images/item-3.jpeg";
import image4 from "../../images/item-4.jpeg";
import image5 from "../../images/item-5.jpeg";
import "./styles.css"
import CourseCard from '../CourseCard/CourseCard';

function MainContent() {

    const images = [image1,image2,image3,image4,image5];
    const cardDetail={}

    


  return (
    <section className='main-section'>
    <div className='card-section'>
    <CourseCard 
    course={"FullStack Developper"}
    fee={5000}
    duration={"50Hours"}
    

    />
    <CourseCard 
    course={"JavaScript"}
    fee={1000}
    duration={"40Hours"}
    

    />
    <CourseCard 
    course={"Python"}
    fee={2000}
    duration={"50Hours"}
    

    />
    <CourseCard 
    course={"C/C++"}
    fee={1000}
    duration={"35Hours"}
    

    />
    <CourseCard 
    course={"DSA"}
    fee={1000}
    duration={"20Hours"}
    

    />
    <CourseCard 
    course={"FrontEnd Developper "}
    fee={1000}
    duration={"20Hours"}
    

    />
    <CourseCard 
    course={"BackEnd Developper"}
    fee={1000}
    duration={"20Hours"}
    

    />


    </div>
    
<div >
      
      <div>
        <h2>Welcome to Infinity Solutions</h2>
        <p>Your gateway to limitless possibilities in coding and technology.</p>
      </div>
    </div>






    <div>
      <h1>About Us</h1>
      <p>Welcome to Infinity Solutions, where passion meets proficiency in the world of programming and technology! Established with a vision to empower aspiring computer science enthusiasts,
       we are dedicated to providing top-notch education in a variety of programming languages and development skills.</p>
    </div>
    <div>
      <h1>Our Mission</h1>
      <p>At Infinity Solutions, our mission is clear: to bridge the gap between ambition and expertise. We strive to cultivate a learning environment that goes beyond conventional education, 
      fostering creativity, critical thinking, and hands-on experience.</p>
    </div>
    <div className='sec-choose'>
      <h1>Why Choose Infinity Solutions?</h1>
      <ul>
        <li>
        <bold>Expert Instructors:</bold> <p>Our team of experienced instructors comprises industry professionals and educators with a passion for teaching.
         They bring real-world insights to the classroom, making learning both practical and relevant.</p>

        </li>
        <li>
        <bold>Comprehensive Courses:</bold> <p>Whether you're delving into the fundamentals of C/C++, mastering the art of web development, or diving into the intricacies of Python and app development, 
        our courses are designed to provide a holistic understanding of each subject.</p>

        </li>
        <li>
        <bold>Expert Instructors:</bold> <p>Our team of experienced instructors comprises industry professionals and educators with a passion for teaching.
         They bring real-world insights to the classroom, making learning both practical and relevant.</p>

        </li>
        <li>
        <bold>Expert Instructors:</bold> <p>Our team of experienced instructors comprises industry professionals and educators with a passion for teaching.
         They bring real-world insights to the classroom, making learning both practical and relevant.</p>

        </li>
      </ul>
      
    </div>
    <div>
      <h1>Our Commitment to Excellence</h1>
      <p>We are committed to excellence in education. As technology evolves, so do we. Our courses are regularly updated to reflect the latest industry trends,
       ensuring that our students are well-prepared for the ever-changing landscape of the tech world.</p>
    </div>
    <div>
      <h1>Join Us on the Journey</h1>
      <p>Embark on a transformative journey with Infinity Solutions, Whether you're a beginner taking your first steps into programming or a seasoned developer looking to upskill, we have a place for you.

Thank you for considering Infinity Solutions as your partner in education. We look forward to being a part of your success story!

Ready to start your coding adventure? Explore Our Courses or Contact Us for more information.</p>
    </div>


    </section>
    
    
  )
}

export default MainContent

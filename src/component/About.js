import React from 'react';
import Navbar from './Navbar';
const About = () => {
  return (
    <div className="about-page">
      <Navbar/>
      <div className='ms-5 me-5 mt-5'>
      <h1 className='text-danger'>Our Mission</h1>
      <p>
        Ambula Carriers is a leading hospital that provides high-quality healthcare services with a focus on serving the community through government health programs. Our mission is to deliver accessible and affordable healthcare to all citizens.
    
    
        At Ambula Carriers, we are dedicated to the well-being of our patients. Our team of highly skilled doctors, nurses, and healthcare professionals work tirelessly to ensure the best possible outcomes for every individual who comes through our doors.
      
      
        As a government-affiliated hospital, we collaborate with various health initiatives and public health campaigns to promote preventive care and create a healthier society.
      
      
        Whether you require routine medical check-ups, specialized treatments, or emergency care, Ambula Carriers is here to serve you with compassion and excellence.
        Thank you for trusting Ambula Carriers with your healthcare needs. We are committed to making a positive difference in the lives of our patients and the community we serve.
      </p>
    </div>
    </div>
  );
};

export default About;

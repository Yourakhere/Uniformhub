import React from 'react';
import './intro.css'; 
import { Link } from 'react-scroll';
import btnImg from '../../assets/menu.png';

function Intro() {
  return (

    
    <section id="intro"> 
    <div className="introContent">
        <div className="introText">
          <span className="hello">Welcome to</span>
          <span className="introTextMain">
            <span className="introName">UNIFORMHUB</span>
            <br /> UMS BY PCTE
          </span>
          <p className="introPara">
           The Uniform Management System is designed to streamline the process of uniform allocation, tracking, and management for all students and staff at PCTE. It helps ensure that all members of the college are properly equipped with the required uniforms.
          </p>
       
        </div>
      </div>
     
    </section>
  );
}

export default Intro;

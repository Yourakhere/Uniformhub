import React from 'react'
import './About.css' 

function About() {
  return (
 <section id="about">
    <div className="skillBars">
     <div className="skillBar">
      <div className="skillBarText">
        <h2>About Me</h2>
        <p>  As a passionate MERN stack Developer, I craft scalable and efficent web applications. 
            with expertise in MongoDB, Express.js, React, and Node.js, I bring innovative ideas to life.
            My passion for coding drive me to continuously learn and adapt to the latest technologies.
            I'm dediceted to delivery high-quality solution that exceed expectations . Let's collaborate to
            build somesthing amazing!  </p>
      </div>
      </div>   
      <div className="skillBar">
      <div className="skillBarText">
        <h2>My Education</h2>
        <p> currently i'm pursing my btech in computer science from PCTE from ludhiana punjab and for middle and high school complete from shivalik wala doon school</p>
      </div>
      </div> 
      <div className="skillBar">
       {/*<img src={WebDesign} alt='WebDesign' className='skillBarImg'/>;*/}
      <div className="skillBarText">
        <h2>Technology</h2>
        <p>React, Redux, Mobax, Node, expres, MySql, Mongodb</p>
      </div>
      </div>   
     </div>
 </section>
  )
}

export default About;

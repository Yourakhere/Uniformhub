import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'
import GithubIcon from '../../assets/github.svg'
import LinkedinIcon from '../../assets/linkedin.svg' 


const Contact = () => {
  const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dbxiien', 'template_75fjrw8', form.current, {
        publicKey: 'iS2cCyhwe6H1DvebJ',
      })
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
       
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
 <section id='contactPage'>
   
   <div id="contact">
    <h1 className="contacPageTitle">Feedback Form</h1>
    <span className="contactDesc"> please fill out the from below to discuss</span>
    <form className="contacFrom" ref={form} onSubmit={sendEmail}>
      <input type="text" className="name" placeholder=' Your Name' required name='from_name'/>
      <input type="text" className="email" placeholder=' Your Eamil' required name='your_email'/>
      <textarea className='msg' name='message' cols="30" rows="10" placeholder='Your Message'></textarea>
      <button type='submit' value="send" className="submitBtn">Submit</button>
      <div className="links">
        <a href="https://github.com/Yourakhere"><img src={GithubIcon} alt="Github" className="link" /> </a>
        <a href="https://www.linkedin.com/in/abhishek-kumar-b2449729b/"><img src={LinkedinIcon} alt="Linkden" className="link2"  /></a>
      </div>
      
    </form>
   </div>
   
 </section>
  )
}

export default Contact


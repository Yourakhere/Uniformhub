import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '/src/assets/logo1.png';
import contactImg from '/src/assets/message.svg';
import messageImg from '/src/assets/message.svg'; // Add message icon
import arrowUpImg from '/src/assets/arrow-up.svg'; // Add arrow up icon
import { Link } from 'react-scroll';
import menu from '../../assets/menu.svg';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const scrollToTopButton = document.getElementById("scrollToTop");
    const handleScroll = () => {
      if (window.innerWidth <= 768 && (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    };

    window.addEventListener('scroll', handleScroll);

    scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link activeclass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" >Home</Link>
        <Link activeclass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" >About</Link> 
        <Link activeclass='active' to='works' spy={true} smooth={true} offset={-10} duration={500} className="desktopMenuListItem" >Prodcut</Link>
      </div>
      <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }} >
        <img src={contactImg} alt="Contact icon" className="desktopMenuImg" />
      </button>

      <img src={menu} alt="menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeclass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeclass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>About</Link
         
        <Link activeclass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Contact Me</Link>
      </div>
      <div className="buttonContainer">
        <button className="mobMessageBtn" onClick={() => {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }}>
          <img src={messageImg} alt="Message icon" className="mobMessageImg" />
        </button>
        <button id="scrollToTop" title="Go to top" className="scrollToTop">
          <img src={arrowUpImg} alt="Arrow Up" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

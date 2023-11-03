import logo from "../Assets/Navbar Assets/logo1.png";
import home from "../Assets/Navbar Assets/home-384.png";
import about from "../Assets/Navbar Assets/user-96.png";
import project from "../Assets/Navbar Assets/projectionScreen.png";
import resume from "../Assets/Navbar Assets/document-512.png";
import fork from "../Assets/Navbar Assets/code-fork-100.png";
import star from "../Assets/Navbar Assets/star-100.png";
import contact from "../Assets/Navbar Assets/mail-100.png";
import { Link } from "react-router-dom";



import { useEffect, useRef, useState } from "react";
import '../styles/navbar.css'


export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false); // for burger menu toggle
  const [fix, setFix] = useState(false); // navbar fixing on the top

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false); // public corner submenu

  const handleMenuToggle = (e) => {
    setIsOpen(!isOpen);
  }


  const handleScroll = () => {

    if (window.scrollY >= 20)
      setFix(true);
    else
      setFix(false);

  }

  window.addEventListener('scroll', handleScroll);


  return (
    <>
      <div className={fix ? 'sticky' : 'navbar'}>
        <div className={`logo-div ${isOpen ? 'burgerLogo' : ''}`}>
          <Link to='/'>
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className={`navItems ${isOpen ? 'show' : ''}`}>
          <Link to='/' className='navLink home' onClick={handleMenuToggle}> <img src={home} alt="Home" height={20} width={20} />
            Home
          </Link>
          <Link to='/about' className='navLink about' onClick={handleMenuToggle}><img src={about} alt="About" height={20} width={20} />
            About
          </Link>
          <Link to='/project' className='navLink project' onClick={handleMenuToggle}><img src={project} alt="Projects" height={20} width={20} />
            Projects
          </Link>
          <Link to='/resume' className='navLink resume' onClick={handleMenuToggle}><img src={resume} alt="Resume" height={20} width={20} />
            Resume
          </Link>

          <Link to='/contact' className='navLink contact' onClick={handleMenuToggle}><img src={contact} alt="Contact" height={20} width={20} />
            Contact
          </Link>
          <div className="btn">
            <a href="https://github.com/Abhishekkumar021?tab=repositories" target="_blank" rel="noopener noreferrer"><img src={fork} alt="Home" height={20} width={20} />
              <img src={star} alt="Home" height={20} width={20} /></a>
          </div>
        </div>

        <div className={`hamburgerBtn ${isOpen ? 'show' : ''}`} onClick={handleMenuToggle}>
          <span className='bar1 bar'></span>
          <span className='bar2 bar'></span>
          <span className='bar3 bar'></span>
        </div>
      </div>
      <div className={`close ${isOpen ? 'show' : ''}`} id="notification"></div>
    </>
  );
};

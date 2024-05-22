import { useRef } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import "./navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Manish</h3>
      <nav ref={navRef}>
        <ul className="nav-list">
          <li>
            <a className="nav-link" href=".home-page">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="#skills-page">
              Skill
            </a>
          </li>
          <li>
            <a className="nav-link" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="nav-link" href="#footer">
              Contact me
            </a>
          </li>
        </ul>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>

      {/* social-icon */}

      <div className="social-icon">
        <ul>
          <li className="linkedin">
            <a
              className="linkedin-icon"
              href="https://www.linkedin.com/in/s-manish-nair-52a5a8164/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="github">
            <a
              className="github-icon"
              href="https://github.com/manishN1999"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="mail">
            <a
              className="mail-icon"
              href="mailto:mnair4429@gmail.com"
              target="_blank"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;

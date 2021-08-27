import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link smooth={true} to="about" className="nav-link" href="#">About</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="services" className="nav-link" href="#">Skills</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="experience" className="nav-link" href="#">Experience</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="portfolio" className="nav-link" href="#">Portfolio</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="contact" className="nav-link" href="#">Contact</Link>
      </li>

    </ul>
    </div>

  </div>
  
</nav>

    )
}

export default Navbar

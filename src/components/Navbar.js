import React from "react";
import logo from "../../src/logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
  <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="...."></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
{/* 
  <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button> */}


  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="about" className="nav-link" href="#">About</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="services" className="nav-link" href="#">Services</Link>
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

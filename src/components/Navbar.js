import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container">

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">About</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="services" offset={-110}  className="nav-link" href="#">Skills</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="experience" offset={-110}  className="nav-link" href="#">Experience</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="portfolio" offset={-110}  className="nav-link" href="#">Portfolio</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="contact" offset={-110}  className="nav-link" href="#">Contact</Link>
      </li>

    </ul>
    </div>
  </div>
</nav>

    )
}

export default Navbar

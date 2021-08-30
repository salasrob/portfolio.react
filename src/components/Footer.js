import React from 'react';
import { LinkedinIcon } from "react-share";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>The Colony TX, 75056</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:555-555-555">+1(719-649-9596)</a>
                        </div>
                        <div className="d-flex">
                            <a href="mailto:devrobsalas@gmail.com">devrobsalas@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                            <Link smooth={true} to="about" className="nav-link" href="#">About</Link>
                            <Link smooth={true} to="services" className="nav-link" href="#">Skills</Link>
                            </div>
                            <div className="col">
                            <Link smooth={true} to="experience" className="nav-link" href="#">Experience</Link>
                            <Link smooth={true} to="portfolio" className="nav-link" href="#">Portfolio</Link>
                            <Link smooth={true} to="contact" className="nav-link" href="#">Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                           <a href="https://www.linkedin.com/in/robertsalas/"><LinkedinIcon className="mx-3" size={36}/></a>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Robert Salas | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer

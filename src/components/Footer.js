import React from 'react';
import { FacebookShareButton,
        FacebookIcon,
        LinkedinIcon,
        LinkedinShareButton} from "react-share";

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
                            <p>email</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <a className="footer-nav">About me</a>
                                <a className="footer-nav">Services</a>
                                <a className="footer-nav">Home</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experience</a>
                                <a className="footer-nav">Portfolio</a>
                                <a className="footer-nav">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <LinkedinShareButton ur={"url.com"}
                            quote={"Software Engineer"}
                            hashtag="#javascript"/>
                            <LinkedinIcon className="mx-3" size={36}/>
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

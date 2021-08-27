import React from 'react'
import welrus from "../welrus.png"
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

      // Welrus
  const openPopupboxWelrus = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={welrus} alt="Welrus Project..." />
        <p>Welrus is an online platform that enables patients to shop for preventive and routine care services provided at local clinics
nearby.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://welrus.azurewebsites.net/", "_blank")}>https://welrus.azurewebsites.net/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com", "_blank")}>Private</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigWelrus = {
    titleBar: {
      enable: true,
      text: "Welrus Portal"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

 

  

    //TODO: Add portfolio images, add modal for each, Welrus
    return (
        <div className="portfolio-wrapper" id="portfolio">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">
                    Portfolio
                </h1>

                <div className="image-box-wrapper row justify-content-center">

                    <div className="portfolio-image-box" onClick={openPopupboxWelrus}>
                        <img className="portfolio-image" src={welrus} alt="Welrus project.." />
                        <div className="overflow"></div>
                        {/* <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} /> */}
                    </div>


                    {/* - */}
               


                </div>

            </div>
          <PopupboxContainer {...popupboxConfigWelrus} />
     
        </div>
    )
}

export default Portfolio

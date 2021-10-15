import React from 'react'
import welrus from "../Images/welrus.png"
import memories from "../Images/MemoriesReact.png"
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
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://welrus.azurewebsites.net/", "_blank")}>welrus.azurewebsites.net/</a>
    
        <p>Code is proprietary see <b>Github Gists:</b><a className="hyper-link" onClick={() => window.open("https://gist.github.com/salasrob", "_blank")}>gist.github.com/salasrob</a></p> 
        <br />
      </>
    )
    PopupboxManager.open({ content })
  }

  const openPopupboxMemories = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={memories} alt="Memories Project..." />
        <p>React app that records  memories. Built using React, Redux, Express, MongoDB Cloud</p>
        <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/salasrob/memories.react_nodejs_mdb", "_blank")}>github.com/salasrob/memories.react_nodejs_mdb</a>
        <br />
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

  const popupboxConfigMemories = {
    titleBar: {
      enable: true,
      text: "Memories Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }
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
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxMemories}>
                        <img className="portfolio-image" src={memories} alt="Memories project.." />
                        <div className="overflow"></div>
                     
                    </div>
                    {/* - */}
                </div>
            </div>
          <PopupboxContainer {...popupboxConfigWelrus} />
          <PopupboxContainer {...popupboxConfigMemories} />
     
        </div>
    )
}
export default Portfolio

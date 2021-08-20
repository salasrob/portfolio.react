import React from 'react'
import netflix from "../me.jpg"
import {Popup}  from "reactjs-popup";
 import "../../node_modules/reactjs-popup/dist/index.css";

const Portfolio = () => {


//TODO: Add portfolio images, add modal for each, Welrus
    return (
        <div id="portfolio" className="portfolio-wrapper">
                <div className="container">
                    <h1 className="text-uppercase text-center py-5">
                        Portfolio
                    </h1>
                    <div className="image-box-wrapper row justify-content-center">
                        <div className="portfolio-image" onClick={console.log("hello")}>
                            <div className="overflow"></div>
                    
                        <img className="portfolio-image" src={netflix} alt="..."/>
                        
                    </div>
                    <div className="image-box-wrapper row justify-content-center">
                    <div className="overflow"></div>
                        <img className="portfolio-image" src={netflix} alt="..."/>
                    </div>
                    <div className="image-box-wrapper row justify-content-center">
                    <div className="overflow"></div>
                        <img className="portfolio-image" src={netflix} alt="..."/>
                    </div>
                    </div>

                </div>
                <Popup trigger={console.log("hello")} position="center">
                <img className="portfolio-image-popupbox" src={netflix} alt="netflix.."/>
    <p>lorem ispu dolor</p>
    <b>Github:</b>
                    </Popup>
        </div>
    )
}

export default Portfolio

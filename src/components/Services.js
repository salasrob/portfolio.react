import React from 'react'
import react from "../Images/react.png";
import jsLogo from "../Images/jslogo.png";
import net from "../Images/net.png";
import cpp from "../Images/cpp.png";
import csharp from "../Images/csharp.png";

const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">Active Skills</h1>
            <p>These are the skills I actively maintain or am currently working with</p>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 lg-3 col-sm-6">
                        <div className="box">
                            <img src={react} alt='React logo'/>     
                        </div>
                    </div>
                    <div className="col-md-3 lg-3 col-sm-6">
                        <div className="box">
                            <img src={jsLogo} alt='Javascript logo'/>    
                        </div>
                    </div>
                    <div className="col-md-3 lg-3 col-sm-6">
                        <div className="box">
                            <img src={net} alt='.NET logo'/>      
                        </div>
                    </div>
                    <div className="col-md-3 lg-3 col-sm-6">
                        <div className="box">
                            <img src={csharp} alt='C Sharp logo'/>    
                        </div>
                    </div>
                    <div className="col-md-3 lg-3 col-sm-6">
                        <div className="box">
                            <img src={cpp} alt='C Plus Plus logo'/>     
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}
export default Services

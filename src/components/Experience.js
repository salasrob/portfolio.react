import React from 'react'

export const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
            <h1>Experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>2020-2021</h3>
                            <h4>Welrus Inc.</h4>
                            <p>At Welrus I worked as a full stack developer building new features for an MVP using React, .NET Core, and SQL Server</p>
                        </div>
                </div>
             </div> 
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>2021-2022</h3>
                            <h4>Orthofix Inc.</h4>
                            <p>Worked as a full stack developer helping maintain legacy applications and build new API's for our business users</p>
                        </div>
                </div>
             </div>
             <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>2022-Present</h3>
                            <h4>Microsoft</h4>
                            <p>Today I'm helping to build new experiences for Windows OS users</p>
                        </div>
                </div>
             </div>        
        </div>
    )
}
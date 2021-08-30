import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img src={author} alt="photo...." className="profile-img"></img>
                    </div>
                
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About me</h1>
                <p>
                Full Stack Developer currently capable of using JavaScript, C#, and SQL. Experience in React, .NET Core, BASH and Vim. Comfortable working within an Agile/Scrum team, and utilizing platforms such as DBeaver, Microsoft SQL Server Management, VSCode, Visual Studio, Visual Studio for Mac, GitHub, Postman, Testim and JIRA.
                </p>
                </div>
            </div>
        </div>
    )
}
export default AboutMe

import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Software Engineer</h1>
                <Typed
                className="typed-text"
                strings={["React.js", "Javascript" , ".NET Core", "C#", "Node.js", "SQL", "Docker"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <Link smooth={true} to="contacts" href="#" className="btn-main-offer">Contact me</Link>
            </div>
        </div>
    )
}

export default Header

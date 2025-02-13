import React from "react";
import githubicon from "../assets/github-icon.svg";
import linkedinicon from "../assets/linkedin-icon.svg"
import "./Links.css";

const Links: React.FC = () => {
    return (
        <div className="links-container">
            <a href="https://github.com/ito-miyuki" target="_blank">
            <img className="links-img" src={githubicon} alt="GitHub icon" />
            </a>

            <a href="https://www.linkedin.com/in/miyuki-ito/" target="_blank">
            <img className="links-img" src={linkedinicon} alt="LinkedIn icon" />
            </a>
        </div>
    )
}

export default Links;
import React from "react";

import "./Header.css";
import HighlightText from "./HighlightText";
import "./HighlightText.css"

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="name">
                    <span className="highlight">
                        <HighlightText>Miyuki Ito</HighlightText>
                    </span>
                </h1>
                <nav className="nav">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    {/* <a href="#contact">Contact</a> */}
                </nav>
            </div>
        </header>
    )
}

export default Header;
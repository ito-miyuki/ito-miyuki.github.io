import React from "react";
import "./About.css";
import miyuki from "../assets/miyuki_ito.jpg";

const About: React.FC = () => {
    return (
        <section className="about">
            <div className="about-content">
                <div className="about-text">
                    <h2>Hello I'm Miyuki Ito.<br/>Software  <span className="outline-text">Developer</span><br/>Based in Helsinki</h2>
                    <p>
                        Software engineering student at Hive Helsinki, eager to apply problem-solving and development skills to building impactful and user-friendly healthcare technology.
                    </p>
                    <p>
                        When I'm not coding, you can find me playing a guitar or watching Netflix on a couch.
                    </p>
                </div>
                <div className="about-image">
                    <img src={miyuki} alt="Miyuki" />
                </div>
            </div>
        </section>
    )

}

export default About;
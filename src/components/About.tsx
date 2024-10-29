import React from "react";
import "./About.css";
import miyuki from "../assets/miyuki_ito.jpg";

const About: React.FC = () => {
    return (
        <section className="about">
            <div className="about-content">
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>
                        Hello! I'm a passionate web developer with experience in React and modern web technologies. I am currently studying at Hive Helsinki. I love creating intuitive and efficient user interfaces.
                    </p>
                    <p>
                        When I'm not coding, you can find me watching Youtube on a couch.
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
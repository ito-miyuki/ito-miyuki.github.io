import React from "react";
import "./About.css";
import miyuki from "../assets/miyuki-no-bg.png";
import { motion } from "framer-motion";
import Links from "./Links";

const About: React.FC = () => {
    return (
        <section className="about">
            <div className="about-content">
                <div className="about-text">
                    <motion.h2
                    initial={{ scaleX: 0}}
                    animate={{ scaleX: 1}}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        Hello I'm Miyuki.<br/>Software  <span className="outline-text">Developer</span><br/>Based in Helsinki
                    </motion.h2>
                    <p>
                        Software engineering student at Hive Helsinki, always eager to learn and grow. Passionate about problem-solving and creating user-friendly solutions, with a background in growth hacking and a curious mindset.
                    </p>
                    <p>
                        When I'm not coding, you can find me playing a guitar or brewing coffee.
                    </p>
                </div>
                <div className="about-img-links">
                    <img className="profile-img" src={miyuki} alt="Miyuki" />
                    <Links />
                </div>
            </div>
        </section>
    )

}

export default About;
import React, { useEffect, useRef } from "react";
import { annotate, annotationGroup } from "rough-notation";

import "./About.css";
import miyuki from "../assets/miyuki-no-bg.png";
import Links from "./Links";

const About: React.FC = () => {

    const refs = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        const annotations = refs.current.map((el) => {
            if (!el) return null;
            return annotate(el, {
                type: "underline",
                color: "pink",
                animationDuration: 1000,
            });
        }).filter(Boolean); // `null` を削除

        const group = annotationGroup(annotations as any);
        group.show(); // 一括でアニメーションを適用
    }, []);

    return (
        <section className="about">
            <div className="about-content">
                <div className="about-text">
                    <h2>
                        <span className="thinner-text">Hello I'm</span> Miyuki<br/>Software <span className="outline-text">Developer</span><br/><span className="thinner-text">Based in </span>Helsinki
                    </h2>
                    <p>
                        Software engineering student at <span ref={(el) => (refs.current[0] = el)}>Hive Helsinki</span>, always eager to learn and grow. Passionate about <span ref={(el) => (refs.current[1] = el)}>problem-solving</span> and creating user-friendly solutions, with a background in growth hacking and a <span ref={(el) => (refs.current[2] = el)}>curious mindset</span>.
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
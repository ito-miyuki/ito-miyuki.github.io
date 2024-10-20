import React from "react"
import "./Projects.css"
import project1 from "../assets/miyuki_ito.jpg"
import project2 from "../assets/miyuki_ito.jpg"
import project3 from "../assets/miyuki_ito.jpg"
import project4 from "../assets/miyuki_ito.jpg"

const Projects: React.FC = () => {
    const projects = [
        {
            title: "example1",
            description: "add description here1",
            imageUrl: project1
        },
        {
            title: "example2",
            description: "add description here1",
            imageUrl: project2
        },
        {
            title: "example3",
            description: "add description here1",
            imageUrl: project3
        },
        {
            title: "example4",
            description: "add description here1",
            imageUrl: project4
        },
    ]
    return (
        <section id="projects" className="projects">
            <div className="projects-content">
                <h2>My Projects</h2>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <img src={project.imageUrl} alt={project.title} />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;
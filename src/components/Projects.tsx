import React from "react"
import "./Projects.css"
import project1 from "../assets/C_Language_Logo.jpg"
import project2 from "../assets/cub3d.jpeg"
import project3 from "../assets/bash.jpg"
import project4 from "../assets/solong.jpeg"

const Projects: React.FC = () => {
    const projects = [
        {
            title: "Capybara maze",
            description: "2D capybara game in C++ with SFML",
            imageUrl: project4,
            link: "https://github.com/ito-miyuki/solong-cpp"
        },
        {
            title: "minishell",
            description: "create shell in C",
            imageUrl: project3,
            link: "https://github.com/ito-miyuki/minishell"
        },
        {
            title: "cub3D",
            description: "3D game built in C with raycasting",
            imageUrl: project2,
            link: "https://github.com/ito-miyuki/cub3d"
        },
        {
            title: "Libft",
            description: "The imitation of functions in the C library",
            imageUrl: project1,
            link: "https://github.com/ito-miyuki/libft"
        },
    ]
    return (
        <section id="projects" className="projects">
            <div className="projects-content">
                <h2>My Projects</h2>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <a href={project.link} key={index} className="project-card" target="_blank" rel="noopener noreferrer">
                            <div>
                                <img src={project.imageUrl} alt={project.title} />
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </a>

                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;
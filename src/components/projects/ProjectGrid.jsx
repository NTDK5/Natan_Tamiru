// src/components/projects/ProjectGrid.jsx
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ viewMode }) => {
    const projects = [
        {
            id: 1,
            title: "Dorze Tours Agency Website",
            description: "A full-featured tourism website with online booking, PayPal integration, and admin tools for managing tours and customer inquiries.",
            image: "/projects/Dorze Tours.png",
            technologies: ["MERN Stack", "Payment Integration", "Admin Dashboard"],
            links: {
                demo: "https://www.dorzetours.com/",
                github: "https://github.com/NTDK5/Dorze_Tours_Mern_Project"
            }
        },
        {
            id: 2,
            title: "Mickias Girma Portfolio Website",
            description: "A clean, responsive personal portfolio showcasing skills, projects, and experience using modern web design principles.",
            image: "/projects/mickias_girma.png",
            technologies: ["UI/UX", "React", "Git"],
            links: {
                demo: "https://mickias-portfolio.netlify.app/",
                github: "https://github.com/NTDK5/Mickias-Girma"
            }
        },
        {
            id: 3,
            title: "Eccomerce Client",
            description: "An ecommerce platform supporting product browsing, cart management, secure checkout, and admin inventory control.",
            image: "/projects/eccomerce_client.png",
            technologies: ["MERN", "Ecommerce", "Admin Dashboard"],
            links: {
                demo: "https://ecommerce-client-fmo2.onrender.com/",
                github: "https://github.com/NTDK5/Ecommerce_Client"
            }
        },
        {
            id: 4,
            title: "Portfolio Website",
            description: "A visually appealing personal site built to highlight design skills and professional background using React and Bootstrap.",
            image: "/projects/portfolio.png",
            technologies: ["React", "Bootstrap Design", "Figma"],
            links: {
                demo: "https://ntdk5.github.io/portfolio-website/",
                github: "https://github.com/yourusername/project4"
            }
        },
        {
            id: 5,
            title: "FilmNet Movie Website",
            description: "A dynamic movie platform allowing users to browse, search, and discover films using modern frontend technologies.",
            image: "/projects/Filmnet.png",
            technologies: ["Rest Api", "Next Js", "Tailwind"],
            links: {
                demo: "https://filmnet-drab.vercel.app/",
                github: "https://github.com/NTDK5/filmnet"
            }
        },
        {
            id: 6,
            title: "Recipe4urMeal Website",
            description: "A recipe-sharing web app that allows users to discover, post, and save meal ideas with a responsive, modern UI.",
            image: "/projects/Recipe.png",
            technologies: ["REst Api", "Tailwind", "JavaScript"],
            links: {
                demo: "https://mern-recipe-app-xr40.onrender.com/",
                github: "https://github.com/NTDK5/mern-recipe-app-frontend"
            }
        }
    ];

    return (
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-8'}>
            {projects.map((project, index) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    viewMode={viewMode}
                />
            ))}
        </div>
    );
};

export default ProjectGrid;
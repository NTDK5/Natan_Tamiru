// src/components/home/FeaturedProjects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const FeaturedProjects = () => {
    // Sample featured projects
    const featuredProjects = [
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
    ];

    return (
        <section className="py-16 px-4 md:px-6 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                            Featured Projects
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                            Explore some of my recent mechanical engineering projects and innovations.
                        </p>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 md:mt-0"
                    >
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 px-4 py-2 text-primary-dark dark:text-primary-light font-medium hover:underline"
                        >
                            View All Projects <FiArrowRight />
                        </Link>
                    </motion.div>
                </div>

                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    pagination={{ clickable: true }}
                    navigation
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="project-swiper"
                >
                    {featuredProjects.map((project, index) => (
                        <SwiperSlide key={project.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-full"
                            >
                                <div className="relative overflow-hidden group h-48">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <div className="p-4 w-full flex justify-end space-x-2">
                                            {project.links.demo && (
                                                <a
                                                    href={project.links.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                                                    aria-label="View demo"
                                                >
                                                    <FiExternalLink size={18} />
                                                </a>
                                            )}
                                            {project.links.github && (
                                                <a
                                                    href={project.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                                                    aria-label="View code"
                                                >
                                                    <FiGithub size={18} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default FeaturedProjects;
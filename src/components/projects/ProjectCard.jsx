// src/components/projects/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project, index, viewMode }) => {
    const { title, description, image, technologies, links } = project;

    if (viewMode === 'grid') {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
                <div className="relative overflow-hidden group">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-56 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full flex justify-end space-x-2">
                            {links.demo && (
                                <a
                                    href={links.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                                    aria-label="View demo"
                                >
                                    <FiExternalLink size={18} />
                                </a>
                            )}
                            {links.github && (
                                <a
                                    href={links.github}
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
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, i) => (
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
        );
    }

    // List view
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
        >
            <div className="md:w-1/3 relative overflow-hidden group">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-56 md:h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <div className="p-6 md:w-2/3 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex space-x-3">
                    {links.demo && (
                        <a
                            href={links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-primary-dark dark:bg-primary-light text-white dark:text-gray-900 rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
                        >
                            View Project <FiExternalLink />
                        </a>
                    )}
                    {links.github && (
                        <a
                            href={links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            View Code <FiGithub />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
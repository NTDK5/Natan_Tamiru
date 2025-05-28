// src/pages/Projects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectGrid from '../components/projects/ProjectGrid';
import { FiGrid, FiList } from 'react-icons/fi';

const Projects = () => {
    const [viewMode, setViewMode] = useState('grid');

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-24 pb-16 px-4 md:px-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
                            My Projects
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                            Explore my portfolio of software engineering projects, from web applications to system designs.
                        </p>
                    </div>

                    <div className="flex gap-2 mt-4 md:mt-0">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-lg ${viewMode === 'grid'
                                    ? 'bg-primary-dark dark:bg-primary-light text-white dark:text-gray-900'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            <FiGrid size={20} />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-lg ${viewMode === 'list'
                                    ? 'bg-primary-dark dark:bg-primary-light text-white dark:text-gray-900'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            <FiList size={20} />
                        </button>
                    </div>
                </div>

                <ProjectGrid viewMode={viewMode} />
            </div>
        </motion.div>
    );
};

export default Projects;
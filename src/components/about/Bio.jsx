// src/components/about/Bio.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiAward, FiClock, FiCode } from 'react-icons/fi';

const Bio = () => {
    const stats = [
        { icon: <FiClock />, value: '5+', label: 'Years Experience' },
        { icon: <FiAward />, value: '20+', label: 'Projects Completed' },
        { icon: <FiCode />, value: '10+', label: 'Technologies' }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
            <div className="md:flex">
                <div className="md:w-2/5 relative">
                    <img
                        src="/profile-image.jpg"
                        alt="John Doe - Mechanical Engineer"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:hidden"></div>
                </div>

                <div className="p-6 md:p-8 md:w-3/5">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        I'm a Experienced software engineer and web designer with a passion for building innovative, user-centric
                        digital solutions. Proficient in a wide range of programming languages and web development
                        frameworks, with a keen eye for design and a strong background in problem-solving and project
                        management. Adept at collaborating with cross-functional teams to deliver high-quality, impactful
                        products that exceed client expectations.
                    </p>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        My approach combines technical knowledge with creative problem-solving to develop innovative solutions that are both functional and aesthetically pleasing. I'm proficient in CAD software, FEA analysis, and have a strong understanding of manufacturing processes.
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                            >
                                <div className="text-primary-dark dark:text-primary-light text-xl mb-2 flex justify-center">
                                    {stat.icon}
                                </div>
                                <div className="text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary-dark dark:bg-primary-light text-white dark:text-gray-900 rounded-lg font-medium hover:bg-primary-dark/90 dark:hover:bg-primary-light/90 transition-colors"
                    >
                        Download Resume <FiDownload />
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

export default Bio;
// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Bio from '../components/about/Bio';
import SkillsBar from '../components/about/SkillsBar';
import Timeline from '../components/experience/Timeline';

const About = () => {
    // Sample skills data
    const skills = [
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'React.js', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Docker', level: 65 },
        { name: 'Kubernetes', level: 60 }
    ];

    const experiences = [
        {
            title: "Freelance Web Developer",
            location: "Remote",
            period: "2024 - Present",
            description: "Collaborated with clients worldwide to build responsive and user-friendly web applications.",
            achievements: [
                "Designed and developed full-stack applications using React, Node.js, MongoDB, and Express",
                "Implemented payment gateways (e.g., **PayPal**) and booking systems for service-based businesses.",
                "Worked on SEO optimization, performance tuning, and mobile-first design."
            ]
        },
        {
            title: "Software Engineer",
            company: "ICOG Acc",
            location: "Addis Ababa, Ethiopia",
            period: "Feb 2023 - 2024",
            description: "Developed full-stack web applications and RESTful APIs",
            achievements: [
                " Monitored participant workflow and behaviors throughout training process",
                "Scheduled and taught in class and online courses to increase learning opportunities",
                "Performed continuous evaluations of content and plans to enhance delivery and improve effectiveness"
            ]
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-24 pb-16 px-4 md:px-6"
        >
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        About Me
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Learn more about my journey as a software engineer and my passion for building scalable systems.
                    </p>
                </div>

                <div className="space-y-12">
                    <Bio />

                    <SkillsBar skills={skills} />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Professional Experience</h3>
                        <Timeline experiences={experiences} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Education & Certifications</h3>

                        <div className="space-y-6">
                            <div className="border-l-4 border-primary-light dark:border-primary-dark pl-4 py-2">
                                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Bachelor of Science: Electromechanical Engineering</h4>
                                <p className="text-gray-600 dark:text-gray-300">Addis Ababa Science And Technology University | 2020 - 2025</p>
                                <p className="text-gray-600 dark:text-gray-300 mt-2">
                                    Proficiency in electrical systems and circuits & Knowledge of mechanical systems and principles
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
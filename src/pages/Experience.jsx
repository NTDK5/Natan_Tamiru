// src/pages/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '../components/experience/Timeline';

const Experience = () => {
    // Sample experience data
    const experiences = [
        {
            title: "Senior Software Engineer",
            company: "Tech Solutions Inc.",
            location: "San Francisco, CA",
            period: "2020 - Present",
            description: "Leading development of enterprise-level web applications and microservices",
            achievements: [
                "Architected scalable backend systems handling 1M+ daily requests",
                "Implemented CI/CD pipelines reducing deployment time by 50%",
                "Mentored junior developers and conducted code reviews"
            ]
        },
        {
            title: "Software Engineer",
            company: "Innovate Tech",
            location: "New York, NY",
            period: "2017 - 2020",
            description: "Developed full-stack web applications and RESTful APIs",
            achievements: [
                "Built real-time collaboration features for project management tool",
                "Optimized database queries reducing response time by 40%",
                "Implemented automated testing suite increasing code coverage to 90%"
            ]
        },
        {
            title: "Mechanical Engineer Intern",
            company: "Boeing",
            location: "Seattle, WA",
            period: "Summer 2016",
            description: "Assisted in the design and analysis of aircraft components using CAD and FEA tools.",
            achievements: [
                "Performed stress analysis on critical aircraft components",
                "Participated in design review meetings with senior engineers",
                "Created detailed technical documentation for manufacturing teams"
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
                        Professional Experience
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        A timeline of my professional journey in software engineering and key achievements.
                    </p>
                </div>

                <Timeline experienc es={experiences} />
            </div>
        </motion.div>
    );
};

export default Experience;
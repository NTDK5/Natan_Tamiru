// src/components/about/SkillsBar.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillBar = ({ skill, level, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className="mb-6">
            <div className="flex justify-between items-center mb-2">
                <h4 className="text-gray-800 dark:text-white font-medium">{skill}</h4>
                <span className="text-sm text-gray-600 dark:text-gray-400">{level}%</span>
            </div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark rounded-full"
                />
            </div>
        </div>
    );
};

const SkillsBar = ({ skills }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Technical Skills</h3>

            <div>
                {skills.map((skill, index) => (
                    <SkillBar
                        key={skill.name}
                        skill={skill.name}
                        level={skill.level}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default SkillsBar;
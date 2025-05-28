// src/components/experience/Timeline.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const TimelineItem = ({ experience, index, isLast }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { title, company, location, period, description, achievements } = experience;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 pb-12"
        >
            {/* Timeline line */}
            {!isLast && (
                <div className="absolute left-0 top-0 h-full w-px bg-gray-300 dark:bg-gray-700"></div>
            )}

            {/* Timeline dot */}
            <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary-light dark:bg-primary-dark border-4 border-white dark:border-gray-900 -translate-x-1/2"></div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-wrap justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
                    <span className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/20 text-primary-dark dark:text-primary-light rounded-full text-sm flex items-center gap-1 mt-1 md:mt-0">
                        <FiCalendar size={14} /> {period}
                    </span>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-1">
                        <FiBriefcase size={16} /> {company}
                    </div>
                    <div className="flex items-center gap-1">
                        <FiMapPin size={16} /> {location}
                    </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

                {achievements && achievements.length > 0 && (
                    <div>
                        <h4 className="font-medium text-gray-800 dark:text-white mb-2">Key Achievements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                            {achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

const Timeline = ({ experiences }) => {
    return (
        <div className="py-8">
            {experiences.map((experience, index) => (
                <TimelineItem
                    key={index}
                    experience={experience}
                    index={index}
                    isLast={index === experiences.length - 1}
                />
            ))}
        </div>
    );
};

export default Timeline;
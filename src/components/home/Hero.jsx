// src/components/home/Hero.jsx
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import AnimatedText from '../AnimatedText';
import Lottie from 'lottie-react';
import engineeringAnimation from '../../data/animation/engineering.json';

const Hero = () => {
    const [cursorPosition] = useState({ x: 0, y: 0 });
    const [isHovering] = useState(false);
    const lottieRef = useRef(null);

    return (
        <section className="min-h-screen flex items-center pt-20 pb-16 px-4 md:px-6">
            {/* Cursor animation */}
            <motion.div
                className="fixed w-8 h-8 bg-primary-dark/20 dark:bg-primary-light/20 rounded-full pointer-events-none"
                style={{
                    left: cursorPosition.x,
                    top: cursorPosition.y,
                    transform: 'translate(-50%, -50%)'
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 1 : 0
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            />

            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="order-2 lg:order-1"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
                            <span className="block">Hi, I'm</span>
                            <span className="text-primary-dark dark:text-primary-light">
                                <AnimatedText
                                    texts={[
                                        "Natan Tamiru",
                                        "a Software Engineer",
                                        "Full Stack Developer",
                                        "UI/UX Designer",
                                        "a Trainer"
                                    ]}
                                />
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                            Specialized in building scalable web applications, designing efficient systems, and creating seamless user experiences.
                        </p>

                        <div className="flex gap-4">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="/Natan_Tamiru_Resume.pdf"
                                download
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-dark dark:bg-primary-light text-white dark:text-gray-900 rounded-lg font-medium"
                            >
                                Download Resume <FiDownload />
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#projects"
                                className="inline-flex items-center gap-2 px-6 py-3 text-primary-dark dark:text-primary-light font-medium hover:underline"
                            >
                                View Projects <FiArrowRight />
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="order-1 lg:order-2 flex justify-center"
                        whileHover={{
                            scale: 1.1,
                            rotate: 5,
                            transition: { type: 'spring', stiffness: 300, damping: 10 }
                        }}
                    >
                        <div className="w-full max-w-md relative group">
                            <Lottie
                                lottieRef={lottieRef}
                                animationData={engineeringAnimation}
                                loop
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

// src/components/common/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiLinkedin, FiGithub, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-gray-800 shadow-inner pt-12 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <Link to="/" className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-4 inline-block">
                            Natan<span className="text-secondary-light">Tamiru</span>
                        </Link>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            I'm a Experienced software engineer and web designer with a passion for building innovative, user-centric digital solutions.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-primary-dark dark:hover:text-primary-light transition-colors"
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin size={20} />
                            </a>
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-primary-dark dark:hover:text-primary-light transition-colors"
                                aria-label="GitHub"
                            >
                                <FiGithub size={20} />
                            </a>
                            <a
                                href="https://twitter.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-primary-dark dark:hover:text-primary-light transition-colors"
                                aria-label="Twitter"
                            >
                                <FiTwitter size={20} />
                            </a>
                            <a
                                href="mailto:your.email@example.com"
                                className="text-gray-600 dark:text-gray-400 hover:text-primary-dark dark:hover:text-primary-light transition-colors"
                                aria-label="Email"
                            >
                                <FiMail size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" className="text-gray-600 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light transition-colors">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Contact Info</h3>
                        <address className="not-italic text-gray-600 dark:text-gray-300 space-y-2">
                            <p>Addis Ababa, Ethiopia</p>
                            <p>
                                <a href="mailto:your.email@example.com" className="hover:text-primary-dark dark:hover:text-primary-light transition-colors">
                                    natantamiru18@example.com
                                </a>
                            </p>
                            <p>
                                <a href="tel:+11234567890" className="hover:text-primary-dark dark:hover:text-primary-light transition-colors">
                                    +251-986-890-291
                                </a>
                            </p>
                        </address>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
                    <p className="flex items-center justify-center gap-1">
                        © {currentYear} Natan Tamiru. Made with <FiHeart className="text-red-500" /> using React.js
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
// src/components/contact/SocialLinks.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMail, FiTwitter, FiYoutube } from 'react-icons/fi';

const SocialLinks = () => {
    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: <FiLinkedin size={24} />,
            url: 'https://www.linkedin.com/in/nathan-tamiru-30847326b/',
            color: 'bg-[#0077B5] hover:bg-[#0077B5]/90'
        },
        {
            name: 'GitHub',
            icon: <FiGithub size={24} />,
            url: 'https://github.com/NTDK5',
            color: 'bg-[#333] hover:bg-[#333]/90'
        },
        {
            name: 'Email',
            icon: <FiMail size={24} />,
            url: 'natantamiru18@example.com',
            color: 'bg-[#EA4335] hover:bg-[#EA4335]/90'
        },
        {
            name: 'Twitter',
            icon: <FiTwitter size={24} />,
            url: 'https://twitter.com/yourusername',
            color: 'bg-[#1DA1F2] hover:bg-[#1DA1F2]/90'
        },
        {
            name: 'YouTube',
            icon: <FiYoutube size={24} />,
            url: 'https://youtube.com/c/yourusername',
            color: 'bg-[#FF0000] hover:bg-[#FF0000]/90'
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8"
        >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Connect With Me</h3>

            <div className="space-y-4">
                {socialLinks.map((link, index) => (
                    <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className={`flex items-center gap-4 p-4 rounded-lg ${link.color} text-white transition-all`}
                    >
                        <span className="text-white">{link.icon}</span>
                        <span className="font-medium">{link.name}</span>
                    </motion.a>
                ))}
            </div>

            <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-600 dark:text-gray-300 text-center">
                    Feel free to reach out for collaborations, job opportunities, or just to say hello!
                </p>
            </div>
        </motion.div>
    );
};

export default SocialLinks;
import React from 'react';
import { motion } from 'framer-motion';
import useTheme from '../hooks/useTheme';
import TechStack from './TechStack';

const About = () => {
    const { darkMode } = useTheme();

    return (
        <>
            <section
                className={`min-h-screen py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-8 ${darkMode ? 'bg-[#0a192f] text-white' : 'bg-white text-black'
                    }`}
            >
                {/* Left Side: Image */}
                <motion.div
                    className="w-full md:w-5/12 flex justify-center h-full md:justify-end mb-8 md:mb-0"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                        alt="About Me"
                        className="w-72 h-96 md:w-80 lg:w-96 object-cover rounded-lg shadow-lg"
                    />
                </motion.div>

                {/* Right Side: Text Content */}
                <motion.div
                    className="w-full md:w-7/12 text-center md:text-left relative"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                  
        

                    <motion.h2
                        className={`text-3xl md:text-5xl font-bold leading-tight mb-4  ${darkMode ? 'text-white' : 'text-black'
                            }`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        A Passionate <br /> Software Developer
                    </motion.h2>

                    <motion.p
                        className={`text-gray-300 mb-6 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0 ${darkMode ? 'text-gray-400' : 'text-gray-800'
                            }`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Hi, I’m Meet Upadhyay, a fullstack developer with 3+ years of experience in building modern web applications. I design responsive user interfaces and develop scalable backend systems, creating seamless digital experiences. Passionate about coding and problem-solving, I constantly explore new technologies to build impactful solutions.
                    </motion.p>

                    <motion.p
                        className={`text-gray-300 mb-6 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0 ${darkMode ? 'text-gray-400' : 'text-gray-800'
                            }`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        As a full-stack developer, I build seamless, high-performance applications using a versatile stack including React.js, Next.js, JavaScript, TypeScript, Redux, Node.js, Express.js, Python, Django, MongoDB, SQL, and PostgreSQL. I’m passionate about delivering scalable solutions that bridge beautiful frontend experiences with robust backend systems.
                    </motion.p>
                </motion.div>

            </section>
        </>
    );
};

export default About;

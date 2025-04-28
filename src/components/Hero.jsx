import React from 'react';
import { motion } from 'framer-motion';
import useTheme from '../hooks/useTheme';

const Hero = () => {
  const { darkMode } = useTheme();

  return (
    <section className={`flex flex-col items-start  justify-center w-full min-h-screen px-6 md:px-12 lg:px-24 ${darkMode ? 'bg-[#0a192f]' : 'bg-white'}`}>
      <motion.p
        className={`${darkMode ? "text-[#64ffda]" : "text-green-600"} mb-4 text-[16px] md:text-base font-mono`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        className={`text-4xl md:text-6xl font-bold mb-2 ${darkMode ? "text-[#ccd6f6]" : "text-black"}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Meet Upadhyay.
      </motion.h1>

      <motion.h2
        className={`text-3xl md:text-5xl font-bold mb-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        I build things for the web.
      </motion.h2>

      <motion.p
        className={`max-w-xl mb-8 ${darkMode ? "text-gray-400" : "text-gray-700"}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
      </motion.p>

      <motion.a
        href="mailto:meetu551@gmail.com"
        className={`px-6 py-3 rounded font-semibold transition duration-300 border ${darkMode ? "border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f]" : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        Get In Touch
      </motion.a>
    </section>
  );
};

export default Hero;

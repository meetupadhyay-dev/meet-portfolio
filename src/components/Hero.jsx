import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen px-6 md:px-12 lg:px-24 text-center md:text-left">
      <motion.p
        className="text-cyan-400 mb-4 text-lg md:text-xl font-mono"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-2 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Meet Upadhyay
      </motion.h1>

      <motion.h2
        className="text-2xl md:text-5xl font-bold mb-6 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        I build things for the web
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mb-8 leading-relaxed text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        I'm a passionate software engineer with expertise in developing scalable web applications  and creating impactful digital solutions. 
      </motion.p>

      <motion.a
        href="mailto:meetu551@gmail.com"
        className="inline-block px-6 py-3 text-sm font-semibold border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition-colors duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
       Let's Build Something Together
      </motion.a>
    </section>
  );
};

export default Hero;

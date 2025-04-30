import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen px-6 md:px-12 lg:px-24 text-center md:text-left">
      <motion.p
        className="text-[#8B949E] mb-4 font-mono text-sm md:text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        className="mb-2 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Meet Upadhyay
      </motion.h1>

      <motion.h2
        className="mb-6 text-2xl sm:text-3xl md:text-4xl font-bold text-[#E6EDF3]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        I build things for the web
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mb-8 leading-relaxed text-[#C9D1D9] text-sm sm:text-base md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        I'm a passionate software engineer with expertise in developing scalable web applications and creating impactful digital solutions.
      </motion.p>

      <motion.a
        href="mailto:meetu551@gmail.com"
        className="inline-block px-6 py-3 text-sm font-semibold border border-[#58A6FF] text-[#58A6FF] rounded hover:bg-[#58A6FF] hover:text-black transition-colors duration-300"
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

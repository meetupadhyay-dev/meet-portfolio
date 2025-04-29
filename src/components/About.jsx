import React from 'react';
import { profile } from '../assets';


const About = () => {

    return (
        <section className="min-h-screen bg-primary text-white py-16 px-3 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Side: Image */}
            <div className="w-full md:w-5/12 flex justify-center h-full md:justify-end">
                <img
                    src={profile}
                    alt="About Me"
                    className="w-72 h-96 md:w-80 lg:w-96 object-cover rounded-lg shadow-lg"
                />
            </div>
            {/* Right Side: Text Content */}
            <div className="w-full md:w-7/12 text-center md:text-left relative">
                {/* Vertical Text */}
                <div className="absolute left-[40%] -top-6 md:-left-16  lg:top-0 md:top-6 rotate-0 md:rotate-[-90deg] text-sm tracking-widest">
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-16 h-[2px] bg-white" />
                        <p>MORE ABOUT</p>
                    </div>
                </div>
                {/* Main Heading */}
                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 pl-10">
                    A Passionate <br /> Software Developer 
                </h2>
                {/* Description */}
                <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
                I’m Meet Upadhyay, a passionate Software Developer with over 3 years of experience in building high-quality web applications. Specializing in MERN stack development and Python, I focus on creating user-friendly, scalable, and accessible digital products. With expertise in frontend development, state management, API integration, and building robust backend systems, I transform ideas into impactful solutions. Alongside my professional experience, I’ve successfully completed several freelancing projects, helping clients bring their unique concepts to life.
                </p>

            </div>
        </section>

    );
};

export default About;

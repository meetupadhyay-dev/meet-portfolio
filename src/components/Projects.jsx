import React, { useState } from 'react';
// import { projectImage1, projectImage2, projectImage3 } from '../assets'; // Import your project images

const Project = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const projects = [
    {
      image: "",
      title: 'Project Title 1',
      description: 'This is a brief description of Project 1. It showcases my skills in using the MERN stack and demonstrates my ability to create scalable, dynamic web applications.',
    },
    {
      image: "",
      title: 'Project Title 2',
      description: 'This project demonstrates my expertise in Python and backend API development. It\'s designed to provide users with a seamless experience and efficient functionality.',
    },
    {
      image: "",
      title: 'Project Title 3',
      description: 'This project integrates multiple APIs and features complex functionalities, demonstrating my proficiency in full-stack development and problem-solving.',
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="min-h-screen bg-[#161B22] py-16 px-4 lg:px-20 flex flex-col items-center justify-center gap-10">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-[#E6EDF3] leading-tight mb-6 md:mb-8 pl-4 md:pl-10">
        Some of My Recent Projects
      </h2>

      {/* Carousel */}
      <div className="relative w-full md:w-5/12 flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
        {/* Left Side: Project Image */}
        <div className="w-full md:w-5/12 flex justify-center md:justify-end">
          <img
            src={projects[currentSlide].image}
            alt={`Project ${currentSlide + 1}`}
            className="w-72 h-96 md:w-80 lg:w-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Right Side: Project Details */}
        <div className="w-full md:w-7/12 text-center md:text-left relative">
          {/* Vertical Label */}
          <div className="absolute left-[35%] -top-6 md:-left-20 md:top-8 md:rotate-[-90deg] text-xs tracking-widest text-[#58A6FF]">
            <div className="flex items-center justify-center gap-2">
              <div className="w-14 h-[1px] bg-[#58A6FF]" />
              <p className="uppercase font-mono">Project {currentSlide + 1}</p>
            </div>
          </div>

          {/* Project Title */}
          <h3 className="text-2xl md:text-4xl font-bold text-[#E6EDF3] leading-tight mb-4 md:mb-6">
            {projects[currentSlide].title}
          </h3>

          {/* Project Description */}
          <p className="text-[#8B949E] max-w-2xl mx-auto md:mx-0 text-sm md:text-base leading-relaxed">
            {projects[currentSlide].description}
          </p>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#58A6FF] text-4xl p-2"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#58A6FF] text-4xl p-2"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Project;

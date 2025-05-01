import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { projects } from '../utils/data/projects';

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#161B22] py-16 px-4 lg:px-20 relative"
    >
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        spaceBetween={30}
        slidesPerView={1}
        loop
        className="w-full"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12 py-8">
              {/* Left: Project Content */}
              <div className="w-full md:w-7/12 text-center md:text-left relative">
                <div className="absolute left-[35%] -top-6 md:-left-20 md:top-8 md:rotate-[-90deg] text-xs tracking-widest text-[#58A6FF] mt-[-35px]">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-14 h-[1px] bg-[#58A6FF]" />
                    <p className="uppercase font-mono">Featured Work</p>
                  </div>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-[#E6EDF3] leading-tight mb-6 md:mb-8 pl-4 md:pl-10">
                  {project.title}
                </h2>

                <p className="text-[#8B949E] max-w-2xl mx-auto md:mx-0 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mt-4 pl-4 md:pl-10">
                  {project.techStack?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[#30363D] text-xs px-3 py-1 rounded-full text-[#58A6FF] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 ml-4 md:ml-10 px-6 py-2 border border-[#58A6FF] text-[#58A6FF] rounded hover:bg-[#58A6FF] hover:text-[#0D1117] transition duration-300"
                >
                View Project
                </a>
              </div>

              {/* Right: Image */}
              <div className="w-full md:w-5/12 flex justify-center md:justify-end">
                <a href={project.liveLink} target='_blank'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-72 h-96 md:w-80 lg:w-96 object-cover rounded-xl shadow-lg"
                  />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Navigation Arrows */}
      <div className="swiper-button-prev !text-[#58A6FF] !left-4 md:!left-8 z-10"></div>
      <div className="swiper-button-next !text-[#58A6FF] !right-4 md:!right-8 z-10"></div>
    </section>
  );
};

export default Projects;


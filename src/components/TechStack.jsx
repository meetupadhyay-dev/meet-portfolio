import { useState } from 'react';
import useTheme from '../hooks/useTheme';
import { skills, tools } from '../utils/data/techstack';

const TechStack = () => {
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('skills');

  const dataToRender = activeTab === 'skills' ? skills : tools;

  return (
    <section className="min-h-screen w-full md:px-8 xl:px-20 text-white bg-primary flex items-center">
      <div className="flex container flex-col md:flex-row items-center md:items-start gap-16 w-full">
        {/* Left Side */}
        <div className="w-full md:w-1/2 relative p-6 sm:px-28 md:p-0">
          <div className="text-white p-6 pl-10 pr-20 sm:pl-10 lg:pr-20">
            <div className="absolute -left-4 sm:left-16 top-20 sm:top-24 md:-left-12 xl:-left-16 md:top-16 xl:top-24 rotate-[-90deg] text-sm tracking-widest flex flex-row justify-start gap-2">
              <div className="xl:w-16 md:w-10 sm:w-8 w-8 h-[2px] bg-white mt-2 mx-auto" />
              <p>All Skills</p>
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold leading-tight">
              Explore My Expertise &amp; Tech Stack
            </h2>
          </div>
          <p className="p-3 text-gray-400 text-sm leading-relaxed">
            These are the tools and technologies I use daily to build modern, high-performance web applications. With a solid foundation in both frontend and backend development, I prioritize delivering clean, maintainable code and creating intuitive, user-centric experiences. My expertise spans the MERN stack, Python, and various modern web technologies, allowing me to craft robust, scalable solutions. I’m also committed to continuous learning, always exploring new tools and technologies to stay at the forefront of the industry.
          </p>
          <span className="py-4 px-2 space-x-2 rounded-lg bg-secondary shadow-lg">
            <button
              onClick={() => setActiveTab('skills')}
              className={`rounded-lg px-4 py-2 transition-all duration-300 ${
                activeTab === 'skills' ? 'bg-blue-500 text-white' : 'bg-transparent text-gray-300'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`rounded-lg px-4 py-2 transition-all duration-300 ${
                activeTab === 'tools' ? 'bg-blue-500 text-white' : 'bg-transparent text-gray-300'
              }`}
            >
              Tools
            </button>
          </span>
        </div>

        {/* Right Side (Dynamic Icons Grid) */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {dataToRender.map(({ name, icon: Icon }) => (
              <div key={name} className="text-center">
                <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                  <span className="text-4xl"><Icon /></span>
                  <p className="text-xs mt-2">{name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

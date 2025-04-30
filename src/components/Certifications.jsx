import React from 'react';
import { namasteReact } from '../assets';
import { certifications } from '../utils/data/certifications';

const Certifications = () => {
 

  return (
    <section className="min-h-screen bg-[#161B22] py-16 px-4 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">

      <div className="w-full md:w-5/12 flex justify-center md:justify-end">
        <img
          src={namasteReact}
          alt="Certification"
          className="w-72 h-96 md:w-80 lg:w-96 object-cover rounded-xl shadow-lg"
        />
      </div>

      <div className="w-full md:w-7/12 text-center md:text-left relative">

        <div className="absolute left-[35%] -top-6 md:-left-20 md:top-8 md:rotate-[-90deg] text-xs tracking-widest text-[#58A6FF]">
          <div className="flex items-center justify-center gap-2">
            <div className="w-14 h-[1px] bg-[#58A6FF]" />
            <p className="uppercase font-mono">My Certifications</p>
          </div>
        </div>


        <h2 className="text-3xl md:text-5xl font-bold text-[#E6EDF3] leading-tight mb-6 md:mb-8 pl-4 md:pl-10">
          Empowering My Skills with Certifications
        </h2>

        <p className="text-[#8B949E] max-w-2xl mx-auto md:mx-0 text-sm md:text-base leading-relaxed">
          I’ve earned several certifications that validate my expertise and dedication to continuous learning. These certifications cover various areas of the development lifecycle, from front-end design to backend technologies and cloud solutions. Some of my notable certifications include:
        </p>


        <ul className="list-disc text-[#8B949E] max-w-2xl mx-auto md:mx-0 text-sm md:text-base mt-6 space-y-2 md:list-none">
          {certifications.map((cert, index) => (
            <li key={index} className="font-semibold">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#58A6FF] hover:underline"
              >
                {cert.title} ({cert.date})
              </a>
              <p className="text-[#8B949E] text-sm">Platform: {cert.platform}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;

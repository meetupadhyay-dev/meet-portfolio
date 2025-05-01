import React from 'react';
import { email } from '../assets';

const Contact = () => {
  return (
    <section className="lg:min-h-screen md:height-[400px] py-16 px-4 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">

      <div className="w-full md:w-7/12 text-center md:text-left relative">

        <div className="absolute left-[35%] -top-6 md:-left-20 md:top-8 md:rotate-[-90deg] text-xs tracking-widest text-[#58A6FF]">
          <div className="flex items-center justify-center gap-2">
            <div className="w-14 h-[1px] bg-[#58A6FF]" />
            <p className="uppercase font-mono">Contact</p>
          </div>
        </div>


        <h2 className="text-3xl md:text-5xl font-bold text-[#E6EDF3] leading-tight mb-6 md:mb-8 pl-4 md:pl-10">
          Get In Touch
        </h2>


        <p className="text-[#8B949E] max-w-2xl mx-auto md:mx-0 text-sm md:text-base leading-relaxed">
          I'm always open to collaborating on exciting projects or just having a conversation. Feel free to reach out to me via the channels below:
        </p>


        <ul className="list-none text-[#8B949E] max-w-2xl mx-auto md:mx-0 text-sm md:text-base mt-6 space-y-4 pl-4 md:pl-10">
          <li><span className="text-[#58A6FF] font-semibold">Email:</span> <a href="mailto:meetu551@gmail.com" className="hover:underline">meetu551@gmail.com</a></li>

          <li><span className="text-[#58A6FF] font-semibold">Instagram:</span> <a href="https://www.instagram.com/__meet25__" target="_blank" className="hover:underline">instagram.com/__meet25__</a></li>
          <li><span className="text-[#58A6FF] font-semibold">GitHub:</span> <a href="https://github.com/meetupadhyay-dev" target="_blank" className="hover:underline">github.com/meetupadhyay-dev</a></li>
        </ul>
      </div>


      <div className="w-full md:w-5/12  justify-center md:justify-end hidden md:flex">
        <img
          src={email}
          alt="Contact"
          className="w-72 h-72 md:w-80 lg:w-96 object-cover rounded-xl shadow-lg"
        />
      </div>

    </section>
  );
};

export default Contact;

import React, { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import useTheme from "../hooks/useTheme";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { toggleTheme, darkMode } = useTheme();

  return (
    <header>
      <nav className={`fixed top-0 left-0 right-0 z-50 
        ${darkMode ? 'bg-[#0a192f]' : 'bg-[#ffffff]'} 
        bg-opacity-90 backdrop-blur-md shadow-md transition-all duration-500`}>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            <div className="flex-shrink-0">
              <a href="/" className="flex items-center space-x-2">
           
        
                <h1 className={`font-bold text-2xl tracking-widest 
                  ${darkMode ? 'text-[#64ffda]' : 'text-[#0077b6]'}`}>
                  Meet
                </h1>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {['Home', 'About', 'Contact', 'Project'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`text-sm font-medium 
                    ${darkMode ? 'text-[#ccd6f6]' : 'text-[#0a192f]'}
                    hover:${darkMode ? 'text-[#64ffda]' : 'text-[#0077b6]'}
                    px-3 py-2 rounded-md transition-colors duration-300`}
                >
                  {item}
                </a>
              ))}
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`${darkMode ? 'text-[#ccd6f6]' : 'text-[#0a192f]'} 
                hover:${darkMode ? 'text-[#64ffda]' : 'text-[#0077b6]'} 
                transition-colors duration-300`}
              >
                {darkMode ? <MdOutlineLightMode size={22} /> : <MdDarkMode size={22} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setToggleMenu((prev) => !prev)}
                className={`inline-flex items-center justify-center p-2 rounded-md 
                  ${darkMode ? 'text-[#ccd6f6]' : 'text-[#0a192f]'} 
                  hover:${darkMode ? 'text-[#64ffda]' : 'text-[#0077b6]'} 
                  focus:outline-none focus:ring-2 focus:ring-offset-2 
                  focus:ring-primary transition-all duration-300`}
              >
                <HiMenuAlt3 size={26} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="menu"
          className={`overflow-hidden transition-all duration-500 ease-in-out 
            ${toggleMenu ? "max-h-[400px]" : "max-h-0"} md:hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
            {['Home', 'About', 'Contact', 'Project'].map((item) => (
              <a
                key={item}
                href="#"
                className={`block text-base font-medium px-3 py-2 rounded-md 
                  ${darkMode ? 'text-[#ccd6f6]' : 'text-[#0a192f]'} 
                  hover:${darkMode ? 'text-[#64ffda]' : 'text-[#0077b6]'}
                  transition-colors duration-300`}
              >
                {item}
              </a>
            ))}
            {/* Theme toggle inside mobile */}
            <div className="flex items-center gap-2 px-3">
              <span className={`text-sm ${darkMode ? 'text-[#ccd6f6]' : 'text-[#0a192f]'}`}>Theme</span>
              <button
                onClick={toggleTheme}
                className={`transition-colors duration-300 
                  ${darkMode ? 'text-[#ccd6f6]' : 'text-[#0a192f]'} 
                  hover:${darkMode ? 'text-[#64ffda]' : 'text-[#0077b6]'}`}
              >
                {darkMode ? <MdOutlineLightMode size={20} /> : <MdDarkMode size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

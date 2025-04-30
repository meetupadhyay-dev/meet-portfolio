import React, { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { menuItems } from '../utils/constant';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D1117]/70 backdrop-blur-md shadow-md transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center space-x-2">
                <h1 className="font-bold text-2xl tracking-widest text-[#58A6FF]">Meet</h1>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {menuItems?.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-[#E6EDF3] hover:text-[#58A6FF] px-3 py-2 rounded-md transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setToggleMenu((prev) => !prev)}
                className="inline-flex items-center justify-center p-2 rounded-md text-[#E6EDF3] hover:text-[#58A6FF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#58A6FF] transition-all duration-300"
              >
                <HiMenuAlt3 size={26} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="menu"
          className={`overflow-hidden transition-all duration-500 ease-in-out ${toggleMenu ? "max-h-[400px]" : "max-h-0"} md:hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-[#0D1117]">
            {menuItems?.map((item,) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}

                className="block text-base font-medium px-3 py-2 rounded-md text-[#C9D1D9] hover:text-[#58A6FF] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

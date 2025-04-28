import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa';

function LeftBorder() {
  return (
    <div className="hidden lg:flex fixed top-1/4 left-5 flex-col items-center z-50 ml-[50px]">
    {/* Icons */}
    <div className="flex flex-col items-center gap-6 mb-6">
      <FaHome
        size={24}
        className="text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer"
      />
      <FaUser
        size={24}
        className="text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer"
      />
      <FaEnvelope
        size={24}
        className="text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer"
      />
    </div>

    {/* Vertical Border */}
    <div className="w-px h-90 bg-[#e5e7eb] dark:bg-[#233554]"></div>
  </div>
  )
}

export default LeftBorder;

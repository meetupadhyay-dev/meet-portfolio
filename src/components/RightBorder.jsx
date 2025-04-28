import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa';

function RightBorder() {
    return (
        <div className="hidden lg:flex fixed top-1/4 right-5 flex-col items-center z-50">
            {/* Email text horizontally aligned, matching LeftBorder */}
            <div className="flex flex-col items-center gap-6 mb-6">
                <span className="text-gray-500 dark:text-gray-300 text-sm tracking-widest rotate-90 mt-[5rem]">
                    meetu551@gmail.com
                </span>
            </div>

            {/* Vertical Border */}
            <div className="w-px h-90 bg-[#e5e7eb] dark:bg-[#233554] mt-[4rem]"></div>
        </div>
    )
}

export default RightBorder;


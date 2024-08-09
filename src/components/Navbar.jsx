import { useState } from 'react';
import { FaBars, FaChevronDown } from 'react-icons/fa'; // You can use any icon library

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full shadow-lg bg-white z-50">
      <div className="flex items-center justify-start px-8 py-4 gap-10">
        <div className="flex items-center gap-5">
          <img 
            src="chrome.png" 
            alt="logo" 
            className="h-10 w-10 bg-cover"
          />
          <h2 className="text-xl font-bold">Chrome</h2>
        </div>
        <div className="hidden lg:flex gap-10">
          <ul className="flex items-center gap-5">
            <li>Home</li>
            <li>The Browser by Google</li>
            <li 
              className="relative" 
              onMouseEnter={() => setIsFeaturesOpen(true)}
              onMouseLeave={() => setIsFeaturesOpen(false)}
            >
              Features 
              <FaChevronDown className="inline ml-1" />
              {isFeaturesOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg">
                  <ul className="flex flex-col">
                    <li className="px-4 py-2 hover:bg-gray-100">Overview</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Google Address Bar</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Password Check</li>
                  </ul>
                </div>
              )}
            </li>
            <li 
              className="relative"
              onMouseEnter={() => setIsSupportOpen(true)}
              onMouseLeave={() => setIsSupportOpen(false)}
            >
              Support 
              <FaChevronDown className="inline ml-1" />
              {isSupportOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg">
                  <ul className="flex flex-col">
                    <li className="px-4 py-2 hover:bg-gray-100">Tips from Google</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Support</li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className="lg:hidden ml-auto">
          <FaBars className="text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md fixed top-0 left-0 w-3/4 h-full z-50">
          <ul className="flex flex-col items-start px-8 py-4 gap-4">
            <li onClick={() => setIsOpen(false)}>Home</li>
            <li onClick={() => setIsOpen(false)}>The Browser by Google</li>
            <li className="relative">
              <div 
                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                className="flex items-center justify-between w-full"
              >
                Features <FaChevronDown />
              </div>
              {isFeaturesOpen && (
                <div className="ml-4 mt-2 w-full bg-white shadow-lg">
                  <ul className="flex flex-col">
                    <li className="px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Overview</li>
                    <li className="px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Google Address Bar</li>
                    <li className="px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Password Check</li>
                  </ul>
                </div>
              )}
            </li>
            <li className="relative">
              <div 
                onClick={() => setIsSupportOpen(!isSupportOpen)}
                className="flex items-center justify-between w-full"
              >
                Support <FaChevronDown />
              </div>
              {isSupportOpen && (
                <div className="ml-4 mt-2 w-full bg-white shadow-lg">
                  <ul className="flex flex-col">
                    <li className="px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Tips from Google</li>
                    <li className="px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Support</li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;

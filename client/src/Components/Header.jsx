import React from 'react';
import '../CSS/header.css';

export default function Header() {
  return (
    <header className="w-full flex flex-col sm:flex-row justify-between items-center px-2 sm:px-10 py-6 bg-white-800 shadow-md">
      {/* Left Content */}
      <div className="flex items-center gap-2 sm:gap-10">
        <img
          src="/src/assets/img/Logo_block.png"
          alt="Logo"
          className="w-13 sm:w-32 mr-4 cursor-pointer"
        />

        <form action="">
          <div className="relative flex items-center text-gray-300 focus-within:text-gray-500">
            <img
              src="/src/assets/img/Icon-left.png"
              alt="MagGlass"
              className="absolute ml-3 pointer-events-none"
            ></img>
            <input
              type="text"
              placeholder="Search events"
              className="inter-font pl-10 py-1 border rounded-md focus:outline-none focus:border-gray-500 flex-shrink-0 w-full sm:max-w-md"
              style={{ maxWidth: '350px', width: '100%' }}
            />
          </div>
        </form>
      </div>
      {/* Right Content */}
      <div className="flex items-center">
        <ul className="flex items-center space-x-5">
          <li>
            <a className="inter-font ww-purple font-normal cursor-pointer">
              Login
            </a>
          </li>
          <li>
            <button className="inter-font ww-purple-bg text-white px-4 py-2 rounded-md">
              Sign up
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

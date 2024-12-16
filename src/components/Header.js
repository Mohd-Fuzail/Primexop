import React from "react";

const Header = ({ setSidebarOpen}) => (
  <>
    <div className="bg-black text-white py-2 text-center text-sm">
      <p>Contact us at support@primexop.com | Call: +91-9834877006</p>
    </div>
    <header className="bg-white shadow-md py-4 relative z-20">
      <div className=" mx-auto flex justify-between items-center px-6">
        <img
          src="https://primexop.com/_next/static/media/primexopLogoBlue.a6dc87a3.svg"
          alt="Primexop Logo"
          className="h-10"
        />
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#" className="text-black hover:text-blue-400">
            Home
          </a>
          <a href="#" className="text-black hover:text-blue-400">
            Services
          </a>
          <a href="#" className="text-black hover:text-blue-400">
            Contact
          </a>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          
          >
            Open Popup
          </button>
        </nav>
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setSidebarOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  </>
);

export default Header;

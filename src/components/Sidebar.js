import React from "react";

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => (
  <div
    className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
      isSidebarOpen ? "translate-x-0" : "-translate-x-full"
    } transition-transform duration-300 ease-in-out z-30`}
  >
    <div className="flex justify-between items-center p-4 border-b">
      <h2 className="text-xl font-bold">Menu</h2>
      <button className="focus:outline-none" onClick={() => setSidebarOpen(false)}>
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <nav className="p-4 space-y-4">
      <a href="#" className="block text-black hover:text-blue-400">
        Home
      </a>
      <a href="#" className="block text-black hover:text-blue-400">
        Services
      </a>
      <a href="#" className="block text-black hover:text-blue-400">
        Contact
      </a>
      <button className="block w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Get A Quote
      </button>
    </nav>
  </div>
);

export default Sidebar;

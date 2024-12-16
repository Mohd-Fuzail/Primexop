import React from "react";
import PromoSection from "./PromoSection";

const Footer = () => (
  <div className=" relative w-[100%] ">
  <PromoSection></PromoSection>
  <footer className="bg-black  text-white pt-[200px] pb-[40px]   z-0">
    <div className="container mx-auto flex flex-col lg:flex-row justify-between px-6">
      {/* Logo and About Section */}
      <div className="mb-6 lg:mb-0 lg:w-1/3">
        <img
          src="https://primexop.com/_next/static/media/primexopLogoWhite.cf13571e.svg"
          alt="Primexop Logo"
          className="h-10 mb-2"
        />
        <p className="text-gray-400">
          Empowering Businesses with Cutting-edge Technology Solutions
        </p>
      </div>

      {/* Quick Links */}
      <div className="flex flex-col lg:w-1/3 mb-6 lg:mb-0">
        <h4 className="font-bold text-lg mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-blue-400">
              Our Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="lg:w-1/3">
        <h4 className="font-bold text-lg mb-4">Contact Us</h4>
        <ul className="space-y-2">
          <li>Khamgaon, dist. Buldhana, Maharashtra, India 444303</li>
          <li>+91-9834877006</li>
          <li>
            <a
              href="mailto:support@primexop.com"
              className="hover:text-blue-400"
            >
              support@primexop.com
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="text-center text-gray-500 mt-8">
      &copy; {new Date().getFullYear()} Primexop. All Rights Reserved.
    </div>
  </footer>
  </div>
);

export default Footer;

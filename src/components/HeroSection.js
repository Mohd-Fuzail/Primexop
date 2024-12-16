import React from "react";

const HeroSection = () => (
  <section
    className="relative bg-cover bg-center h-[300px] md:h-[400px] flex items-center justify-center z-10"
    style={{
      backgroundImage:
        "url('https://primexop.com/_next/static/media/breadcrumb.15fcf705.webp')",
    }}
  >
    <div className="absolute inset-0 bg-blue-800 opacity-60"></div>
    <div className="relative text-center text-white">
      <h1 className="text-4xl font-bold">Services</h1>
      <p className="text-lg mt-2">Home &gt; Services</p>
    </div>
  </section>
);

export default HeroSection;

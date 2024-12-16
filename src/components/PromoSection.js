import React from "react";

const PromoSection = () => (
  <div className="bg-[#384BFF] py-10 mx-5 sm:mx-10 lg:mx-20 px-5 lg:px-10 flex flex-col lg:flex-row justify-between items-center relative top-[100px]">
    {/* Image Section */}
    <div className="hidden xl:block absolute bottom-0 left-0 w-[300px] h-[300px] lg:w-[393px] lg:h-[357px] z-10">
      <img
        src="https://primexop.com/_next/static/media/footerManWithLaptop.fa4afb88.png"
        alt="Man with Laptop"
        className="object-cover w-full h-full rounded-lg "
      />
    </div>

    {/* Content Section */}
    <div className="relative z-20 text-center lg:text-left flex flex-col items-center lg:items-start mx-auto">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 max-w-lg">
        Stay Connected With Cutting Edge IT
      </h2>

      {/* Button */}
      <div>
        <button className="flex items-center gap-2 group relative z-20 bg-white text-blue-500 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
          <p>Get A Quote</p>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="h-5 w-5"
          >
            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default PromoSection;

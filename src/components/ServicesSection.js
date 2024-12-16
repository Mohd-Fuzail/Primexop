import React from "react";

const services = [
  { title: "App Development", img: "https://primexop.com/_next/static/media/app_dev.a047b1e1.svg" },
  { title: "Website Development", img: "https://primexop.com/_next/static/media/app_dev.a047b1e1.svg" },
  { title: "SEO Optimization", img: "https://primexop.com/_next/static/media/app_dev.a047b1e1.svg" },
  { title: "Business Automation", img: "https://primexop.com/_next/static/media/app_dev.a047b1e1.svg" },
  { title: "Digital Marketing", img: "https://primexop.com/_next/static/media/app_dev.a047b1e1.svg" },
  { title: "Content Writing", img: "https://primexop.com/_next/static/media/app_dev.a047b1e1.svg" },
  { title: "Cloud Solutions", img: "https://primexop.com/_next/static/media/app_dev.a047b1e1.svg" },
  { title: "IT Consulting", img: "https://primexop.com/_next/static/media/app_dev.a047b1e1.svg" },
];

const ServicesSection = () => (
  <main className="bg-white py-12">
    <div className="container mx-auto px-8 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-12">Our Premium Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full bg-white px-8 py-7 md:px-10 md:py-9 text-gray-900 group relative z-[1] shadow-gray-200 shadow-lg hover:text-white overflow-hidden"
          >
            {/* Hover Background */}
            <span className="before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:w-full before:h-full before:bg-[#384BFF] before:transform before:scale-y-0 before:transition-transform before:duration-500 before:ease before:origin-bottom before:z-[-1] group-hover:before:scale-y-100 group-hover:before:origin-top"></span>
            {/* Service Content */}
            <div className="relative flex flex-col items-start text-left">
              <div className="w-16 h-16 mb-4 z-[1] bg-white flex items-center justify-center rounded-full">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 z-[1]">{service.title}</h3>
              <p className="text-gray-600 group-hover:text-white z-[1]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                nec justo non purus laoreet viverra.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full h-px bg-gray-200 mt-10 "></div>
  </main>
);

export default ServicesSection;

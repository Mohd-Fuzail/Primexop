import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";


const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
 

  return (
    <div className="font-sans relative">
      <Header setSidebarOpen={setSidebarOpen}  />
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
    
      <HeroSection />
      <ServicesSection />
     
      <Footer />
    </div>
  );
};

export default App;

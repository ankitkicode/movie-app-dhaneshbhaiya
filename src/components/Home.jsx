import React from 'react';
import Sidebar from '../homecompo/Sidebar'; // Adjust the path as needed
import HeroSection from '../homecompo/Herosection'; // Adjust the path as needed

const Home = () => {
  document.title = "Movinsta || Home"; // Setting the document title

  return (
    <div className="h-[100vh] w-[100%] bg-gray-900 text-white flex">
      <Sidebar />
      <HeroSection />
    </div>
  );
};

export default Home;

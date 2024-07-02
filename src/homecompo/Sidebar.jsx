import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    //w-64 h-screen bg-gray-800 text-white flex flex-col
    <div className=" w-64 h-screen bg-gray-900 text-white flex flex-col  p-4 md:w-80 border-r-2 border-zinc-600">
      <div className="text-2xl font-bold mb-5 flex items-center">
        <i className="ri-film-line mr-2"></i> Movinsta
      </div>
      <div className="mb-4">
        <h2 className="text-[22px] font-semibold mb-2">New Feeds</h2>
        <ul>
          <li>
            <Link to="/trending" className="flex items-center py-3 px-2 text-xl mb-2 hover:bg-gray-700 rounded">
              <i className="ri-fire-line mr-2"></i>Trending
            </Link>
          </li>
          <li>
            <Link to="/popular" className="flex items-center py-3 px-2 text-xl mb-2 hover:bg-gray-700 rounded">
              <i className="ri-star-line mr-2"></i>Popular
            </Link>
          </li>
          <li>
            <Link to="/movies" className="flex items-center py-3 px-2 text-xl mb-2 hover:bg-gray-700 rounded">
              <i className="ri-movie-2-line mr-2"></i>Movies
            </Link>
          </li>
          <li>
            <Link to="/tvshows" className="flex items-center py-3 px-2 text-xl mb-2 hover:bg-gray-700 rounded">
              <i className="ri-tv-line mr-2"></i>TV Shows
            </Link>
          </li>
          <li>
            <Link to="/people" className="flex items-center py-3 px-2 text-xl mb-2 hover:bg-gray-700 rounded">
              <i className="ri-user-3-line mr-2"></i>People
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-[22px] font-semibold mb-2">Website Information</h2>
        <ul>
          <li>
            <Link to="/about" className="flex items-center py-3 px-2 text-xl mb-2 hover:bg-gray-700 rounded">
              <i className="ri-information-line mr-2"></i>About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center py-3 px-2 text-xl mb-2 hover:bg-gray-700 rounded">
              <i className="ri-contacts-line mr-2"></i>Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

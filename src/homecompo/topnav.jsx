import React, { useState } from 'react';

const Topnav = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsSearchActive(e.target.value.length > 0);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setIsSearchActive(false);
  };

  return (
    <div className="flex items-start w-full h-20 bg-gray-800 text-white px-10">
      <div className="flex-grow relative">
        <input
          type="text"
          placeholder="Search anything"
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-3 rounded bg-gray-700 text-white w-full text-xl outline-none"
        />
        {isSearchActive && (
          <div className="absolute bg-gray-500 overflow-y-auto max-h-[50vh] scroll-me-0  text-white mt-2 p-5 rounded shadow-lg w-full">
            <p>Search results for "{searchTerm}"</p>
            
            <div className="w-[100%] h-[15vh] bg-gray-600 rounded mt-3 flex items-center gap-3 p-3 ">
            <div className=" h-full w-[100px] ">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1718889874468-3a56b84bb2e7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8" alt="{title} "/>
            </div>
            
           <div className="text">
           <h1 className='text-2xl font-semibold capitalize'>{searchTerm}</h1>
           <p>Lorem ipsum dolor sit amet.</p>
           </div>
            </div>
          
           
          </div>
        )}
      </div>
      {isSearchActive && (
        <button onClick={clearSearch} className="text-xl ml-3 mt-3">
          <i className="ri-close-line"></i>
        </button>
      )}
      {!isSearchActive && (
        <i className="ri-search-line ml-3 mt-3 text-xl"></i>
      )}
    </div>
  );
};

export default Topnav;

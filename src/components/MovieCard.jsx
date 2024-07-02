import React from 'react';

const MovieCard = ({ title, description, image, rating }) => {
  return (
    <div className="max-w-sm bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg m-4">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="bg-yellow-500 text-gray-900 rounded-full px-3 py-1 text-xs font-semibold">
            {rating}
          </span>
        </div>
        <p className="text-gray-400 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;

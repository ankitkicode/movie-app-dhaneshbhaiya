import React from 'react';
import Topnav from './topnav'; // Adjust the path as needed
import MovieCard from '../components/MovieCard';
import { Link } from 'react-router-dom';

const HeroSection = () => {

  const movies = [
    {
      title: 'Movie Title 1',
      description: 'This is a brief description of Movie Title 1.',
      image: 'https://via.placeholder.com/150',
      rating: '8.5'
    },
    {
      title: 'Movie Title 2',
      description: 'This is a brief description of Movie Title 2.',
      image: 'https://via.placeholder.com/150',
      rating: '7.8'
    },
    {
      title: 'Movie Title 1',
      description: 'This is a brief description of Movie Title 1.',
      image: 'https://via.placeholder.com/150',
      rating: '8.5'
    },
    {
      title: 'Movie Title 2',
      description: 'This is a brief description of Movie Title 2.',
      image: 'https://via.placeholder.com/150',
      rating: '7.8'
    },
    {
      title: 'Movie Title 1',
      description: 'This is a brief description of Movie Title 1.',
      image: 'https://via.placeholder.com/150',
      rating: '8.5'
    },
    {
      title: 'Movie Title 2',
      description: 'This is a brief description of Movie Title 2.',
      image: 'https://via.placeholder.com/150',
      rating: '7.8'
    },
    // Add more movie objects as needed
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-gray-800 py-5">
      <Topnav />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to Movinsta</h1>
        <p className="text-xl mb-8">
          Discover the latest trends, popular movies, TV shows, and more.
        </p>
        <Link className="flex flex-wrap items-start gap-1 justify-evenly ">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            description={movie.description}
            image={movie.image}
            rating={movie.rating}
          />
        ))}
      </Link>

      </div>
    </div>
  );
};

export default HeroSection;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieCarousel = ({ heading, movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between gap-2  p-4">
        <h2 className="text-2xl font-bold">{heading}</h2>
        <div className="bg-black rounded-lg p-2">
          <button
            className="p-2 bg-gray-800 text-white rounded-md mx-4 hover:text-red-600"
            onClick={handlePrev}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <span>-----</span>
          <button
            className="p-2 bg-gray-800 text-white rounded-md mx-4 hover:text-red-600"
            onClick={handleNext}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center p-4">
        {/* Movie Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 ">
          {movies.slice(currentIndex, currentIndex + 5).map((movie) => (
            <div
              key={movie.imdbID}
              className=" rounded-lg bg-gray-900 p-2 shadow-sm hover:scale-105  hover:shadow-red-500 transition-all duration-300 cursor-pointer"
              onClick={() => navigate(`/movie/${movie.imdbID}`)}
            >
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="rounded-lg mb-4 min-h-[200px] object-cover"
              />
              <h3 className="text-white font-semibold text-lg line-clamp-2">
                {movie.Title}
              </h3>
              <div className="flex justify-between items-center mt-2 text-gray-400">
                <span>{movie.Year}</span>
                <span>{movie.Runtime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCarousel;

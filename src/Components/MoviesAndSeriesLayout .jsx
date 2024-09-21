import React from "react";
import MovieCarousel from "./MovieCarousel";
import FreeTrial from "./FreeTrial";
import Loader from "./Loader";

const MoviesAndSeriesLayout = ({
  newMovies,
  marvelMovies,
  popularMovies,
  actionMovies,
  newSeries,
  horrorSeries,
  popularSeries,
  actionSeries,
  loading,
  headingMovies,
  headingSeries,
}) => {
  if (loading) return <Loader />;

  return (
    <div className="flex flex-col px-5 md:px-20 gap-10 justify-center items-center">
      <div className="mr-auto">
        <button className="bg-red-700 hover:bg-red-900 text-white rounded-md font-bold p-2">
          Movies
        </button>
      </div>

      <div className="flex flex-col gap-4 border-2 border-gray-500 rounded-lg">
        <MovieCarousel heading={headingMovies.new} movies={newMovies} />
        <MovieCarousel heading={headingMovies.marvel} movies={marvelMovies} />
        <MovieCarousel heading={headingMovies.popular} movies={popularMovies} />
        <MovieCarousel heading={headingMovies.action} movies={actionMovies} />
      </div>

      <div className="mr-auto">
        <button className="bg-red-700 hover:bg-red-900 text-white rounded-md font-bold p-2">
          Series
        </button>
      </div>

      <div className="flex flex-col gap-4 border-2 border-gray-500 rounded-lg">
        <MovieCarousel heading={headingSeries.new} movies={newSeries} />
        <MovieCarousel heading={headingSeries.horror} movies={horrorSeries} />
        <MovieCarousel heading={headingSeries.popular} movies={popularSeries} />
        <MovieCarousel heading={headingSeries.action} movies={actionSeries} />
      </div>

      <FreeTrial />
    </div>
  );
};

export default MoviesAndSeriesLayout;

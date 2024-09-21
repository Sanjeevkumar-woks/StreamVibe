import React from "react";

import MoviesAndSeriesLayout from "../Components/MoviesAndSeriesLayout ";
import useMoviesAndSeries from "../Hooks/useMoviesAndSeries ";
import GenreCarousel from "../Components/GenreCarousel";
import Hero from "../Components/Hero";

const Home = () => {
  const {
    newMovies,
    marvelMovies,
    popularMovies,
    actionMovies,
    newSeries,
    horrorSeries,
    popularSeries,
    actionSeries,
    loading,
  } = useMoviesAndSeries();

  return (
    <div className="flex flex-col justify-center items-center ">
      <Hero />
      <div className="flex flex-col gap-4 w-[85%]">
        <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-lg">
          <GenreCarousel heading={"Our Genres"} />
        </div>
      </div>
      <MoviesAndSeriesLayout
        newMovies={newMovies}
        marvelMovies={marvelMovies}
        popularMovies={popularMovies}
        actionMovies={actionMovies}
        newSeries={newSeries}
        horrorSeries={horrorSeries}
        popularSeries={popularSeries}
        actionSeries={actionSeries}
        loading={loading}
        headingMovies={{
          new: "New Movies",
          marvel: "Marvel Movies",
          popular: "Popular Movies",
          action: "Action Movies",
        }}
        headingSeries={{
          new: "New Series",
          horror: "Horror Series",
          popular: "Popular Series",
          action: "Action Series",
        }}
      />
    </div>
  );
};

export default Home;

import React from "react";
import useMoviesAndSeries from "../Hooks/useMoviesAndSeries ";
import MoviesAndSeriesLayout from "../Components/MoviesAndSeriesLayout ";
import { Carousel } from "antd";
import { CarouselItems } from "../utility/Carousel ";

const contentStyle = {
  margin: 0,
  height: "500px", // Set appropriate height
  lineHeight: "300px", // Match the height
  textAlign: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const MoviesAndShows = () => {
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
    <div className="flex flex-col justify-center items-center mt-20">
      <div className="w-screen  mb-10">
        <Carousel autoplay>
          {CarouselItems.map((Carousel) => (
            <div key={Carousel.id} className="w-full">
              <img
                src={Carousel.image}
                alt={Carousel.id}
                style={contentStyle}
                className="w-full object-cover"
              />
            </div>
          ))}
        </Carousel>
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

export default MoviesAndShows;

import { useEffect, useState } from "react";
import FreeTrial from "../Components/FreeTrial";
import Hero from "../Components/Hero";
import Plans from "../Components/Plans";
import VariousDevices from "../Components/VariousDevices";
import { FilmsService } from "../Servers/Films";
import { Carousel } from "antd";
import MovieCarousel from "../Components/MovieCarousel";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    FilmsService.GET_FILMS_BY_FILTERS({
      search: "marvel",
      type: "movie",
      year: "",
    })
      .then((data) => {
        setMovies(data.Search);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <Hero />
      <div className="flex flex-col justify-center items-center w-full">
        <MovieCarousel heading="Popular Movies" movies={movies} />
      </div>
      <VariousDevices />
      <Plans />
      <FreeTrial />
    </div>
  );
};

export default Home;

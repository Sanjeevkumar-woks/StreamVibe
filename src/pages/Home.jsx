import { useEffect, useState } from "react";
import FreeTrial from "../Components/FreeTrial";
import Hero from "../Components/Hero";
import Plans from "../Components/Plans";
import VariousDevices from "../Components/VariousDevices";
import { FilmsService } from "../Servers/Films";
import MovieCarousel from "../Components/MovieCarousel";
import GenreCarousel from "../Components/GenreCarousel";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";

const Home = () => {
  const [newMovies, setNewMovies] = useState([]);
  const [marvelMovies, setMarvelMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [newSeries, setNewSeries] = useState([]);
  const [horrorSeries, setHorrorSeries] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [actionSeries, setActionSeries] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const getMovies = async () => {
    setLoading(true);

    try {
      // Use Promise.all to fetch all data concurrently
      const [
        newMoviesData,
        marvelMoviesData,
        popularMoviesData,
        actionMoviesData,
      ] = await Promise.all([
        FilmsService.GET_FILMS_BY_FILTERS({
          search: "new",
          type: "movie",
          year: 2023,
        }), // New Movies 2023
        FilmsService.GET_FILMS_BY_FILTERS({
          search: "marvel",
          type: "movie",
          year: "",
        }), // Marvel Movies
        FilmsService.GET_FILMS_BY_FILTERS({
          search: "popular",
          type: "movie",
          year: "",
        }), // Popular Movies
        FilmsService.GET_FILMS_BY_FILTERS({
          search: "action",
          type: "movie",
          year: 2022,
        }), // Action Movies 2022
      ]);

      // Set state for each movie category
      setNewMovies(newMoviesData.Search || []);
      setMarvelMovies(marvelMoviesData.Search || []);
      setPopularMovies(popularMoviesData.Search || []);
      setActionMovies(actionMoviesData.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  const getSeries = async () => {
    setLoading(true);

    try {
      // Use Promise.all to fetch all data concurrently
      const [
        newSeriesData,
        horrorSeriesData,
        popularSeriesData,
        actionSeriesData,
      ] = await Promise.all([
        FilmsService.GET_FILMS_BY_FILTERS({
          search: "new",
          type: "series",
          year: 2023,
        }), // New Series 2023
        FilmsService.GET_FILMS_BY_FILTERS({
          search: "horror",
          type: "series",
          year: "",
        }), // Horror Series
        FilmsService.GET_FILMS_BY_FILTERS({
          search: "popular",
          type: "series",
          year: "",
        }), // Popular Series
        FilmsService.GET_FILMS_BY_FILTERS({
          search: "action",
          type: "series",
          year: 2022,
        }), // Action Series 2022
      ]);

      // Set state for each movie category

      setNewSeries(newSeriesData.Search || []);
      setHorrorSeries(horrorSeriesData.Search || []);
      setPopularSeries(popularSeriesData.Search || []);
      setActionSeries(actionSeriesData.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies(); // Trigger the API call when the component mounts
    getSeries();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-5 w-full">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col justify-center items-center ">
          <Hero />
          <div className="flex flex-col gap-4 w-[85%]">
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-lg">
              <GenreCarousel heading={"Our Genres"} />
            </div>

            <div className="mr-auto">
              <button
                className="bg-red-700 hover:bg-red-900 text-white rounded-md font-bold p-3"
                onClick={() => navigate("/movies")}
              >
                Movies
              </button>
            </div>

            <div className="flex flex-col gap-4  border-2 border-gray-500 rounded-lg ">
              <MovieCarousel heading="New Movies" movies={newMovies} />
              <MovieCarousel heading="Marvel Movies" movies={marvelMovies} />
              <MovieCarousel heading="Popular Movies" movies={popularMovies} />
              <MovieCarousel heading="Action Movies" movies={actionMovies} />
            </div>
            <div className="mr-auto">
              <button
                className="bg-red-700 hover:bg-red-900 text-white rounded-md font-bold p-2"
                onClick={() => navigate("/series")}
              >
                Series
              </button>
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-lg ">
              <GenreCarousel heading={"Popular Genres"} />
            </div>
            <div className="flex flex-col gap-4 border-2 border-gray-500 rounded-lg w-[]">
              <MovieCarousel heading="New Series" movies={newSeries} />
              <MovieCarousel heading="Horror Series" movies={horrorSeries} />
              <MovieCarousel heading="Popular Series" movies={popularSeries} />
              <MovieCarousel heading="Action Series" movies={actionSeries} />
            </div>
          </div>
          <VariousDevices />
          <Plans />
          <FreeTrial />
        </div>
      )}
    </div>
  );
};

export default Home;

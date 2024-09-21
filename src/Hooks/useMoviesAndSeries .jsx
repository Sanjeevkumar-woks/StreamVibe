import { useEffect, useState } from "react";
import { FilmsService } from "../Servers/Films";

const useMoviesAndSeries = () => {
  const [newMovies, setNewMovies] = useState([]);
  const [marvelMovies, setMarvelMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [newSeries, setNewSeries] = useState([]);
  const [horrorSeries, setHorrorSeries] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [actionSeries, setActionSeries] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMovies = async () => {
    setLoading(true);
    try {
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
        }),
        FilmsService.GET_FILMS_BY_FILTERS({
          search: "marvel",
          type: "movie",
          year: "",
        }),
        FilmsService.GET_FILMS_BY_FILTERS({
          search: "popular",
          type: "movie",
          year: "",
        }),
        FilmsService.GET_FILMS_BY_FILTERS({
          search: "action",
          type: "movie",
          year: 2022,
        }),
      ]);

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
        }),
        FilmsService.GET_FILMS_BY_FILTERS({
          search: "horror",
          type: "series",
          year: "",
        }),
        FilmsService.GET_FILMS_BY_FILTERS({
          search: "popular",
          type: "series",
          year: "",
        }),
        FilmsService.GET_FILMS_BY_FILTERS({
          search: "action",
          type: "series",
          year: 2022,
        }),
      ]);

      setNewSeries(newSeriesData.Search || []);
      setHorrorSeries(horrorSeriesData.Search || []);
      setPopularSeries(popularSeriesData.Search || []);
      setActionSeries(actionSeriesData.Search || []);
    } catch (error) {
      console.error("Error fetching series:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
    getSeries();
  }, []);

  return {
    newMovies,
    marvelMovies,
    popularMovies,
    actionMovies,
    newSeries,
    horrorSeries,
    popularSeries,
    actionSeries,
    loading,
  };
};

export default useMoviesAndSeries;

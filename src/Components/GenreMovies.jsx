import { useEffect, useState } from "react";
import { FilmsService } from "../Servers/Films";
import MovieCarousel from "./MovieCarousel";
import { useParams } from "react-router-dom";
import { Pagination } from "antd";
import Loader from "./Loader";
import Search from "./Search";
import FreeTrial from "./FreeTrial";

const GenerMovies = () => {
  const { genre } = useParams();
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getMovies = async () => {
    setLoading(true);
    const response = await FilmsService.GET_FILMS_BY_FILTERS({
      search: genre,
      type: "movie",
      year: 2023,
    });

    setMovies(response.Search);
    setTotalPages(response.totalResults); // 10 results per page;
    setLoading(false);
  };

  const handlePageChange = (pageNumber) => {
    setLoading(true);
    setPage(pageNumber);

    // Trigger a new search with the updated page
    const payload = {
      search: genre,
      page: pageNumber,
    };

    // Fetch new results for the current page
    FilmsService.GET_FILMS(payload)
      .then((data) => {
        setMovies(data.Search);
        setTotalPages(Math.ceil(data.totalResults / 10)); // 10 results per page
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getMovies();
  }, [genre]);

  return (
    <div className="flex flex-col gap-4 justify-center items-center m-20">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Your Favorite {genre} Movies on{" "}
            <span className="text-red-500">StreamVibe!</span>
            <Search
              setSearchResults={setSuggestions}
              search={search}
              setSearch={setSearch}
              setTotalPages={setTotalPages}
            />
          </h1>
          <MovieCarousel heading={genre} movies={movies} />
          <Pagination
            defaultCurrent={1}
            current={page}
            total={totalPages * 10} // Multiply by 10 for total results
            onChange={handlePageChange}
            showSizeChanger={false}
          />
          <FreeTrial />
        </>
      )}
    </div>
  );
};

export default GenerMovies;

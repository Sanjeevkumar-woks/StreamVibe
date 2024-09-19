import { useEffect, useState } from "react";
import Search from "../Components/Search";
import { Button, Dropdown, Pagination, Space } from "antd";
import { FilmsService } from "../Servers/Films";
import Loader from "../Components/Loader";
import { filter } from "d3";

const MOVIE_TYPES = {
  MOVIE: "Movie",
  SERIES: "Series",
};

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // Pagination handler
  const handlePageChange = (pageNumber) => {
    setLoading;
    setPage(pageNumber);
    // Trigger a new search with the updated page
    const payload = {
      search,
      page: pageNumber,
    };
    // Fetch new results for the current page
    FilmsService.GET_FILMS(payload).then((data) => {
      setSearchResults(data.Search);
      setTotalPages(Math.ceil(data.totalResults / 10)); // 10 results per page
    });
    setLoading(false);
  };

  const handleFilterChange = (value) => {
    if (filter === value.key) {
      return;
    }
    setLoading(true);
    setPage(1); // Reset to first page on new search
    FilmsService.GET_FILMS_BY_FILTERS({
      search,
      type: value.key,
      year: "",
    })
      .then((data) => {
        setSearchResults(data.Search);
        setTotalPages(Math.ceil(data.totalResults / 10)); // 10 results per page
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const menuProps = {
    items: [
      {
        key: "movie",
        label: "Movie",
      },
      {
        key: "series",
        label: "Series",
      },
    ],
    onClick: handleFilterChange,
  };

  // Reset page when search changes
  useEffect(() => {
    setPage(1); // Reset to first page on new search
  }, [search]);

  return (
    <div className="flex flex-col justify-center items-center mt-20 p-4">
      <h2 className="text-3xl text-white mb-4 text-center">
        Search your favorite movies and shows at{" "}
        <span className="text-red-500">StreamVibe</span>!
      </h2>
      <p className="text-white mb-4 text-center">
        Search for movies and TV shows
      </p>
      <div className="w-full items-center">
        <Search
          setSearchResults={setSearchResults}
          search={search}
          setSearch={setSearch}
          setTotalPages={setTotalPages}
        />
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col justify-center items-center w-full max-w-5xl">
          {searchResults?.length > 0 ? (
            <div className="flex flex-col justify-center items-center w-full">
              {/* filter by: */}
              <div className="p-4 m-2">
                <Dropdown menu={menuProps}>
                  <Button>
                    <Space>Filter</Space>
                  </Button>
                </Dropdown>
              </div>
              {/* Responsive grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {searchResults.map((result) => (
                  <div
                    key={result.imdbID}
                    className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-red-600 hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <img
                      src={result.Poster}
                      alt={result.Title}
                      className="w-full h-auto mb-2 rounded-lg"
                    />
                    <h2 className="text-white text-lg text-center">
                      {result.Title}
                    </h2>
                    <p className="text-gray-400">{result.Year}</p>
                  </div>
                ))}
              </div>
              {/* Pagination component */}
              <div className="p-4 m-2">
                <Pagination
                  defaultCurrent={1}
                  current={page}
                  total={totalPages * 10} // Multiply by 10 for total results
                  onChange={handlePageChange}
                  showSizeChanger={false} // Optional: Disable page size change
                />
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-start w-full h-[100vh]">
              <h1 className="text-3xl text-white">
                Search for movies and TV shows from
                <span className="text-red-500">StreamVibe</span>
              </h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;

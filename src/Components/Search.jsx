import { useState, useEffect } from "react";
import { AutoComplete, Input, Spin } from "antd";
import { FilmsService } from "../Servers/Films";
import { useNavigate } from "react-router-dom";

const Search = ({ setSearchResults, search, setSearch, setTotalPages }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  let debounceTimer = null;

  // Function to handle search suggestions with debouncing
  const handleSearch = async (searchTerm) => {
    if (!searchTerm) {
      setSuggestions([]); // Clear suggestions if search is empty
      setSearchResults([]);
      return;
    }

    const payload = {
      search: searchTerm,
      page: 1,
    };

    setLoading(true);
    try {
      const data = await FilmsService.GET_FILMS(payload);
      if (data) {
        // Map results to match AntD AutoComplete structure
        const results = data?.Search?.map((movie) => ({
          value: movie.Title,
          label: `${movie.Title} (${movie.Year})`,
          imdbID: movie.imdbID,
        }));
        setSuggestions(results);
        setTotalPages(Math.round(data?.totalResults / 10) + 1);
        setSearchResults(data.Search);
      }
    } catch (err) {
      setError("Failed to fetch movie suggestions");
    } finally {
      setLoading(false);
    }
  };

  // Debounce effect: runs whenever the search term changes
  useEffect(() => {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      handleSearch(search);
    }, 300); // 300ms delay for debouncing

    return () => clearTimeout(debounceTimer); // Cleanup timer on unmount
  }, [search]);

  // Redirect to movie detail page when a movie is selected
  const handleSelectMovie = (value, option) => {
    navigate(`/movie/${option.imdbID}`);
    setSearch(""); // Clear search input
    setSuggestions([]); // Clear suggestions
    setSearchResults([]);
  };

  return (
    <div className="search m-5 w-1/2 mx-auto">
      <AutoComplete
        value={search}
        options={suggestions}
        onSearch={(value) => setSearch(value)} // On typing
        onSelect={handleSelectMovie} // On selection
        style={{ width: "100%" }}
        notFoundContent={loading ? <Spin /> : error ? error : null}
      >
        <Input.Search placeholder="Search for a movie..." className="p-2" />
      </AutoComplete>
    </div>
  );
};

export default Search;

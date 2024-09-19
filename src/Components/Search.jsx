import { useState, useEffect } from "react";
import { AutoComplete, Input, Spin } from "antd";
import { GET_FILMS } from "../Servers/Films";
import { useNavigate } from "react-router-dom";

const Search = ({ setSearchResults }) => {
  const [search, setSearch] = useState("");
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
      type: "movie",
      page: 1,
    };

    setLoading(true);
    try {
      const data = await GET_FILMS(payload);
      if (data) {
        // Map results to match AntD AutoComplete structure
        const results = data.map((movie) => ({
          value: movie.Title,
          label: `${movie.Title} (${movie.Year})`,
          imdbID: movie.imdbID,
        }));
        setSuggestions(results);
        setSearchResults(data);
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
    <div className="search px-4 py-5 w-screen">
      <AutoComplete
        value={search}
        options={suggestions}
        onSearch={(value) => setSearch(value)} // On typing
        onSelect={handleSelectMovie} // On selection
        style={{ width: "100%" }}
        notFoundContent={loading ? <Spin /> : error ? error : null}
      >
        <Input.Search placeholder="Search for a movie..." />
      </AutoComplete>
    </div>
  );
};

export default Search;

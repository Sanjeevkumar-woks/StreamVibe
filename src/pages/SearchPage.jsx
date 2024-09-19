import { useState } from "react";
import Search from "../Components/Search";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);

  console.log(searchResults);

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h2 className="text-3xl text-white">
        Search your favorite movies and shows at{" "}
        <span className="text-red-500">StreamVibe</span>!
      </h2>
      <p className="text-white">Search for movies and TV shows</p>
      <div>
        <Search setSearchResults={setSearchResults} />
      </div>
      <div className="flex flex-col justify-center items-center">
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-5 gap-4 ">
            {searchResults.map((result) => (
              <div key={result.imdbID}>
                <img src={result.Poster} alt={result.Title} />
                <h2>{result.Title}</h2>
                <p>{result.Year}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-start w-full h-[100vh]">
            <h1 className="text-3xl text-white">
              Search for movies and TV shows from{" "}
              <span className="text-red-500">StreamVibe</span>
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

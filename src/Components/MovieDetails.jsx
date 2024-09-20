import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { FilmsService } from "../Servers/Films";

const MovieDetails = () => {
  const { imdbId } = useParams();
  const [loading, setLoading] = useState(false);
  const [Movie, setMovie] = useState({});

  const getMovie = async () => {
    setLoading(true);
    const data = await FilmsService.GET_FILM_BY_ID(imdbId);
    setMovie(data);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, [imdbId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-4 justify-center items-center min-h-screen  w-full px-4 md:px-8 lg:px-12 mt-12 md:mt-16 lg:mt-18">
          {/* Hero Section */}
          <div
            className="hero w-full  sm:h-80 md:h-[80vh] bg-cover bg-center bg-no-repeat relative rounded-xl shadow-lg overflow-hidden object-cover"
            style={{ backgroundImage: `url(${Movie?.Poster})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col md:flex-row sm:flex-col-reverse items-center md:justify-around justify-center h-full text-center p-4 sm:p-6 lg:px-16 text-white">
              {/* Movie Info Section */}
              <div className="flex flex-col  gap-1 justify-center items-center sm:gap-1 md:gap-3 text-left max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl w-full bg-gray-900 bg-opacity-70 rounded-lg p-4 ">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                  {Movie.Title}
                </h1>
                <p className="text-md sm:text-lg lg:text-xl">
                  {Movie.Director}'s Movie
                </p>
                <p className="text-sm sm:text-md">
                  <i className="fa-solid fa-award"></i> &nbsp;{Movie.Awards}
                </p>

                {/* Buttons Section */}
                <div className="flex gap-2 sm:gap-4 mt-4 justify-center md:justify-start">
                  <button className="text-white bg-red-500 hover:bg-red-600 rounded-lg px-3 py-2 sm:px-4 flex items-center gap-2 transition duration-300">
                    <i className="fa-solid fa-play"></i> Play Now
                  </button>
                  <ActionButton icon="fa-plus" />
                  <ActionButton icon="fa-thumbs-up" />
                </div>
              </div>

              {/* Movie Poster Section */}
              <div className="mt-6 md:mt-0 w-48 sm:w-40 md:w-56 lg:w-64 h-auto">
                <img
                  src={Movie.Poster}
                  alt="Movie Poster"
                  className="rounded-xl shadow-lg hover:scale-105 hover:shadow-red-600 transition-all duration-300 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8 mb-4 text-white">
            <div className="flex flex-col gap-4 w-full lg:w-2/3">
              <Description label="Description" text={Movie.Plot} />
              <AwardsAndRatings
                awards={Movie.Awards}
                ratings={Movie.Ratings}
                Movie={Movie}
              />
            </div>

            <div className="bg-black bg-opacity-80 rounded-lg p-4 sm:p-6 w-full lg:w-1/3 flex flex-col gap-4">
              <DetailItem
                label="Actors"
                value={Movie.Actors?.split(",").join(" | ")}
                icon="fa-users"
              />
              <div className="flex gap-4 flex-wrap">
                <DetailItem
                  label="Released Year"
                  value={Movie.Released}
                  icon="fa-calendar"
                />
                <DetailItem
                  label="Duration"
                  value={Movie.Runtime}
                  icon="fa-clock"
                />
                <DetailItem
                  label="Language"
                  value={Movie.Language}
                  icon="fa-language"
                />
              </div>
              <DetailItem
                label="IMDb Rating"
                value={Movie.imdbRating}
                icon="fa-star"
              />
              <DetailItem
                label="Genre"
                value={Movie.Genre?.split(",").join(" | ")}
                icon="fa-film"
              />
              <DetailItem
                label="Director"
                value={Movie.Director}
                icon="fa-video"
              />
              <DetailItem
                label="Writer"
                value={Movie.Writer?.split(",").join(" | ")}
                icon="fa-pen"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// ActionButton component
const ActionButton = ({ icon }) => (
  <button className="bg-black text-white hover:bg-gray-800 rounded-md text-lg sm:text-2xl p-2 transition duration-300">
    <i className={`fa-solid ${icon}`}></i>
  </button>
);

// Description component
const Description = ({ label, text }) => (
  <div className="bg-black bg-opacity-80 rounded-lg p-4 sm:p-6 w-full">
    <h2 className="text-md sm:text-lg font-bold text-gray-400 mb-2">
      <i className="fa-solid fa-circle-info"></i> &nbsp; {label}
    </h2>
    <p className="text-sm sm:text-base">{text}</p>
  </div>
);

// Awards and Ratings component
const AwardsAndRatings = ({ awards, ratings, Movie }) => (
  <div className="bg-black bg-opacity-80 flex flex-col justify-center gap-2 rounded-lg p-4 sm:p-6 w-full">
    <h2 className="text-md sm:text-lg font-bold text-gray-400 mb-2">
      <i className="fa-solid fa-award"></i> &nbsp; Awards
    </h2>
    <p className="text-sm sm:text-base">{awards}</p>
    <div className="flex flex-col gap-1">
      <h2 className="text-md sm:text-lg font-bold text-gray-400 mb-2">
        <i className="fa-solid fa-star"></i> &nbsp; IMDb Ratings
      </h2>
      <p>IMDb: {Movie.imdbRating}</p>
      <p>IMDb Votes: {Movie.imdbVotes}</p>
    </div>
    <div>
      <h2 className="text-md sm:text-lg font-bold text-gray-400 mb-2">
        <i className="fa-solid fa-star"></i> &nbsp; Other Ratings
      </h2>
      <div className="flex flex-col gap-1">
        {ratings?.map((rating, index) => (
          <p className="text-sm sm:text-base" key={index}>
            {rating.Source}: {rating.Value}
          </p>
        ))}
      </div>
    </div>
  </div>
);

// DetailItem component
const DetailItem = ({ label, value, icon }) => (
  <div className="text-base sm:text-lg">
    <p className="font-bold text-gray-400">
      <i className={`fa-solid ${icon}`}></i> &nbsp; {label}
    </p>
    <p>{value}</p>
  </div>
);

export default MovieDetails;

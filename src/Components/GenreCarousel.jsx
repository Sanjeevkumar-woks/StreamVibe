import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Genres } from "../utility/Genre";

const GenreCarousel = ({ heading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Genres.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Genres.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col gap-4 rounded-lg p-2">
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between gap-2 ">
        <h2 className="text-2xl font-bold">{heading}</h2>
        <div className="bg-black rounded-lg p-2">
          <button
            className="p-2 bg-gray-800 text-white rounded-md mx-4 hover:text-red-600"
            onClick={handlePrev}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <span>-----</span>
          <button
            className="p-2 bg-gray-800 text-white rounded-md mx-4 hover:text-red-600"
            onClick={handleNext}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
        {Genres.slice(currentIndex, currentIndex + 5).map((genre) => (
          <div
            key={genre.id}
            className="p-4 bg-black rounded-md transform hover:scale-105 duration-300 ease-in-out shadow-sm hover:shadow-lg hover:shadow-red-500"
            onClick={() => navigate(`/genre/${genre.name}`)}
          >
            <img src={genre.image} alt={genre.name} />
            <div className="flex items-center justify-around text-lg text-gray-500 p-2">
              <p className="text-center hover:text-red-600">{genre.name}</p>{" "}
              <button onClick={() => navigate(`/genre/${genre.name}`)}>
                <i className="fa-solid fa-arrow-right hover:text-red-600"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreCarousel;

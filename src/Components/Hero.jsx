import { useNavigate } from "react-router-dom";
import backgroundImage from "../images/SubContainer.png";

const CarouselImages = [
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg",
];

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div
      className="hero w-screen md:h-[100vh] h-[100vh] bg-cover bg-center bg-no-repeat relative  md:top-0 lg:top-0 "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Inner shadow overlay */}
      <div className="absolute inset-0 bg-black opacity-40 shadow-inner"></div>

      {/* Hero text positioned above the shadow */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="flex flex-col lg:flex-row justify-around items-center gap-10 lg:gap-96 w-full p-4 lg:p-20">
          {/* Text Section */}
          <div className="flex flex-col flex-1 justify-between items-center lg:items-start text-center lg:text-left">
            <h1 className="text-white text-3xl lg:text-6xl font-bold mb-4">
              The Best <span className="text-red-500 shadow-sm">Streaming</span>{" "}
              Experience
            </h1>
            <p className="text-white text-xs lg:text-sm mb-4 w-full max-w-lg lg:max-w-xl ">
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere. With
              StreamVibe, you can enjoy a wide variety of content, including the
              latest blockbusters, classic movies, popular TV shows, and more.
            </p>

            <p className="text-white text-xs lg:text-sm w-full max-w-md">
              You can also create your own watch-lists, so you can easily find
              the content you want to watch.
            </p>
            <button
              className="btn bg-red-500 hover:bg-red-600 p-2 rounded-md mt-4"
              onClick={() => navigate("/movies-and-shows")}
            >
              <i className="fa-solid fa-play"></i> &nbsp; Start Watching
            </button>
          </div>

          {/* Image/Carousel Section */}
          <div className="flex flex-col flex-1 p-0 m-0 justify-center items-center">
            {CarouselImages.map((image, index) => (
              <img
                src={image}
                alt="Carousel Image"
                key={index}
                className="w-48 md:w-64 lg:w-72 h-auto rounded-xl shadow-xl shadow-white hover:shadow-red-600 hover:scale-105 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

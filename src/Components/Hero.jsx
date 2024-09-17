import hero from "../../public/images/SubContainer.png";
import Carousel3D from "./Carousel3D";

const CarouselImages = [
  //   "https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg",
];
const Hero = () => {
  return (
    <div
      className="hero w-screen h-1[100vh] bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Inner shadow overlay */}
      <div className="absolute inset-0 bg-black opacity-40 shadow-inner"></div>

      {/* Hero text positioned above the shadow */}
      <div className="relative z-10 flex  flex-col items-center justify-center h-full text-center ">
        <div className="flex justify-between items-center w-screen p-20">
          <div className="flex flex-col flex-1  justify-between items-center">
            <h1 className="text-white text-6xl font-bold mb-4 ">
              The Best <span className="text-red-500 shadow-sm">Streaming</span>{" "}
              Experience
            </h1>
            <p className="text-white text-sm mb-4 w-full max-w-xl justify-center items-center">
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere. With
              StreamVibe, you can enjoy a wide variety of content, including the
              latest blockbusters, classic movies, popular TV shows, and more.
            </p>

            <p className="text-white text-sm w-full max-w-md">
              You can also create your own watch-lists, so you can easily find
              the content you want to watch.
            </p>
            <button className="btn bg-red-500 hover:bg-red-600 p-2 rounded-md m-4">
              <i className="fa-solid fa-play"></i> &nbsp; Start Watching
            </button>
          </div>
          <div className="flex flex-col flex-1 p-0 m-0 justify-center items-center">
            {CarouselImages.map((image, index) => (
              <img
                src={image}
                alt=""
                key={index}
                className="w-72 h-auto rounded-xl shadow-xl shadow-white hover:shadow-red-600 hover:scale-105 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

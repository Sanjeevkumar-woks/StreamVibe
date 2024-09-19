import Carousel3D from "../Components/Carousel3D";
import FreeTrial from "../Components/FreeTrial";
import Hero from "../Components/Hero";
import Plans from "../Components/Plans";
import VariousDevices from "../Components/VariousDevices";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hero />
      {/* <Carousel3D /> */}
      <VariousDevices />
      <Plans />
      <FreeTrial />
    </div>
  );
};

export default Home;

import Carousel3D from "./Components/Carousel3D";
import Headers from "./Components/Headers";
import Hero from "./Components/Hero";
import VariousDevices from "./Components/VariousDevices";
import "./index.css";
export default function App() {
  return (
    <div>
      <Headers />
      <Hero />
      <Carousel3D />
      <VariousDevices />
    </div>
  );
}

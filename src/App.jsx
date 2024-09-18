import Carousel3D from "./Components/Carousel3D";
import Headers from "./Components/Headers";
import Hero from "./Components/Hero";
import VariousDevices from "./Components/VariousDevices";
import "./index.css";
import Plans from "./Components/Plans";
export default function App() {
  return (
    <div>
      <Router>
        <Headers />
        <Hero />
        <Carousel3D />
        <VariousDevices />
        <Plans />
        <Footer />
      </Router>
    </div>
  );
}

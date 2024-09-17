import { BrowserRouter as Router } from "react-router-dom";
import Carousel3D from "./Components/Carousel3D";
import Footer from "./Components/footer";
import Headers from "./Components/Headers";
import Hero from "./Components/Hero";
import VariousDevices from "./Components/VariousDevices";
import "./index.css";
export default function App() {
  return (
    <div>
      <Router>
        <Headers />
        <Hero />
        <Carousel3D />
        <VariousDevices />
        <Footer />
      </Router>
    </div>
  );
}

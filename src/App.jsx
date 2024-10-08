import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import MoviesAndShows from "./pages/Movies&Shows";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Subscription from "./pages/Subscription";
import Support from "./pages/Support";
import PageNotFound from "./pages/404";
import Headers from "./Components/Headers";
import FAQ from "./Components/FAQ";
import SearchPage from "./pages/SearchPage";
import Footer from "./Components/FooterComponent";
import MovieDetails from "./Components/MovieDetails";
import GenerMovies from "./Components/GenreMovies";

export default function App() {
  return (
    <div>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/movies-shows" element={<MoviesAndShows />} />
        <Route path="/movie/:imdbId" element={<MovieDetails />} />
        <Route path="/genre/:genre" element={<GenerMovies />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

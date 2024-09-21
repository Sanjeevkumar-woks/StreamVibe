import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Headers = () => {
  const [selected, setSelected] = useState("Home");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [auth, setAuth] = useState(true);
  const links = ["Home", "Movies-Shows", "Support", "Subscription"];
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();

  return (
    <header
      className={`flex justify-around items-center fixed top-0 z-20 w-full transition-all duration-300 ease-in-out p-2 ${
        scrolled ? "bg-gray-500 bg-opacity-50 shadow-md shadow-white" : ""
      }`}
    >
      {/* Logo */}
      <div className="logo">
        <img
          src="/Logo.png"
          alt="logo"
          className="w-32 h-auto cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Navigation for larger screens */}
      <nav className="hidden md:flex bg-black p-3 rounded-xl">
        <ul className="flex gap-5 justify-around list-none">
          {links.map((link, index) => (
            <li
              key={index}
              className={`${
                selected === link ? "bg-gray-700" : "bg-transparent"
              } cursor-pointer text-white hover:bg-gray-700 p-2 rounded-lg transition-all duration-300`}
              onClick={() => setSelected(link)}
            >
              <Link to={`/${link.toLowerCase()}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Icons and Auth Buttons */}
      <div className="flex gap-5 justify-around items-center">
        <div className="icon-buttons flex justify-around items-center gap-4">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/search")}
          >
            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
          </button>
          <button className="btn btn-primary">
            <i className="fa-regular fa-bell"></i>
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center">
          {auth ? (
            <button
              className="btn bg-red-600 hover:bg-red-900 text-white rounded-md p-2"
              onClick={() => setAuth(false)}
            >
              Logout
            </button>
          ) : (
            <div className="auth-buttons flex gap-4">
              <button className="btn btn-primary" onClick={() => setAuth(true)}>
                Login
              </button>
              <button
                className="btn bg-green-600 hover:bg-green-900 text-white rounded-md p-2"
                onClick={() => setAuth(true)}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>

        {/* Burger Menu for Small Screens */}
        {!isMobileMenuOpen && (
          <button
            className="md:hidden btn p-2 text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <i className="fa-solid fa-bars fa-lg"></i>
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed justify-center items-center md:hidden top-0 right-0 w-1/2 h-auto  bg-gray-500 text-white p-5 z-30">
          <button
            className="text-white text-2xl absolute top-5 right-5"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="fa-solid fa-times"></i>
          </button>
          <ul className="flex flex-col gap-4 mt-10">
            {links.map((link, index) => (
              <li
                key={index}
                className={`${
                  selected === link ? "bg-gray-700" : "bg-transparent"
                } cursor-pointer text-white hover:bg-gray-700 p-2 rounded-lg transition-all duration-300`}
                onClick={() => {
                  setSelected(link);
                  setIsMobileMenuOpen(false);
                }}
              >
                <Link to={`/${link.toLowerCase()}`}>{link}</Link>
              </li>
            ))}
          </ul>

          {/* Auth Buttons */}
          {auth ? (
            <button
              className="btn bg-red-600 hover:bg-red-900 text-white rounded-md p-2 mt-2 w-full"
              onClick={() => setAuth(false)}
            >
              Logout
            </button>
          ) : (
            <div className="auth-buttons flex flex-col gap-4 mt-2">
              <button className="btn btn-primary" onClick={() => setAuth(true)}>
                Login
              </button>
              <button
                className="btn bg-green-600 hover:bg-green-900 text-white rounded-md p-2"
                onClick={() => setAuth(true)}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Headers;

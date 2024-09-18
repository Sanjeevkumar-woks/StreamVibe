import { useEffect, useState } from "react";

const Headers = () => {
  const [selected, setSelected] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [auth, setAuth] = useState(true);
  const links = ["Home", "Movies & shows", "Support", "Subscription"];
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

  return (
    <header
      className={`flex justify-around items-center fixed top-0 z-20 w-full transition-all duration-300 ease-in-out p-2 ${
        scrolled ? "bg-gray-500 bg-opacity-50 shadow-md shadow-white" : ""
      }`}
    >
      {/* Logo */}
      <div className="logo">
        <img src="/Logo.png" alt="logo" className="w-32 h-auto" />
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
              {link}
            </li>
          ))}
        </ul>
      </nav>

      {/* Search Bar (Visible only if opened) */}
      {isOpen && (
        <div className="SearchBar flex items-center gap-2 md:gap-2 justify-center mx-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered p-2 rounded-md w-[100%] bg-slate-200"
          />
          <button className="btn btn-primary hover:bg-red-600 rounded-md p-2">
            Search
          </button>
        </div>
      )}

      {/* Icons and Auth Buttons */}
      <div className="flex gap-5 justify-around items-center">
        <div className="icon-buttons flex justify-around items-center gap-4">
          <button
            className="btn btn-primary"
            onClick={() => setIsOpen(!isOpen)}
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
        <div className="fixed justify-center items-center md:hidden top-0 right-0 w-1/2 h-screen bg-transparent bg-gray-700 text-white p-5 z-30">
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
                {link}
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

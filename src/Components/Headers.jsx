import { useEffect, useState } from "react";

const Headers = () => {
  const [selected, setSelected] = useState("Home");
  const links = ["Home", "Movies & shows", "Support", "Subscription"];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-around items-center fixed top-0 z-20 w-full transition-all duration-300 ease-in-out p-1 ${
        scrolled ? "bg-gray-500 bg-opacity-50 shadow-md shadow-white" : ""
      }`}
    >
      <div className="logo ">
        <img src="/Logo (1).png" alt="logo" className="w-32 h-auto" />
      </div>
      <nav className="nav bg-black p-3 rounded-xl">
        <ul className="flex gap-5 justify-around list-none">
          {links.map((link, index) => (
            <li
              key={index}
              className={`${
                selected === link ? "bg-gray-700" : "bg-transparent"
              } cursor-pointer text-white hover:bg-gray-700 p-2 rounded-lg  transition-all duration-300`}
              onClick={() => setSelected(link)}
            >
              {link}
            </li>
          ))}
        </ul>
      </nav>
      <div className="icon-buttons flex justify-around items-center gap-4">
        <button className="btn btn-primary">
          <i className="fa-solid fa-magnifying-glass fa-lg"></i>
        </button>
        <button className="btn btn-primary">
          <i className="fa-regular fa-bell"></i>
        </button>
      </div>
    </header>
  );
};

export default Headers;

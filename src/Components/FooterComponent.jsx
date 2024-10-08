import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black flex flex-col gap-4 justify-center items-center pt-4 sm:pt-2">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center p-4">
        {/* Column 1 */}
        <div className="flex flex-col gap-2">
          <Link to="/home" className="text-white font-semibold">
            Home
          </Link>
          <Link
            to="/categories"
            className="text-sm text-gray-600 hover:text-white"
          >
            Categories
          </Link>
          <Link
            to="/devices"
            className="text-sm text-gray-600 hover:text-white"
          >
            Devices
          </Link>
          <Link
            to="/pricing"
            className="text-sm text-gray-600 hover:text-white"
          >
            Pricing
          </Link>
          <Link to="/faq" className="text-sm text-gray-600 hover:text-white">
            FAQ
          </Link>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2">
          <Link to="/movies" className="text-white font-semibold">
            Movies
          </Link>
          <Link to="/genres" className="text-sm text-gray-600 hover:text-white">
            Genres
          </Link>
          <Link
            to="/trending"
            className="text-sm text-gray-600 hover:text-white"
          >
            Trending
          </Link>
          <Link
            to="/new-release"
            className="text-sm text-gray-600 hover:text-white"
          >
            New Release
          </Link>
          <Link
            to="/popular"
            className="text-sm text-gray-600 hover:text-white"
          >
            Popular
          </Link>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2">
          <Link to="/shows" className="text-white font-semibold">
            Shows
          </Link>
          <Link to="/genres" className="text-sm text-gray-600 hover:text-white">
            Genres
          </Link>
          <Link
            to="/trending"
            className="text-sm text-gray-600 hover:text-white"
          >
            Trending
          </Link>
          <Link
            to="/new-release"
            className="text-sm text-gray-600 hover:text-white"
          >
            New Release
          </Link>
          <Link
            to="/popular"
            className="text-sm text-gray-600 hover:text-white"
          >
            Popular
          </Link>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-2">
          <Link to="/support" className="text-white font-semibold">
            Support
          </Link>
          <Link
            to="/contact-us"
            className="text-sm text-gray-600 hover:text-white"
          >
            Contact Us
          </Link>
          <Link
            to="/devices"
            className="text-sm text-gray-600 hover:text-white"
          >
            Devices
          </Link>
          <Link
            to="/pricing"
            className="text-sm text-gray-600 hover:text-white"
          >
            Pricing
          </Link>
          <Link to="/faq" className="text-sm text-gray-600 hover:text-white">
            FAQ
          </Link>
        </div>

        {/* Column 5 */}
        <div className="flex flex-col gap-2">
          <Link to="/subscription" className="text-white font-semibold">
            Subscription
          </Link>
          <Link to="/plans" className="text-sm text-gray-600 hover:text-white">
            Plans
          </Link>
          <Link
            to="/features"
            className="text-sm text-gray-600 hover:text-white"
          >
            Features
          </Link>
        </div>

        {/* Connect with Us */}
        <div className="flex flex-col gap-2 justify-center items-center">
          <Link to="/connect" className="text-center font-semibold text-white">
            Connect with us
          </Link>
          <div className="flex gap-4 text-2xl text-gray-600 hover:text-white">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className=" flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 p-2 bg-gray-900 w-full">
        <p className="text-center">
          &copy; 2023 StreamVibe. All Rights Reserved.
        </p>
        <div className="flex gap-4">
          <Link to="/terms-of-use" className="text-gray-600 hover:text-white">
            Terms of Use
          </Link>
          <Link to="/privacy-policy" className="text-gray-600 hover:text-white">
            Privacy Policy
          </Link>
          <Link to="/cookie-policy" className="text-gray-600 hover:text-white">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

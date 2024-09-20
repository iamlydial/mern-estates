import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Mern</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="flex bg-slate-100 p-3 rounded-lg items-center">
          <input
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            type="text"
            placeholder="Search..."
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>

          {currentUser ? (
            <Link to="/profile">
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            </Link>
          ) : location.pathname === "/sign-in" ? (
            <Link to="/sign-up">
              <li className="sm:inline text-slate-700 hover:underline">
                Sign up
              </li>
            </Link>
          ) : (
            <Link to="/sign-in">
              <li className="sm:inline text-slate-700 hover:underline">
                Sign in
              </li>
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;

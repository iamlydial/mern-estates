import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Mern</span>
          <span className="text-slate-700">Estate</span>
        </h1>
        <form className="flex bg-slate-100 p-3 rounded-lg items-center">
          <input
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            type="text"
            placeholder="Search..."
          />
          <FaSearch className="text-slate-600"/>
        </form>
        <ul className="flex gap-4">
            <li className="hidden sm:inline">Home</li>
            <li>About</li>
            <li>Sign in</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      {/* top side */}
      <div className="flex flex-col gap-6 py-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find your next <span className="text-slate-500">dream</span> <br />
          place with ease
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm hover:underline">
          MERN Estate is the best place to find your next place to live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link
          className="text-sm sm:text-sm text-blue-800 font-bold"
          to={"/search"}
        >
          Let's get started
        </Link>
      </div>
      {/* swiper */}

      {/* listing result for offer sale and reny */}
    </div>
  );
};

export default Home;

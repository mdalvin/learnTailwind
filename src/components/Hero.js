import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div
        className="bg-white flex flex-col
        items-center lg:text-xs md:text-xs sm:text-xs mt-4"
      >
        <div className="grid grid-rows-1 grid-flow-col gap-4">
          <div>
            <Link
              className="py-1 px-5 bg-gray-600 rounded-full text-xs 
      hover:bg-red-500 text-white transition duration-300 ease-in-out flex items-center
      "
            >
              <b>JPN</b>
            </Link>
          </div>
          <div>
            <Link
              className="py-1 px-5 bg-gray-600 rounded-full text-xs 
      hover:bg-red-500 inline text-white transition duration-300 ease-in-out flex items-center 
      "
            >
              <b>IND</b>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="bg-white h-screen flex flex-col
        justify-center items-center"
      >
        <h1
          className="
        lg:text-7xl md:text-5xl sm:text-3xl 
        text-3xl mb-14"
        >
          Welcome to <span className="text-red-500">BOOM</span>!
        </h1>
        <Link
          className="py-4 px-8 bg-gray-500 rounded-full text-1xl 
        hover:bg-red-500 inline text-black transition duration-300 ease-in-out flex items-center 
        animate-pulse"
        >
          <b>Shop Now</b>
          <svg
            className="w-6 h-6 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default Hero;

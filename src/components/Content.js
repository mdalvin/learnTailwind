import React from "react";
import imageOne from "../images/headphone1.jpeg";
import imageTwo from "../images/headphone2.png";
import imageThree from "../images/headphone3.jpeg"

const Content = () => {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center 
    bg-white h-screen font-mono py-40"
      >
        <img
          src={imageOne}
          alt="headphone"
          className="h-full rounded 
            mb-20 shadow"
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="lg:text-2xl md:text-lg sm:text-lg mb-2">
            Beats Studio3 Wireless Over-ear Headphone
          </h2>
          <p className="mb-2">
            Pure Anti Noise Cancelling
          </p>
          <span>$1790</span>
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center 
  bg-white h-screen font-mono py-40"
      >
        <img
          src={imageTwo}
          alt="headphone"
          className="h-full rounded 
          mb-20 shadow"
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="lg:text-2xl md:text-lg sm:text-lg mb-2">
            Dolby Dimension
          </h2>
          <p className="mb-2">
            Dual Noise Sensor and touch sensor technology
          </p>
          <span>$2280</span>
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center 
  bg-white h-screen font-mono py-40"
      >
        <img
          src={imageThree}
          alt="headphone"
          className="h-full rounded 
          mb-20 shadow"
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="lg:text-2xl md:text-lg sm:text-lg mb-2">
            Sennheiser HD 599 SE
          </h2>
          <p className="mb-2">
            Built with Sennheiser engineered transducers
          </p>
          <span>$1590</span>
        </div>
      </div>
    </>
  );
};

export default Content;

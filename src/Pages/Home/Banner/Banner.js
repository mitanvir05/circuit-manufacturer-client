import React from "react";
import banner from "../../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={banner} alt="" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Best Circuits In Cheap Price</h1>
            <p className="py-6">
              Great selection of Integrated Circuits at the guaranteed lowest
              price. See all of our exclusive deals on Integrated Circuits (IC).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

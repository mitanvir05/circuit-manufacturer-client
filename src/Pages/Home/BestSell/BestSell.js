import React from "react";
import BestSelling from "../../../assets/images/bestsell.jpg";

const BestSell = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">
        Best Selling Product Of The Year
      </h1>
      <div class="card card-compact w-96 bg-base-100 shadow-xl container mx-auto">
        <figure>
          <img src={BestSelling} alt="Arduino" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            Arduino nano Multifunction expansion board V3.0
          </h2>
          <div class="stats stats-vertical shadow">
            <div class="stat text-xl ">
              <div class="stat-title mx-auto ">Orders</div>
              <div class="stat-value mx-auto">1.8K</div>
              <div class="stat-title mx-auto ">Positive Feedback</div>
              <div class="stat-value mx-auto">86%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSell;

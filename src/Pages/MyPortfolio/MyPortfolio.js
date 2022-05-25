import React from "react";
import portfolio from "../../assets/images/portfolio.jpg";

const MyPortfolio = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={portfolio} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 class="text-5xl font-bold">Name : Md. Muhaimin Islam Tanvir</h1>
          <div class="text-3xl font-bold py-6">
            <h2>Email : tanvir.cse05@gmail.com</h2>
          </div>
          <div class="text-3xl font-bold py-6">
            <h2>
              Education :3rd year of B.Sc. in Computer Science & Engineering
              (CSE){" "}
            </h2>
          </div>
          <div class="text-3xl font-bold py-6">
            <h1>Technologies or Skills</h1>

            <li>HTML/CSS skills.</li>
            <li> Analytical skills.</li>
            <li> Responsive design skills.</li>
            <li>JavaScript skills.</li>
            <li>Testing and debugging skills.</li>
            <li> Back-end basics.</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;

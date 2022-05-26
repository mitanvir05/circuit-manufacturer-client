import React from "react";
import portfolio from "../../assets/images/portfolio.jpg";

const MyPortfolio = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={portfolio}
          className="max-w-sm rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">
            Name : Md. Muhaimin Islam Tanvir
          </h1>
          <div className="text-3xl font-bold py-6">
            <h2>Email : tanvir.cse05@gmail.com</h2>
          </div>
          <div className="text-3xl font-bold py-6">
            <h2>
              Education :3rd year of B.Sc. in Computer Science & Engineering
              (CSE){" "}
            </h2>
          </div>
          <div className="text-2xl font-bold py-6">
            <h1>Technologies or Skills</h1>
            <li>HTML/CSS skills.</li>
            <li> Analytical skills.</li>
            <li> Responsive design skills.</li>
            <li>JavaScript skills.</li>
            <li>Testing and debugging skills.</li>
            <li> Back-end basics.</li>
          </div>
          <div className="text-2xl font-bold py-2">
            <h1>Three of My Projects</h1>
            <li>https://laptop-review-react-tailwind.netlify.app/</li>
            <li>https://random-laptop-pick.netlify.app/</li>
            <li>https://inventory-management-5d2da.web.app/</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;

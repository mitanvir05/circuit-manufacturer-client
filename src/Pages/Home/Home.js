import React from "react";
import Banner from "./Banner/Banner";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import Tools from "./Tools/Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <BusinessSummary></BusinessSummary>
    </div>
  );
};

export default Home;

import React from "react";
import AllReview from "./AllReview/AllReview";
import Banner from "./Banner/Banner";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import Contact from "./Contact/Contact";
import Tools from "./Tools/Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <BusinessSummary></BusinessSummary>
      <AllReview></AllReview>
      <Contact></Contact>
    </div>
  );
};

export default Home;

import React from "react";
import ExPlan from "../../Components/Explan/index.js";
import Footer from "../../Components/Footer/index.js";
import Header from "../../Components/Header/";
import Hero from "../../Components/Hero/index.js";
import PlanFeatures from "../../Components/PlanFeatures/index.js";
import SearchDomain from "../../Components/SearchDomain/index.js";
import Services from "../../Components/Services/index.js";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <PlanFeatures />
      <Services />
      <SearchDomain />
      <ExPlan />
      <Footer />
    </div>
  );
};

export default Home;

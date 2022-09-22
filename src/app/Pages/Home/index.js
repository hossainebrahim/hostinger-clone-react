import React from "react";
import ControlPanel from "../../Components/ControlPanel/index.js";
import ExPlan from "../../Components/Explan/index.js";
import Footer from "../../Components/Footer/index.js";
import Header from "../../Components/Header/";
import Hero from "../../Components/Hero/index.js";
import MoneyBack from "../../Components/MoneyBack/index.js";
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
      <ControlPanel />
      <MoneyBack />
      <Footer />
    </div>
  );
};

export default Home;

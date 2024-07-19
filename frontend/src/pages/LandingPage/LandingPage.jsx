import React from "react";
import styles from "./LandingPage.module.css";
import Header from "../../components/LandingComponents/Header/Header";
import HeroSection from "../../components/LandingComponents/HeroSection/HeroSection";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
};

export default LandingPage;

import React from "react";
import styles from "./LandingPage.module.css";
import Header from "../../components/LandingComponents/Header/Header";
import HeroSection from "../../components/LandingComponents/HeroSection/HeroSection";
import OldvsNew from "../../components/LandingComponents/OldvsNew/OldvsNew";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <OldvsNew />
    </div>
  );
};

export default LandingPage;

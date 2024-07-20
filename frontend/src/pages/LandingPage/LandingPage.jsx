import React from "react";
import styles from "./LandingPage.module.css";
import Header from "../../components/LandingComponents/Header/Header";
import HeroSection from "../../components/LandingComponents/HeroSection/HeroSection";
import OldvsNew from "../../components/LandingComponents/OldvsNew/OldvsNew";
import DemoModels from "../../components/LandingComponents/DemoModels/DemoModels";
import PlatformSection from "../../components/LandingComponents/PlatformSection/PlatformSection";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <OldvsNew />
      <DemoModels />
      <PlatformSection />
    </div>
  );
};

export default LandingPage;

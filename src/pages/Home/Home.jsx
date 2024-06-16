import React from "react";
import { CardsSection, ProductCards } from "../Cards";
import { FooterSection, FooterLinks } from "../Footer";
import LandingPage from "./LandingPage";
import IdeaSection from "./IdeaSection";

const Home = () => {
  return (
    <>
      <LandingPage />
      <CardsSection />
      <ProductCards />
      <IdeaSection />
      <FooterSection />
      <FooterLinks />
    </>
  );
};

export default Home;

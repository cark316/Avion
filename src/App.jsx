import React from "react";
import { Navbar } from "./components";
import { LandingPage, CardsSection, ProductCards, IdeaSection, FooterSection, FooterLinks } from "./pages";

const App = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <CardsSection />
      <ProductCards />
      <IdeaSection />
      <FooterSection />
      <FooterLinks />
    </>
  );
};

export default App;

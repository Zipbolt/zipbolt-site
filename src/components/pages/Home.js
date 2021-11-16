import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import AboutUs from "../AboutUs";
import Clients from "../OurClients";
import Contact from "../ContactUs";
import BttButton from "../BttButton";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Cards />
      <Clients />
      <Contact />
      <BttButton />
    </>
  );
}

export default Home;

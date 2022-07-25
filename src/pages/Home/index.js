import React from "react";
import * as SC from "./styles";
import Hero from "./Hero";
import Hours from "./Hours";
import Services from "./Services";
import Insurances from "./Insurances";

function Home() {
  // Hero - Name, Slogan, Description, Buttons + GMaps
  // Hours - Picture + Hours
  // Services - Cards with services
  // Insurances - Cards with participating insurance companies
  // Footer - Contact Info, (Nav?), Copyright
  return (
    <SC.Container>
      <Hero />
      <Hours />
      <Services />
      <Insurances />
    </SC.Container>
  );
}

export default Home;

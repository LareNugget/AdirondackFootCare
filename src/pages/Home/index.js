import React from "react";
import * as SC from "./styles";
import Hero from "./Hero";
import Hours from "./Hours";
import Services from "./Services";

function Home() {
  return (
    <SC.Container>
      <Hero /> {/* Business Name + GMap Component, 60/40 split on desktop */}
      <Hours />{" "}
      {/* Picture of business in action + hrs, 50/50 split on desktop */}
      <Services />
    </SC.Container>
  );
}

export default Home;

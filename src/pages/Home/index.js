import React from "react";
import * as SC from "./styles";
import HeroText from "./HeroText";

function Home() {
  return (
    <SC.Container>
      <SC.HeroContainer>
        <HeroText />
        <iframe
          width="450"
          height="250"
          frameborder="0"
          style="border:0"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/view?key=API_KEY&center=42.86788684949196,-73.80636068256163&zoom=18&maptype=roadmap"
          allowfullscreen
        ></iframe>
      </SC.HeroContainer>
    </SC.Container>
  );
}

export default Home;

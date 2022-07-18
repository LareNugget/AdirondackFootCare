import React from "react";
import * as SC from "./styles";
import HeroText from "./HeroText";
import HeroMap from "./HeroMap";

function Home() {
  return (
    <SC.Container>
      <SC.HeroContainer>
        <HeroText />
        <HeroMap />
      </SC.HeroContainer>
    </SC.Container>
  );
}

export default Home;

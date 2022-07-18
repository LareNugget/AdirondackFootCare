import React from "react";
import * as SC from "./styles";
import HeroText from "./HeroText";
import HeroMap from "./HeroMap";
import OfficeHours from "./OfficeHours";

function Home() {
  return (
    <SC.Container>
      <SC.HeroContainer>
        <HeroText />
        <HeroMap />
      </SC.HeroContainer>

      <SC.RowContainer>
        <OfficeHours />
        <OfficeHours />
      </SC.RowContainer>
    </SC.Container>
  );
}

export default Home;

import React from "react";
import * as SC from "./styles";
import Aetna from "../../../images/insurance/aetna.png";
import AARP from "../../../images/insurance/aarp.jpg";
import Blueshield from "../../../images/insurance/blueshield.png";
import CDPHP from "../../../images/insurance/cdphp.jpg";
import Empire from "../../../images/insurance/empire.jpg";
import Medicare from "../../../images/insurance/medicare.jpg";
import MVP from "../../../images/insurance/mvp.png";
import Progressive from "../../../images/insurance/progressive.png";
import Tricare from "../../../images/insurance/tricare.png";

function Insurances() {
  return (
    <SC.Container>
      <SC.Header>Insurance We Accept</SC.Header>

      <SC.CardContainer>
        <img src={Aetna} alt="Aetna" />
        <img src={AARP} alt="AARP" />
        <img src={Blueshield} alt="Blueshield" />
        <img src={CDPHP} alt="CDPHP" />
        <img src={Empire} alt="Empire" />
        <img src={Medicare} alt="Medicare" />
        <img src={MVP} alt="MVP" />
        <img src={Progressive} alt="Progressive" />
        <img src={Tricare} alt="Tricare" />
      </SC.CardContainer>

      <SC.ButtonContainer>
        <button>View All Providers</button>
      </SC.ButtonContainer>
    </SC.Container>
  );
}

export default Insurances;

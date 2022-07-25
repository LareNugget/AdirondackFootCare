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
        <SC.Card>
          <img src={Aetna} alt="" />
        </SC.Card>
        <SC.Card>
          <img src={AARP} alt="" />
        </SC.Card>
        <SC.Card>
          <img src={Blueshield} alt="" />
        </SC.Card>
        <SC.Card>
          <img src={CDPHP} alt="" />
        </SC.Card>
        <SC.Card>
          <img src={Empire} alt="" />
        </SC.Card>
        <SC.Card>
          <img src={Medicare} alt="" />
        </SC.Card>
        <SC.Card>
          <img src={MVP} alt="" />
        </SC.Card>
        <SC.Card>
          <img src={Progressive} alt="" />
        </SC.Card>
        <SC.Card>
          <img src={Tricare} alt="" />
        </SC.Card>
      </SC.CardContainer>

      <SC.ButtonContainer>
        <button>View All Providers</button>
      </SC.ButtonContainer>
    </SC.Container>
  );
}

export default Insurances;

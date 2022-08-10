import React from "react";
import * as SC from "./styles";
import { Link } from "react-router-dom";
import Aetna from "../../../images/insurance/aetna.jpg";
import AARP from "../../../images/insurance/aarp.jpg";
import Blueshield from "../../../images/insurance/blueshield.jpg";
import CDPHP from "../../../images/insurance/cdphp.jpg";
import Empire from "../../../images/insurance/empire.jpg";
import Medicare from "../../../images/insurance/medicare.jpg";
import MVP from "../../../images/insurance/mvp.jpg";
import Progressive from "../../../images/insurance/progressive.jpg";
import Tricare from "../../../images/insurance/tricare.jpg";

function Insurances() {
  return (
    <SC.Container>
      <SC.Header>Insurance We Acceptt</SC.Header>

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
        <Link to="/insurance">
          <button>View All Providers</button>
        </Link>
      </SC.ButtonContainer>
    </SC.Container>
  );
}

export default Insurances;

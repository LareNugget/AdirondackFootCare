import React from "react";
import * as SC from "./styles";
import AARP from "../../../images/insurance/aarp.webp";
import Aetna from "../../../images/insurance/aetna.webp";
import Blueshield from "../../../images/insurance/blueshield.webp";
import CDPHP from "../../../images/insurance/cdphp.webp";
import Empire from "../../../images/insurance/empire.webp";
import Medicare from "../../../images/insurance/medicare.webp";
import MVP from "../../../images/insurance/mvp.webp";
import Progressive from "../../../images/insurance/progressive.webp";
import TriCare from "../../../images/insurance/tricare.webp";
import NYSHIP from "../../../images/insurance/nyship.webp";

function InsuranceCards() {
  return (
    <SC.Container>
      <SC.Header>Providers</SC.Header>
      <SC.CardContainer>
        <SC.InsuranceCard>
          <img src={CDPHP} alt="CDPHP" />
          <SC.CardText>
            <div>CDPHP</div>
          </SC.CardText>
        </SC.InsuranceCard>

        <SC.InsuranceCard>
          <img src={NYSHIP} alt="NYS Government Employees Plan" />
          <SC.CardText>
            <div>NYSHIP</div>
          </SC.CardText>
        </SC.InsuranceCard>

        <SC.InsuranceCard>
          <img src={Blueshield} alt="Blueshield" />
          <SC.CardText>
            <div>Blueshield</div>
          </SC.CardText>
        </SC.InsuranceCard>

        <SC.InsuranceCard>
          <img src={MVP} alt="MVP" />
          <SC.CardText>
            <div>MVP</div>
          </SC.CardText>
        </SC.InsuranceCard>

        <SC.InsuranceCard>
          <img src={Medicare} alt="Medicare" />
          <SC.CardText>
            <div>Medicare</div>
          </SC.CardText>
        </SC.InsuranceCard>

        <SC.InsuranceCard>
          <img src={AARP} alt="AARP" />
          <SC.CardText>
            <div>AARP</div>
          </SC.CardText>
        </SC.InsuranceCard>

        <SC.InsuranceCard>
          <img src={Aetna} alt="Aetna" />
          <SC.CardText>
            <div>Aetna</div>
          </SC.CardText>
        </SC.InsuranceCard>

        <SC.InsuranceCard>
          <img src={Empire} alt="Empire" />
          <SC.CardText>
            <div>Empire</div>
          </SC.CardText>
        </SC.InsuranceCard>

        <SC.InsuranceCard>
          <img src={Progressive} alt="Progressive" />
          <SC.CardText>
            <div>Progressive</div>
          </SC.CardText>
        </SC.InsuranceCard>

        <SC.InsuranceCard>
          <img src={TriCare} alt="Tricare" />
          <SC.CardText>
            <div>TriCare</div>
          </SC.CardText>
        </SC.InsuranceCard>
      </SC.CardContainer>
    </SC.Container>
  );
}

export default InsuranceCards;

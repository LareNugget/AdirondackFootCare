import React from "react";
import * as SC from "./styles";
import AARP from "../../../images/insurance/aarp.jpg";
import Aetna from "../../../images/insurance/aetna.jpg";
import Blueshield from "../../../images/insurance/blueshield.jpg";
import CDPHP from "../../../images/insurance/cdphp.jpg";
import Empire from "../../../images/insurance/empire.jpg";
import Medicare from "../../../images/insurance/medicare.jpg";
import MVP from "../../../images/insurance/mvp.jpg";
import Progressive from "../../../images/insurance/progressive.jpg";
import TriCare from "../../../images/insurance/tricare.jpg";
import NYSHIP from "../../../images/insurance/nyship.jpg";

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

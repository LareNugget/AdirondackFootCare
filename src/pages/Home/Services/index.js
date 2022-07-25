import React from "react";
import * as SC from "./styles";
import Dolorclast from "../../../images/dolorclast.png";
import BioFoam from "../../../images/biofoam.png";
import SupportBraces from "../../../images/braces.png";

function Services() {
  return (
    <SC.ServicesContainer>
      <SC.ServicesHeader>Our Podiatry Services</SC.ServicesHeader>

      <SC.ServiceCardContainer>
        <hr />
        <SC.ServiceCard>
          <img src={Dolorclast} alt="" />
          <div>Swiss Dolorclast</div>

          <p>
            The Swiss Dolorclast method is a state of the art treatment that
            utilizes electroshock technology to stimulate blood flow into areas
            of the foot requiring healing.
          </p>
        </SC.ServiceCard>
        <hr />
        <SC.ServiceCard>
          <img src={BioFoam} alt="" />
          <div>Custom Orthotics</div>
          <p>
            Using BioFoam technology, we can create a custom model of your exact
            foot shape. This allows for a completely custom orthotic!+
          </p>
        </SC.ServiceCard>
        <hr />
        <SC.ServiceCard>
          <img src={SupportBraces} alt="" />
          <div>Support Braces</div>
          <p>
            We offer a variety of braces that provide support to key areas of
            the foot and leg, including the ankle and Achilles tendon.
          </p>
        </SC.ServiceCard>
        <hr />
      </SC.ServiceCardContainer>
      <SC.ButtonContainer>
        <button>View All Podiatry Services</button>
      </SC.ButtonContainer>
    </SC.ServicesContainer>
  );
}

export default Services;

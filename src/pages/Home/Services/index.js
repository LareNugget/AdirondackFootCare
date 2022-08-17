import React from "react";
import * as SC from "./styles";
import Dolorclast from "../../../images/dolorclast.jpg";
import BioFoam from "../../../images/biofoam.jpg";
import SupportBraces from "../../../images/braces.jpg";
import { Link } from "react-router-dom";

function Services() {
  return (
    <SC.ServicesContainer>
      <SC.ServicesHeader>Our Podiatry Services</SC.ServicesHeader>

      <SC.ServiceCardContainer>
        <hr />
        <SC.ServiceCard>
          <img src={Dolorclast} alt="Swiss Dolorclast" />
          <div>Swiss Dolorclast</div>
          <p>
            A state of the art treatment that utilizes electroshock technology
            to stimulate blood flow into areas of the foot requiring healing.
          </p>
        </SC.ServiceCard>
        <hr />
        <SC.ServiceCard>
          <img src={BioFoam} alt="BioFoam" />
          <div>Custom Orthotics</div>
          <p>
            Using BioFoam technology, we can create a custom model of your exact
            foot shape. This allows for a completely custom orthotic!+
          </p>
        </SC.ServiceCard>
        <hr />
        <SC.ServiceCard>
          <img src={SupportBraces} alt="Support Braces" />
          <div>Support Braces</div>
          <p>
            We offer a variety of braces that provide support to key areas of
            the foot and leg, including the ankle and Achilles tendon.
          </p>
        </SC.ServiceCard>
        <hr />
      </SC.ServiceCardContainer>
      <SC.ButtonContainer>
        <Link to="/services">
          <button>View All Podiatry Services</button>
        </Link>
      </SC.ButtonContainer>
    </SC.ServicesContainer>
  );
}

export default Services;

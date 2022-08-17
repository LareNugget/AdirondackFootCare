import React from "react";
import * as SC from "./styles";
import Dolorclast from "../../../images/dolorclast.jpg";
import BioFoam from "../../../images/biofoam.jpg";
import SupportBraces from "../../../images/braces.jpg";

function ServiceCards() {
  return (
    <SC.Container>
      <SC.Header>Services</SC.Header>
      <SC.Bios>
        <SC.Service>
          <img src={Dolorclast} alt="Swiss Dolorclast" />
          <SC.ServiceText>
            <h2>Swiss Dolorclast</h2>
            <span>Inflammation and Pain</span>
            <p>
              The Swiss Dolorclast treatment uses single acoustic pressure waves
              to treat musculoskeletal and dermatological pathologies. It
              combines the propogation of radial and focused shock waves to
              optimize results of treatment.
            </p>
          </SC.ServiceText>
        </SC.Service>
        <SC.Service>
          <img src={BioFoam} alt="Custom Orthotics" />
          <SC.ServiceText>
            <h2>Custom Orthotics</h2>
            <span>Arch Support</span>
            <p>
              Through the use of Bio Foam impression blocks, we capture an
              accurate impression of your foot as you walk on it. Using this
              impression, a customized orthotic insert can be created for your
              shoe! This insert provides arch support for areas of your feet
              that are flat and causing pain.
            </p>
          </SC.ServiceText>
        </SC.Service>
        <SC.Service>
          <img src={SupportBraces} alt="Support Braces" />
          <SC.ServiceText>
            <h2>Support Braces</h2>
            <span>Injury and Structural Support</span>
            <p>
              We offer a variety of braces that provide support to key areas of
              the foot and leg, including the ankle and Achilles tendon.
            </p>
          </SC.ServiceText>
        </SC.Service>
      </SC.Bios>
    </SC.Container>
  );
}

export default ServiceCards;

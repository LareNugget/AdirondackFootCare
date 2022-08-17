import React from "react";
import * as SC from "./styles";
import { GiBarefoot } from "react-icons/gi";

function PageLabel() {
  return (
    <SC.Container>
      <SC.Label>
        <GiBarefoot />
        <SC.LabelText>
          <h1>Services</h1>
          <h3>
            We diagnose and treat all types of diseases, injuries, and other
            medical conditions related to your ankles and feet!
          </h3>
        </SC.LabelText>
      </SC.Label>
    </SC.Container>
  );
}

export default PageLabel;

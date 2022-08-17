import React from "react";
import * as SC from "./styles";
import { GiHeartShield } from "react-icons/gi";

function PageLabel() {
  return (
    <SC.Container>
      <SC.Label>
        <GiHeartShield />
        <SC.LabelText>
          <h1>Insurance</h1>
          <h3>View all of the insurance providers that we do business with!</h3>
        </SC.LabelText>
      </SC.Label>
    </SC.Container>
  );
}

export default PageLabel;

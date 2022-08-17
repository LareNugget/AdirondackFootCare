import React from "react";
import * as SC from "./styles";
import { FaUserNurse } from "react-icons/fa";

function PageLabel() {
  return (
    <SC.Container>
      <SC.Label>
        <FaUserNurse />
        <SC.LabelText>
          <h1>Staff</h1>
          <h3>
            Meet our wonderful staff that strive to provide you with the
            professional podiatry care you deserve!
          </h3>
        </SC.LabelText>
      </SC.Label>
    </SC.Container>
  );
}

export default PageLabel;

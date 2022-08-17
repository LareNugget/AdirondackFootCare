import React from "react";
import * as SC from "./styles";
import { GiBarefoot } from "react-icons/gi";

function PageLabel() {
  return (
    <SC.Container>
      <SC.Label>
        <GiBarefoot />
        <SC.LabelText>
          <h1>Products</h1>
          <h3>
            We offer a variety of products that help relieve common podiatric
            ailments.
          </h3>
        </SC.LabelText>
      </SC.Label>
    </SC.Container>
  );
}

export default PageLabel;

import React from "react";
import * as SC from "./styles";
import PageLabel from "./PageLabel";
import InsuranceCards from "./InsuranceCards";

function Insurance() {
  return (
    <SC.Container>
      <PageLabel />
      <InsuranceCards />
    </SC.Container>
  );
}

export default Insurance;

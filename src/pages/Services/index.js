import React from "react";
import * as SC from "./styles";
import PageLabel from "./PageLabel";
import ServiceCards from "./ServiceCards";

function Services() {
  return (
    <SC.Container>
      <PageLabel />
      <ServiceCards />
    </SC.Container>
  );
}

export default Services;

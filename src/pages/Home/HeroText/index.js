import React from "react";
import * as SC from "./styles";

function HeroText() {
  return (
    <SC.Container>
      <SC.Slogan>
        <div>HAPPY FEET,</div>
        <div>HEALTHY FEET</div>
      </SC.Slogan>

      <SC.Description>
        Our Clifton Park practice is located at 954 Route 146 in Fountain
        Professional Park. We offer a range of podiatry services, including
        custom orthotics and Swiss Dolorclast treatments. We also sell a variety
        of podiatry products.
      </SC.Description>
      <SC.ButtonContainer>
        <button>New Patient Form</button>
        <button>Meet Our Staff</button>
      </SC.ButtonContainer>
    </SC.Container>
  );
}

export default HeroText;

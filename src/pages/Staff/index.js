import React from "react";
import * as SC from "./styles";
import PageLabel from "./PageLabel";
import Doctors from "./Doctors";
import OfficeStaff from "./OfficeStaff";

function Staff() {
  return (
    <SC.Container>
      <PageLabel />
      <Doctors />
      <OfficeStaff />
    </SC.Container>
  );
}

export default Staff;

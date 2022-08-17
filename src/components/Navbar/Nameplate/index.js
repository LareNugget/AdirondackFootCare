import React from "react";
import AdirondackLogo from "../../../images/adirondacklogo.png";
import * as SC from "./styles";
import { Link } from "react-router-dom";
import { BiPhone } from "react-icons/bi";

function Nameplate({ toggleDropdown, DropdownActive }) {
  return (
    <SC.NameplateContainer>
      <Link to="/" onClick={DropdownActive ? toggleDropdown : {}}>
        <img
          src={AdirondackLogo}
          alt=""
          style={{ height: "60px", width: "60px" }}
        />
      </Link>
      <SC.NameplateText>
        <SC.BusinessName>ADIRONDACK FOOT CARE</SC.BusinessName>
        <SC.BusinessPhone>
          <BiPhone style={{ fontSize: "1.2rem" }} />
          <div>(518) 383-0302</div>
        </SC.BusinessPhone>
      </SC.NameplateText>
    </SC.NameplateContainer>
  );
}

export default Nameplate;

import React from "react";
import AdirondackLogo from "../../../images/adirondacklogo.png";
import * as SC from "./styles";
import { Link } from "react-router-dom";
import { AiFillPhone } from "react-icons/ai";

function Nameplate({ toggleDropdown, DropdownActive }) {
  return (
    <SC.NameplateContainer>
      <Link to="/" onClick={DropdownActive ? toggleDropdown : {}}>
        <img
          src={AdirondackLogo}
          alt=""
          style={{ height: "50px", width: "50px" }}
        />
      </Link>
      <SC.NameplateText>
        <SC.BusinessName>ADIRONDACK FOOT CARE</SC.BusinessName>
        <SC.BusinessAddress>
          <AiFillPhone /> {"(518) 383-0302"}
        </SC.BusinessAddress>
      </SC.NameplateText>
    </SC.NameplateContainer>
  );
}

export default Nameplate;

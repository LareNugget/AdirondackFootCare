import React from "react";
import * as SC from "./styles";
import { Link } from "react-router-dom";

// Displays the dropdown buttons if the dropdown is active
function DropdownNavButtons({ toggleDropdown, DropdownActive }) {
  return DropdownActive ? (
    <SC.DropdownButtonContainer>
      <Link to="/staff" onClick={toggleDropdown}>
        Staff
      </Link>

      <Link to="/services" onClick={toggleDropdown}>
        Services
      </Link>

      <Link to="/products" onClick={toggleDropdown}>
        Products
      </Link>

      <Link to="/insurance" onClick={toggleDropdown}>
        Insurance
      </Link>
    </SC.DropdownButtonContainer>
  ) : (
    <></>
  );
}

export default DropdownNavButtons;

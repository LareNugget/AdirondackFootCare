import React from "react";
import * as SC from "./styles";
import { Link } from "react-router-dom";

// Displays the dropdown buttons if the dropdown is active
function DropdownNavButtons({ toggleDropdown, DropdownActive }) {
  return DropdownActive ? (
    <SC.DropdownButtonContainer>
      <Link to="/staff" onClick={toggleDropdown}>
        <SC.ButtonTitle>Staff</SC.ButtonTitle>
        <SC.ButtonDescription>
          Meet the team at Adirondack Foot Care
        </SC.ButtonDescription>
      </Link>

      <Link to="/services" onClick={toggleDropdown}>
        <SC.ButtonTitle>Services</SC.ButtonTitle>
        <SC.ButtonDescription>
          Information about the podiatry services we provide
        </SC.ButtonDescription>
      </Link>

      <Link to="/products" onClick={toggleDropdown}>
        <SC.ButtonTitle>Products</SC.ButtonTitle>
        <SC.ButtonDescription>
          View our podiatry products that are for sale
        </SC.ButtonDescription>
      </Link>

      <Link to="/insurance" onClick={toggleDropdown}>
        <SC.ButtonTitle>Insurance</SC.ButtonTitle>
        <SC.ButtonDescription>
          View participating insurance providers
        </SC.ButtonDescription>
      </Link>
    </SC.DropdownButtonContainer>
  ) : (
    <></>
  );
}

export default DropdownNavButtons;

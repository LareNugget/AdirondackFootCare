import React from "react";
import * as SC from "./styles";
import { Link } from "react-router-dom";

// Displays the dropdown buttons if the dropdown is active
function DropdownNavButtons({ toggleDropdown, DropdownActive }) {
  return DropdownActive ? (
    <SC.DropdownButtonContainer>
      <Link to="/staff">
        <button onClick={toggleDropdown}>Staff</button>
      </Link>

      <Link to="/services">
        <button onClick={toggleDropdown}>Services</button>
      </Link>

      <Link to="/products">
        <button onClick={toggleDropdown}>Products</button>
      </Link>

      <Link to="/insurance">
        <button onClick={toggleDropdown}>Insurance</button>
      </Link>
    </SC.DropdownButtonContainer>
  ) : (
    <></>
  );
}

export default DropdownNavButtons;

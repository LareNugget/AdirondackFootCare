import React from "react";
import * as SC from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

// Menu button switches between hamburger and x to open/close the dropdown nav
function MenuButton({ toggleDropdown, DropdownActive }) {
  return (
    <SC.MenuButton>
      {DropdownActive ? (
        <GrClose onClick={toggleDropdown} />
      ) : (
        <GiHamburgerMenu onClick={toggleDropdown} />
      )}
    </SC.MenuButton>
  );
}

export default MenuButton;

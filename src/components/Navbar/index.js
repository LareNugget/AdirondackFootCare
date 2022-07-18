import React, { useState } from "react";
import * as SC from "./styles";
import Nameplate from "./Nameplate";
import NavButtons from "./NavButtons";
import MenuButton from "./MenuButton";
import DropdownNavButtons from "./DropdownNavButtons";

function Navbar() {
  const [DropdownActive, setDropdownActive] = useState(false);

  const toggleDropdown = () => {
    setDropdownActive((prev) => !prev);
  };

  return (
    <>
      <SC.Navbar>
        <Nameplate toggleDropdown={toggleDropdown} />{" "}
        {/* Business Logo, Name, Address */}
        <NavButtons /> {/* Nav Buttons. VIEWS ON med+ screens */}
        <MenuButton
          toggleDropdown={toggleDropdown}
          DropdownActive={DropdownActive}
        />
        {/* Menu Button. VIEWS ON small to med screens */}
      </SC.Navbar>
      <DropdownNavButtons
        toggleDropdown={toggleDropdown}
        DropdownActive={DropdownActive}
      />
      {/* Dropdown Nav Buttons. VIEWS ON small to med screens */}
    </>
  );
}

export default Navbar;

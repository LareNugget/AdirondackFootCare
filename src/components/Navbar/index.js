import React, { useState } from "react";
import * as SC from "./styles";
import Nameplate from "./Nameplate";
import NavButtons from "./NavButtons";
import MenuButton from "./MenuButton";
import DropdownNavButtons from "./DropdownNavButtons";

function Navbar({ navButtonPress }) {
  const [DropdownActive, setDropdownActive] = useState(false);

  const toggleDropdown = () => {
    setDropdownActive((prev) => !prev);
  };

  return (
    <>
      <SC.Navbar>
        <Nameplate toggleDropdown={toggleDropdown} />
        <NavButtons navButtonPress={navButtonPress} />
        <MenuButton
          toggleDropdown={toggleDropdown}
          DropdownActive={DropdownActive}
        />
      </SC.Navbar>
      <DropdownNavButtons
        toggleDropdown={toggleDropdown}
        DropdownActive={DropdownActive}
        navButtonPress={navButtonPress}
      />
    </>
  );
}

export default Navbar;

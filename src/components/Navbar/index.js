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

  // Nameplate - Business Logo, Name, Phone Number
  // NavButtons - Desktop nav buttons for pages
  // MenuButton = hamburger button to oped dropdown buttons.
  // DropdownNavButtons - dropdown buttons on menu button press.

  return (
    <>
      <SC.Navbar>
        <Nameplate toggleDropdown={toggleDropdown} />
        <NavButtons />
        <MenuButton
          toggleDropdown={toggleDropdown}
          DropdownActive={DropdownActive}
        />
      </SC.Navbar>
      <DropdownNavButtons
        toggleDropdown={toggleDropdown}
        DropdownActive={DropdownActive}
      />
    </>
  );
}

export default Navbar;

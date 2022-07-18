import React from "react";
import * as SC from "./styles";
import { Link } from "react-router-dom";

function NavButtons() {
  return (
    <SC.ButtonContainer>
      <Link to="/staff">
        <button>Staff</button>
      </Link>

      <Link to="/services">
        <button>Services</button>
      </Link>

      <Link to="/products">
        <button>Products</button>
      </Link>

      <Link to="/insurance">
        <button>Insurance</button>
      </Link>
    </SC.ButtonContainer>
  );
}

export default NavButtons;

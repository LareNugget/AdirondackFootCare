import React from "react";
import * as SC from "./styles";
import { Link } from "react-router-dom";

function NavButtons({ navButtonPress }) {
  return (
    <SC.ButtonContainer>
      <Link to="/staff" onClick={navButtonPress}>
        <button>Staff</button>
      </Link>

      <Link to="/services" onClick={navButtonPress}>
        <button>Services</button>
      </Link>

      <Link to="/products" onClick={navButtonPress}>
        <button>Products</button>
      </Link>

      <Link to="/insurance" onClick={navButtonPress}>
        <button>Insurance</button>
      </Link>
    </SC.ButtonContainer>
  );
}

export default NavButtons;

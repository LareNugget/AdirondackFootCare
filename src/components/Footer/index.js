import React from "react";
import * as SC from "./styles";
import { Link } from "react-router-dom";

function Footer({ navButtonPress }) {
  return (
    <SC.Container>
      <SC.BusinessInfo>
        <div>Adirondack Foot Care © 2022</div>

        <span>954 Route 146, Suite 1</span>
        <span>Clifton Park, NY 12065</span>
      </SC.BusinessInfo>

      <SC.NavLinks>
        <Link to="/staff" onClick={navButtonPress}>
          Meet Our Staff
        </Link>
        <Link to="/services" onClick={navButtonPress}>
          Podiatry Services
        </Link>
        <Link to="/products" onClick={navButtonPress}>
          Podiatry Products
        </Link>
        <Link to="/insurance" onClick={navButtonPress}>
          Insurance Providers
        </Link>
      </SC.NavLinks>

      <SC.GalluzzoDev>
        <a href="https://www.galluzzo.dev" target="_blank" rel="noreferrer">
          Website Design Clifton Park
        </a>

        <div>Galluzzo.dev</div>
      </SC.GalluzzoDev>
    </SC.Container>
  );
}

export default Footer;

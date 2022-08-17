import React from "react";
import * as SC from "./styles";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <SC.Container>
      <SC.BusinessInfo>
        <div>Adirondack Foot Care © 2022</div>

        <span>954 Route 146, Suite 1</span>
        <span>Clifton Park, NY 12065</span>
      </SC.BusinessInfo>

      <SC.NavLinks>
        <Link to="/staff">Meet Our Staff</Link>
        <Link to="/services">Podiatry Services</Link>
        <Link to="/products">Podiatry Products</Link>
        <Link to="/insurance">Insurance Providers</Link>
      </SC.NavLinks>

      <SC.GalluzzoDev>
        <div>Website Design Clifton Park</div>

        <div>Galluzzo.dev</div>
      </SC.GalluzzoDev>
    </SC.Container>
  );
}

export default Footer;

import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import * as SC from "./styles";

function Layout({ children }) {
  // WebsiteContainer - Wrapper for entire site layout
  // Navbar - Navigation, height defined within.
  // PageContainer - Page wrapper. Fills space in WebsiteContainer that navbar doesnt take.

  return (
    <SC.WebsiteContainer>
      <Navbar />
      <SC.PageContainer>{children}</SC.PageContainer>
      <Footer />
    </SC.WebsiteContainer>
  );
}

export default Layout;

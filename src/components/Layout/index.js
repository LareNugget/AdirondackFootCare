import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import * as SC from "./styles";

function Layout({ children }) {
  // WebsiteContainer - Wrapper for entire site layout
  // Navbar - Navigation, height defined within.
  // PageContainer - Page wrapper. Fills space in WebsiteContainer that navbar doesnt take.

  const navButtonPress = () => {
    window.scrollTo(0, 0);
  };

  return (
    <SC.WebsiteContainer>
      <Navbar navButtonPress={navButtonPress} />
      <SC.PageContainer>{children}</SC.PageContainer>
      <Footer navButtonPress={navButtonPress} />
    </SC.WebsiteContainer>
  );
}

export default Layout;

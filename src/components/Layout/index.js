import React from "react";
import Navbar from "../Navbar";
import * as SC from "./styles";

function Layout({ children }) {
  return (
    <SC.WebsiteContainer>
      <Navbar />
      <SC.PageContainer>{children}</SC.PageContainer>
    </SC.WebsiteContainer>
  );
}

export default Layout;

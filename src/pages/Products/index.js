import React from "react";
import * as SC from "./styles";
import PageLabel from "./PageLabel";
import ProductCards from "./ProductCards";

function Products() {
  return (
    <SC.Container>
      <PageLabel />
      <ProductCards />
    </SC.Container>
  );
}

export default Products;

import React, { Suspense } from "react";

import StyledProductList from "./styles/StyledProductList";
import Products from "./Products";

export interface IProductListProps {}

export default function ProductList(props: IProductListProps) {
  return (
    <>
      <StyledProductList>
        <Suspense fallback={<h3>Loading products...</h3>}></Suspense>
        <Products />
      </StyledProductList>
    </>
  );
}

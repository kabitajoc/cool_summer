import React from "react";
import ProductDetails from "./ProductDetails";
import ProductDescription from "./ProductDescription";
import SimilarProducts from "./SimilarComponent";


function ProductPage() {
  return (
    <div>
      <ProductDetails/>
      <ProductDescription />
      <SimilarProducts />
    </div>
  );
}

export default ProductPage;

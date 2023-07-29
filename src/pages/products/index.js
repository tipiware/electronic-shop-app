import React, { useEffect, useState } from "react";
import { Loader } from "../../components";
import useGlobal from "../../context";
import { ProductList } from "../../components";
const Index = () => {
  const { products } = useGlobal();

  if (!products) return <Loader />;

  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default Index;

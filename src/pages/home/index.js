import React from "react";
import { TopProduct, CategoriesProducts, Carousel } from "./components";
import { commerce } from "../../lib/commerce";
const Home = () => {
  return (
    <>
      <Carousel />
      <TopProduct />
      <CategoriesProducts />
    </>
  );
};

export default Home;

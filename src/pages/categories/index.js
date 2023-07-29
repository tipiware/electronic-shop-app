import React from "react";
import { CategoriesList, Loader } from "../../components";
import useGlobal from "../../context";

const Index = () => {
  const { categories } = useGlobal();

  if (!categories) return <Loader />;

  return (
    <>
      <CategoriesList categories={categories} />
    </>
  );
};

export default Index;

import { Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Product from "./Categories";

const ProductList = ({ categories }) => {

  return (
    <>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={5}
          sx={{
            mt: 3,
            display: "flex",
            alignItems: "center"
          }}
        >
          {categories.map((category) => (
            <Product category={category} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ProductList;

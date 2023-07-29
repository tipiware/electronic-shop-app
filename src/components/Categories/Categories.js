import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Product = ({ category }) => {
  return (
    <>
      <Grid item xs={6} sm={4} md={3}>
        <Paper
          style={{
            width: "170px",
            height: "100px",
            backgroundColor: "#dbbaba",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Link
            to={`/categories/${category.slug}`}
            style={{ textDecoration: "none" }}
          >
            <Typography
              style={{ textAlign: "center", color: "white" }}
              variant="h5"
              component="h2"
            >
              {category.name}
            </Typography>
          </Link>
        </Paper>
      </Grid>
    </>
  );
};

export default Product;

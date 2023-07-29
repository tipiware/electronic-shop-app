import { Box, Grid, Typography } from "@material-ui/core";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import React from "react";

const Footer = () => (
  <>
    <Grid
      container
      justifyContent="center"
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "350px",
        marginTop: "20px",
        backgroundColor: "#0f3360",
        color: "white",
        fontWeight: "bold",
        padding: "80px"
      }}
    >
      <Grid item xs={12} md={4} sx={{ mb: { xs: 1 } }}>
        <Typography
          variant="h4"
          component="h2"
          style={{ color: "#e94560", marginBottom: "10px" }}
        >
          Electronic shop
        </Typography>
        <Typography variant="subtitle2" style={{ width: "70%" }}>
        Discover a world of cutting-edge technology and unbeatable deals at our electronic shop
        </Typography>
      </Grid>
      <Grid item xs={4} md={4}>
        <Typography variant="h5" component="h1">
          Customer Care
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Typography variant="subtitle2" component="h3">
            Help Center{" "}
          </Typography>
          <Typography variant="subtitle2" component="h3">
            How to buy{" "}
          </Typography>
          <Typography variant="subtitle2" component="h3">
            Track your Order{" "}
          </Typography>
          <Typography variant="subtitle2" component="h3">
            Corporate & Bulk Purchase{" "}
          </Typography>
          <Typography variant="subtitle2" component="h3">
            Returns & Refunds{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4} md={4}>
        <Typography variant="h5" component="h1">
          Contact Us
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Typography variant="subtitle2" component="h3">
          If you have any questions or inquiries, please don't hesitate to contact us, and our dedicated team will be happy to assist you!{" "}
          </Typography>
          <Typography variant="subtitle2" component="h3">
            {" "}
            Pulau Pinang, Malaysia{" "}
          </Typography>
          <Typography variant="subtitle2" component="h3">
            Email: admin@gmail.com{" "}
          </Typography>
          <Typography variant="subtitle2" component="h3">
            phone: +60 123 456 789{" "}
          </Typography>
          <Box sx={{ display: "flex", mt: 1 }}>
            <FacebookRoundedIcon sx={{ mr: 1 }} />{" "}
            <YouTubeIcon sx={{ mr: 1 }} /> <InstagramIcon sx={{ mr: 1 }} />{" "}
            <TwitterIcon sx={{ mr: 1 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  </>
);

export default Footer;

import { Grid, Typography, Button } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <hr />
          <Typography variant="h6" marginTop={2}>
            © 2023. All rights reserved by Md Shahin Alam
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} textAlign={"end"}>
          <Button
            variant="text"
            href="https://www.facebook.com/shahinprotap1"
            target="_blank"
          >
            development by shahin protap
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;

import React from "react";
import { Grid } from "@mui/material";
import MenuItem from "./menuItem";

const Pizza = () => (
  <Grid container spacing={2} justifyContent="center">
    <MenuItem name="Margherita Pizza" price="250.99" />
    <MenuItem name="Pepperoni Pizza" price="300.49" />
  </Grid>
);

export default Pizza;

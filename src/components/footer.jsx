import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{  backgroundColor: "darkgoldenrod",  color: "white",  textAlign: "center",  padding: "20px",position:"fixed", bottom:0,width:"100%"}} >
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        <p>&copy; 2025 Foodie Delight. All Rights Reserved.</p>
      </Typography>
      
    </Box>
  );
};

export default Footer;

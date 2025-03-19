import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Navbar=()=>{

    return(
        <div>

       
        <AppBar sx={{ backgroundColor:"darkgoldenrod" }}>
            <Toolbar sx={{display:"flex",justifyContent:"space-between" }}>
                <Typography style={{fontWeight:"bold",color:"black",fontSize:"30px"}}>Foodie Delight</Typography>
            
            <div style={{ display: "flex", gap:10, justifyContent: "center", alignItems: "center",flexGrow:1 }} >
            <Link to="/" style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>Home</Link>
          <Link to="/menu" style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>Menu</Link>
          <Link to="/contact" style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>Contact</Link>
          <Link to="/reviews" style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>Reviews</Link>
            </div>
            <AccountCircleIcon fontSize="large" sx={{ color: "black" }} />
            </Toolbar>
        </AppBar>

        </div>
  
    )
}
export default Navbar
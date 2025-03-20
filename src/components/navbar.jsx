import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: "darkgoldenrod" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        <Typography sx={{ fontWeight: "bold", color: "black", fontSize: "24px" }}>
          Foodie Delight
        </Typography>

        <div className="nav-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/menu" className="nav-item">Menu</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
          <Link to="/reviews" className="nav-item">Reviews</Link>
        </div>

        <AccountCircleIcon fontSize="large" sx={{ color: "black" }} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

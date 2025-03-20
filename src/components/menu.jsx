import React from "react";
import { Card, CardContent, Typography, Container, Grid } from "@mui/material";

const Menu = () => {
  const menuItems = [
    { name: "Margherita Pizza", price: "250.99" },
    { name: "Cheese Burger", price: "250.99" },
    { name: "Pasta Alfredo", price: "200.49" },
    { name: "Grilled Chicken", price: "499.99" },
    { name: "Chocolate Brownie", price: "150.99" },
  ];

  return (
    <Container className="menu-container">
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Our Menu
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {menuItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  ₹{item.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Menu;

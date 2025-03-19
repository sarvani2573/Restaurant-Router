import React from "react";
import { Container, Typography, Card, CardContent, Rating } from "@mui/material";

const reviews = [
  { name: "Anu", comment: "The food was absolutely delicious! Highly recommend the pasta.", rating: 4.5 },
  { name: "Bhoomi", comment: "Great ambiance and friendly staff. Will visit again!", rating: 5 },
  { name: "Charlie", comment: "The sushi platter was fresh and tasty. Loved it!", rating: 4.2 },
  { name: "Dhanush", comment: "Amazing experience! The desserts were out of this world.", rating: 4.8 }
];

const Review = () => {
  return (
    <Container sx={{ textAlign: "center", padding: "50px", marginTop: "64px" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "30px" }}>
        Customer Reviews
      </Typography>

      {reviews.map((rev, index) => (
        <Card key={index} sx={{ maxWidth:700, margin:" 20px auto", padding: "20px", boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>{rev.name}</Typography>
            <Rating value={rev.rating} precision={0.1} readOnly />
            <Typography variant="body1" sx={{ fontStyle: "italic", marginTop: "10px" }}>
              "{rev.comment}"
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Review;

import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Home = ()=>{
 
    return(
        
        <Container sx={{ textAlign: "center", padding:"80px",width:"100%",backgroundImage:"url('/b1.jpg')",backgroundSize: "cover", marginTop: "64px", }}>
            <Typography sx={{ fontWeight: "bold", marginTop:"80px" ,fontSize:"60px" ,color: "white",}}>
            Welcome to Foodie Delight
            </Typography>
            <Typography variant="h6" sx={{ color: "white", marginBottom: "30px" }}>
        Experience the best dining with exquisite flavors and an elegant ambiance. 
        Join us for a culinary journey like never before.
      </Typography>
      
        </Container>

    )
}
export default Home



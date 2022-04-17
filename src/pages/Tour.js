import { Container, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import QuiltedImageList from "../components/ImageCollage";

const Tour = () => (
  

    <Container>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
      </Typography>
     
      <Box marginTop={3}  height={500} width={700} sx={{ display:"flex" }}>
      
       
  
   
  
  
        
       <QuiltedImageList /> 
      </Box>
      <Box>
      <Typography variant="h6" component="h4" marginTop={3}>
      About this ticket
     </Typography>
  
       <Typography variant="paragraph" component="h4" marginTop={3}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, debitis? Ipsum fuga, nesciunt tenetur dolor omnis harum repudiandae alias corrupti, minima labore amet odit, ad modi facere exercitationem ipsam reprehenderit.
     </Typography>
      </Box>
     
    </Container>

  
);

export default Tour;

import Container from "@material-ui/core/Container";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";


import TourCard from "../components/TourCard";
import cities from "../data.json";

const Home = () => {
  return (
    <Container>
    {cities.map((city) => 
    <div>
    <Typography
    variant ="h4"
    component="h2"
    marginTop={5}
    marginBottom={3}
    >
    Top {city.name} Tours
    </Typography>
    <Grid marginTop={0.5} container spacing={10}>
       {city.tours.map((tour)=> <TourCard tour ={tour} />)}
    </Grid>
    </div>  
    )}
   
    </Container>

  )
}

export default Home

import TourCard from "./components/TourCard";
import Container from '@material-ui/core/Container';
 import Grid from '@mui/material/Grid';
import ResponsiveAppBar from "./components/AppBar";



function App() {
  return (
    <div className="App">
  <ResponsiveAppBar/>
    <Container>

    <Grid  marginTop={.5} container spacing ={10}>
    <TourCard/>
    <TourCard/> 
     <TourCard/> 
     <TourCard/>
     <TourCard/>
     <TourCard/>
   
      
    

    </Grid>
    </Container>
    </div>
  );
}

export default App;

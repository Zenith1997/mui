import TourCard from "./components/TourCard";
import Container from '@material-ui/core/Container';
 import Grid from '@material-ui/core/Grid';


function App() {
  return (
    <div className="App">
    <Container>

    <Grid container spacing ={10}>
    <TourCard/>
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

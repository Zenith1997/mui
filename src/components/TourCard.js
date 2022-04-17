import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import { AccessTime } from "@mui/icons-material";
import { Rating } from "@mui/material";
import { createTheme,ThemeProvider } from "@mui/material";

const theme = createTheme({
  components:{
    MuiTypography:{
      variants:[
        {
          props:{
            variant:"body2",
            
          },
          style:{
            fontSize:11,
          },
        },
        {
          props:{
            variant:"body3",
          },
          style:{
            fontSize:9,
          }
        }
      ]
    }
  }
})

const TourCard = ({tour,index}) => {
  return (
    
    <Grid item xs={3}>
    <ThemeProvider theme={theme}>
    <Paper variant="outlined" elevation={3}>
    <img
      className="img"
      src={tour.image}
      alt=""
    />
    <Box  paddingX={2}>
    <Typography variant="subtitle2" component="h2">
    {tour.name}
  </Typography>
    </Box>
   <Box
   sx={{
       display:"flex",
       alignItems:"center",
       marginLeft:2
    
   }}
   >
   <AccessTime  sx={{width:15}}/>
   <Typography marginLeft={1} variant="subtitle2" component="h2">
   {tour.duration}
 </Typography>

   </Box>
   <Box
   sx={{
    display:"flex",
    alignItems:"center",
    marginLeft:1.5
 
}}
   
   >
   <Rating
   name="read-only"  value={3.5 }readOnly precision={0.5} size ="small"/>
   <Typography variant="body2" component="p" marginLeft={0.5}>
  {tour.rating}
   </Typography>
   <Typography variant="body3" component="p" marginLeft={0.5}>
    ( {tour.numerOfReviews} reviews)
   </Typography>
   </Box>
   <Box>
   <Typography variant="h6" component="h3" marginTop={0} marginLeft={1.8}>
   From C ${tour.price}
   </Typography>
   </Box>
  </Paper> 
    </ThemeProvider>
    
    </Grid>
  );
};

export default TourCard;

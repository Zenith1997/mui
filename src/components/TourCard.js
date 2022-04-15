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

const TourCard = () => {
  return (
    
    <Grid item xs={4}>
    <ThemeProvider theme={theme}>
    <Paper variant="outlined" elevation={3}>
    <img
      className="img"
      src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
      alt=""
    />
    <Box  paddingX={2}>
    <Typography variant="subtitle2" component="h2">
    Immerse into the falls
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
   5 hours
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
   4.5
   </Typography>
   <Typography variant="body3" component="p" marginLeft={0.5}>
   (655 reviews)
   </Typography>
   </Box>
   <Box>
   <Typography variant="h6" component="h3" marginTop={0} marginLeft={1.8}>
   From C $147
   </Typography>
   </Box>
  </Paper> 
    </ThemeProvider>
    
    </Grid>
  );
};

export default TourCard;

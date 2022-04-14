import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import { AccessTime } from "@mui/icons-material";
import { margin, width } from "@mui/system";

const TourCard = () => {
  return (
    <Grid item xs={4}>
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
      </Paper>
    </Grid>
  );
};

export default TourCard;

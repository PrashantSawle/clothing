import { Paper, Grid, Box, Typography, Rating, createTheme,ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./tourcard.style.scss"
import { AccessTime } from "@mui/icons-material";

const theme = createTheme({
  components:{
    MuiTypography:{
      variants:[
        {
          props:{
            variant:"body2"
          },
          style:{
            fontSize:11
          }
        },{
          props:{
            variant:"body3"
          },
          style:{
            fontSize:9
          }
        }
      ]
    }
  }
})



export const TourCard = ({tours}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/tourpage")
  }
  return (
    <>
      <Grid item  md={3}>
        <ThemeProvider theme={theme}>
        <Paper onClick={handleClick}>
            <img className="tourCardImage" src={tours.image} alt="tourcard"/>
          <Box padding={1}>
            <Typography variant="subtitle1" component="h2">
                {tours.name}
            </Typography>
            <Box
             sx={{display:"flex",alignItems:"center" }}
            >
                <AccessTime sx={{width:12.5}}/>
                <Typography variant="body2" component="p" marginLeft={0.5}>{}tours.duration</Typography>
            </Box>
           <Box sx={{display:"flex", alignItems:"center"}}>
           <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
           <Typography variant="body2" component="p" marginTop={0.5}>{tours.rating}</Typography>
           <Typography variant="body3" component="p" marginTop={0.5}>({tours.numberOfReviews})</Typography>
           </Box>
           <Box>
            <Typography variant="h6" component="h3" marginTop={0}>From C ${tours.price}</Typography>
           </Box>
          </Box>
        </Paper>
        </ThemeProvider>
      </Grid>
    </>
  );
};

import { Container, Grid, Typography } from "@mui/material";
import { TourCard } from "../../components/tourcard/Tourcard";
import cities from "../../Data.json";

export const Tour = () => {
  return (
    <>
      <Container sx={{ marginY: 3 }}>
        {cities.map((item) => {
          return (
            <>
              <Typography
                variant="h4"
                component="h2"
                marginTop={5}
                marginBottom={3}
              >
                Top {item.name} Tour
              </Typography>
              <Grid container spacing={2}   >
                {item.tours.map((tours) => {
                  return <TourCard tours={tours} key={tours.id} />;
                })}
              </Grid>
            </>
          );
        })}
      </Container>
    </>
  );
};

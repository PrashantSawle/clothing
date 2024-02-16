import {
  BottomNavigation,
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { MenuBar } from "../../components/navbar/Menubar";
import { Imagecollage } from "../../components/imagecollage/Imagecollage";
import { Accordions } from "../../components/accordian/Accordian";
import { Customodal } from "../../components/modal/Customodal";

export const Tourdetails = () => {
  return (
    <>
      <MenuBar />
      <Container sx={{ width: 900 }}>
        <Typography variant="h3" component="h1" marginTop={3}>
          Explore the world
        </Typography>
        <Box marginTop={3} sx={{ display: "flex" }}>
          <img
            src="https://media.istockphoto.com/id/614973464/photo/aerial-view-of-las-vegas-strip-in-nevada.jpg?s=1024x1024&w=is&k=20&c=gEW0ILfLaXlPe-bG7tO8Wn3yAz5y6cu_05Q-hzdGEWM="
            alt="tourrr"
            height={325}
          />
          <Imagecollage />
        </Box>
        <Box>
          <Typography variant="h6" component="h4" marginTop={3}>
            About this ticket
          </Typography>
          <Typography variant="p" component="p" marginTop={3}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Typography>
        </Box>
        <Box marginBottom={10}>
          <Typography
            variant="h4"
            component="h3"
            marginTop={3}
            marginBottom={3}
          >
            Frequently asked question
          </Typography>
          <Accordions />
        </Box>
      </Container>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation>
            <Customodal/>
          </BottomNavigation>
        </Paper>
    </>
  );
};

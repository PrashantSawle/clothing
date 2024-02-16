import { Box, Paper, Typography } from "@mui/material";

export const Card = ({ title, description, date }) => {
  return (
    <>
      <Paper className="paper" elevation={0}>
        <Box padding={1}>
          <Typography variant="h6" component="h2" className="card-text">
            {title}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {description}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {date}
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

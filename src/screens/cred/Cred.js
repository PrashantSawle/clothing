import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import "./cred.style.scss";
import { Card } from "../../components/card/Card";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const Cred = () => {
  const DataTransfer = [
    {
      title:
        "CRED iQ’s Overall Distress Rate Increased in January. Officeclimbs back above 10%",
      description:
        "CRED iQ aggregated all of the payment statuses reported by eachloan in January as well as its special servicing status toarrive at the Ove...",
      date: "13/02/24",
    },
    {
      title: "Diving into Multifamily Occupancy Trends Nationwide",
      description:
        "CRED iQ explores occupancy trends within the multifamily sector. CRED iQ’s research team wanted to explore the multifamily sector which has ...",
      date: "13/02/24",
    },
    {
      title: "Liquidations & Losses:  January 2024 Update",
      description:
        "CRED iQ analyzed a sample of CMBS transactions that have incurred realized losses from liquidations during the 4th quarter of 2023.  In our ...",
      date: "13/02/24",
    },
    {
      title: " Distress Accelerated in the Second Half of 2023",
      description:
        " CRED iQ examined loans that were added to the servicer watchlist in during the second half of 2023.  Building upon our mid-year 2023 report,...",
      date: "13/02/24",
    },
    {
      title: "Over 200 Million Square Feet of Office Leases set to Expire",
      description:
        "CRED iQ examined lease expiration data across CMBS office collateral for the near term, 24-month horizon, as well as the next 5+ years.&#160...",
      date: "13/02/24",
    },
    {
      title:
        "CRED iQ’s Overall Distress Rate is Down, but Multifamily, Office, Retail, and Hotel Spike Up",
      description:
        "CRED iQ’s overall distress rate for CMBS fell 36 basis points in December to 7.17% from 7.53%. This notched a second straight monthly decrea...",
      date: "13/02/24",
    },
  ];
  return (
    <>
      <div className="Cred-Conatiner">
        <div className="Nav-Conatiner">
          <div className="logo-Conatiner">
            <Link className="nav-Link1">Logo</Link>
            <Link className="nav-Link1">Products and solution</Link>
            <Link className="nav-Link1">Research and trends</Link>
            <Link className="nav-Link1">About US</Link>
          </div>
          <div className="btn-conatiner">
            <Link className="nav-Link1">Browse</Link>
            {/* <Link className="nav-Link1">Search</Link> */}
            <Search>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Button variant="contained" color="success">
              Sign Up
            </Button>
            <Button variant="contained">Login</Button>
          </div>
        </div>
      </div>
      <div className="card-section">
        <Container className="center">
          {/* <Card/> */}
          <Box padding={1}>
            <Typography variant="h6" component="h1" className="paper">
              Latest News
            </Typography>
          </Box>
          <Grid container spacing={2} className="grid-conatiner">
          {DataTransfer.map((item, index) => {
            return (
                <Grid item xs={6} md={4} id={index} className="boxclasss">
                  <Card
                    title={item.title}
                    description={item.description}
                    date={item.date}
                  />
                </Grid>
            );
          })}
          </Grid>
        </Container>
      </div>
    </>
  );
};

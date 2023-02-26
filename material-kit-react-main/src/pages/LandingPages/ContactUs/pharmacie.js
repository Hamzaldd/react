/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import plus from "assets/images/plus.jpg";
import axios from "axios";
import React, { useEffect, useState } from "react";

const api = axios.create({
  baseURL: "http://localhost:4000/api",
});

function Team() {
  const [listPharma, setLlistPharma] = useState([]);

  useEffect(() => {
    const allPharmacie = async () => {
      await api.get("/pharmacie").then((rep) => {
        console.log(rep.data.pharmacies);
        setLlistPharma(rep.data.pharmacies);
      });
    };
    allPharmacie();
  }, []);
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Suggestions
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              All the availabe/open pharmacies will be visible here
            </MKTypography>
            <MKInput variant="standard" label="Type here..." />
          </Grid>
          <Grid container spacing={3}>
            {listPharma.map((p) => {
              if (p.garde === true) {
                return (
                  <Grid item xs={12} lg={6}>
                    <MKBox mb={5}>
                      <HorizontalTeamCard
                        image={plus}
                        name={p.nom}
                        position={{ color: "info", label: "De Garde " }}
                        description={p.localistaion}
                      />
                    </MKBox>
                  </Grid>
                );
              }

              return (
                <Grid item xs={12} lg={6}>
                  <MKBox mb={1}>
                    <HorizontalTeamCard
                      image={plus}
                      name={p.nom}
                      position={{ color: "danger", label: "" }}
                      description={p.localistaion}
                    />
                  </MKBox>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;

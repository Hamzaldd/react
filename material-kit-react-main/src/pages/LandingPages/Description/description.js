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

import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";
import plus from "assets/images/plus.jpg";

// Material Kit 2 React examples

function Description({ myVariable }) {
  /* const location = useLocation();
  console.log("location", location);
  console.log("data", data); 
  const location = useLocation();
  console.log(location.state); */
  console.log(myVariable);

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              {myVariable.map((p) => (
                <Grid item xs={12} lg={6} /* eslint no-underscore-dangle: 0 */ key={p.nom}>
                  <MKBox mb={5}>
                    <HorizontalTeamCard
                      image={plus}
                      /* eslint no-underscore-dangle: 0 */

                      name={p.medicament_id.nom}
                      position={{ color: "info", label: "" }}
                      description={p.pharmacie_id.nom}
                    />
                  </MKBox>
                </Grid>
              ))}
              ;
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Description;

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
import { useLocation } from "react-router-dom";

// Material Kit 2 React examples

function Description() {
  const location = useLocation();
  console.log("location", location);
  console.log("data", location.state);

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container>
          <Grid container spacing={3}>
            {location.state.dispid.map((p) => (
              <Grid item xs={12} lg={6} /* eslint no-underscore-dangle: 0 */ key={p._id}>
                <MKBox mb={5}>
                  <HorizontalTeamCard
                    image={plus}
                    /* eslint no-underscore-dangle: 0 */
                    name={p.pharmacie_id.nom}
                    position={{ color: "info", label: ` Quantite : ${p.quantité} ` }}
                    description={p.pharmacie_id.localistaion}
                  />
                </MKBox>
              </Grid>
            ))}
            ;
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Description;

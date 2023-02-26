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

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/imggcard2.jpg";
import bgBack from "assets/images/imggcard1.jpg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                color="dark"
                icon="touch_app"
                title={
                  <>
                    Discover
                    <br />
                    More
                  </>
                }
                description="All the information about the pharmacies you need"
              />
              <RotatingCardBack
                image={bgBack}
                color="dark"
                title="Find your Pharmacy now"
                description="You will save a lot of time getting your medication with only few clicks ."
                action={{
                  type: "internal",
                  route: "/pages/landing-pages/contact-us",
                  label: "Search now",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  title="Medication"
                  description="Full indication and description of medication with doctors prescription availabe for you"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  title="Available"
                  description="Morocco's most popular Pharmacy network brought to you in seconds ."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  title="Save Time & Energy"
                  description="Helping you find the closest pharmacy to you to help you with location phone number and more"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;

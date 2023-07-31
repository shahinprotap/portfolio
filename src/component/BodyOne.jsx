import { Container, Grid } from "@mui/material";
import Lottie from "lottie-react";
import animationData from "../assets/img/AE.json";
import animationData2 from "../assets/img/animation_lkr5z1i1.json";

const BodyOne = () => {
  return (
    <>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
            <h1> Coding Race Forever - The Never Ending Game......</h1>
            <Lottie style={{ height: 400 }} animationData={animationData2} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Lottie
              style={{ height: "auto", width: "auto" }}
              animationData={animationData}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default BodyOne;

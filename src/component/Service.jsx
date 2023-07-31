import { Grid } from "@mui/material";
import mystyle from "../Style.module.css";
import SingleStory from "./SingleStory";

function Service() {
  return (
    <>
      <h1 className={mystyle.textCenter} style={{ marginTop: "10px" }}>
        We do all Creative Services
      </h1>
      <Grid sx={{ width: "100%", marginTop: "10px" }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <SingleStory />
        </Grid>
      </Grid>
    </>
  );
}

export default Service;

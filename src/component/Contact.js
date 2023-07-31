import { Button, Grid, TextField, Box } from "@mui/material";
import { useState } from "react";
import mystyle from "../Style.module.css";
import Lottie from "lottie-react";
import animationData from "../assets/img/contact (1).json";

export const Contact = () => {
  const myObj = {
    name: "",
    email: "",
    number: "",
    comment: "",
  };
  const [data, setData] = useState(myObj);

  const imputHandelar = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendData = (e) => {
    e.preventDefault();
    const jesonData = JSON.stringify(data);
    console.log(data, jesonData);
  };

  return (
    <>
      <h1 className={mystyle.textCenter} style={{ marginTop: "50px" }}>
        Frequently asked question
      </h1>
      <Grid
        container
        sx={{ width: "100%" }}
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} md={5} sx={{ ml: 3 }}>
          <form onSubmit={sendData}>
            <Box sx={{ alignItems: "flex-start" }}>
              <TextField
                sx={{ mt: 2 }}
                fullWidth
                type="text"
                label="Name"
                name="name"
                id="name"
                value={data.name}
                onChange={imputHandelar}
              />
              <TextField
                sx={{ my: 2 }}
                fullWidth
                type="email"
                label="Email"
                name="email"
                id="email"
                value={data.email}
                onChange={imputHandelar}
              />
              <TextField
                sx={{ mb: 2 }}
                fullWidth
                type="number"
                label="Number"
                name="number"
                id="number"
                value={data.number}
                onChange={imputHandelar}
              />
              <TextField
                sx={{ mb: 2 }}
                fullWidth
                multiline
                rows={3}
                type="text"
                label="Comment"
                name="comment"
                id="comment"
                value={data.comment}
                onChange={imputHandelar}
              />
              <Button sx={{ mb: 2 }} variant="outlined" type="submit">
                Send
              </Button>
            </Box>
          </form>
        </Grid>

        <Grid item xs={12} md={6} sx={{ mt: 2 }}>
          <Box sx={{ alignItems: "flex-start" }}>
            <Lottie
              // style={{ width: 500, height: 500 }}
              animationData={animationData}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

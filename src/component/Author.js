import React from "react";
import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const Author = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState({
    userName: "",
    email: "",
    number: "",
    password: "",
  });
  const handelChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const sendData = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  const resetState = () => {
    setIsSignup(!isSignup);
    setInputs({ userName: "", email: "", number: "", password: "" });
  };
  return (
    <>
      <form onSubmit={sendData}>
        <br />
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": { boxShadow: "10px 10px 20px #ccc" },
          }}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {isSignup ? "SignUp" : "Login"}
          </Typography>
          {isSignup && (
            <TextField
              type={"text"}
              name={"userName"}
              value={inputs.userName}
              onChange={handelChange}
              margin="normal"
              variant="outlined"
              placeholder="Name"
            />
          )}
          <TextField
            type={"email"}
            name={"email"}
            value={inputs.email}
            onChange={handelChange}
            margin="normal"
            variant="outlined"
            placeholder="Email"
          />
          {isSignup && (
            <TextField
              type={"number"}
              name={"number"}
              value={inputs.number}
              onChange={handelChange}
              margin="normal"
              variant="outlined"
              placeholder="Number"
            />
          )}
          <TextField
            type={"password"}
            name={"password"}
            value={inputs.password}
            onChange={handelChange}
            margin="normal"
            variant="outlined"
            placeholder="Password"
          />
          <Button
            sx={{ marginTop: 3, borderRadius: 4 }}
            variant="contained"
            color="warning"
            type="submit"
          >
            {isSignup ? "SignUp" : "Login"}
          </Button>
          <Button onClick={resetState} sx={{ marginTop: 3, borderRadius: 4 }}>
            Change to {isSignup ? "Login" : "Signup"}
          </Button>
        </Box>
        <br />
      </form>
    </>
  );
};

export default Author;

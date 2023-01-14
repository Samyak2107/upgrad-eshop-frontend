import React, { useState } from "react";
import "./SignIn.css";
import LockIcon from "@mui/icons-material/Lock";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SignIn() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div style={{ height: "90vh" }}>
        <div className="signin-div">
          <div>
            <LockIcon
              sx={{
                color: "white",
                padding: "10px 10px",
                background: "red",
                borderRadius: "50%",
                backgroundPosition: "inherit",
              }}
            />
          </div>
          <div style={{ fontWeight: "520px" }}>Sign in</div>
          <div className="email-password-div">
            <div style={{ margin: "15px" }}>
              <TextField
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                sx={{ width: "40ch" }}
                type="email"
                name="email"
                value={state.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div style={{ margin: "15px" }}>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                sx={{ width: "40ch" }}
                type="password"
                name="password"
                value={state.password}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="signin-button-div">
            <Button
              variant="contained"
              sx={{ width: "45ch", background: "var(--primary)" }}
            >
              SIGN IN
            </Button>
            <a style={{ marginTop: "15px" }} href="www.google.in">
              Don't have an account? Sign Up
            </a>
          </div>
          <p style={{ color: "grey", margin: "45px 0px" }}>
            Copyright © <a href="www.google.in">upGrad</a> 2021
          </p>
        </div>
      </div>
    </>
  );
}

export default SignIn;

import React, { useState } from "react";
import "./SignUp.css";
import LockIcon from "@mui/icons-material/Lock";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SignUp() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div style={{ height: "130vh" }}>
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
          <div style={{ fontWeight: "520px" }}>Sign up</div>
          <div className="email-password-div">
            <div style={{ margin: "15px" }}>
              <TextField
                id="outlined-basic"
                label="First name*"
                variant="outlined"
                sx={{ width: "40ch" }}
                type="text"
                name="firstName"
                value={state.firstName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div style={{ margin: "15px" }}>
              <TextField
                id="outlined-basic"
                label="Last name*"
                variant="outlined"
                sx={{ width: "40ch" }}
                type="text"
                name="lastName"
                value={state.lastName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div style={{ margin: "15px" }}>
              <TextField
                id="outlined-basic"
                label="Email Address*"
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
                label="Password*"
                variant="outlined"
                sx={{ width: "40ch" }}
                type="password"
                name="password"
                value={state.password}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div style={{ margin: "15px" }}>
              <TextField
                id="outlined-basic"
                label="Confirm Password*"
                variant="outlined"
                sx={{ width: "40ch" }}
                type="password"
                name="confirmPassword"
                value={state.confirmPassword}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div style={{ margin: "15px" }}>
              <TextField
                id="outlined-basic"
                label="Contact no*"
                variant="outlined"
                sx={{ width: "40ch" }}
                type="number"
                name="contact"
                value={state.contact}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="signup-button-div">
            <Button
              variant="contained"
              sx={{ width: "45ch", background: "var(--primary)" }}
            >
              SIGN UP
            </Button>
            <a
              style={{ marginTop: "15px", marginLeft: "auto" }}
              href="www.google.in"
            >
              Already have an account? Sign In
            </a>
          </div>
          <p style={{ color: "grey", marginTop: "45px" }}>
            Copyright © <a href="www.google.in">upGrad</a> 2021
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;

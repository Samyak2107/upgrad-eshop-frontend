import React, { useState } from "react";
import "./SignUp.css";
import LockIcon from "@mui/icons-material/Lock";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function SignUp() {
  const [state, setState] = useState({
    userType: "customer", //Change the userType parameter as "admin" for creating admin user
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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const {
      userType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      contact,
    } = state;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !contact
    ) {
      alert("Please fill all the required fields!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Password does not match");
      //handlePasswordErrorSnackbar();
      return;
    }
    try {
      const response = await axios.post(
        "https://samyak-eshop-upgrad.onrender.com/users/user-signup",
        { userType, firstName, lastName, email, password, contact }
      );
      if (!response.error) {
        console.log(response);
        dispatch({
          type: "SET_USER",
          payload: {
            userType: response.data.data.userType,
            firstName: response.data.data.firstName,
            lastName: response.data.data.lastName,
            email: response.data.data.email,
            contact: response.data.data.contact,
          },
        });
        navigate("/products");
      }
    } catch {
      alert("Error in signup!");
    }
  };

  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <div className="signin-div">
          <div>
            <LockIcon
              sx={{
                color: "white",
                padding: "10px 10px",
                background: "#F50057",
                borderRadius: "50%",
                backgroundPosition: "inherit",
              }}
            />
          </div>
          <label style={{ fontWeight: "520", fontSize: "25px" }}>Sign up</label>
          <div className="email-password-div">
            <div style={{ margin: "15px" }}>
              <TextField
                id="outlined-basic"
                label="First Name *"
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
                label="Last Name *"
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
                label="Email Address *"
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
                label="Password *"
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
                label="Confirm Password *"
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
                label="Contact Number *"
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
              onClick={(e) => handleSignUp(e)}
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

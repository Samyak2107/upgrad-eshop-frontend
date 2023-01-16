import React, { useState } from "react";
import "./SignIn.css";
import LockIcon from "@mui/icons-material/Lock";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function SignIn() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { email, password } = state;
    if (!email || !password) {
      alert("Please fill the deails properly!");
      return;
    }
    try {
      const response = await axios.post(
        "https://samyak-eshop-upgrad.onrender.com/users/auth",
        {
          email,
          password,
        }
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
      <div style={{ height: "90vh" }}>
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
          <label style={{ fontWeight: "520", fontSize: "25px" }}>Sign in</label>
          <div className="email-password-div">
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
          </div>
          <div className="signin-button-div">
            <Button
              variant="contained"
              sx={{ width: "45ch", background: "var(--primary)" }}
              onClick={(e) => handleSignIn(e)}
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

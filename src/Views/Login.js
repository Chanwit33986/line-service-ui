import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";

export default function Login() {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [validUser, setValidUser] = useState(false);
  const [validPw, setValidPw] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const txtUsernameChange = (event) => {
    let user = event.target.value;
    if (user === "") {
      setValidUser(true);
    } else {
      setValidUser(false);
      setUsername(user);
    }
    unDisableBtn(user, password);
  };
  const txtPasswordChange = (event) => {
    let pw = event.target.value;
    if (pw === "") {
      setValidPw(true);
    } else {
      setValidPw(false);
      setPassword(pw);
    }
    unDisableBtn(username, pw);
  };
  const unDisableBtn = (user, pass) => {
    if (user === "" || pass === "") {
      setDisableBtn(true);
    } else if (user !== "" && pass !== "") {
      setDisableBtn(false);
    }
  };
  const Submit = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      if (username !== "" && password !== "") {
        localStorage.setItem("isLogin", true);
        navigate("/");
      }
    }, 2000);
  };
  return (
    <Grid
      spacing={0}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "100%",
        background: "linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)",
      }}
    >
      <Card>
        <CardContent spacing={2}>
          <form method="post" onSubmit={Submit}>
            <Grid item sx={{ marginBottom: "20px" }}>
              <Typography
                variant="h6"
                sx={{
                  mr: 2,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
                align="center"
              >
                Login Line Service
              </Typography>
            </Grid>
            <Grid item sx={{ marginBottom: "20px" }}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <AccountCircle
                  fontSize="large"
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  label="Enter Username"
                  sx={{ width: "100%" }}
                  error={validUser}
                  onChange={txtUsernameChange}
                />
              </Box>
            </Grid>{" "}
            <Grid item sx={{ marginBottom: "20px" }}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <LockIcon
                  fontSize="large"
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  label="Enter Password"
                  sx={{ width: "100%" }}
                  error={validPw}
                  onChange={txtPasswordChange}
                  type="password"
                />
              </Box>
            </Grid>
            <Grid item>
              <LoadingButton
                variant="contained"
                size="large"
                disabled={disableBtn}
                type="submit"
                sx={{ width: "100%", borderRadius: "25px" }}
                loading={isLoading}
              >
                Login
              </LoadingButton>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
}

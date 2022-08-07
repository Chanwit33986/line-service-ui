import {
  Grid,
  TextField,
  Typography,
  Alert,
  Collapse,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";

export default function BoardCast() {
  const [open, setOpen] = React.useState(false);
  const [broadCastUser, setBroadCastUser] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);

  const Submit = () => {
    setIsLoading(true);
    setOpen(true);
    setBroadCastUser("");
    setMessage("");
    const headers = {
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.getItem("token"),
    };
    const payload = {
      listName: broadCastUser,
      message: message,
    };
    axios
      .post(
        process.env.REACT_APP_API_Domain + "api/Line/SendMultiMessage",
        payload,
        {
          headers: headers,
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setIsLoading(false);
        }
      })
      .catch((error) => {});
  };

  return (
    <Container sx={{ marginTop: "20px" }}>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
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
                BoardCast
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                label="Enter User"
                multiline
                rows={4}
                sx={{ width: "100%" }}
                value={broadCastUser}
                onChange={(event) => setBroadCastUser(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                label="Enter Message"
                sx={{ width: "100%" }}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <LoadingButton
                variant="contained"
                size="large"
                onClick={Submit}
                sx={{ width: "100%", borderRadius: "25px" }}
                loading={isLoading}
              >
                Submit
              </LoadingButton>
            </Grid>
            <Grid item xs={12} md={12}>
              <Collapse in={open}>
                <Alert
                  onClose={() => {
                    setOpen(false);
                  }}
                >
                  Success
                </Alert>
              </Collapse>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

import {
  Button,
  Grid,
  TextField,
  Typography,
  Alert,
  Collapse,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import React from "react";

export default function BoardCast() {
  const [open, setOpen] = React.useState(false);
  const [broadCastUser, setBroadCastUser] = React.useState("");
  const [message, setMessage] = React.useState("");

  const Submit = () => {
    setOpen(true);
    setBroadCastUser("");
    setMessage("");
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
              <Button variant="contained" size="large" onClick={Submit}>
                Submit
              </Button>
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

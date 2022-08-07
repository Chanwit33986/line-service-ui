import React from "react";
import { Grid } from "@mui/material";
import LeftSide from "./MessageComponents/LeftSide";
import RightSide from "./MessageComponents/RightSide";

export default function Message() {
  return (
    <Grid>
      <Grid item xs={12} md={4}>
        <LeftSide />
      </Grid>
      <Grid item xs={12} md={8}>
        <RightSide />
      </Grid>
    </Grid>
  );
}

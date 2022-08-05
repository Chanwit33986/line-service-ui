import React from "react";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <div>
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
        Welcome ! Line Service App
      </Typography>
    </div>
  );
}

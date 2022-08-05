import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Badge } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

export default function MessageItem(props) {
  return (
    <>
      <React.Fragment>
        <ListItem button sx={{ borderRight: "1px solid #EDE9E9" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            sx={{ width: "100%" }}
          >
            <Avatar alt="Remy Sharp" />
            <ListItemText primary={props.item} />
            <Badge badgeContent={4} color="primary">
              <ChatIcon color="action" />
            </Badge>
          </Stack>
        </ListItem>
        <Divider />
      </React.Fragment>
    </>
  );
}

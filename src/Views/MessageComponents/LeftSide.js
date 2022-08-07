import * as React from "react";
import List from "@mui/material/List";
import MessageItem from "./MessageItem";
import { Box } from "@mui/material";

const dataItem = [
  "Chanwit meenuch",
  "Sammatiya Meungtong",
  "Cheewin Chaisakreenon",
  "Toungchai Sriangtong",
  "Nattapol Nontaruk",
  "Chanwit meenuch",
  "Sammatiya Meungtong",
  "Cheewin Chaisakreenon",
  "Toungchai Sriangtong",
  "Nattapol Nontaruk",
  "Chanwit meenuch",
  "Sammatiya Meungtong",
  "Cheewin Chaisakreenon",
  "Toungchai Sriangtong",
  "Nattapol Nontaruk",
  "Chanwit meenuch",
  "Sammatiya Meungtong",
  "Cheewin Chaisakreenon",
  "Toungchai Sriangtong",
  "Nattapol Nontaruk",
  "Chanwit meenuch",
  "Sammatiya Meungtong",
  "Cheewin Chaisakreenon",
  "Toungchai Sriangtong",
  "Nattapol Nontaruk",
];
export default function LeftSide() {
  return (
    <Box>
      <List component="nav">
        {dataItem.map((item, index) => {
          return <MessageItem key={index} item={item} />;
        })}
      </List>
    </Box>
  );
}

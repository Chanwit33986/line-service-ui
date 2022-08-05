import * as React from "react";
import List from "@mui/material/List";
import MessageItem from "./MessageItem";

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
  "Chanwit meenuch",
  "Sammatiya Meungtong",
  "Cheewin Chaisakreenon",
  "Toungchai Sriangtong",
  "Nattapol Nontaruk",
  "Chanwit meenuch",
];
export default function LeftSide() {
  return (
    <List component="nav">
      {dataItem.map((item, index) => {
        return <MessageItem key={index} item={item} />;
      })}
    </List>
  );
}

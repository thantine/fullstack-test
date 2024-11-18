"use client";

import { List, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

export const MenuList = styled(List)(
  (props: { type: string; gap?: string }) => ({
    display: props.type === "row" ? "flex" : "block",
    gap: props.gap || "24px",
    alignItems: "center",
    paddingLeft: "120px",
  })
);

export const MenuItem = styled(ListItem)((props: { fontSize?: string }) => ({
  width: "auto",
  paddingTop: "4px",
  paddingBottom: "4px",
  "& a": {
    color: Colors.dark,
    textDecoration: "none",
    position: "relative",
    "&:hover:after, &.active:after": {
      position: "absolute",
      content: "''",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "2px",
      backgroundColor: Colors.crimson,
    },
  },
  "& span": {
    textTransform: "uppercase",
    fontSize: props.fontSize || "16px",
  },
}));

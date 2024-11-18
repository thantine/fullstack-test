"use client";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

export const RecipeButton = styled(Button)(() => ({
  color: Colors.dark,
  borderColor: Colors.crimson,
  textTransform: "uppercase",
  fontSize: "14px",
  fontWeight: "bold",
  "& svg": {
    color: Colors.crimson,
  },
}));

"use client";

import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#5f2c3e",
  secondary: "#d1adcc",
  dark: "#5d5d5d",
  beige: "#F8F5F0",
  crimson: "#B84045",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
});

export default theme;

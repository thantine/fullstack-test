"use client";

import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const HeaderContainer = styled(Box)(() => ({
  display: "flex",
}));

export const HeaderLogo = styled(Box)(() => ({
  position: "relative",
  "& > a": {
    position: "absolute",
    top: "4px",
    left: 0,
    zIndex: 1,
  },
}));

"use client";

import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const RecipeContainer = styled(Stack)((props: { icon: string }) => ({
  position: "relative",
  width: "100%",
  padding: "16px 16px 16px 48px",
  "&:before": {
    content: `url(/images/icons/${props.icon})`,
    position: "absolute",
    left: 0,
    top: "50%",
    width: "32px",
    height: "32px",
    transform: "translateY(-50%)",
  },
}));

export const RecipeStack = styled(Stack)(() => ({
  "& > span:first-child": {
    textTransform: "uppercase",
  },
}));

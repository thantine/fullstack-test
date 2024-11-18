"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

import { IRecipeStat } from "@/typing";
import { RecipeStats } from "./RecipeStats";
import { RecipeYield } from "./RecipeYield";

export const Recipe = () => {
  const [yieldInfo, setYieldInfo] = useState<IRecipeStat | null>(null);
  const [recipeStats, setRecipeStats] = useState<IRecipeStat[]>([]);

  useEffect(() => {
    fetch("/api/recipe")
      .then((res) => res.json())
      .then((res) => {
        setYieldInfo(res.yield);
        setRecipeStats(res.stats);
      });
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item md={6} order={{ xs: 2, sm: 2, md: 1 }}>
        <Typography variant="h2">Whole-Grain Banana Bread</Typography>
        <Box sx={{ marginTop: "24px" }}>
          <Typography variant="body1" color="textSecondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Typography>
          <Box sx={{ marginTop: "16px" }}>
            {recipeStats.length && (
              <RecipeStats icon="clock.svg" items={recipeStats} />
            )}
            {yieldInfo && (
              <RecipeYield
                icon="yield.svg"
                time={yieldInfo.value}
                label={yieldInfo.label}
              />
            )}
          </Box>
        </Box>
      </Grid>
      <Grid item md={6} order={{ xs: 1, sm: 1, md: 2 }}>
        <Image src="/images/bread.jpg" alt="Bread" width={612} height={408} />
      </Grid>
    </Grid>
  );
};

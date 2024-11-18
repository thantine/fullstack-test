import { Stack } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";

import { RecipeButton } from "@/styles/button";
import { RecipeContainer, RecipeStack } from "@/styles/recipes";

interface IProps {
  icon: string;
  time: string;
  label: string;
}

export const RecipeYield = ({ time, label, icon }: IProps) => {
  return (
    <RecipeContainer direction="row" justifyContent="space-between" icon={icon}>
      <RecipeStack>
        <span>{label}</span>
        <span>{time}</span>
      </RecipeStack>
      <Stack direction="row" spacing={1}>
        <RecipeButton variant="outlined" startIcon={<AddOutlinedIcon />}>
          Save Recipe
        </RecipeButton>
        <RecipeButton
          variant="outlined"
          startIcon={<LocalPrintshopOutlinedIcon />}
        >
          Print
        </RecipeButton>
      </Stack>
    </RecipeContainer>
  );
};

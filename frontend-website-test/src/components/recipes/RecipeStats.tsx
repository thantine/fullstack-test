import { Box, Stack } from "@mui/material";
import { RecipeStack, RecipeContainer } from "@/styles/recipes";
import { IRecipeStat } from "@/typing";

interface IProps {
  icon: string;
  items: IRecipeStat[];
}

export const RecipeStats = ({ icon, items }: IProps) => {
  return (
    <RecipeContainer icon={icon} direction="row" justifyContent="space-between">
      {items.map(({ label, value }) => (
        <RecipeStack spacing={1}>
          <span>{label}</span>
          <span>{value}</span>
        </RecipeStack>
      ))}
    </RecipeContainer>
  );
};

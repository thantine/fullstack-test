import { BreadCrumbs, Recipe } from "@/components";
import { Box } from "@mui/material";

const page = () => {
  const crumbs = [
    { label: "Recipes", href: "/recipes" },
    { label: "Bread", href: "/breads" },
    { label: "Quick Bread" },
  ];

  return (
    <>
      <BreadCrumbs crumbs={crumbs} />
      <Box sx={{ marginTop: "16px" }}>
        <Recipe />
      </Box>
    </>
  );
};

export default page;

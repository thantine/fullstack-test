import { IBreadCrumbs } from "@/typing";
import { Breadcrumbs, Link, Typography } from "@mui/material";

interface IProps {
  crumbs: IBreadCrumbs[];
}

export const BreadCrumbs = ({ crumbs }: IProps) => {
  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      {crumbs.map(({ label, href }) =>
        href ? (
          <Link underline="hover" color="inherit" href={href}>
            {label}
          </Link>
        ) : (
          <Typography>{label}</Typography>
        )
      )}
    </Breadcrumbs>
  );
};

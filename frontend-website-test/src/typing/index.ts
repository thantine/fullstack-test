export interface IMenuItem {
  label: string;
  path: string;
  items?: IMenuItem[];
}

export interface IBreadCrumbs {
  label: string;
  href?: string;
}

export interface IRecipeStat {
  label: string;
  value: string;
}

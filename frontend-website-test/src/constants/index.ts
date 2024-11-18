import { IMenuItem } from "@/typing";

export const MENU_ITEMS: IMenuItem[] = [
  {
    label: "Shop",
    path: "/",
    items: [
      { label: "Shop item 1", path: "#" },
      { label: "Shop item 2", path: "#" },
    ],
  },
  {
    label: "Recipes",
    path: "/recipes",
    items: [
      { label: "Categories", path: "#" },
      { label: "Collections", path: "#" },
      { label: "Resources", path: "#" },
    ],
  },
  {
    label: "Services",
    path: "/services",
    items: [
      { label: "Service item 1", path: "#" },
      { label: "Service item 2", path: "#" },
      { label: "Service item 3", path: "#" },
    ],
  },
  {
    label: "Contact",
    path: "/contact",
    items: [
      { label: "contact item 1", path: "#" },
      { label: "contact item 2", path: "#" },
      { label: "contact item 3", path: "#" },
    ],
  },
];

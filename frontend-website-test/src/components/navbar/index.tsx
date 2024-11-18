"use client";

import Link from "next/link";
import { Container, ListItemText } from "@mui/material";

import { NavbarContainer } from "@/styles/navbar";
import { MenuItem, MenuList } from "@/styles/menu-item/menu-item";
import { usePathname } from "next/navigation";
import { MENU_ITEMS } from "@/constants";
import { useMemo } from "react";

export const Navbar = () => {
  const pathname = usePathname();

  const menuItems = useMemo(
    () => MENU_ITEMS.find(({ path }) => path === pathname)?.items ?? [],
    [pathname]
  );

  return (
    menuItems.length && (
      <NavbarContainer>
        <Container>
          <MenuList type="row" gap="8px">
            {menuItems.map(({ label, path }, idx) => (
              <MenuItem fontSize="14px" key={`${path}-${label}`}>
                <Link href={path}>
                  <ListItemText primary={label} />
                </Link>
              </MenuItem>
            ))}
          </MenuList>
        </Container>
      </NavbarContainer>
    )
  );
};

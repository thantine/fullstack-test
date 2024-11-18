"use client";

import { Container, ListItemText } from "@mui/material";
import { HeaderContainer, HeaderLogo } from "@/styles/header";
import Image from "next/image";
import Link from "next/link";
import { MenuItem, MenuList } from "@/styles/menu-item/menu-item";
import { MENU_ITEMS } from "@/constants";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <Container>
      <HeaderContainer>
        <HeaderLogo>
          <Link href="/">
            <Image
              src="/images/logo/logo.webp"
              alt="Logo"
              width={100}
              height={100}
              priority
            />
          </Link>
        </HeaderLogo>
        <MenuList type="row">
          {MENU_ITEMS.map(({ label, path }) => (
            <MenuItem key={path}>
              <Link href={path} className={pathname === path ? "active" : ""}>
                <ListItemText primary={label} />
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </HeaderContainer>
    </Container>
  );
};

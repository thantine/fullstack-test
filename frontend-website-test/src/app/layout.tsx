import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import { Header, Navbar } from "@/components";
import { Box, Container } from "@mui/material";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Nextjs + MUI",
  description: "Nextjs + MUI test project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <Navbar />
        <main>
          <Container>
            <Box sx={{ padding: "24px 0" }}>{children}</Box>
          </Container>
        </main>
      </body>
    </html>
  );
}

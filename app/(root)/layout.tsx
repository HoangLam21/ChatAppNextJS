import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/styles/theme.css";
import { Providers } from "@/app/provider";
import SideBar from "@/components/SideBar";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-track-transparent scrollbar-thumb">
      <body className="w-screen overflow-hidden h-screen">
        <div className="navbar-wrapper h-16">
          <SideBar></SideBar>
        </div>

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
export default React.memo(RootLayout);

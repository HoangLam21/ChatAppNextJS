import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/styles/theme.css";
import SideBar from "@/components/NavBar";
import React from "react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });
async function SeRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className="scrollbar-track-transparent scrollbar-thumb auth-bg"
      >
        <body className="sm:overflow-hidden w-screen h-screen flex flex-col-reverse sm:flex-col overflow-x-hidden ">
          <div className="w-full h-fit justify-self-center navbar-wrapper">
            <SideBar></SideBar>
          </div>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
export default SeRootLayout;

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/styles/theme.css";
import { Providers } from "../provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "Logo.png",
  },
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-screen justify-center items-center bg-cover bg-auth-bg bg-center select-none">
      <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

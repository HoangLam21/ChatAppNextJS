import { ClerkProvider } from "@clerk/nextjs";
import "/styles/theme.css";
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <main className="w-screen h-screen flex justify-center items-center  bg-auth-bg bg-cover">
            {children}
          </main>
        </ClerkProvider>
      </body>
    </html>
  );
}

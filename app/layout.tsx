import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header_index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextUI",
  description:
    "Excited to share my latest project!  I've created a clone of the user rating component from NextUI using Next.js, Shadcn, and Tailwind CSS. Check out the sleek design and seamless functionality in action!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
       
          {children}
        </main>
      </body>
    </html>
  );
}

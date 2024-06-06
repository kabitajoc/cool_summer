import type { Metadata } from "next";
import { Inter, Lobster } from "next/font/google";
import "./globals.css";
import { cn } from "@src/lib/utils";
import Nav from "./_section/Nav/page";
import Footer from "./_section/Footer/page";

const lobster = Lobster({
  weight: "400",
  display: "swap",
  variable: "--font-lobster",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(" max-w-screen-xl container", lobster.variable)}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
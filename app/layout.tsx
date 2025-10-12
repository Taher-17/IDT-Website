import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/NavBar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <html lang="en">
        <body>{children}</body>
      </html>
      <Footer />
    </>
  );
}

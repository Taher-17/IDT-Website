import Head from "next/head";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";

import React from "react";

export const metadata = {
  title: "Innovative Digital Technologies",
  description:
    "Discover what your users are searching for and grow your app 10x faster. Innovative Digital Technologies helps your app gain visibility and traction.",
  keywords: [
    "digital technology",
    "app growth",
    "app marketing",
    "innovative tech",
  ],
  authors: [{ name: "Your Name or Company" }],
  openGraph: {
    title: "Innovative Digital Technologies",
    description:
      "Discover what your users are searching for and grow your app 10x faster. Innovative Digital Technologies helps your app gain visibility and traction.",
    url: "https://yourwebsite.com",
    siteName: "IDT",
    images: [
      {
        url: "https://yourwebsite.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "IDT Landing Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovative Digital Technologies",
    description:
      "Discover what your users are searching for and grow your app 10x faster. Innovative Digital Technologies helps your app gain visibility and traction.",
    images: ["https://yourwebsite.com/og-image.png"],
    creator: "@YourTwitterHandle",
  },
};

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedSection />
      </main>
      <Footer />
    </>
  );
}

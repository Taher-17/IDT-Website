import Head from "next/head";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";

import React from "react";

export const metadata = {
  title: "Innovative Digital Technologies",
  description:
    "Discover iOS apps, AI tools, and software solutions by Innovative Digital Technologies. Explore our featured apps and learn more about our expertise in app development, App Store Optimization, and Mobile Security.",
  keywords: [
    "digital technology",
    "app growth",
    "app marketing",
    "innovative tech",
    "ios",
    "ai",
  ],
  authors: [{ name: "Innovative Digital Technologies" }],
  openGraph: {
    title: "Innovative Digital Technologies",
    description:
      "Discover what your users are searching for and grow your app 10x faster. Innovative Digital Technologies helps your app gain visibility and traction.",
    url: "https://innovativedigitaltechnologies.software",
    siteName: "IDT",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovative Digital Technologies",
    description:
      "Discover iOS apps, AI tools, and software solutions by Innovative Digital Technologies. Explore our featured apps and learn more about our expertise in app development, App Store Optimization, and Mobile Security.",
  },
};

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
    </>
  );
}

import { notFound } from "next/navigation";
import Head from "next/head";
// import apps from "../../../data/apps"; // your app data
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="py-8 md:py-12"></main>
      <Footer />
    </>
  );
}

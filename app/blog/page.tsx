import { notFound } from "next/navigation";
import Head from "next/head";
// import apps from "../../../data/apps"; // your app data
import Navbar from "../../components/NavBar";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 md:pt-40"></main>
    </>
  );
}

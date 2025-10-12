import { notFound } from "next/navigation";
import Head from "next/head";
// import apps from "../../../data/apps"; // your app data
import Navbar from "../../components/NavBar";

interface AppDetailProps {
  params: { slug: string };
}

export default async function AppDetailPage({ params }: AppDetailProps) {
  const { slug } = await params;
  return (
    <>
      <Navbar />
      <div>App Detail Page for {slug}</div>
    </>
  );
}

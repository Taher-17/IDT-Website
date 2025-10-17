import { Metadata } from "next";
import AppsList from "./AppsList"; // client component
import { apps } from "@/data/app";
import { externalAppsURL } from "@/data/constants";

export const metadata: Metadata = {
  title: "Innovative Digital Technologies - Apps",
  description:
    "Explore AI-powered and innovative apps by Innovative Digital Technologies.",
  openGraph: {
    title: "Innovative Digital Technologies - Apps",
    description:
      "Explore AI-powered and innovative apps by Innovative Digital Technologies.",
    url: "https://innovativedigitaltechnologies.software/apps",
    siteName: "Innovative Digital Technologies",
    type: "website",
  },
  twitter: {
    title: "Innovative Digital Technologies - Apps",
    description:
      "Explore AI-powered and innovative apps by Innovative Digital Technologies.",
  },
};

export default function AppsPage() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 flex flex-col">
        <h1 className="text-3xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Our Apps
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Explore our collection of innovative apps built for creativity,
          productivity, and fun.
        </p>
        {/* Link to your App Store developer page */}
        <div className="mt-4 mb-6">
          <a
            href={externalAppsURL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline font-medium"
          >
            Visit our App Store Developer Page
          </a>
        </div>
        <AppsList apps={apps} />
      </div>
    </main>
  );
}

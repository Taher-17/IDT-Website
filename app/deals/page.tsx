import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import Markdown from "@/components/Markdown";

export const metadata = {
  title: "Latest Software & App Deals - Save on Mac & iOS Apps",
  description:
    "Discover the best ongoing deals on software and apps, including Setapp, NordVPN, AppSumo, and BundleHunt. Save money on premium tools for Mac, iOS, and business.",
  keywords: [
    "software deals",
    "Mac apps discount",
    "iOS app deals",
    "Setapp offer",
    "NordVPN discount",
    "AppSumo deals",
    "BundleHunt lifetime licenses",
  ],
  openGraph: {
    title: "Latest Software & App Deals - Save on Mac & iOS Apps",
    description:
      "Discover the best ongoing deals on software and apps, including Setapp, NordVPN, AppSumo, and BundleHunt.",
    url: "https://innovativedigitaltechnologies.software/deals",
    siteName: "Innovative Digital Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Latest Software & App Deals - Save on Mac & iOS Apps",
    description:
      "Discover the best ongoing deals on software and apps, including Setapp, NordVPN, AppSumo, and BundleHunt.",
  },
};

export default async function Deals() {
  const filePath = path.join(process.cwd(), "app/deals/data", "deals.md");
  if (!fs.existsSync(filePath)) notFound();

  const fileContent = fs.readFileSync(filePath, "utf8");

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Best Software & App Deals - Mac, iOS, and Business Tools
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300">
            Save on premium apps and software bundles, including Setapp,
            NordVPN, AppSumo, and BundleHunt.
          </p>
        </header>

        <Markdown fileContent={fileContent} />
      </div>
    </main>
  );
}

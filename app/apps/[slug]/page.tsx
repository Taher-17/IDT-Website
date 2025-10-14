import { notFound } from "next/navigation";
import { apps } from "@/data/app";
import { AppItem } from "@/types/AppItem";
import { AppFeature } from "@/types/AppFeature";
import { contactEmail } from "@/data/constants";
import Image from "next/image";
import Link from "next/link";

interface AppDetailProps {
  params: { slug: string };
}

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { AppItem } from "@/app/types";

function AppHero(app: AppItem) {
  return (
    <section className="relative overflow-hidden py-4 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT — Icon, title, subtitle, button */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <Image
              src={app.iconURL}
              alt={`${app.title} Icon`}
              width={120}
              height={120}
              className="rounded-3xl shadow-lg mb-6"
            />

            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                {app.title}
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {app.subtitle}
              </p>

              {app.description && (
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {app.description}
                </p>
              )}
            </div>

            <DownloadButton {...app} />
          </div>

          {/* RIGHT — Hero image */}
          {app.heroURL && (
            <div className="relative">
              <Image
                src={app.heroURL}
                alt={`${app.title} Preview`}
                width={1000}
                height={800}
                className="rounded-2xl object-cover w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          )}
        </div>
        {app.features && FeatureCards(app.features)}
      </div>
    </section>
  );
}

function DownloadButton(app: AppItem) {
  return (
    <a
      href={app.linkURL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-6"
    >
      {/* Light mode badge */}
      <Image
        src="/images/AppStoreBadge-White.svg"
        alt="Download on the App Store"
        width={160}
        height={54}
        className="block dark:hidden"
      />
      {/* Dark mode badge */}
      <Image
        src="/images/AppStoreBadge-Black.svg"
        alt="Download on the App Store"
        width={160}
        height={54}
        className="hidden dark:block"
      />
    </a>
  );
}

function FeatureCards(features: AppFeature[]) {
  return (
    <div className="mt-16 mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((f) => (
        <figure
          className="rounded-2xl ring-1 ring-gray-900/10 dark:ring-white/20 p-6 text-sm sm:text-base flex flex-col sm:flex-row gap-6"
          style={{ backgroundColor: "var(--background)" }}
          key={f.title}
        >
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-2">
              {f.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {f.description}
            </p>
          </div>
        </figure>
      ))}
    </div>
  );
}

export async function generateMetadata({ params }: AppDetailProps) {
  const { slug } = await params;
  const app = apps.find((a) => a.path.toLowerCase() === slug.toLowerCase());

  if (!app) notFound();

  const defaultKeywords = ["iOS apps", "Innovative Digital Technologies"];
  const categoryKeywords = app.categories ?? [];
  const tagKeywords = app.tags ?? [];
  const keywords = [...defaultKeywords, ...categoryKeywords, ...tagKeywords];

  return {
    title: `${app.title} — App Details`,
    description: app.description,
    keywords,
    authors: [{ name: "Innovative Digital Technologies" }],
    publisher: "Innovative Digital Technologies",
    openGraph: {
      title: `${app.title} — App Details`,
      description: app.description,
      url: `https://innovativedigitaltechnologies.software/${app.path}`,
      siteName: "Innovative Digital Technologies",
      images: [{ url: app.iconURL, width: 512, height: 512, alt: app.title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${app.title} — App Details`,
      description: app.description,
      images: [app.iconURL],
    },
    robots: { index: true, follow: true },
  };
}

export default async function AppDetailPage({ params }: AppDetailProps) {
  const { slug } = await params;
  const app = apps.find((a) => a.path.toLowerCase() === slug.toLowerCase());

  if (!app) {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen bg-gray-100 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 flex flex-col gap-8">
          <AppHero {...app} />
        </div>
      </main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8">
        {/* <Links {...app} /> */}
      </div>
    </>
  );
}

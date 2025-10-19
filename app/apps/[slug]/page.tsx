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

function AppHero(app: AppItem) {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LEFT — Icon, title, subtitle, buttons */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
            <Image
              src={app.iconURL}
              alt={`${app.title} Icon`}
              width={120}
              height={120}
              className="rounded-3xl shadow-lg"
            />

            <div className="mt-4 lg:mt-0">
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

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Links {...app} />
            </div>
          </div>

          {/* RIGHT — Hero image */}
          {app.heroURL && (
            <div className="w-full flex justify-center lg:justify-end items-start">
              <Image
                src={app.heroURL}
                alt={`${app.title} Preview`}
                width={300}
                height={300}
                priority
                className="rounded-xl object-contain max-h-[500px] w-auto"
              />
            </div>
          )}
        </div>

        {/* Feature cards */}
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
        src="/images/AppStoreBadge-white.svg"
        alt="Download on the App Store"
        width={160}
        height={54}
        className="block dark:hidden"
      />
      {/* Dark mode badge */}
      <Image
        src="/images/AppStoreBadge-black.svg"
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
            <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
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

function Links(app: AppItem) {
  return (
    <>
      <div className="flex gap-4 text-gray-600 dark:text-gray-400 text-sm">
        <Link href={`/${app.path}/privacypolicy`} className="hover:underline">
          Privacy Policy
        </Link>
        <Link href={`${app.path}/terms`} className="hover:underline">
          Terms of Service
        </Link>
        <a
          href={`mailto:${contactEmail}?subject=${app.title}`}
          className="hover:underline"
        >
          Support
        </a>
      </div>
    </>
  );
}

export async function generateMetadata({ params }: AppDetailProps) {
  const { slug } = await params;
  const app = apps.find((a) => a.path.toLowerCase() === slug.toLowerCase());

  if (!app) notFound();

  const defaultKeywords = [
    "AI apps",
    "iOS apps",
    "Innovative Digital Technologies",
    app.title,
    app.metadata.title,
    "App Store",
  ];
  const categoryKeywords = app.categories ?? [];
  const tagKeywords = app.tags ?? [];
  const keywords = [...defaultKeywords, ...categoryKeywords, ...tagKeywords];

  return {
    title: app.metadata.title,
    description: app.metadata.description,
    keywords,
    authors: [{ name: "Innovative Digital Technologies" }],
    publisher: "Innovative Digital Technologies",
    openGraph: {
      title: app.metadata.title,
      description: app.metadata.description,
      url: `https://innovativedigitaltechnologies.software/apps/${app.path}`,
      siteName: "Innovative Digital Technologies",
      images: [{ url: app.iconURL, width: 512, height: 512, alt: app.title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: app.metadata.title,
      description: app.metadata.description,
      images: [app.iconURL],
    },
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://innovativedigitaltechnologies.software/apps/${app.path}`,
    },
    other: {
      "apple-itunes-app": `app-id=${app.id}`,
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: app.title,
        operatingSystem: "iOS",
        applicationCategory: app.metadata.category,
        description: app.metadata.description,
        image: app.iconURL,
        publisher: {
          "@type": "Organization",
          name: "Innovative Digital Technologies",
          url: "https://innovativedigitaltechnologies.software",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          url: `https://apps.apple.com/app/id${app.id}`,
        },
      }),
    },
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
    </>
  );
}

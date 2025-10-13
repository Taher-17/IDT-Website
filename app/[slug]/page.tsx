import { notFound } from "next/navigation";
import { apps } from "@/data/app";
import { AppItem } from "@/types/AppItem";
import { contactEmail } from "@/data/constants";
import Image from "next/image";
import Link from "next/link";

interface AppDetailProps {
  params: { slug: string };
}

function AppHero(app: AppItem) {
  return (
    <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
      {/* App Icon */}
      <Image
        src={app.iconURL}
        alt={`${app.title} Icon`}
        width={120}
        height={120}
        className="rounded-3xl"
      />

      {/* App Info */}
      <div className="flex flex-col items-center text-center max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          {app.title}
        </h1>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          {app.subtitle}
        </p>

        <Image
          src={app.heroURL}
          alt="Download on the App Store"
          width={1920}
          height={1080}
          className="object-contain w-full h-auto rounded-xl m-4"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div>
        <DownloadButton {...app} />
      </div>

      <p className="text-base text-m text-gray-600 dark:text-gray-300 leading-relaxed pt-4">
        {app.description}
      </p>
    </div>
  );
}

function DownloadButton(app: AppItem) {
  return (
    <a
      href={app.linkURL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      {/* Light mode badge */}
      <Image
        src="/images/AppStoreBadge-White.svg"
        alt="Download on the App Store"
        width={140}
        height={48}
        className="block dark:hidden"
      />
      {/* Dark mode badge */}
      <Image
        src="/images/AppStoreBadge-Black.svg"
        alt="Download on the App Store"
        width={140}
        height={48}
        className="hidden dark:block"
      />
    </a>
  );
}

function Links(app: AppItem) {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 text-gray-600 dark:text-gray-400 text-sm mt-12">
        <Link href={`${app.path}/privacypolicy`} className="hover:underline">
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
        <Links {...app} />
      </div>
    </>
  );
}

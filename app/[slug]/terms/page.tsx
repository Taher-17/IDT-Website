import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { apps } from "@/app";
import { contactEmail } from "@/constants";
import Markdown from "@/components/Markdown";

interface AppDetailProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: AppDetailProps) {
  const { slug } = params;
  const app = apps.find((a) => a.id.toLowerCase() === slug.toLowerCase());
  if (!app) notFound();

  return {
    title: `${app.title} — Terms of Service`,
    description: `Read the Terms of Service for ${app.title}, an iOS app by Innovative Digital Technologies.`,
    openGraph: {
      title: `${app.title} — Terms of Service`,
      description: `Read the Terms of Service for ${app.title}, an iOS app by Innovative Digital Technologies.`,
      url: `https://yourdomain.com/apps/${app.id}/terms`,
      siteName: "Innovative Digital Technologies",
    },
    twitter: {
      card: "summary_large_image",
      title: `${app.title} — Terms of Service`,
      description: `Read the Terms of Service for ${app.title}, an iOS app by Innovative Digital Technologies.`,
    },
  };
}

export default async function Terms({ params }: AppDetailProps) {
  const { slug } = params;
  const app = apps.find((a) => a.id.toLowerCase() === slug.toLowerCase());

  if (!app) notFound();

  const filePath = path.join(process.cwd(), "content", app.id, "terms.md");
  if (!fs.existsSync(filePath)) notFound();

  const fileContent = fs.readFileSync(filePath, "utf8");

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            <Link href={`/${app.path}`} className="hover:underline">
              {app.title}
            </Link>{" "}
            — Terms of Service
          </h1>

          <p className="text-base text-gray-600 dark:text-gray-300">
            For any inquiries, please contact{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {contactEmail}
            </a>
            .
          </p>
        </header>

        <Markdown fileContent={fileContent} />
      </div>
    </main>
  );
}

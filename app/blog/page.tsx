import Link from "next/link";
import { getAllPosts } from "../../lib/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innovative Digital Technologies - Blog",
  description:
    "Read the latest posts about AI, apps, and productivity on Innovative Digital Technologies.",
  openGraph: {
    title: "Innovative Digital Technologies - Blog",
    description:
      "Read the latest posts about AI, apps, and productivity on Innovative Digital Technologies.",
    url: "https://innovativedigitaltechnologies.software/blog",
    siteName: "Innovative Digital Technologies",
    type: "website",
  },
  twitter: {
    title: "Blog – Innovative Digital Technologies - Blog",
    description:
      "Read the latest posts about AI, apps, and productivity on Innovative Digital Technologies.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts().sort(
    (a, b) =>
      new Date(b.frontMatter.date).getTime() -
      new Date(a.frontMatter.date).getTime()
  );

  return (
    <>
      <main className="min-h-screen bg-gray-100 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 flex flex-col gap-8">
          <h1 className="text-3xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Blog
          </h1>
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(({ slug, frontMatter }) => (
              <Link key={slug} href={`/blog/${slug}`}>
                <figure
                  className="rounded-2xl ring-1 ring-gray-900/10 dark:ring-white/20 p-6 text-sm sm:text-base flex flex-col sm:flex-row gap-6"
                  style={{ backgroundColor: "var(--background)" }}
                >
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                      {frontMatter.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {frontMatter.description}
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      {new Date(frontMatter.date).toLocaleDateString()}
                    </p>
                  </div>
                </figure>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

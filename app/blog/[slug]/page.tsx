import { notFound } from "next/navigation";
import { getPostBySlug } from "../../../lib/markdown";
import Markdown from "@/components/Markdown";

interface BlogPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  const { frontMatter } = post;

  return {
    title: frontMatter.title,
    description: frontMatter.description,
    openGraph: {
      title: frontMatter.title,
      description: frontMatter.description,
      url: `https://innovativedigitaltechnologies.software/blog/${slug}`,
      type: "article",
      article: {
        publishedTime: frontMatter.date,
        authors: ["Innovative Digital Technologies"],
        tags: frontMatter.tags || [],
      },
    },
    twitter: {
      title: frontMatter.title,
      description: frontMatter.description,
    },
  };
}

export default async function BlogPost({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const { frontMatter, content } = post;

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            {frontMatter.title}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300">
            {frontMatter.date} • {frontMatter.tags?.join(", ")}
          </p>
        </header>

        <Markdown fileContent={content} />
      </div>
    </main>
  );
}

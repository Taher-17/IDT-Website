import { getAllPosts } from "@/lib/markdown";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = getAllPosts().sort(
    (a, b) =>
      new Date(b.frontMatter.date).getTime() -
      new Date(a.frontMatter.date).getTime()
  );
  const formattedBlogs = posts.map((post) => {
    return {
      id: post.slug,
      title: post.frontMatter.title,
    };
  });
  return NextResponse.json(formattedBlogs);
}

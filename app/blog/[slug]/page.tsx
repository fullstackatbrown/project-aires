import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { TypedObject } from "@portabletext/types";
import BlogPostBody from "@/app/components/BlogPostBody";
import { client } from "@/sanity-cms/lib/client";
import { postBySlugQuery } from "@/sanity-cms/lib/queries";

interface SanityPostDetail {
  _id: string;
  title: string;
  slug?: { current: string };
  author?: string;
  publishedAt?: string;
  abstract?: string;
  body?: TypedObject[] | null;
}

type PageProps = { params: Promise<{ slug: string }> };

/**
 * Generate metadata for the blog post page based on the slug.
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch<SanityPostDetail | null>(postBySlugQuery, {
    slug,
  });

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.title,
    description: post.abstract ?? undefined,
  };
}

/**
 * Render the blog post page based on the slug.
 */
export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  const post = await client.fetch<SanityPostDetail | null>(postBySlugQuery, {
    slug,
  });

  if (!post) {
    notFound();
  }

  const dateLabel = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <article className="mx-auto w-full max-w-3xl px-4 py-10 pb-16">
        <Link
          href="/blog"
          className="text-sm font-medium text-[#1CB2DF] hover:underline"
        >
          &larr; Back to Blog
        </Link>

        <header className="mt-6">
          <p className="text-sm text-black">
            {post.author ?? "Unknown"}
            {dateLabel ? ` | ${dateLabel}` : ""}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral-800 md:text-4xl">
            {post.title}
          </h1>
          {post.abstract ? (
            <p className="mt-4 text-base text-black italic">{post.abstract}</p>
          ) : null}
        </header>

        <div className="mt-8">
          <BlogPostBody value={post.body} variant="article" />
        </div>

        {!post.body?.length && !post.abstract ? (
          <p className="mt-6 text-sm text-black italic">
            This post does not have any content yet.
          </p>
        ) : null}
      </article>
      <div className="mt-auto h-1 w-full bg-[#1CB2DF]" />
    </main>
  );
}

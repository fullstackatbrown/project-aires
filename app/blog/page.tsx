import Image from "next/image";
import Link from "next/link";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity-cms/lib/client";
import { urlFor } from "@/sanity-cms/lib/image";
import {
  postsCountQuery,
  paginatedPostsQuery,
  featuredPostsQuery,
} from "@/sanity-cms/lib/queries";

/**
 * Number of posts per page.
 */
const POSTS_PER_PAGE = 5;

/**
 * Number of page buttons to render before the ellipsis (e.g. 1, 2, 3).
 */
const PAGINATION_BUTTONS_TO_RENDER = 3;

/**
 * Interface for the Sanity post type.
 * This partially matches the `post` document schema defined in `sanity-cms/schemaTypes/postType.ts`
 * but only includes the fields we need for rendering the blog page.
 */
interface SanityPost {
  _id: string;
  title: string;
  slug?: { current: string };
  author?: string;
  publishedAt?: string;
  mainImage?: SanityImageSource & { alt?: string };
  abstract?: string;
}

/**
 * Introduction to the blog page.
 * This is hardcoded here for simplicity, which should be sufficient (for now).
 */
const BLOG_INTRO =
  "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis.";

/**
 * Blog page component.
 * This is a server component that fetches paginated posts and featured posts from Sanity
 * and renders them in the designed layout.
 */
export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  // Get the search params.
  const params = await searchParams;
  // Parse the page number from the search params.
  const rawPage = parseInt(params?.page ?? "1", 10);
  // If the page number is not a finite number or is less than 1, set the current page to 1.
  const currentPage = Number.isFinite(rawPage) && rawPage >= 1 ? rawPage : 1;

  // Fetch the total number of posts and the featured posts.
  const [totalCount, featuredPosts] = await Promise.all([
    client.fetch<number>(postsCountQuery),
    client.fetch<SanityPost[]>(featuredPostsQuery),
  ]);

  // Calculate the total number of pages and the actual current page.
  const totalPages = Math.max(1, Math.ceil(totalCount / POSTS_PER_PAGE));
  const actualCurrentPage = Math.min(Math.max(1, currentPage), totalPages);
  // Calculate the `start` and `end` (exclusive) indices for the posts to fetch.
  const start = (actualCurrentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  // Fetch the posts for the current page.
  const posts = await client.fetch<SanityPost[]>(paginatedPostsQuery, {
    start,
    end,
  });

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Blog header. */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-8 text-center">
        <h1 className="text-4xl font-semibold text-[#1CB2DF] md:text-5xl">
          Blog
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-500">
          {BLOG_INTRO}
        </p>
      </section>

      {/* Blog content(s). */}
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 md:flex-row md:gap-12">
        <div className="min-w-0 flex-1 md:order-1">
          <ul className="space-y-10">
            {/* List of "normal" posts for the current page. */}
            {posts.map((post) => (
              <li key={post._id} className="flex flex-col gap-4 sm:flex-row">
                {post.mainImage && (
                  <div className="h-48 w-full shrink-0 overflow-hidden rounded-lg sm:h-52 sm:w-52">
                    <Image
                      src={urlFor(post.mainImage).width(416).height(416).url()}
                      alt={post.mainImage?.alt ?? ""}
                      width={208}
                      height={208}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="flex min-w-0 flex-col justify-center">
                  <p className="text-sm text-black">
                    {post.author ?? "Unknown"} |{" "}
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : ""}
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-neutral-800">
                    {post.title}
                  </h2>
                  {post.abstract && (
                    <p className="mt-2 text-sm text-neutral-500">
                      {post.abstract}
                    </p>
                  )}
                  <a
                    href={`/blog/${post.slug?.current ?? ""}`}
                    className="mt-3 inline-flex items-center text-sm font-medium text-[#1CB2DF] hover:underline"
                  >
                    Read more &rarr;
                  </a>
                </div>
              </li>
            ))}
          </ul>

          {/* No posts yet. */}
          {posts.length === 0 && (
            <p className="mt-4 text-neutral-400">No posts yet.</p>
          )}

          {/* Pagination buttons. */}
          {totalPages > 1 && (
            <nav
              className="mt-10 flex items-center gap-1"
              aria-label="Blog pagination"
            >
              {actualCurrentPage > 1 ? (
                <Link
                  href={
                    actualCurrentPage === 2
                      ? "/blog"
                      : `/blog?page=${actualCurrentPage - 1}`
                  }
                  className="flex h-9 w-9 items-center justify-center rounded border border-neutral-300 text-neutral-800 hover:bg-neutral-100"
                  aria-label="Previous page"
                >
                  &lt;
                </Link>
              ) : (
                <span
                  className="flex h-9 w-9 items-center justify-center rounded border border-neutral-200 text-neutral-400"
                  aria-hidden
                >
                  &lt;
                </span>
              )}
              {Array.from(
                { length: Math.min(PAGINATION_BUTTONS_TO_RENDER, totalPages) },
                (_, i) => i + 1,
              ).map((page) => (
                <Link
                  key={page}
                  href={page === 1 ? "/blog" : `/blog?page=${page}`}
                  className={`flex h-9 min-w-9 items-center justify-center rounded border px-2 text-sm ${
                    page === actualCurrentPage
                      ? "border-[#1CB2DF] bg-[#1CB2DF] text-black"
                      : "border-neutral-300 text-neutral-800 hover:bg-neutral-100"
                  }`}
                >
                  {page}
                </Link>
              ))}
              {totalPages > PAGINATION_BUTTONS_TO_RENDER + 1 && (
                <>
                  <span className="flex h-9 min-w-9 items-center justify-center text-sm text-neutral-800">
                    ...
                  </span>
                  <Link
                    href={`/blog?page=${totalPages}`}
                    className={`flex h-9 min-w-9 items-center justify-center rounded border px-2 text-sm ${
                      totalPages === actualCurrentPage
                        ? "border-[#1CB2DF] bg-[#1CB2DF] text-black"
                        : "border-neutral-300 text-neutral-800 hover:bg-neutral-100"
                    }`}
                  >
                    {totalPages}
                  </Link>
                </>
              )}
              {actualCurrentPage < totalPages ? (
                <Link
                  href={`/blog?page=${actualCurrentPage + 1}`}
                  className="flex h-9 w-9 items-center justify-center rounded border border-neutral-300 text-neutral-800 hover:bg-neutral-100"
                  aria-label="Next page"
                >
                  &gt;
                </Link>
              ) : (
                <span
                  className="flex h-9 w-9 items-center justify-center rounded border border-neutral-200 text-neutral-400"
                  aria-hidden
                >
                  &gt;
                </span>
              )}
            </nav>
          )}
        </div>

        {/* Featured posts. */}
        <aside className="w-full shrink-0 md:order-2 md:w-80">
          <div className="border border-neutral-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold text-[#1CB2DF] shrink-0">
                Featured
              </h2>
              <span
                className="flex-1 border-t border-[#1CB2DF] opacity-50"
                aria-hidden
              />
            </div>
            <ul className="mt-6 space-y-6">
              {/* List of featured posts. */}
              {featuredPosts.map((post) => (
                <li key={post._id} className="flex gap-4">
                  {post.mainImage && (
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={urlFor(post.mainImage)
                          .width(160)
                          .height(160)
                          .url()}
                        alt={post.mainImage?.alt ?? ""}
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-black">
                      {post.author ?? "Unknown"} |{" "}
                      {post.publishedAt
                        ? new Date(post.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            },
                          )
                        : ""}
                    </p>
                    <h3 className="mt-0.5 text-sm font-bold text-black">
                      {post.title}
                    </h3>
                    <a
                      href={`/blog/${post.slug?.current ?? ""}`}
                      className="mt-2 inline-block text-sm font-medium text-[#1CB2DF] hover:underline"
                    >
                      Read more &rarr;
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
      <div className="mt-auto h-1 w-full bg-[#1CB2DF]" />
    </main>
  );
}

import Image from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity-cms/lib/client";
import { urlFor } from "@/sanity-cms/lib/image";
import { postsQuery, featuredPostsQuery } from "@/sanity-cms/lib/queries";

/**
 * Interface for the Sanity post type.
 */
interface SanityPost {
  _id: string;
  title: string;
  slug?: { current: string };
  author?: string;
  publishedAt?: string;
  mainImage?: SanityImageSource & { alt?: string };
  description?: string;
}

/**
 * Introduction to the blog page.
 */
const BLOG_INTRO =
  "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis.";

/**
 * Blog page component.
 */
export default async function BlogPage() {
  const [posts, featuredPosts] = await Promise.all([
    client.fetch<SanityPost[]>(postsQuery),
    client.fetch<SanityPost[]>(featuredPostsQuery),
  ]);

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-8 text-center">
        <h1 className="text-4xl font-semibold text-[#1CB2DF] md:text-5xl">
          Blog
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-500">
          {BLOG_INTRO}
        </p>
      </section>

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 md:flex-row md:gap-12">
        <div className="min-w-0 flex-1 md:order-1">
          <ul className="space-y-10">
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
                  {post.description && (
                    <p className="mt-2 line-clamp-3 text-sm text-neutral-500">
                      {post.description}
                    </p>
                  )}
                  <a
                    href={`/blog/${post.slug?.current ?? ""}`}
                    className="mt-3 inline-flex items-center text-sm font-medium text-[#1CB2DF] hover:underline"
                  >
                    Read more →
                  </a>
                </div>
              </li>
            ))}
          </ul>

          {posts.length === 0 && (
            <p className="mt-4 text-neutral-400">No posts yet.</p>
          )}
        </div>

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
                    <h3 className="mt-0.5 text-sm font-bold text-black line-clamp-2">
                      {post.title}
                    </h3>
                    <a
                      href={`/blog/${post.slug?.current ?? ""}`}
                      className="mt-2 inline-block text-sm font-medium text-[#1CB2DF] hover:underline"
                    >
                      Read more →
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <div className="h-1 w-full bg-[#1CB2DF]" />
    </main>
  );
}

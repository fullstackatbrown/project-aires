import { defineQuery } from "next-sanity";

/**
 * Fetch all posts with their `_id`, title, slug, read-more URL, author name, published date, main image, and abstract.
 * The posts are ordered by published date in descending order.
 * `author->name` is a GROQ syntax to fetch the name of the author from the referenced author document,
 * where a document in Sanity:
 * "At its core, a document is a JSON-object that has a unique `_id`, timestamps (`_createdAt`, `_updatedAt`) and revision-marker `_rev`."
 * Documents are defined as Sanity schemas (`sanity-cms/schemaTypes`) and can have various fields.
 * Reference: <https://www.sanity.io/docs/studio/document-type>.
 */
export const postsQuery = defineQuery(
  `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    readMoreUrl,
    "author": author->name,
    publishedAt,
    mainImage,
    abstract
  }`,
);

/**
 * Fetch the total number of posts( for later use in pagination).
 */
export const postsCountQuery = defineQuery(`count(*[_type == "post"])`);

/**
 * Fetch a slice (subset) of posts for a specific page (from `$start` to `$end` - 1).
 * The posts are ordered by published date in descending order.
 */
export const paginatedPostsQuery = defineQuery(
  `*[_type == "post"] | order(publishedAt desc)[$start...$end] {
    _id,
    title,
    slug,
    readMoreUrl,
    "author": author->name,
    publishedAt,
    mainImage,
    abstract
  }`,
);

/**
 * Fetch featured posts with almost the same fields as the previous query,
 * but only those that are marked as featured and limit to the first 3 results.
 * The posts are ordered by published date in descending order.
 */
export const featuredPostsQuery = defineQuery(
  `*[_type == "post" && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    readMoreUrl,
    "author": author->name,
    publishedAt,
    mainImage
  }`,
);

/**
 * Fetch one post by slug (`slug.current`),
 * which is used for `./app/blog/[slug]/page.tsx`.
 * `[slug]` is used for dynamic routing in Next.js in order to create routes for specific blog posts from dynamic data
 * even if the exact segment names are not known at build time.
 * Reference: <https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes>.
 */
export const postBySlugQuery = defineQuery(
  `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    readMoreUrl,
    "author": author->name,
    publishedAt,
    abstract,
    body
  }`,
);

/**
 * Fetch all e-board members with their `_id`, name, year, concentration, role at AIRES, short bio, and headshot.
 * The e-board members are ordered by name in ascending order.
 */
export const eBoardMembersQuery = defineQuery(
  `*[_type == "e-board"] | order(name asc) {
    _id,
    name,
    year,
    concentration,
    roleAtAIRES,
    shortBio,
    headshot
  }`,
);

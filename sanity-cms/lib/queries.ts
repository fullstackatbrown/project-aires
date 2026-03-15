import { defineQuery } from "next-sanity";

/**
 * Fetch all posts with their title, slug, author name, published date, main image, and abstract.
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
    "author": author->name,
    publishedAt,
    mainImage,
    abstract
  }`,
);

/**
 * Fetch featured posts with almost the same fields as the previous query,
 * but only those that are marked as featured and limit to the first 3 results.
 */
export const featuredPostsQuery = defineQuery(
  `*[_type == "post" && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    "author": author->name,
    publishedAt,
    mainImage
  }`,
);

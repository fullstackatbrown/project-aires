import { defineQuery } from "next-sanity";

export const postsQuery = defineQuery(
  `*[_type == "post" && featured != true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    "author": author->name,
    publishedAt,
    mainImage,
    description
  }`,
);

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

"use client";

import Image from "next/image";
import { useMemo } from "react";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import { urlFor } from "@/sanity-cms/lib/image";

/**
 * Build the components for the Portable Text editor.
 */
function buildComponents(variant: "list" | "article"): PortableTextComponents {
  const article = variant === "article";

  return {
    types: {
      image: ({ value }) => {
        if (!value?.asset) return null;
        const src = urlFor(value).width(960).quality(85).url();
        return (
          <figure className="my-4">
            <Image
              src={src}
              alt={value.alt ?? ""}
              width={960}
              height={540}
              className="h-auto max-h-96 w-full rounded-lg object-contain"
            />
          </figure>
        );
      },
    },
    marks: {
      link: ({ children, value }) => {
        const href = value?.href ?? "#";
        const external = /^https?:\/\//.test(href);
        return (
          <a
            href={href}
            className="font-medium text-[#1CB2DF] underline decoration-[#1CB2DF]/40 underline-offset-2 hover:decoration-[#1CB2DF]"
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {children}
          </a>
        );
      },
    },
    block: {
      normal: ({ children }) => (
        <p
          className={
            article
              ? "mt-4 text-base leading-relaxed text-neutral-700 first:mt-0"
              : "mt-2 text-sm leading-relaxed text-neutral-600 first:mt-0"
          }
        >
          {children}
        </p>
      ),
      blockquote: ({ children }) => (
        <blockquote
          className={
            article
              ? "mt-6 border-l-4 border-neutral-200 py-1 pl-4 text-base italic text-neutral-600"
              : "mt-3 border-l-4 border-neutral-200 py-1 pl-4 text-sm italic text-neutral-600"
          }
        >
          {children}
        </blockquote>
      ),
      h1: ({ children }) =>
        article ? (
          <h2 className="mt-8 scroll-mt-24 text-2xl font-bold tracking-tight text-neutral-800 md:text-3xl">
            {children}
          </h2>
        ) : (
          <h3 className="mt-4 text-xl font-bold tracking-tight text-neutral-800">
            {children}
          </h3>
        ),
      h2: ({ children }) =>
        article ? (
          <h3 className="mt-6 text-xl font-bold text-neutral-800 md:text-2xl">
            {children}
          </h3>
        ) : (
          <h4 className="mt-4 text-lg font-bold text-neutral-800">
            {children}
          </h4>
        ),
      h3: ({ children }) =>
        article ? (
          <h4 className="mt-5 text-lg font-semibold text-neutral-800">
            {children}
          </h4>
        ) : (
          <h5 className="mt-3 text-base font-semibold text-neutral-800">
            {children}
          </h5>
        ),
      h4: ({ children }) =>
        article ? (
          <h5 className="mt-4 text-base font-semibold text-neutral-800">
            {children}
          </h5>
        ) : (
          <h6 className="mt-3 text-sm font-semibold text-neutral-800">
            {children}
          </h6>
        ),
    },
    list: {
      bullet: ({ children }) => (
        <ul
          className={
            article
              ? "mt-4 list-disc space-y-2 pl-6 text-base text-neutral-700"
              : "mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-600"
          }
        >
          {children}
        </ul>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li>{children}</li>,
    },
  };
}

/**
 * Render the blog post body.
 */
export default function BlogPostBody({
  value,
  variant = "list",
}: {
  value?: TypedObject[] | null;
  variant?: "list" | "article";
}) {
  const components = useMemo(() => buildComponents(variant), [variant]);

  if (!value?.length) return null;

  return (
    <div className="blog-post-body">
      <PortableText value={value} components={components} />
    </div>
  );
}

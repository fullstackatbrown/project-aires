'use client'
import React from "react";
import { useRouter } from "next/navigation";

type ReadMoreProps = {
  text?: string;
  href: string;
  className?: string;
  target?: "_self" | "_blank";
};

export default function ReadMore({
  text = "Read More",
  href,
  className = "",
  target = "_self",
}: ReadMoreProps) {
  const router = useRouter();

  const handleClick = () => {
    // Treat any URL with a scheme (e.g. http:, https:, mailto:, tel:) or
    // protocol-relative URLs (//example.com) as external.
    const hasScheme = /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(href);
    const isProtocolRelative = href.startsWith("//");
    const isExternal = hasScheme || isProtocolRelative;

    if (target === "_blank") {
      const newWindow = window.open(href, "_blank", "noopener,noreferrer");
      if (newWindow) {
        newWindow.opener = null;
      }
    } else if (isExternal) {
      window.location.href = href;
    } else {
      router.push(href);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center font-semibold text-[#08B2E3] hover:cursor-pointer hover:underline whitespace-nowrap transition ${className}`}
    >
      <span>{text}&nbsp;⟶</span>
    </button>
  );
}

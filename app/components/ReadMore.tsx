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
    const isExternal = /^https?:\/\//i.test(href);
    if (target === "_blank" || isExternal) {
      window.open(href, "_blank");
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

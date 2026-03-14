'use client'
import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  text?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  filled?: 1 | 2 | 3; // 1 = blue bg white text, 2 = white bg black text, 3 = white-border with white text (alternative)
  href?: string;
  target?: string;
};

export default function Button({
  text,
  children,
  onClick,
  className = "",
  type = "button",
  filled = 1,
  href,
  target,
}: Props) {
  const router = useRouter();
  const base = "px-4 py-3 rounded-md font-semibold transition";
  const filledClasses = "bg-[#08B2E3] text-white hover:opacity-90 hover:cursor-pointer";
  const ghostClasses = "text-black border-2 border-black hover:bg-gray-100 hover:cursor-pointer";
  const otherClass = "text-white border-2 border-white hover:opacity-80 hover:cursor-pointer";

  const variantClass =
    filled === 2 ? ghostClasses : filled === 3 ? otherClass : filledClasses;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
    if (href && !e.defaultPrevented) {
      if (target === "_blank") {
        window.open(href, "_blank");
      } else {
        router.push(href);
      }
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${base} ${variantClass} ${className}`}
    >
      {text ?? children}
    </button>
  );
}
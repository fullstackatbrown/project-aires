"use client";

import { useState } from "react";
import ReadMore from "./ReadMore";

const DEFAULT_IMAGES = ["/PBlog.png", "/BrownCarney.png", "/team-picture.png"];
const DEFAULT_ALTS = ["Project thumbnail", "Project thumbnail", "Project thumbnail"];

export default function ProjectComp({
  title,
  description,
  imageSrc = DEFAULT_IMAGES,
  imageAlt = DEFAULT_ALTS,
}: {
  title: string;
  description: string;
  imageSrc?: string[];
  imageAlt?: string[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sources = imageSrc.length > 0 ? imageSrc : DEFAULT_IMAGES;
  const alts = imageAlt.length > 0 ? imageAlt : DEFAULT_ALTS;
  const index = ((currentIndex % sources.length) + sources.length) % sources.length;

  const goPrev = () => {
    setCurrentIndex((i) => (i <= 0 ? sources.length - 1 : i - 1));
  };
  const goNext = () => {
    setCurrentIndex((i) => (i >= sources.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="flex flex-col py-6 px-3 mb-4 w-full min-w-0 max-w-[439.11px] border border-[#08B2E3] rounded-xl">
      <div className="flex flex-row items-center gap-1 w-full">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous image"
          className="flex items-center justify-center w-7 h-3 shrink-0 text-[#08B2E3] hover:text-[#0590b8] cursor-pointer transition-colors"
        >
          <span className="text-4xl leading-none">‹</span>
        </button>
        <img
          src={sources[index]}
          alt={alts[index] ?? alts[0] ?? "Project thumbnail"}
          className="flex-1 min-w-0 w-full aspect-square object-cover rounded-xl border-2 border-white"
        />
        <button
          type="button"
          onClick={goNext}
          aria-label="Next image"
          className="flex items-center justify-center w-7 h-3 shrink-0 text-[#08B2E3] hover:text-[#0590b8] cursor-pointer transition-colors"
        >
          <span className="text-4xl leading-none">›</span>
        </button>
      </div>

      <div className="mt-[22.5px] pl-5 flex flex-col gap-3">
        <h2 className="text-xl font-medium text-black leading-tight">{title}</h2>
        <p className="text-[13.34px] text-black">{description}</p>
        <ReadMore href="/projects" className="mt-2" />
      </div>
    </div>
  );
}

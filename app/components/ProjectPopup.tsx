"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { urlFor } from "../../sanity-cms/lib/image";

const portableComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const v = value as { asset?: unknown; alt?: string } | null;
      if (!v?.asset) return null;
      return (
        <img
          className="my-3 max-h-64 w-auto max-w-full rounded-lg border border-[#08B2E3]/30 object-contain"
          src={urlFor(v).width(800).url()}
          alt={typeof v.alt === "string" ? v.alt : "Inline image"}
        />
      );
    },
  },
};

export type ProjectPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  teamMembers?: TypedObject[] | null;
  /** Portable Text from Sanity `blockContent` */
  body: TypedObject[] | null;
};

/**
 * Centered overlay dialog. Renders via portal; does not modify document body overflow or layout
 * (avoids scrollbar gutter / width shifts on the page behind it).
 */
export default function ProjectPopup({
  isOpen,
  onClose,
  title,
  teamMembers,
  body,
}: ProjectPopupProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const value = body ?? [];
  const teamMembersValue = teamMembers ?? [];

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) closeRef.current?.focus();
  }, [isOpen]);

  if (!isOpen || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none"
      aria-hidden={!isOpen}
    >
      <div
        role="presentation"
        className="absolute inset-0 cursor-default bg-black/40 pointer-events-auto"
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-[101] pointer-events-auto flex max-h-[min(85vh,38rem)] w-full max-w-xl flex-col overflow-hidden border border-[#08B2E3] rounded-xl bg-white py-8 px-7 shadow-lg"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex shrink-0 items-start justify-between gap-3">
          <div className="pr-2">
            <h2 id={titleId} className="text-2xl font-medium text-black leading-tight">
              {title}
            </h2>
            {teamMembersValue.length > 0 ? (
              <div className="mt-3 text-base font-normal text-black/80 leading-snug [&_a]:text-[#08B2E3] [&_a]:underline [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-0 [&_ul]:list-disc [&_ul]:pl-6">
                <PortableText value={teamMembersValue} components={portableComponents} />
              </div>
            ) : null}
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 -mt-2 flex h-10 w-10 items-center justify-center rounded-md text-3xl font-light leading-none text-[#08B2E3] hover:bg-[#08B2E3]/10 hover:text-[#0590b8] cursor-pointer transition-colors"
          >
            ×
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto text-base text-black leading-relaxed [&_a]:text-[#08B2E3] [&_a]:underline [&_ol]:list-decimal [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:pl-6">
          {value.length > 0 ? (
            <PortableText value={value} components={portableComponents} />
          ) : null}
        </div>
      </div>
    </div>,
    document.body,
  );
}

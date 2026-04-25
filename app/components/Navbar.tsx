"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Central route list for desktop and mobile navigation.
const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/e-board", label: "E-Board" },
    { href: "/events", label: "Events" },
    { href: "/blog", label: "Blog" },
];

export default function Navbar() {
    // Current URL path (used to highlight the active page link).
    const pathname = usePathname();
    // Tracks whether the mobile menu is expanded.
    const [isOpen, setIsOpen] = useState(false);

    // Marks links as active; home only matches exactly, others match nested routes.
    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(href);
    };

    return (
        // Sticky top bar so navigation remains visible while scrolling
        <header className="sticky top-0 z-50 border-b border-[#d7ecf4] bg-white">
            <nav className="bg-[#FFFFFF] mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6" aria-label="Main navigation">
                {/* logo + site title; clicking collapses mobile menu. */}
                <Link href="/" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
                    <Image src="/aires_logo.avif" width={52} height={52} alt="AIRES Logo" className="h-12 w-12 rounded-full object-cover ring-2 ring-[#08B2E3]/25" />
                    <div className="leading-tight">
                        <p className="text-lg font-bold tracking-tight text-[#08B2E3]">AIRES @ Brown</p>
                    </div>
                </Link>

                {/* Mobile-only toggle button (hidden on md+ screens) */}
                <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-[#08B2E3]/25 px-3 py-2 text-sm font-semibold text-[#000000] transition hover:bg-[#08B2E3]/10 md:hidden"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    aria-label="Toggle navigation menu"
                >
                    Menu
                </button>

                {/* Desktop navigation links (shown on md+ screens). */}
                <div className="hidden items-center gap-2 md:flex">
                    {NAV_LINKS.map((link) => {
                        const active = isActive(link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                                    active
                                        ? "bg-[#08B2E3] text-white shadow-sm"
                                        : "text-[#000000] hover:text-[#0f235d]"
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Mobile dropdown navigation; rendered only when menu is open. */}
            {isOpen && (
                <div id="mobile-menu" className="border-t border-[#d7ecf4] bg-[#FFFFFF] px-4 py-3 md:hidden">
                    <div className="mx-auto flex max-w-6xl flex-col gap-1">
                        {NAV_LINKS.map((link) => {
                            const active = isActive(link.href);
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                                        active
                                            ? "bg-[#08B2E3] text-white"
                                            : "text-[#000000] hover:bg-[#e6f6fb]"
                                    }`}
                                    // Close the menu after navigating on mobile.
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </header>
    );
}


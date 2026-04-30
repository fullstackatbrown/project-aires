"use client"; 
import Image from "next/image"; 
import Link from "next/link"; 


export default function Footer() {
    /* need to update this with links to other subpages and socials
    const socials = [
        {
            link: "mailto:aires@brown.edu",
            iconSrc: "/email.svg",
            alt: "Email Icon"
        }, 
        {
            link: "https://www.instagram.com/brownu_aires/",
            iconSrc: "/isntagram.svg",
            alt: "Instagram Icon"
        }, 
        {
            link: "https://www.linkedin.com/company/aires-brown/",
            iconSrc: "/linkedin.svg",
            alt: "LinkedIn Icon"
        }
    ]; 
    */

    return(
        <footer className="bg-[#08B2E3] text-white">
            <div className="page-container py-12 lg:py-14">
                <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex items-center gap-4 lg:max-w-md">
                        <Image 
                            src="/aires_logo.avif"
                            width={132}
                            height={132}
                            alt="AIRES Logo"
                            className="h-20 w-20 shrink-0 rounded-full object-cover ring-2 ring-white/25 sm:h-24 sm:w-24"
                        />
                        <div className="min-w-0">
                            <h1 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
                                AIRES @ Brown
                            </h1>
                            <p className="mt-2 text-base leading-relaxed text-white/90 sm:text-lg">
                                Creating AI Ethically and Responsibly.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-semibold text-white">Key Links</h2>
                            <Link className="text-lg font-medium text-white/90 transition hover:text-white" href="/about">About Us</Link>
                            <Link className="text-lg font-medium text-white/90 transition hover:text-white" href="/blog">Our Blog</Link>
                            <Link className="text-lg font-medium text-white/90 transition hover:text-white" href="/projects">Projects</Link>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-semibold text-white">Social Media</h2>
                            <a className="text-lg font-medium text-white/90 transition hover:text-white" href="https://www.instagram.com/brownu_aires/" target="_blank" rel="noreferrer">Instagram</a>
                            <a className="text-lg font-medium text-white/90 transition hover:text-white" href="mailto:aires@brown.edu?subject=Let%27s%20Get%20In%20Touch%21">Email</a>
                            <a className="text-lg font-medium text-white/90 transition hover:text-white" href="https://airesatbrown.substack.com/p/airesbrown-january-2026-newsletter" target="_blank" rel="noreferrer">Substack</a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-white/25 pt-4 text-sm leading-relaxed text-white/90">
                    <p>
                        The content of UCS/GSC recognized student organization websites is generated independently from Brown University. The statements, views, opinions, and information contained on the site are personal to those of the authors and student organization and do not necessarily reflect those of Brown University. The content on the site is not reviewed, approved, or endorsed by Brown University or its faculty or staff.
                    </p>
                    <p className="mt-2 text-white/80">
                        AIRES @ Brown. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
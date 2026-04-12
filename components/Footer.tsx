"use client"; 
import Image from "next/image"; 


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
        <div className="flex flex-col bg-[#08B2E3]">
            <div className="flex flex-row justify-between w-screen px-18 pt-10 pb-5">

                <div className="flex flex-row w-1/2 px-4">
                    <Image 
                        src = "/aires_logo.avif"
                        width={200}
                        height={200}
                        alt = "AIRES Logo"
                    />
                    <h1 className="pl-4 flex items-center h-full text-2xl text font-semibold">Creating AI Ethically and Responsibly.</h1>
                </div>
                
                <div className="flex flex-row">
                    <div className = "flex flex-col">
                        <h1 className="font-semibold text-2xl mx-4 ">Key Links</h1>

                    </div>

                    <div className = "flex flex-col ml-4">
                        <h1 className="font-semibold text-2xl mr-18">Social Media</h1>
                        <a className = "transition-all text-lg my-1 font-semibold hover:text-amber-300" href="https://www.instagram.com/brownu_aires/" target="_blank">Instagram</a>
                        <a className = "transition-all text-lg my-1 font-semibold hover:text-amber-300" href="mailto:aires@brown.edu?subject=Let%27s%20Get%20In%20Touch%21">Email</a>
                        <a className = "transition-all text-lg my-1 font-semibold hover:text-amber-300" href="https://airesatbrown.substack.com/p/airesbrown-january-2026-newsletter">Substack</a>
                    </div>
                </div>
            </div>
            <p className="font-light px-34 mb-5 text-right">
                AIRES @ Brown. All Rights Reserved.
            </p>
        </div>
    )
}
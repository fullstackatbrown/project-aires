"use client"; 
import Image from "next/image"; 
import Social from "@/components/LinkColumn"; 


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
            <div className="flex flex-row w-screen px-18 pt-10 pb-5">

                <div className="flex flex-row w-1/2 px-4">
                    <Image 
                        src = "/aires_logo.avif"
                        width={200}
                        height={200}
                        alt = "AIRES Logo"
                    />
                    <h1 className="pl-4 flex items-center h-full text-2xl text font-semibold">Creating AI Ethically and Responsibly.</h1>
                </div>
                
                {/* will fillwith LinkColumn here */}

            </div>
            <p className="font-light px-22">
                AIRES @ Brown. All Rights Reserved.
            </p>
        </div>
    )
}
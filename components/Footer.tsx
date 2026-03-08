"use client"; 
import Image from "next/image"; 
import Social from "@/components/Social"; 


export default function Footer() {
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

    return(
        <div className="flex flex-col bg-[#08B2E3]">
            <div className="flex flex-row w-screen px-18 py-10">
                <div className="flex flex-row w-1/2 px-4">
                    <Image 
                        src = "/aires_logo.avif"
                        width={200}
                        height={200}
                        alt = "AIRES Logo"
                    />
                    <div className="flex flex-col pl-4 text-2xl">
                        <h1>Contact Us</h1>

                        {/*
                            socials.map((socialProperties) => 
                            <Social properties = socialProperties={}/>)
                        */}
                    </div>
                </div>
                <p className="w-1/2"> email form filler </p>
            </div>
            <p className="font-light px-18">
                @AI Robotics Ethics Society @ Brown. All Rights Reserved.
            </p>
        </div>
    )
}
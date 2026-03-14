"use client";

import Image from "next/image";

interface socialProperties {
    link: string, 
    iconSrc: string, 
    alt: string,
}

export default function Social(properties: socialProperties) {
    return(
        <div className="flex flex-row">
            <Image 
                src = {properties.iconSrc}
                height = {40}
                width = {40}
                alt = {properties.alt}
            />
            <p>{properties.link}</p>
        </div>
    )
}
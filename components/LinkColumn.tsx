"use client";

import Image from "next/image";

interface linkColumn {
    heading: string, 
    links: linkProperties[]
}

interface linkProperties {
    displayText: string,
    link: string, 
    alt: string,
}

export default function LinkColumn(properties: linkColumn) {
    return(
        <div className="flex flex-col">
            <h1>{properties.heading}</h1>
            
            {/* will add a mapping function here for the links */}
        </div>
    )
}
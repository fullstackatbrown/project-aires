import React from "react";
import logo from "../../public/aires-logo.png";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export default function HomePage() {
    return (
    <main className={`background-color-background ${montserrat.variable} font-sans`}>
      <div className="flex flex-col items-center justify-center min-h-screen py-0.5 bg-white">
        <Image src={logo} alt="AIRES Logo" width={100} height={100} className="image-spacing" />
        <h1 className="text-4xl text-spacing font-bold text-[#08B2E3]">About AIRES</h1>
        <p className="text-lg text-spacing text-center text-black px-75">
          At the AI Robotics Ethics Society we focus on educating tomorrow's
          AI leaders in ethical AI principles to ensure AI is created ethically and
          responsibly.
        </p>
        <div className="our-card">
          <h1 className="text-2xl text-spacing font-bold text-center text-[#163078]">Our Mission</h1>
          <p className="text-lg text-spacing text-center text-black px-45">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo odio, pulvinar ultricies nisl fermentum, aliquam malesuada purus. Curabitur vitae justo nec tellus tincidunt commodo. Nulla tincidunt egestas aliquet. Aenean augue ante, venenatis non porttitor fermentum, lacinia non ligula. 
            Duis tempus elementum orci, a rutrum lectus semper a. Sed lectus erat, faucibus sit amet sapien ut, dignissim pellentesque metus.
          </p>
        </div>
      </div>
    </main>
  );
}
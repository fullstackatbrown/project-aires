import React from "react";
import logo from "../../public/aires-logo.png";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import "./about.css";

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
        <p className="text-lg text-spacing text-center text-black px-25">
          At the AI Robotics Ethics Society we focus on educating tomorrow's
          AI leaders in ethical AI principles to ensure AI is created ethically and
          responsibly.
        </p>
      </div>
    </main>
  );
}
import React from "react";
import { Montserrat } from "next/font/google";
import Button from "../components/Button";
import ProjectComp from "../components/ProjectComp";
import "./projects.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function ProjectsPage() {
  return (
    <main className={`${montserrat.className} bg-[#FFFFFF]`}>
      <div className="flex flex-col items-center justify-start min-h-screen py-0.5 px-4 pt-8 pb-15">
        <h1 className="text-4xl text-spacing font-bold text-[#08B2E3]">Our Projects</h1>
        <p className="w-full max-w-3xl text-center text-[#163078] text-[17px] font-light leading-[30.88px] break-words">
          Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
        </p>
        <div className="w-full mt-10 flex items-center px-4 md:px-17.5 gap-4">
          <span className="text-[30px] font-semibold text-[#08B2E3]">Current Projects</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-4 md:px-[113.14px] py-[26.63px] gap-10 mt-5">
          <ProjectComp
            title="AI Safety Workshop"
            description="Hands-on sessions exploring practical AI safety and ethics techniques."
          />
          <ProjectComp
            title="Robotics for Social Good"
            description="Student-led robotics projects focused on community impact and accessibility."
          />
          <ProjectComp
            title="Policy & Governance Research"
            description="Research on governance frameworks for responsible AI deployment."
          />
        </div>
        <div className="w-full mt-10 flex items-center px-4 md:px-17.5 gap-4">
          <span className="text-[30px] font-semibold text-[#08B2E3]">Past Projects</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-4 md:px-[113.14px] py-[26.63px] gap-10 mt-5">
          <ProjectComp
            title="AI Safety Workshop"
            description="Hands-on sessions exploring practical AI safety and ethics techniques."
          />
          <ProjectComp
            title="Robotics for Social Good"
            description="Student-led robotics projects focused on community impact and accessibility."
          />
          <ProjectComp
            title="Policy & Governance Research"
            description="Research on governance frameworks for responsible AI deployment."
          />
          <ProjectComp
            title="Placeholder 1"
            description="Hands-on sessions exploring practical AI safety and ethics techniques."
          />
        </div>
      </div>
    </main>
  );
}
"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/aires-logo.png";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const activities = [
  {
    title: "Mentor-Led Research",
    desc: "Work alongside postgrad mentors on cutting-edge AI ethics research projects.",
  },
  {
    title: "Speaker Series",
    desc: "Hear directly from experts across AI, robotics, policy, and ethics fields.",
  },
  {
    title: "Debates & Simulations",
    desc: "Sharpen your thinking with bimonthly debates and real-world AI simulations.",
  },
  {
    title: "Newsletter",
    desc: "Stay current with our updates on AI developments, ethics, and AIRES events.",
  },
  {
    title: "AI & Society Summit",
    desc: "Join our flagship spring summit connecting students, researchers, and leaders.",
  },
  {
    title: "Community",
    desc: "A growing network of students passionate about shaping the future of AI responsibly.",
  },
];

export default function AboutPage() {
  return (
    <main
      className={`${montserrat.variable} font-sans bg-white text-gray-800 overflow-x-hidden`}
    >
      {/* ── HERO ── */}
      <section className="relative flex flex-col items-center justify-center pt-24 pb-20 px-6 overflow-hidden">
        {/* Background blob */}
        
        <div
          aria-hidden
          className="absolute -bottom-20 -right-20 w-100 h-100 rounded-full opacity-10 blur-2xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #08B2E3, transparent)" }}
        />

        <Image
          src={logo}
          alt="AIRES Logo"
          width={110}
          height={110}
          className="mb-6 drop-shadow-lg"
        />
        <h1 className="text-5xl md:text-6xl font-semibold text-[#08B2E3] text-center leading-tight mb-6">
          About AIRES
        </h1>
      </section>

      {/* ── WHAT IS AIRES ── */}
      <section className="bg-[#dbf0fd] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] text-center mb-8">
            What is the A.I. Robotics and Ethics Society?
          </h2>
          <p className="text-base md:text-lg text-gray-700 text-center leading-relaxed max-w-3xl mx-auto">
            <strong>AIRES @ Brown</strong>, a branch of AIRES International, aims to raise
            awareness and connect students to research opportunities with postgrad mentors
            regarding AI ethics, uses, and implications. It also educates students on AI
            advancements and dangers to prepare them for AI's impact on various industries
            and their own lives.
          </p>
        </div>
      </section>

      {/* ── OUR STORY & GOALS ── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Story */}
          <div className="rounded-2xl border-2 border-[#08B2E3] p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl font-bold text-[#000000]">Our Story</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              AIRES at Brown is a collegiate chapter of the national AIRES organization.
              We were founded in Spring 2019 to bring AI ethics discussion to Brown
              University's campus. As a newer chapter, we are actively looking for new
              members to join us!
            </p>
          </div>

          {/* Goals */}
          <div className="rounded-2xl border-2 border-[#08B2E3] p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl font-bold text-[#000000]">Our Goals</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our main goal is to help students currently at Brown consider AI ethics before
              they move into industry and make important decisions in the field. No matter
              what area of study a Brown student pursues, AI will undoubtedly impact all
              facets of society in the near future—and it's important that students learn
              the possible implications of modern AI systems.
            </p>
          </div>
        </div>
      </section>

      {/* ── OUR MISSION ── */}
      <section className="bg-[#08B2E3] py-20 px-6 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            AIRES at Brown aims to educate tomorrow's leaders on the uses, advancements, and dangers of artificial intelligence to ensure AI is created ethically and responsibly. AIRES at Brown achieves its mission through student-led research, as well as hosting guest speakers, socials, and other events.

          </p>
        </div>
      </section>

      {/* ── ACTIVITIES ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] text-center mb-4">
            What We Do
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            AIRES @ Brown offers a variety of ways to get involved, learn, and grow.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {activities.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl p-6 border border-[#c8eaf7] bg-[#f4fbff] hover:border-[#08B2E3] hover:shadow-md transition-all"
              >
                <h4 className="text-lg font-bold text-[#000000] mb-2">{a.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-[#f0f9fe] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
          Join AIRES @ Brown
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8 text-lg">
          Interested in joining a research group? Reach out to us at aires@brown.edu!
        </p>
        <a
          href="https://join.slack.com/t/airesbrown/shared_invite/zt-3tucaqpar-29cUAqhqmDM_wYRrwqGuYA"
          className="inline-block bg-[#08B2E3] hover:bg-[#0699c6] text-white font-bold px-10 py-4 rounded-full text-lg transition-colors shadow-lg"
        >
          Join our Slack →
        </a>
      </section>

      {/* ── DISCLAIMER ── */}
      <section className="py-8 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Disclaimer</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            The content of UCS/GSC recognized student organization websites is generated independently from Brown
            University. The statements, views, opinions, and information contained on the site are personal to those
            of the authors and student organization and do not necessarily reflect those of Brown University. The
            content on the site is not reviewed, approved, or endorsed by Brown University or its faculty or staff.
          </p>
        </div>
      </section>
    </main>
  );
} 
import Button from "./components/Button";
import PrimaryBlog from "./components/PrimaryBlog";
import BlogComp from "./components/BlogComp"; // added
import ProjectComp from "./components/ProjectComp";
import EventsComp from "./components/EventsComp";
import Image from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity-cms/lib/client";
import { urlFor } from "@/sanity-cms/lib/image";
import { postsQuery } from "@/sanity-cms/lib/queries";

interface HomeBlogPost {
  _id: string;
  title: string;
  author?: string;
  publishedAt?: string;
  mainImage?: SanityImageSource & { alt?: string };
  abstract?: string;
}

function formatBlogDate(publishedAt?: string) {
  if (!publishedAt) return "";

  return new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const upcomingEvents = [
  {
    title: "AI Ethics Panel",
    date: "Apr 18, 2026",
    time: "6:30 PM",
    location: "Salomon 101",
  },
  {
    title: "Responsible Robotics Workshop",
    date: "Apr 25, 2026",
    time: "4:00 PM",
    location: "Engineering Lab 2",
  },
  {
    title: "AI Policy Roundtable",
    date: "May 2, 2026",
    time: "5:30 PM",
    location: "Joukowsky Forum",
  },
];

export default async function Home() {
  const allPosts = await client.fetch<HomeBlogPost[]>(postsQuery);
  const [latestPost, ...otherPosts] = allPosts;
  const nextThreePosts = otherPosts.slice(0, 3);

  return (
    <>
      <main className = "bg-white h-auto w-full ">
        <header className="text-black">
          <div className="container mx-auto px-4 md:px-10 lg:px-46.25 py-25">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-17.5">
              <div className="md:w-1/2 py-[71.02px]">
                <h1 className="text-[68px] font-medium mt-10 text-[#08B2E3] leading-none">Welcome to AIRES @ Brown</h1>
                <h3 className="font-normal mt-5 text-gray-700">
                  At the AI Robotics Ethics Society, we focus on educating tomorrow's AI leaders in ethical AI principles to ensure AI is created ethically and responsibly.
                </h3>
                <div className="mt-6">
                  <Button text="Learn More" href="/about" filled={1} />
                </div>
              </div>

              <div className="md:w-1/2 flex justify-center md:justify-end">
                <div className="">
                  <Image
                    src="/BrownCarney.png"
                    alt="Brown University Carney Hall"
                    className=""
                    width={670}
                    height={679}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
      <div className="pb-25">
          <div className="max-w-full mx-auto bg-[#08B2E3] text-white font-medium p-10 px-17.5  mt-10 flex flex-col md:flex-row items-center gap-31.25">
            <div className="md:flex-1">
              <h3 className="text-center text-[24px] px-28.25 mb-0">
                The AI Robotics Ethics Society was founded in 2018 at UCLA by Aaron Hui as a 501(c)(3) nonprofit organization to promote awareness of and the importance of ethical implementation and regulation of AI.
              </h3>
              <div className="flex justify-center mt-6">
                <Button text="National Aires Website" href="https://www.theaires.org/" target="_blank" filled={3} />
              </div>
            </div>
            <Image
              src="/aires-logo.png"
              alt="AIRES Large Logo"
              className="w-48 h-48 md:w-96 md:h-96 object-contain mx-auto rounded-full"
              width={384}
              height={384}
            />
          </div>
        </div>

        <div className="flex items-center px-17.5 gap-4">
          <span className="text-[40px] font-semibold text-[#08B2E3]">Projects</span>
          <hr className="border-black flex-1" />
          <Button
            text="View All Projects"
            href="/projects"
            filled={2}
            className="h-fill w-fill px-6 py-1 text-base"
          />
        </div>
        <div className="flex flex-row lg:flex-row items-start px-[113.14px] py-[26.63px] gap-10 mt-10">
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
        <div className="py-25">
          <div className= "max-w-full h-fit bg-[#C4CFD9] py-20 px-17.5">
              <div className="flex flex-col md:flex-row items-center gap-20 px-37.5 mt-10">
                <div className="flex justify-center rounded-lg border-4 border-white">
                  <img src="/team-picture.png" alt="AI Team Picture" className="object-cover" style={{ width: 697, height: 518 }} />
                </div>
                <div className="md:w-1/2 gap-6.25 text-black">
                  <h2 className="text-3xl font-semibold mb-4">Leaders driven by a Mission</h2>
                  <p className="mb-4 text-sm text-black">
                    Members of the AIRES team are dedicated to educating the next generation of AI leaders, ensuring that AI is created responsibly. Get to know our team and their backgrounds.
                  </p>
                  <div className="mt-6">
                      <Button text="Meet the E-Board" href="/e-board" filled={1} />
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div className="px-[157.5px] pb-25">
          <div className="flex items-center pb-15 gap-4">
            <div className="flex items-center w-full gap-4">
              <span className="text-[40px] font-semibold text-[#08B2E3]">Blog</span>
              <hr className="border-black flex-1" />
              <Button
                text="Read More Here"
                href="/blog"
                filled={2}
                className="h-fill w-fill px-6 py-1 text-base"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <PrimaryBlog
              title="How AI Ethics Shapes Real-World Robotics"
              date="March 14, 2026"
              description="A quick look at how ethical design principles guide safe, fair, and transparent robotics systems in education and industry."
            />

            <div className="w-full lg:w-105 flex flex-col">
              <BlogComp
                title="AI Policy Updates You Should Know"
                author="AIRES Team"
                date="March 10, 2026"
                imageSrc="/PBlog.png"
                imageAlt="AI policy blog thumbnail"
              />
              <BlogComp
                title="Building Trustworthy ML Systems"
                author="Research Committee"
                date="March 05, 2026"
                imageSrc="/PBlog.png"
                imageAlt="Trustworthy ML blog thumbnail"
              />
              <BlogComp
                title="Ethics in Autonomous Robotics"
                author="AIRES Editorial"
                date="February 28, 2026"
                imageSrc="/PBlog.png"
                imageAlt="Autonomous robotics blog thumbnail"
              />
            </div>
          </div>
        </div>

        <EventsComp />
        <div className="h-8" />
      </main>
    </>
  );
}

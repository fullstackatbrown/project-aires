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
import { fetchNextIcsEvents } from "./lib/googleCalendarIcs";

interface HomeBlogPost {
  _id: string;
  title: string;
  slug?: { current: string };
  readMoreUrl?: string;
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

const upcomingEvents = await fetchNextIcsEvents(3);

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
                    src="/team.png"
                    alt="AIRES team"
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
          <div className= "max-w-full h-fit bg-[#dbf0fd] py-20 px-17.5">
              <div className="flex flex-col md:flex-row items-center gap-20 px-37.5 mt-10">
                <div className="flex justify-center rounded-lg border-4 border-white">
                  <img src="/aires_clubfair.png" alt="AI Team Picture" className="object-cover" style={{ width: 697, height: 518 }} />
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

      <section className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 pb-14 lg:pb-20">
       <div className="flex items-center w-full gap-4 pb-8 lg:pb-12">
         <span className="text-[32px] md:text-[40px] font-semibold text-[#08B2E3] whitespace-nowrap">Blog</span>
         <hr className="border-black flex-1" />
         <Button text="Read More Here" href="/blog" filled={2} className="px-6 py-1 text-base" />
       </div>


       <div className="flex flex-col lg:flex-row gap-8 items-start">
         {latestPost ? (
           <PrimaryBlog
             title={latestPost.title}
             author={latestPost.author ?? "Unknown"}
             date={formatBlogDate(latestPost.publishedAt)}
             description={latestPost.abstract ?? "Read the latest update from AIRES."}
             readMoreLink={
               latestPost.readMoreUrl ??
               (latestPost.slug?.current ? `/blog/${latestPost.slug.current}` : "/blog")
             }
             readMoreTarget={latestPost.readMoreUrl ? "_blank" : "_self"}
             imageSrc={
               latestPost.mainImage
                 ? urlFor(latestPost.mainImage).width(1416).height(738).url()
                 : "/PBlog.png"
             }
             imageAlt={latestPost.mainImage?.alt ?? latestPost.title}
           />
         ) : (
           <PrimaryBlog
             title="No blog posts yet"
             author=""
             date=""
             description="Once posts are published in Sanity, the latest one will appear here automatically."
           />
         )}


         <div className="w-full lg:w-105 flex flex-col">
           {nextThreePosts.length > 0 ? (
             nextThreePosts.map((post) => (
               <BlogComp
                 key={post._id}
                 title={post.title}
                 author={post.author ?? "Unknown"}
                 date={formatBlogDate(post.publishedAt)}
                 readMoreLink={post.readMoreUrl ?? post.slug?.current}
                 readMoreTarget={post.readMoreUrl ? "_blank" : "_self"}
                 imageSrc={
                   post.mainImage
                     ? urlFor(post.mainImage).width(326).height(326).url()
                     : "/PBlog.png"
                 }
                 imageAlt={post.mainImage?.alt ?? `${post.title} thumbnail`}
               />
             ))
           ) : (
             <BlogComp
               title="No additional posts yet"
               author="AIRES"
               date=""
               imageSrc="/PBlog.png"
               imageAlt="No blog posts available"
             />
           )}
         </div>
       </div>
       </section>


        <EventsComp events={upcomingEvents} />
        <div className="h-8" />
      </main>
    </>
  );
}

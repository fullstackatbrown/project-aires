import Button from "./components/Button";
import PrimaryBlog from "./components/PrimaryBlog";
import BlogComp from "./components/BlogComp";
import ProjectComp from "./components/ProjectComp";
import EventsComp from "./components/EventsComp";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white w-full overflow-x-hidden">
      {/* HERO */}
      <header className="text-black">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 py-10 lg:py-20">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12 xl:gap-16">
            <div className="w-full md:w-1/2 py-4 md:py-10 lg:py-14">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[68px] font-medium mt-2 md:mt-6 text-[#08B2E3] leading-none">
                Welcome to AIRES @ Brown
              </h1>
              <h3 className="font-normal mt-5 text-gray-700 text-base md:text-lg">
                At the AI Robotics Ethics Society, we focus on educating tomorrow&apos;s AI leaders in ethical AI principles to ensure AI is created ethically and responsibly.
              </h3>
              <div className="mt-6">
                <Button text="Learn More" href="/about" filled={1} />
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <Image
                src="/BrownCarney.png"
                alt="Brown University Carney Hall"
                width={670}
                height={679}
                className="w-full max-w-xl lg:max-w-2xl h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* BLUE STRIP */}
      <section className="pb-14 lg:pb-20">
        <div className="w-full py-8 bg-[#08B2E3] text-white font-medium mt-10">
          <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 py-6 md:py-10 flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            <div className="md:flex-1">
              <h3 className="text-center text-lg md:text-xl lg:text-[20px] px-2 md:px-6 lg:px-12 xl:px-20 mb-0">
                The AI Robotics Ethics Society was founded in 2018 at UCLA by Aaron Hui as a 501(c)(3) nonprofit organization to promote awareness of and the importance of ethical implementation and regulation of AI.
              </h3>
              <div className="flex justify-center mt-6">
                <Button
                  text="National Aires Website"
                  href="https://www.theaires.org/"
                  target="_blank"
                  filled={3}
                />
              </div>
            </div>
            <Image
              src="/aires-logo.png"
              alt="AIRES Large Logo"
              width={384}
              height={384}
              className="w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-contain rounded-full"
            />
          </div>
        </div>
      </section>

      {/* PROJECTS HEADER */}
      <section className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        <div className="flex items-center gap-4">
          <span className="text-[32px] md:text-[40px] font-semibold text-[#08B2E3] whitespace-nowrap">Projects</span>
          <hr className="border-black flex-1" />
          <Button text="View All Projects" href="/projects" filled={2} className="px-6 py-1 text-base" />
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 place-items-center xl:place-items-stretch">
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
      </section>

      {/* TEAM */}
      <section className="py-14 lg:py-20 mt-8">
        <div className="w-full bg-[#C4CFD9]">
          <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 py-10 lg:py-16">
            <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 xl:gap-20 mt-2 lg:mt-6">
              <div className="flex justify-center rounded-lg border-4 border-white w-full md:w-auto">
                <Image
                  src="/team-picture.png"
                  alt="AI Team Picture"
                  width={1200}
                  height={800}
                  className="object-cover w-full max-w-2xl h-auto"
                />
              </div>
              <div className="w-full md:w-1/2 text-black">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Leaders driven by a Mission</h2>
                <p className="mb-4 text-sm md:text-base text-black">
                  Members of the AIRES team are dedicated to educating the next generation of AI leaders, ensuring that AI is created responsibly. Get to know our team and their backgrounds.
                </p>
                <div className="mt-6">
                  <Button text="Meet the E-Board" href="/e-board" filled={1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 pb-14 lg:pb-20">
        <div className="flex items-center pb-8 lg:pb-12 gap-4">
          <div className="flex items-center w-full gap-4">
            <span className="text-[32px] md:text-[40px] font-semibold text-[#08B2E3] whitespace-nowrap">Blog</span>
            <hr className="border-black flex-1" />
            <Button text="Read More Here" href="/blog" filled={2} className="px-6 py-1 text-base" />
          </div>
        </div>

        <div className="flex flex-col 2xl:flex-row gap-8 items-center 2xl:items-start">
          <PrimaryBlog
            title="How AI Ethics Shapes Real-World Robotics"
            date="March 14, 2026"
            description="A quick look at how ethical design principles guide safe, fair, and transparent robotics systems in education and industry."
          />
          <div className="w-full 2xl:max-w-md flex flex-col">
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
      </section>

      {/* UPCOMING EVENTS */}
      <EventsComp />

      {/* give room for intersecting button */}
      <div className="h-8" />
    </main>
  );
}

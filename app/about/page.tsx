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
      <div className="flex flex-col items-center justify-center py-0.5 bg-white">
        <Image src={logo} alt="AIRES Logo" width={100} height={100} className="image-spacing" />
        <h1 className="text-4xl text-spacing font-bold text-[#08B2E3]">About AIRES</h1>
        <p className="text-lg text-spacing text-center text-black px-75 pb-15">
          At the AI Robotics Ethics Society we focus on educating tomorrow's
          AI leaders in ethical AI principles to ensure AI is created ethically and
          responsibly.
        </p>
        <div className="our-card bg-[#08B2E3] py-15">
          <h1 className="text-2xl text-spacing font-bold text-center text-white">Our Mission</h1>
          <p className="text-lg text-spacing text-center text-white px-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo odio, pulvinar ultricies nisl fermentum, aliquam malesuada purus. Curabitur vitae justo nec tellus tincidunt commodo. Nulla tincidunt egestas aliquet. Aenean augue ante, venenatis non porttitor fermentum, lacinia non ligula. 
            Duis tempus elementum orci, a rutrum lectus semper a. Sed lectus erat, faucibus sit amet sapien ut, dignissim pellentesque metus.
          </p>
        </div>
      </div>
      <div className="px-100 py-20">
        <div className="bg-[#08B2E3] py-10 rounded-xl">
            <div className=" mb-6 mx-auto border-2 border-white rounded-xl pb-10 w-170">
              <h1 className="text-2xl text-spacing font-medium text-center pb-10 text-white">Our Story</h1>
              <p className="text-sm text-spacing text-center text-white px-10">
                  AIRES at Brown is a collegiate chapter of the national AIRES organization. 
                  We were founded in Spring 2019 to bring AI ethics discussion to Brown University's campus. 
                  As a newer chapter, we are actively looking for new members to join us!
              </p>
            </div>
            <div className=" bg-[#08B2E3] mb-6 mx-auto border-2 border-white pb-10 rounded-xl w-170">
              <h1 className="text-2xl text-spacing font-medium text-center pb-10 text-white">Our Goals</h1>
              <p className="text-sm text-spacing text-center text-white px-10">
                  As a chapter, our main goal is to help students currently at Brown to consider AI ethics before they move into industry and make important decisions in the field. 
                  No matter what area of study a Brown student pursues, AI will undoubtedly impact all facets of society in the near future and thus it is important for students to learn the possible implications of modern AI systems.
              </p>
            </div>
        </div>
      </div>
      <div className="bg-[#C4CFD9] py-10 mb-20">
        <h1 className="text-3xl text-spacing font-medium text-center pb-8 text-[#163078]">
          Why Choose AIRES
        </h1>

        <div className="mx-auto w-full max-w-6xl px-8 md:px-20 lg:px-32">
          <div className="grid grid-cols-2 gap-3 md:gap-4 place-items-stretch">
            <div className="rounded-xl border-2 border-[#08B2E3] bg-white p-4 md:p-5">
              <h2 className="text-base md:text-lg font-medium text-black">
               Lorem ipsum dolor
              </h2>
              <p className="mt-2 text-sm font-light text-black">
                  Duis ut porta justo. Vivamus ac dictum nulla, nec pulvinar odio. Cras arcu eros, tempus quis pulvinar ac, porttitor eget metus.                 </p>
            </div>

            <div className="rounded-xl border-2 border-[#08B2E3] bg-white p-4 md:p-5">
              <h2 className="text-base md:text-lg font-medium text-black">
                Lorem ipsum dolor
              </h2>
              <p className="mt-2 text-sm font-light text-black">
                Duis ut porta justo. Vivamus ac dictum nulla, nec pulvinar odio. Cras arcu eros, tempus quis pulvinar ac, porttitor eget metus. 
              </p>
            </div>

            <div className="rounded-xl border-2 border-[#08B2E3] bg-white p-4 md:p-5">
              <h2 className="text-base md:text-lg font-medium text-black">
                Lorem ipsum dolor
              </h2>
              <p className="mt-2 text-sm font-light text-black">
                Duis ut porta justo. Vivamus ac dictum nulla, nec pulvinar odio. Cras arcu eros, tempus quis pulvinar ac, porttitor eget metus. 
              </p>
            </div>

            <div className="rounded-xl border-2 border-[#08B2E3] bg-white p-4 md:p-5">
              <h2 className="text-base md:text-lg font-medium text-black">
                Lorem ipsum dolor
              </h2>
              <p className="mt-2 text-sm font-light text-black">
               Duis ut porta justo. Vivamus ac dictum nulla, nec pulvinar odio. Cras arcu eros, tempus quis pulvinar ac, porttitor eget metus. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
import { Montserrat } from "next/font/google";
import ProjectComp from "../components/ProjectComp";
import { client } from "../../sanity-cms/lib/client";
import { urlFor } from "../../sanity-cms/lib/image";
import {
  currentProjectsQuery,
  pastProjectsQuery,
} from "../../sanity-cms/lib/queries";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { TypedObject } from "@portabletext/types";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

type ProjectDoc = {
  _id: string;
  title: string | null;
  summary: string | null;
  fullDescription: TypedObject[] | null;
  images: SanityImageSource[] | null;
};

function imageAltFrom(item: SanityImageSource): string {
  if (
    typeof item === "object" &&
    item !== null &&
    "alt" in item &&
    typeof (item as { alt?: string }).alt === "string" &&
    (item as { alt: string }).alt.trim() !== ""
  ) {
    return (item as { alt: string }).alt;
  }
  return "Project image";
}

function projectDocToCardProps(doc: ProjectDoc) {
  const list = doc.images?.filter(Boolean) ?? [];
  const imageSrc =
    list.length > 0
      ? list.map((img) => urlFor(img).width(800).height(800).fit("crop").url())
      : ["/PBlog.png"];
  const imageAlt =
    list.length > 0 ? list.map((img) => imageAltFrom(img)) : ["Project image"];

  const fullDesc = doc.fullDescription;
  const hasPortableBody = Array.isArray(fullDesc) && fullDesc.length > 0;

  return {
    key: doc._id,
    title: doc.title?.trim() || "Untitled project",
    description: doc.summary?.trim() || "",
    imageSrc,
    imageAlt,
    detailTitle: doc.title?.trim() || "Untitled project",
    detailBody: hasPortableBody ? fullDesc : null,
  };
}

export default async function ProjectsPage() {
  const [currentProjects, pastProjects] = await Promise.all([
    client.fetch<ProjectDoc[]>(currentProjectsQuery),
    client.fetch<ProjectDoc[]>(pastProjectsQuery),
  ]);

  return (
    <main className={`${montserrat.className} bg-[#FFFFFF]`}>
      <div className="flex flex-col items-center justify-start min-h-screen py-0.5 px-4 pt-8 pb-15">
        <h1 className="text-4xl text-spacing font-bold text-[#08B2E3]">
          Our Projects
        </h1>
        <p className="w-full max-w-3xl text-center text-gray-700 text-[17px] font-light leading-[30.88px] break-words">
          Temporibus autem quibusdam et aut officiis debitis aut rerum
          necessitatibus saepe eveniet ut et voluptates repudiandae sint et
          molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus, ut aut reiciendis
        </p>
        <div className="w-full mt-10 flex items-center px-4 md:px-17.5 gap-4">
          <span className="text-[25px] font-semibold text-[#08B2E3]">
            Current Projects
          </span>
          <hr className="flex-1 border-[1.2px] border-[#08B2E3] mt-2 self-end" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-4 md:px-[113.14px] py-[26.63px] gap-10 mt-5">
          {currentProjects.length === 0 ? (
            <p className="col-span-full text-center text-gray-600 text-sm">
              No current projects.
            </p>
          ) : (
            currentProjects.map((doc) => {
              const props = projectDocToCardProps(doc);
              return (
                <ProjectComp
                  key={props.key}
                  title={props.title}
                  description={props.description}
                  imageSrc={props.imageSrc}
                  imageAlt={props.imageAlt}
                  detailTitle={props.detailTitle}
                  detailBody={props.detailBody}
                />
              );
            })
          )}
        </div>
        <div className="w-full mt-10 flex items-center px-4 md:px-17.5 gap-4">
          <span className="text-[25px] font-semibold text-[#08B2E3]">
            Past Projects
          </span>
          <hr className="flex-1 border-[1.2px] border-[#08B2E3] mt-2 self-end" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-4 md:px-[113.14px] py-[26.63px] gap-10 mt-5">
          {pastProjects.length === 0 ? (
            <p className="col-span-full text-center text-gray-600 text-sm">
              No past projects.
            </p>
          ) : (
            pastProjects.map((doc) => {
              const props = projectDocToCardProps(doc);
              return (
                <ProjectComp
                  key={props.key}
                  title={props.title}
                  description={props.description}
                  imageSrc={props.imageSrc}
                  imageAlt={props.imageAlt}
                  detailTitle={props.detailTitle}
                  detailBody={props.detailBody}
                />
              );
            })
          )}
        </div>
      </div>
    </main>
  );
}

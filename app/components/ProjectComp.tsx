import ReadMore from "./ReadMore";

export default function ProjectComp({
  title,
  description,
  imageSrc = "/PBlog.png",
  imageAlt = "Project thumbnail",
}: {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <div className="flex flex-col p-5 mb-4 w-full min-w-0 max-w-[439.11px] border border-[#08B2E3] rounded-xl">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full aspect-square max-w-[365px] object-cover rounded-xl border-2 border-white mx-auto"
      />

      <div className="mt-[22.5px] pl-5 flex flex-col gap-3">
        <h2 className="text-xl font-medium text-black leading-tight">{title}</h2>
        <p className="text-[13.34px] text-black">{description}</p>
        <ReadMore href="/projects" className="mt-2" />
      </div>
    </div>
  );
}